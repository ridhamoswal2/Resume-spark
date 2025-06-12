import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { initialResumeData, TemplateType } from "@/lib/resumeData";
import { ArrowRight, Star, FileText, Check, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";

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

const templates = [
  {
    id: "modern",
    name: "Modern",
    atsScore: 98,
    description: "Clean and contemporary design with a focus on readability and structure.",
    tags: ["Professional", "Clean", "Minimal"],
    popular: true,
    color: "blue"
  },
  {
    id: "professional",
    name: "Professional",
    atsScore: 99,
    description: "Classic business template ideal for corporate and traditional industries.",
    tags: ["Corporate", "Business", "Traditional"],
    popular: true,
    color: "gray"
  },
  {
    id: "creative",
    name: "Creative",
    atsScore: 95,
    description: "Distinctive design for creative professionals with a balanced layout.",
    tags: ["Creative", "Design", "Media"],
    popular: false,
    color: "purple"
  },
  {
    id: "minimal",
    name: "Minimal",
    atsScore: 97,
    description: "Simple, elegant design with plenty of white space and clean typography.",
    tags: ["Minimal", "Clean", "Modern"],
    popular: false,
    color: "neutral"
  },
  {
    id: "executive",
    name: "Executive",
    atsScore: 99,
    description: "Sophisticated template for senior professionals and executives.",
    tags: ["Executive", "Leadership", "Management"],
    popular: true,
    color: "slate"
  }
];

const Templates = () => {
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = React.useState<TemplateType>("modern");

  const handleCreateResume = () => {
    // Navigate to builder page with the selected template
    navigate(`/builder?template=${selectedTemplate}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-1 container py-12">
        <div className="flex items-center mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Template Selector */}
          <div className="md:col-span-4">
            <div className="space-y-6 sticky top-24">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">Resume Templates</h1>
                <p className="text-gray-500">
                  Choose from our collection of professionally designed, ATS-optimized resume templates
                </p>
              </div>
              
              <div className="space-y-4">
                {templates.map(template => (
                  <Card 
                    key={template.id}
                    className={`p-4 cursor-pointer transition-all ${
                      selectedTemplate === template.id 
                        ? `border-2 border-${template.color}-600 shadow-md` 
                        : 'hover:shadow-md'
                    }`}
                    onClick={() => setSelectedTemplate(template.id as TemplateType)}
                  >
                    <div className="flex justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{template.name}</h3>
                          {template.popular && (
                            <Badge variant="secondary" className="bg-indigo-50 text-indigo-700">
                              Popular
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          {template.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <div className="flex items-center text-amber-500 text-sm font-medium">
                          <Star className="h-4 w-4 fill-amber-500 text-amber-500 mr-1" />
                          {template.atsScore}%
                        </div>
                        
                        {selectedTemplate === template.id && (
                          <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
                            <Check className="h-4 w-4 text-white" />
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-3">
                      {template.tags.map(tag => (
                        <span 
                          key={tag} 
                          className={`text-xs px-2 py-1 rounded-full border ${
                            template.color === 'purple' 
                              ? 'bg-purple-50 text-purple-700 border-purple-200'
                              : template.color === 'blue'
                                ? 'bg-blue-50 text-blue-700 border-blue-200'
                                : template.color === 'slate'
                                  ? 'bg-slate-50 text-slate-700 border-slate-200'
                                  : 'bg-gray-50 text-gray-700 border-gray-200'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
              
              <Button 
                className="w-full gap-2"
                size="lg"
                onClick={handleCreateResume}
              >
                Use This Template <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Template Preview */}
          <div className="md:col-span-8">
            <Card className="shadow-md border overflow-hidden">
              <div className="flex items-center justify-between border-b p-4">
                <h2 className="font-semibold">Template Preview</h2>
                <div className="flex items-center gap-1 text-amber-500 bg-amber-50 px-2 py-1 rounded-full text-sm">
                  <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                  <span>
                    {templates.find(t => t.id === selectedTemplate)?.atsScore}% ATS Score
                  </span>
                </div>
              </div>
              
              <ScrollArea className="h-[700px] bg-gray-50">
                <div className="p-8 flex justify-center">
                  <div className="bg-white shadow-md w-[620px] p-6 border">
                    {/* Template Preview Content */}
                    <div className="space-y-4">
                      <div className="text-center border-b pb-4">
                        <h1 className={`text-2xl font-bold ${
                          selectedTemplate === "creative" 
                            ? "text-purple-600" 
                            : selectedTemplate === "executive" 
                              ? "text-slate-800" 
                              : selectedTemplate === "modern"
                                ? "text-blue-600"
                                : "text-gray-900"
                        }`}>
                          {sampleResumeData.personalInfo.name}
                        </h1>
                        <p className="text-gray-600">{sampleResumeData.personalInfo.title}</p>
                        <div className="flex justify-center flex-wrap gap-3 text-sm mt-2 text-gray-500">
                          <span>{sampleResumeData.personalInfo.email}</span>
                          <span>•</span>
                          <span>{sampleResumeData.personalInfo.phone}</span>
                          <span>•</span>
                          <span>{sampleResumeData.personalInfo.location}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <h2 className={`text-lg font-semibold mb-2 ${
                          selectedTemplate === "creative" 
                            ? "text-purple-600 border-l-4 border-purple-600 pl-2" 
                            : selectedTemplate === "executive" 
                              ? "text-slate-800 uppercase tracking-wider" 
                              : selectedTemplate === "modern" 
                                ? "text-blue-600" 
                                : "text-gray-900 border-b"
                        }`}>
                          Summary
                        </h2>
                        <p className="text-sm">{sampleResumeData.personalInfo.summary}</p>
                      </div>
                      
                      <div>
                        <h2 className={`text-lg font-semibold mb-2 ${
                          selectedTemplate === "creative" 
                            ? "text-purple-600 border-l-4 border-purple-600 pl-2" 
                            : selectedTemplate === "executive" 
                              ? "text-slate-800 uppercase tracking-wider" 
                              : selectedTemplate === "modern" 
                                ? "text-blue-600" 
                                : "text-gray-900 border-b"
                        }`}>
                          Experience
                        </h2>
                        {sampleResumeData.experience.map((exp) => (
                          <div key={exp.id} className="mb-3">
                            <div className="flex justify-between flex-wrap">
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
                        <h2 className={`text-lg font-semibold mb-2 ${
                          selectedTemplate === "creative" 
                            ? "text-purple-600 border-l-4 border-purple-600 pl-2" 
                            : selectedTemplate === "executive" 
                              ? "text-slate-800 uppercase tracking-wider" 
                              : selectedTemplate === "modern" 
                                ? "text-blue-600" 
                                : "text-gray-900 border-b"
                        }`}>
                          Education
                        </h2>
                        {sampleResumeData.education.map((edu) => (
                          <div key={edu.id} className="mb-3">
                            <div className="flex justify-between flex-wrap">
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
                        <h2 className={`text-lg font-semibold mb-2 ${
                          selectedTemplate === "creative" 
                            ? "text-purple-600 border-l-4 border-purple-600 pl-2" 
                            : selectedTemplate === "executive" 
                              ? "text-slate-800 uppercase tracking-wider" 
                              : selectedTemplate === "modern" 
                                ? "text-blue-600" 
                                : "text-gray-900 border-b"
                        }`}>
                          Skills
                        </h2>
                        <div className="flex flex-wrap gap-2">
                          {sampleResumeData.skills.map((skill) => (
                            <span 
                              key={skill.id} 
                              className={
                                selectedTemplate === "creative" 
                                  ? "bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-sm" 
                                  : selectedTemplate === "modern"
                                    ? "bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-sm"
                                    : selectedTemplate === "executive"
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
            </Card>
          </div>
        </div>
      </main>
      
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

export default Templates; 