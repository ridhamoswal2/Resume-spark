import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Download, 
  ArrowLeft, 
  FileImage, 
  FileText, 
  Printer, 
  Save
} from "lucide-react";
import { initialResumeData, ResumeData, TemplateType } from "@/lib/resumeData";
import ResumeTemplates from "@/components/ResumeTemplates";
import ResumeForm from "@/components/ResumeForm";
import ResumePreview from "@/components/ResumePreview";
import { exportToPDF, exportToJPEG, printResume } from "@/lib/exportUtils";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";

const Builder = () => {
  const navigate = useNavigate();
  const { resumeId } = useParams();
  const location = useLocation();
  const { toast } = useToast();
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const [activeTab, setActiveTab] = useState<string>("content");
  
  // Get template from URL query parameters if available
  const queryParams = new URLSearchParams(location.search);
  const templateParam = queryParams.get('template') as TemplateType | null;
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType>(templateParam || "modern");
  
  const [previewScale, setPreviewScale] = useState<number>(0.5);
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [isPreviewFullScreen, setIsPreviewFullScreen] = useState(false);
  
  // Mock load resume data based on ID
  useEffect(() => {
    if (resumeId) {
      // This would be a real API call in production
      console.log(`Loading resume with ID: ${resumeId}`);
      // For demo purposes, just set some timeout to simulate loading
      const timeout = setTimeout(() => {
        toast({
          title: "Resume loaded",
          description: "Your resume has been successfully loaded."
        });
      }, 500);
      
      return () => clearTimeout(timeout);
    }
  }, [resumeId, toast]);

  const handleUpdateResumeData = (data: ResumeData) => {
    setResumeData(data);
    setUnsavedChanges(true);
    
    // Auto-save after 3 seconds of inactivity
    const debounce = setTimeout(() => {
      handleSaveResume();
    }, 3000);
    
    return () => clearTimeout(debounce);
  };

  const handleSaveResume = () => {
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setLastSaved(new Date());
      setUnsavedChanges(false);
      
      toast({
        title: "Resume saved",
        description: "Your resume has been saved successfully.",
      });
    }, 800);
  };

  const handleDownloadPDF = () => {
    exportToPDF(resumeData, selectedTemplate);
  };
  
  const handleDownloadJPEG = () => {
    exportToJPEG(resumeData);
  };
  
  const handlePrintResume = () => {
    printResume(resumeData, selectedTemplate);
  };
  
  const calculateCompletionPercentage = (): number => {
    let totalFields = 0;
    let filledFields = 0;
    
    // Count personal info fields
    const personalInfoFields = Object.values(resumeData.personalInfo);
    totalFields += personalInfoFields.length;
    filledFields += personalInfoFields.filter(field => field && field.trim() !== '').length;
    
    // Count experience fields
    resumeData.experience.forEach(exp => {
      const expFields = Object.values(exp).filter(val => typeof val === 'string');
      totalFields += expFields.length;
      filledFields += expFields.filter(field => field && field.trim() !== '').length;
    });
    
    // Count education fields
    resumeData.education.forEach(edu => {
      const eduFields = Object.values(edu).filter(val => typeof val === 'string');
      totalFields += eduFields.length;
      filledFields += eduFields.filter(field => field && field.trim() !== '').length;
    });
    
    // Count skills
    totalFields += resumeData.skills.length;
    filledFields += resumeData.skills.filter(skill => skill.name.trim() !== '').length;
    
    return Math.round((filledFields / totalFields) * 100);
  };

  const completionPercentage = calculateCompletionPercentage();

  return (
    <div className={`min-h-screen bg-gray-50 flex flex-col ${isPreviewFullScreen ? 'overflow-hidden' : ''}`}>
      <Header />
      
      <div className="container py-8 flex-1">
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Button>
          
          <div className="flex gap-3 items-center">
            {unsavedChanges && (
              <span className="text-sm text-amber-600 animate-pulse">Unsaved changes</span>
            )}
            
            {lastSaved && !unsavedChanges && (
              <span className="text-sm text-gray-500">
                Last saved: {lastSaved.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            )}
            
            <Button 
              onClick={handleSaveResume} 
              variant="outline" 
              className="gap-2"
              disabled={isSaving || !unsavedChanges}
            >
              <Save className="h-4 w-4" />
              {isSaving ? "Saving..." : "Save"}
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="gap-2">
                  <Download className="h-4 w-4" />
                  Export
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleDownloadPDF} className="gap-2">
                  <FileText className="h-4 w-4" />
                  <span>PDF Format</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleDownloadJPEG} className="gap-2">
                  <FileImage className="h-4 w-4" />
                  <span>JPEG Format</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handlePrintResume} className="gap-2">
                  <Printer className="h-4 w-4" />
                  <span>Print Resume</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <input
                  type="text"
                  placeholder="Resume Title"
                  className="bg-transparent text-xl font-semibold text-gray-900 border-none focus:outline-none focus:ring-0 p-0"
                  defaultValue={resumeData.personalInfo.name + "'s Resume"}
                />
                <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200">Draft</Badge>
              </div>
              
              <div className="flex items-center gap-3">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" size="sm" className="rounded-full w-8 h-8 p-0">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 text-blue-500">
                        <span className="text-xs font-semibold">{completionPercentage}%</span>
                      </div>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium">Resume Completion</h4>
                        <span className="font-semibold">{completionPercentage}%</span>
                      </div>
                      <Progress value={completionPercentage} max={100} className="h-2" />
                      <ul className="text-sm space-y-2">
                        <li className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${resumeData.personalInfo.summary ? 'bg-green-500' : 'bg-gray-300'}`}></span>
                          <span>Summary Section {resumeData.personalInfo.summary ? '✓' : '○'}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${resumeData.experience.length > 0 ? 'bg-green-500' : 'bg-gray-300'}`}></span>
                          <span>Experience Section {resumeData.experience.length > 0 ? '✓' : '○'}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${resumeData.education.length > 0 ? 'bg-green-500' : 'bg-gray-300'}`}></span>
                          <span>Education Section {resumeData.education.length > 0 ? '✓' : '○'}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${resumeData.skills.length > 0 ? 'bg-green-500' : 'bg-gray-300'}`}></span>
                          <span>Skills Section {resumeData.skills.length > 0 ? '✓' : '○'}</span>
                        </li>
                      </ul>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            
            <Tabs 
              value={activeTab} 
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="content">Resume Content</TabsTrigger>
                <TabsTrigger value="template">Choose Template</TabsTrigger>
              </TabsList>
              
              <Card className="mt-4 overflow-hidden border-gray-200 shadow-sm">
                <TabsContent value="content" className="p-0 focus:outline-none">
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-medium">Edit Your Resume</h3>
                    </div>
                    <ResumeForm 
                      resumeData={resumeData} 
                      onUpdateResumeData={handleUpdateResumeData} 
                    />
                  </div>
                </TabsContent>
                
                <TabsContent value="template" className="p-0 focus:outline-none">
                  <div className="p-4">
                    <ResumeTemplates 
                      selectedTemplate={selectedTemplate} 
                      onSelectTemplate={setSelectedTemplate} 
                    />
                  </div>
                </TabsContent>
              </Card>
            </Tabs>
          </div>
          
          <div className="lg:sticky lg:top-20 self-start w-full">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold">Preview</h2>
              <div className="flex items-center gap-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setIsPreviewFullScreen(!isPreviewFullScreen)}
                >
                  {isPreviewFullScreen ? "Exit Full Screen" : "Full Screen"}
                </Button>
                <div className="flex items-center border rounded-md px-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setPreviewScale(prev => Math.max(0.3, prev - 0.1))}
                    className="h-8 w-8 p-0"
                  >-</Button>
                  <span className="text-sm w-12 text-center">{Math.round(previewScale * 100)}%</span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setPreviewScale(prev => Math.min(0.9, prev + 0.1))}
                    className="h-8 w-8 p-0"
                  >+</Button>
                </div>
              </div>
            </div>
            <div className={
              isPreviewFullScreen 
                ? 'fixed inset-0 z-50 bg-white overflow-auto' 
                : 'border rounded-lg shadow-sm bg-gray-50 h-[450px] sm:h-[480px] overflow-auto'
            }>
              {isPreviewFullScreen ? (
                <div className="w-full h-full flex items-center justify-center p-4">
                  <div 
                    className="bg-white shadow-sm flex-shrink-0"
                    style={{ 
                      transform: `scale(${previewScale})`, 
                      transformOrigin: 'center center',
                      transition: 'transform 0.15s ease-in-out'
                    }}
                  >
                    <ResumePreview resumeData={resumeData} template={selectedTemplate} />
                  </div>
                </div>
              ) : (
                <div className="w-full pt-4 px-4 h-full flex justify-center">
                  <div 
                    className="bg-white shadow-sm"
                    style={{ 
                      transform: `scale(${previewScale})`, 
                      transformOrigin: 'top center',
                      transition: 'transform 0.15s ease-in-out'
                    }}
                  >
                    <ResumePreview resumeData={resumeData} template={selectedTemplate} />
                  </div>
                </div>
              )}
            </div>
            {isPreviewFullScreen && (
              <Button 
                className="fixed top-4 right-4 z-50" 
                variant="outline" 
                onClick={() => setIsPreviewFullScreen(false)}
              >
                Close Preview
              </Button>
            )}
          </div>
        </div>
      </div>
      
      <footer className="bg-white border-t py-6">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <span className="text-lg font-semibold text-indigo-600">ResumeSpark</span>
              <span className="text-sm text-gray-500">© {new Date().getFullYear()}</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">Privacy</a>
              <a href="#" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">Terms</a>
              <a href="#" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">Help</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Builder;