import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { initialResumeData, TemplateType } from "@/lib/resumeData";
import { ArrowRight, Star } from "lucide-react";

// Sample data for template previews
const sampleResumeData = {
  ...initialResumeData,
  personalInfo: {
    ...initialResumeData.personalInfo,
    name: "Alex Morgan",
    title: "Senior Software Engineer",
    email: "alex.morgan@example.com",
    phone: "(555) 123-4567",
    location: "San Francisco, CA",
    summary: "Experienced software engineer with 7+ years of experience developing scalable web applications and leading engineering teams."
  },
  experience: [
    {
      id: "exp1",
      company: "TechCorp Inc.",
      position: "Senior Software Engineer",
      location: "San Francisco, CA",
      startDate: "Jan 2020",
      endDate: "",
      current: true,
      description: "Lead developer for cloud-based enterprise solutions. Implemented microservices architecture that improved system reliability by 40%."
    },
    {
      id: "exp2",
      company: "Innovate Systems",
      position: "Software Engineer",
      location: "Austin, TX",
      startDate: "Mar 2017",
      endDate: "Dec 2019",
      current: false,
      description: "Developed RESTful APIs and front-end interfaces for financial technology products using React and Node.js."
    }
  ],
  education: [
    {
      id: "edu1",
      institution: "University of California, Berkeley",
      degree: "Master of Science",
      field: "Computer Science",
      location: "Berkeley, CA",
      startDate: "2015",
      endDate: "2017",
      current: false,
      description: "Focus on distributed systems and machine learning. GPA: 3.9/4.0"
    }
  ],
  skills: [
    { id: "skill1", name: "JavaScript" },
    { id: "skill2", name: "React" },
    { id: "skill3", name: "Node.js" },
    { id: "skill4", name: "Python" },
    { id: "skill5", name: "AWS" },
    { id: "skill6", name: "Docker" },
    { id: "skill7", name: "CI/CD" },
    { id: "skill8", name: "Microservices" }
  ]
};

interface TemplatePreviewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const templates = [
  {
    id: "modern",
    name: "Modern",
    atsScore: 98,
    description: "Clean and contemporary design with a focus on readability and structure."
  },
  {
    id: "professional",
    name: "Professional",
    atsScore: 99,
    description: "Classic business template ideal for corporate and traditional industries."
  },
  {
    id: "creative",
    name: "Creative",
    atsScore: 95,
    description: "Distinctive design for creative professionals with a balanced layout."
  },
  {
    id: "minimal",
    name: "Minimal",
    atsScore: 97,
    description: "Simple, elegant design with plenty of white space and clean typography."
  },
  {
    id: "executive",
    name: "Executive",
    atsScore: 99,
    description: "Sophisticated template for senior professionals and executives."
  }
];

const TemplatePreviewDialog = ({ open, onOpenChange }: TemplatePreviewDialogProps) => {
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = React.useState<TemplateType>("modern");

  const handleCreateResume = () => {
    // Navigate to builder page with the selected template
    navigate(`/builder?template=${selectedTemplate}`);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[900px] max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>Resume Templates</DialogTitle>
          <DialogDescription>
            Choose from our professionally designed and ATS-optimized templates
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="modern" value={selectedTemplate} onValueChange={(value) => setSelectedTemplate(value as TemplateType)}>
          <TabsList className="grid grid-cols-5 mb-4">
            {templates.map((template) => (
              <TabsTrigger key={template.id} value={template.id}>
                {template.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {templates.map((template) => (
            <TabsContent key={template.id} value={template.id} className="pt-2">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-medium">{template.name} Template</h3>
                    <p className="text-sm text-gray-500">{template.description}</p>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500 bg-amber-50 px-2 py-1 rounded-full text-sm">
                    <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                    <span>{template.atsScore}% ATS Score</span>
                  </div>
                </div>
                
                <ScrollArea className="border rounded-md p-4 h-[400px] bg-gray-50">
                  <div className="flex justify-center">
                    <div className="bg-white shadow-md w-[600px] p-6 border">
                      {/* This would be a static preview of the template */}
                      <div className="space-y-4">
                        <div className="text-center border-b pb-4">
                          <h1 className={`text-2xl font-bold ${template.id === "creative" ? "text-purple-600" : template.id === "executive" ? "text-slate-800" : "text-gray-900"}`}>
                            {sampleResumeData.personalInfo.name}
                          </h1>
                          <p className="text-gray-600">{sampleResumeData.personalInfo.title}</p>
                          <div className="flex justify-center gap-3 text-sm mt-2 text-gray-500">
                            <span>{sampleResumeData.personalInfo.email}</span>
                            <span>•</span>
                            <span>{sampleResumeData.personalInfo.phone}</span>
                            <span>•</span>
                            <span>{sampleResumeData.personalInfo.location}</span>
                          </div>
                        </div>
                        
                        <div>
                          <h2 className={`text-lg font-semibold mb-2 ${template.id === "creative" ? "text-purple-600 border-l-4 border-purple-600 pl-2" : template.id === "executive" ? "text-slate-800 uppercase tracking-wider" : template.id === "modern" ? "text-blue-600" : "text-gray-900 border-b"}`}>
                            Experience
                          </h2>
                          {sampleResumeData.experience.map((exp) => (
                            <div key={exp.id} className="mb-3">
                              <div className="flex justify-between">
                                <div>
                                  <h3 className="font-medium">{exp.position}</h3>
                                  <p className="text-gray-600 text-sm">{exp.company} - {exp.location}</p>
                                </div>
                                <p className="text-sm text-gray-500">
                                  {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                                </p>
                              </div>
                              <p className="text-sm mt-1">{exp.description}</p>
                            </div>
                          ))}
                        </div>
                        
                        <div>
                          <h2 className={`text-lg font-semibold mb-2 ${template.id === "creative" ? "text-purple-600 border-l-4 border-purple-600 pl-2" : template.id === "executive" ? "text-slate-800 uppercase tracking-wider" : template.id === "modern" ? "text-blue-600" : "text-gray-900 border-b"}`}>
                            Education
                          </h2>
                          {sampleResumeData.education.map((edu) => (
                            <div key={edu.id} className="mb-3">
                              <div className="flex justify-between">
                                <div>
                                  <h3 className="font-medium">{edu.degree} in {edu.field}</h3>
                                  <p className="text-gray-600 text-sm">{edu.institution} - {edu.location}</p>
                                </div>
                                <p className="text-sm text-gray-500">
                                  {edu.startDate} - {edu.current ? "Present" : edu.endDate}
                                </p>
                              </div>
                              <p className="text-sm mt-1">{edu.description}</p>
                            </div>
                          ))}
                        </div>
                        
                        <div>
                          <h2 className={`text-lg font-semibold mb-2 ${template.id === "creative" ? "text-purple-600 border-l-4 border-purple-600 pl-2" : template.id === "executive" ? "text-slate-800 uppercase tracking-wider" : template.id === "modern" ? "text-blue-600" : "text-gray-900 border-b"}`}>
                            Skills
                          </h2>
                          <div className={`flex flex-wrap gap-2 ${template.id === "minimal" ? "" : ""}`}>
                            {sampleResumeData.skills.map((skill) => (
                              <span 
                                key={skill.id} 
                                className={
                                  template.id === "creative" 
                                    ? "bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-sm" 
                                    : template.id === "modern"
                                      ? "bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-sm"
                                      : template.id === "executive"
                                        ? "border border-slate-300 px-2 py-1 text-sm"
                                        : "bg-gray-100 px-2 py-1 rounded text-sm"
                                }
                              >
                                {skill.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleCreateResume} className="gap-2">
            Use This Template <ArrowRight className="h-4 w-4" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TemplatePreviewDialog; 