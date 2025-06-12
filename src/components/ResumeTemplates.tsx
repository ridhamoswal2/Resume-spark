import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TemplateType } from "@/lib/resumeData";
import { Check, Star, Briefcase, Code, Lightbulb, GraduationCap, Target, Award, BarChart, FileText, BookOpen, Trophy, PieChart } from "lucide-react";

interface ResumeTemplateProps {
  selectedTemplate: TemplateType;
  onSelectTemplate: (template: TemplateType) => void;
}

const ResumeTemplates = ({ selectedTemplate, onSelectTemplate }: ResumeTemplateProps) => {
  const templates = [
    {
      id: "executive",
      name: "Executive Suite",
      description: "Premium template for C-level executives and senior management. Emphasizes leadership and strategic achievements.",
      atsScore: 98,
      gradient: "from-slate-800 to-slate-950",
      accent: "border-slate-800",
      textColor: "text-slate-800",
      bgAccent: "bg-slate-100",
      icon: <Briefcase className="h-5 w-5" />,
      popular: true,
      tags: ["Executive", "Leadership", "C-Suite"]
    },
    {
      id: "tech",
      name: "Tech Innovator",
      description: "Modern template for software engineers and tech professionals. Highlights technical skills and projects.",
      atsScore: 97,
      gradient: "from-blue-600 to-indigo-700",
      accent: "border-blue-600",
      textColor: "text-blue-600",
      bgAccent: "bg-blue-50",
      icon: <Code className="h-5 w-5" />,
      popular: true,
      tags: ["Tech", "Engineering", "Developer"]
    },
    {
      id: "creative",
      name: "Creative Edge",
      description: "Dynamic template for creative professionals. Perfect balance of style and ATS compatibility.",
      atsScore: 95,
      gradient: "from-purple-600 to-pink-600",
      accent: "border-purple-600",
      textColor: "text-purple-600",
      bgAccent: "bg-purple-50",
      icon: <Lightbulb className="h-5 w-5" />,
      tags: ["Creative", "Design", "Media"]
    },
    {
      id: "academic",
      name: "Scholarly Impact",
      description: "Elegant template with a clean layout designed for academic professionals and researchers.",
      atsScore: 99,
      gradient: "from-green-700 to-emerald-900",
      accent: "border-green-700",
      textColor: "text-green-700",
      bgAccent: "bg-green-50",
      icon: <BookOpen className="h-5 w-5" />,
      tags: ["Academic", "Research", "Education"]
    },
    {
      id: "professional",
      name: "Corporate Impact",
      description: "Clean, professional template for business and corporate roles. Optimized for ATS systems.",
      atsScore: 98,
      gradient: "from-gray-700 to-gray-900",
      accent: "border-gray-700",
      textColor: "text-gray-700",
      bgAccent: "bg-gray-100",
      icon: <Target className="h-5 w-5" />,
      popular: true,
      tags: ["Corporate", "Business", "Professional"]
    },
    {
      id: "specialist",
      name: "Expert Authority",
      description: "Bold template that showcases achievements and expertise with a distinctive side panel layout.",
      atsScore: 96,
      gradient: "from-red-600 to-rose-800",
      accent: "border-red-600",
      textColor: "text-red-600",
      bgAccent: "bg-red-50",
      icon: <Trophy className="h-5 w-5" />,
      tags: ["Specialist", "Expert", "Authoritative"]
    },
    {
      id: "analytics",
      name: "Insight Matrix",
      description: "Modern data-oriented layout with precise sections for metrics and quantifiable achievements.",
      atsScore: 97,
      gradient: "from-violet-600 to-purple-800",
      accent: "border-violet-600",
      textColor: "text-violet-600",
      bgAccent: "bg-violet-50",
      icon: <PieChart className="h-5 w-5" />,
      tags: ["Analytics", "Data Science", "Finance"]
    },
    {
      id: "minimal",
      name: "Modern Minimal",
      description: "Clean, minimalist design that emphasizes content and readability. Universal appeal across industries.",
      atsScore: 99,
      gradient: "from-neutral-600 to-neutral-800",
      accent: "border-neutral-600",
      textColor: "text-neutral-600",
      bgAccent: "bg-neutral-100",
      icon: <FileText className="h-5 w-5" />,
      tags: ["Minimal", "Clean", "Universal"]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Choose Your Template</h2>
        <p className="text-gray-500">Select from our collection of ATS-optimized professional templates</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
        {templates.map((template) => (
          <Card
            key={template.id}
            className={`group relative overflow-hidden cursor-pointer transition-all duration-300 border-2 hover:scale-[1.02] ${
              selectedTemplate === template.id
                ? `${template.accent} shadow-md shadow-${template.textColor}/10`
                : "border-transparent hover:shadow-md"
            }`}
            onClick={() => onSelectTemplate(template.id as TemplateType)}
          >
            {/* Template Preview */}
            <div className={`relative h-40 bg-gradient-to-br ${template.gradient} p-3`}>
              <div className="absolute inset-0 bg-black/20" />
              {template.id === "academic" ? (
                <div className="relative h-full rounded-lg bg-white/10 backdrop-blur-sm p-3 flex flex-col">
                  <div className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 ${template.bgAccent} ${template.textColor} self-start`}>
                    {template.icon}
                    <span className="text-xs font-medium">{template.name}</span>
                  </div>
                  <div className="mt-auto flex gap-1">
                    <div className="w-1/4 h-2 bg-white/30 rounded"></div>
                    <div className="w-3/4 h-2 bg-white/20 rounded"></div>
                  </div>
                  <div className="mt-1 flex gap-1">
                    <div className="w-2/3 h-2 bg-white/30 rounded"></div>
                    <div className="w-1/3 h-2 bg-white/20 rounded"></div>
                  </div>
                  <div className="mt-1 flex gap-1">
                    <div className="w-1/2 h-2 bg-white/30 rounded"></div>
                    <div className="w-1/2 h-2 bg-white/20 rounded"></div>
                  </div>
                </div>
              ) : template.id === "specialist" ? (
                <div className="relative h-full rounded-lg bg-white/10 backdrop-blur-sm p-3 flex">
                  <div className="w-1/3 bg-white/20 h-full rounded-l-lg"></div>
                  <div className="w-2/3 p-2">
                    <div className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 ${template.bgAccent} ${template.textColor}`}>
                      {template.icon}
                      <span className="text-xs font-medium">{template.name}</span>
                    </div>
                    <div className="mt-2 space-y-1">
                      <div className="h-1.5 bg-white/30 w-full rounded"></div>
                      <div className="h-1.5 bg-white/30 w-5/6 rounded"></div>
                      <div className="h-1.5 bg-white/30 w-4/6 rounded"></div>
                    </div>
                  </div>
                </div>
              ) : template.id === "analytics" ? (
                <div className="relative h-full rounded-lg bg-white/10 backdrop-blur-sm p-3">
                  <div className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 ${template.bgAccent} ${template.textColor}`}>
                    {template.icon}
                    <span className="text-xs font-medium">{template.name}</span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-end gap-1 h-16">
                    <div className="h-4/6 w-3 bg-white/40 rounded-t"></div>
                    <div className="h-3/6 w-3 bg-white/30 rounded-t"></div>
                    <div className="h-5/6 w-3 bg-white/50 rounded-t"></div>
                    <div className="h-2/6 w-3 bg-white/20 rounded-t"></div>
                    <div className="h-6/6 w-3 bg-white/60 rounded-t"></div>
                    <div className="h-3/6 w-3 bg-white/30 rounded-t"></div>
                    <div className="ml-auto flex items-center justify-center w-14 h-14 rounded-full bg-white/20">
                      <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center">
                        <div className="w-5 h-5 rounded-full bg-white/60"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative h-full rounded-lg bg-white/10 backdrop-blur-sm p-3">
                  <div className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 ${template.bgAccent} ${template.textColor}`}>
                    {template.icon}
                    <span className="text-xs font-medium">{template.name}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Template Info */}
            <div className="p-3 space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className={`font-semibold text-base group-hover:${template.textColor} transition-colors`}>
                    {template.name}
                  </h3>
                  <p className="text-xs text-gray-600 mt-0.5 line-clamp-2">
                    {template.description}
                  </p>
                </div>
                {template.popular && (
                  <Badge variant="secondary" className={`${template.bgAccent} ${template.textColor} text-xs`}>
                    Popular
                  </Badge>
                )}
              </div>

              <div className="flex flex-wrap gap-1.5">
                {template.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-2 py-0.5 rounded-full border ${template.bgAccent} ${template.textColor}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Star className={`h-3.5 w-3.5 ${template.textColor}`} />
                  <span className="text-xs font-medium">{template.atsScore}% ATS</span>
                </div>
                {selectedTemplate === template.id && (
                  <span className={`text-xs font-medium flex items-center gap-1 ${template.textColor}`}>
                    <Check className="h-3.5 w-3.5" /> Selected
                  </span>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-4 mt-6">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-white rounded-lg shadow-sm">
            <Check className="h-5 w-5 text-indigo-600" />
          </div>
          <div>
            <h4 className="text-base font-semibold text-gray-900">All templates are ATS-optimized</h4>
            <p className="text-sm text-gray-600 mt-1">
              Our templates are carefully designed to pass Applicant Tracking Systems while maintaining a professional and visually appealing appearance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplates;
