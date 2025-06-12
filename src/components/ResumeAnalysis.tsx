import React from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResumeData } from "@/lib/resumeData";
import { CheckCircle2, XCircle, AlertCircle, Bookmark, FileSearch, Target, Lightbulb } from "lucide-react";
import { DialogFooter } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ResumeAnalysisProps {
  resumeData: ResumeData;
  resumeScore: number;
  onClose: () => void;
}

export const ResumeAnalysis: React.FC<ResumeAnalysisProps> = ({
  resumeData,
  resumeScore,
  onClose,
}) => {
  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-500";
    if (score >= 70) return "text-yellow-500";
    return "text-red-500";
  };

  const getScoreBackgroundColor = (score: number) => {
    if (score >= 90) return "bg-green-500";
    if (score >= 70) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getScoreText = (score: number) => {
    if (score >= 90) return "Excellent";
    if (score >= 80) return "Very Good";
    if (score >= 70) return "Good";
    if (score >= 60) return "Fair";
    return "Needs Improvement";
  };

  // These would normally be calculated based on analysis of the resume
  const analysisData = {
    keywordMatch: 78,
    readability: 85,
    structure: 82,
    contentGaps: [
      { 
        type: "missing", 
        item: "Quantifiable achievements", 
        description: "Add specific metrics and accomplishments for your roles" 
      },
      { 
        type: "weak", 
        item: "Technical skills section", 
        description: "Consider grouping skills by category for better organization" 
      },
      { 
        type: "missing", 
        item: "Certifications", 
        description: "Add relevant certifications to strengthen your credentials" 
      },
    ],
    industryKeywords: [
      { word: "React", found: true },
      { word: "JavaScript", found: true },
      { word: "Node.js", found: true },
      { word: "Web Development", found: false },
      { word: "Frontend", found: false },
      { word: "User Interface", found: false },
      { word: "TypeScript", found: false },
      { word: "REST API", found: false },
      { word: "GraphQL", found: false },
      { word: "State Management", found: false },
    ],
    suggestions: [
      "Include more quantifiable achievements in your job descriptions",
      "Add relevant certifications to strengthen your credentials",
      "Use more industry-specific keywords like 'Frontend', 'TypeScript', and 'REST API'",
      "Consider adding a brief section on notable projects",
      "Group your skills by category (e.g., Programming Languages, Tools, Soft Skills)",
    ],
    redFlags: [
      "Resume lacks specific accomplishments with metrics",
      "Missing several industry-specific keywords",
      "Skills section could be better organized",
    ],
    strengths: [
      "Well-structured professional summary",
      "Good use of action verbs in experience descriptions",
      "Appropriate resume length",
      "Clear chronological work history",
    ],
  };

  return (
    <div className="space-y-6">
      <div className="bg-white border rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-semibold">Resume Score</h3>
            <p className="text-gray-500">Based on industry standards and ATS compatibility</p>
          </div>
          <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-gray-100">
            <span className={`text-xl font-bold ${getScoreColor(resumeScore)}`}>{resumeScore}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium">Keyword Match</span>
              <span className={`text-sm font-semibold ${getScoreColor(analysisData.keywordMatch)}`}>
                {analysisData.keywordMatch}%
              </span>
            </div>
            <Progress 
              value={analysisData.keywordMatch} 
              max={100} 
              className={`h-2 ${getScoreBackgroundColor(analysisData.keywordMatch)}`} 
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium">Readability</span>
              <span className={`text-sm font-semibold ${getScoreColor(analysisData.readability)}`}>
                {analysisData.readability}%
              </span>
            </div>
            <Progress 
              value={analysisData.readability} 
              max={100} 
              className={`h-2 ${getScoreBackgroundColor(analysisData.readability)}`} 
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium">Structure</span>
              <span className={`text-sm font-semibold ${getScoreColor(analysisData.structure)}`}>
                {analysisData.structure}%
              </span>
            </div>
            <Progress 
              value={analysisData.structure} 
              max={100} 
              className={`h-2 ${getScoreBackgroundColor(analysisData.structure)}`} 
            />
          </div>
        </div>
        
        <div className="px-4 py-3 bg-indigo-50 border border-indigo-100 rounded-md text-indigo-800">
          <div className="flex gap-2 mb-1">
            <FileSearch className="h-5 w-5 text-indigo-600 flex-shrink-0" />
            <p className="font-medium">ATS Scan Result: {getScoreText(resumeScore)}</p>
          </div>
          <p className="text-sm ml-7">
            Your resume is {resumeScore >= 70 ? "likely to pass" : "may struggle with"} most Applicant Tracking Systems. 
            {resumeScore < 80 ? " Consider addressing the suggestions below to improve your score." : ""}
          </p>
        </div>
      </div>
      
      <Tabs defaultValue="suggestions">
        <TabsList className="grid grid-cols-4 w-full">
          <TabsTrigger value="suggestions">
            <Lightbulb className="h-4 w-4 mr-2" />
            <span>Suggestions</span>
          </TabsTrigger>
          <TabsTrigger value="keywords">
            <Target className="h-4 w-4 mr-2" />
            <span>Keywords</span>
          </TabsTrigger>
          <TabsTrigger value="strengths">
            <CheckCircle2 className="h-4 w-4 mr-2" />
            <span>Strengths</span>
          </TabsTrigger>
          <TabsTrigger value="issues">
            <AlertCircle className="h-4 w-4 mr-2" />
            <span>Issues</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="suggestions" className="mt-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Improvement Suggestions</CardTitle>
              <CardDescription>
                Apply these recommendations to improve your resume's effectiveness
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {analysisData.suggestions.map((suggestion, index) => (
                  <li key={index} className="flex gap-2">
                    <Lightbulb className="h-5 w-5 text-amber-500 flex-shrink-0" />
                    <span>{suggestion}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="keywords" className="mt-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Industry Keywords</CardTitle>
              <CardDescription>
                Keywords relevant to your industry that recruiters and ATS systems look for
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-6">
                {analysisData.industryKeywords.map((keyword, index) => (
                  <Badge 
                    key={index} 
                    className={
                      keyword.found
                        ? "bg-green-100 text-green-800 hover:bg-green-200"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }
                  >
                    {keyword.word}
                    {keyword.found ? (
                      <CheckCircle2 className="h-3 w-3 ml-1 text-green-600" />
                    ) : (
                      <XCircle className="h-3 w-3 ml-1 text-gray-400" />
                    )}
                  </Badge>
                ))}
              </div>
              
              <div className="p-3 bg-amber-50 border border-amber-100 rounded-md text-amber-800 text-sm">
                <p className="flex items-start gap-2">
                  <Bookmark className="h-5 w-5 text-amber-500 flex-shrink-0" />
                  <span>Your resume contains {analysisData.industryKeywords.filter(k => k.found).length} out of {analysisData.industryKeywords.length} recommended keywords for your industry.</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="strengths" className="mt-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Resume Strengths</CardTitle>
              <CardDescription>
                Positive aspects of your resume that work well
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {analysisData.strengths.map((strength, index) => (
                  <li key={index} className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="issues" className="mt-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Potential Issues</CardTitle>
              <CardDescription>
                Areas that may negatively impact your resume's effectiveness
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="text-sm font-medium mb-3">Red Flags</h4>
                <ul className="space-y-3">
                  {analysisData.redFlags.map((flag, index) => (
                    <li key={index} className="flex gap-2">
                      <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                      <span>{flag}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-3">Content Gaps</h4>
                <ul className="space-y-3">
                  {analysisData.contentGaps.map((gap, index) => (
                    <li key={index} className="flex gap-2">
                      <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0" />
                      <div>
                        <span className="font-medium">{gap.item}:</span>{' '}
                        <span className="text-gray-600">{gap.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <DialogFooter>
        <Button onClick={onClose}>Close Analysis</Button>
      </DialogFooter>
    </div>
  );
};

export default ResumeAnalysis; 