import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { 
  Plus, 
  Search, 
  Filter, 
  FileText, 
  MoreVertical, 
  Edit, 
  Copy, 
  Trash, 
  Share2, 
  Download,
  BriefcaseBusiness,
  Briefcase,
  GraduationCap,
  Award,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null);
  
  // Mock resume data
  const resumes = [
    {
      id: "r1",
      name: "Software Engineer Resume",
      lastEdited: "2023-10-15T14:30:00Z",
      template: "modern",
      status: "complete", // complete, draft, incomplete
      category: "tech",
      atsScore: 92,
    },
    {
      id: "r2",
      name: "Product Manager Resume",
      lastEdited: "2023-10-12T09:15:00Z",
      template: "professional",
      status: "draft",
      category: "business",
      atsScore: 78,
    },
    {
      id: "r3",
      name: "Marketing Specialist Resume",
      lastEdited: "2023-10-05T16:45:00Z",
      template: "creative",
      status: "complete",
      category: "marketing",
      atsScore: 85,
    },
    {
      id: "r4",
      name: "UX Designer Resume",
      lastEdited: "2023-09-28T11:20:00Z",
      template: "minimal",
      status: "incomplete",
      category: "creative",
      atsScore: 63,
    },
    {
      id: "r5",
      name: "Data Scientist Resume",
      lastEdited: "2023-09-20T10:10:00Z",
      template: "executive",
      status: "complete",
      category: "tech",
      atsScore: 89,
    }
  ];
  
  // Filter resumes based on tab and search query
  const filteredResumes = resumes.filter(resume => {
    const categoryMatch = activeTab === "all" || (
      activeTab === "complete" && resume.status === "complete" ||
      activeTab === "draft" && resume.status === "draft" ||
      activeTab === "tech" && resume.category === "tech" ||
      activeTab === "business" && resume.category === "business" ||
      activeTab === "creative" && resume.category === "creative"
    );
    
    const searchMatch = !searchQuery || 
      resume.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    return categoryMatch && searchMatch;
  });
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric'
    }).format(date);
  };
  
  const handleDeleteClick = (id: string) => {
    setSelectedResumeId(id);
    setShowDeleteDialog(true);
  };
  
  const handleConfirmDelete = () => {
    // In a real app, this would call an API
    console.log(`Deleting resume ${selectedResumeId}`);
    setShowDeleteDialog(false);
    setSelectedResumeId(null);
  };
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "complete":
        return <Badge className="bg-green-100 text-green-800">Complete</Badge>;
      case "draft":
        return <Badge className="bg-yellow-100 text-yellow-800">Draft</Badge>;
      case "incomplete":
        return <Badge className="bg-red-100 text-red-800">Incomplete</Badge>;
      default:
        return null;
    }
  };
  
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "tech":
        return <BriefcaseBusiness className="h-4 w-4 text-indigo-600" />;
      case "business":
        return <Briefcase className="h-4 w-4 text-blue-600" />;
      case "marketing":
        return <Award className="h-4 w-4 text-purple-600" />;
      case "creative":
        return <GraduationCap className="h-4 w-4 text-amber-600" />;
      default:
        return <FileText className="h-4 w-4 text-gray-600" />;
    }
  };
  
  const getAtsScoreColor = (score: number) => {
    if (score >= 85) return "bg-green-500";
    if (score >= 70) return "bg-yellow-500";
    return "bg-red-500";
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Resumes</h1>
            <p className="text-gray-600">Manage and edit your resumes</p>
          </div>
          
          <Link to="/builder">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Create New Resume
            </Button>
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border mb-6">
          <div className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="Search resumes..." 
                  className="pl-9" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex items-center gap-4">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto">
                  <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="complete">Complete</TabsTrigger>
                    <TabsTrigger value="draft">Drafts</TabsTrigger>
                  </TabsList>
                </Tabs>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="gap-2">
                      <Filter className="h-4 w-4" />
                      <span className="hidden md:inline">Categories</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setActiveTab("tech")}>
                      <BriefcaseBusiness className="h-4 w-4 text-indigo-600 mr-2" />
                      <span>Tech</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setActiveTab("business")}>
                      <Briefcase className="h-4 w-4 text-blue-600 mr-2" />
                      <span>Business</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setActiveTab("creative")}>
                      <GraduationCap className="h-4 w-4 text-amber-600 mr-2" />
                      <span>Creative</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
          
          {filteredResumes.length > 0 ? (
            <div className="border-t">
              <table className="w-full">
                <thead className="bg-gray-50 text-xs text-gray-500 uppercase">
                  <tr>
                    <th className="px-6 py-3 text-left">Resume</th>
                    <th className="px-6 py-3 text-left hidden md:table-cell">Template</th>
                    <th className="px-6 py-3 text-left hidden md:table-cell">Last Edited</th>
                    <th className="px-6 py-3 text-left hidden lg:table-cell">ATS Score</th>
                    <th className="px-6 py-3 text-left">Status</th>
                    <th className="px-6 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {filteredResumes.map((resume) => (
                    <tr key={resume.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-gray-100 rounded-md">
                            {getCategoryIcon(resume.category)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">{resume.name}</h3>
                            <p className="text-xs text-gray-500 md:hidden">
                              {formatDate(resume.lastEdited)}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 hidden md:table-cell">
                        <span className="capitalize">{resume.template}</span>
                      </td>
                      <td className="px-6 py-4 hidden md:table-cell">
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5 text-gray-400" />
                          <span className="text-sm text-gray-600">
                            {formatDate(resume.lastEdited)}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 hidden lg:table-cell">
                        <div className="flex items-center gap-3">
                          <Progress 
                            value={resume.atsScore} 
                            max={100} 
                            className={`h-2 w-20 ${getAtsScoreColor(resume.atsScore)}`} 
                          />
                          <span className="text-sm font-medium">{resume.atsScore}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {getStatusBadge(resume.status)}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end items-center gap-2">
                          <Button 
                            asChild 
                            size="sm" 
                            variant="outline" 
                            className="hidden md:flex"
                          >
                            <Link to={`/builder/${resume.id}`}>
                              <Edit className="h-4 w-4 mr-1" />
                              Edit
                            </Link>
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem asChild>
                                <Link to={`/builder/${resume.id}`} className="flex items-center w-full cursor-pointer">
                                  <Edit className="h-4 w-4 mr-2" />
                                  <span>Edit</span>
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Download className="h-4 w-4 mr-2" />
                                <span>Download</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Share2 className="h-4 w-4 mr-2" />
                                <span>Share</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Copy className="h-4 w-4 mr-2" />
                                <span>Duplicate</span>
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem 
                                onClick={() => handleDeleteClick(resume.id)} 
                                className="text-red-600"
                              >
                                <Trash className="h-4 w-4 mr-2" />
                                <span>Delete</span>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="py-12 text-center border-t">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4">
                <FileText className="h-6 w-6 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">No resumes found</h3>
              <p className="text-gray-500 mb-6">
                {searchQuery 
                  ? "Try adjusting your search or filters" 
                  : "Create your first resume to get started"}
              </p>
              {!searchQuery && (
                <Link to="/builder">
                  <Button>Create a Resume</Button>
                </Link>
              )}
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-50 rounded-full">
                    <Edit className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Updated "Software Engineer Resume"</p>
                    <p className="text-xs text-gray-500">Today at 2:30 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-50 rounded-full">
                    <Download className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Downloaded "Marketing Specialist Resume"</p>
                    <p className="text-xs text-gray-500">Yesterday at 10:15 AM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-50 rounded-full">
                    <Plus className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Created "Product Manager Resume"</p>
                    <p className="text-xs text-gray-500">Oct 12, 2023</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0 border-t">
              <Button variant="link" className="w-full p-0 h-auto">View all activity</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Resume Analytics</CardTitle>
              <CardDescription>Performance overview of your resumes</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Average ATS Score</span>
                    <span className="text-sm font-semibold">81%</span>
                  </div>
                  <Progress value={81} max={100} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Resume Views</span>
                    <span className="text-sm font-semibold">24 this month</span>
                  </div>
                  <Progress value={24} max={50} className="h-2 bg-gray-100" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Downloads</span>
                    <span className="text-sm font-semibold">12 this month</span>
                  </div>
                  <Progress value={12} max={50} className="h-2 bg-gray-100" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0 border-t">
              <Button variant="link" className="w-full p-0 h-auto">View detailed analytics</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Quick Tips</CardTitle>
              <CardDescription>Improve your resume effectiveness</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-indigo-600 text-xs font-medium">1</span>
                  </div>
                  <p className="text-sm text-gray-600">Use keywords from the job description to improve ATS compatibility.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-indigo-600 text-xs font-medium">2</span>
                  </div>
                  <p className="text-sm text-gray-600">Quantify your achievements with numbers and percentages when possible.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-indigo-600 text-xs font-medium">3</span>
                  </div>
                  <p className="text-sm text-gray-600">Tailor your resume for each job application for best results.</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0 border-t">
              <Button variant="link" className="w-full p-0 h-auto">View all resume tips</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
      
      {/* Delete Confirmation Dialog */}
      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Resume</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this resume? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDeleteDialog(false)}>
              Cancel
            </Button>
            <Button 
              variant="destructive" 
              onClick={handleConfirmDelete}
            >
              Delete Resume
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <footer className="bg-white border-t py-8 mt-12">
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

export default Dashboard; 