import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  FileText, 
  Download, 
  Zap, 
  Clock, 
  Layout, 
  ArrowRight,
  CheckCircle2,
  Award
} from "lucide-react";
import Header from "@/components/Header";

const Index = () => {
  const features = [
    {
      icon: <Award className="h-6 w-6 text-indigo-500" />,
      title: "ATS-Optimized Templates",
      description: "Professionally designed templates that ensure your resume passes Applicant Tracking Systems with a 90% success rate"
    },
    {
      icon: <Zap className="h-6 w-6 text-indigo-500" />,
      title: "AI-Powered Smart Editor",
      description: "Advanced AI suggestions and real-time optimization to make your resume stand out"
    },
    {
      icon: <Clock className="h-6 w-6 text-indigo-500" />,
      title: "Quick & Easy",
      description: "Create your perfect resume in under 10 minutes with our streamlined builder"
    },
    {
      icon: <Download className="h-6 w-6 text-indigo-500" />,
      title: "Multiple Export Options",
      description: "Export in PDF, DOCX, or JPEG format, with custom styling and formatting preserved"
    }
  ];

  const benefits = [
    "100% ATS-compliant templates trusted by professionals",
    "AI-powered content suggestions and keyword optimization",
    "Real-time resume score and improvement tips",
    "Multiple export formats with custom styling",
    "24/7 customer support and expert guidance",
    "Industry-specific templates and examples"
  ];

  const resumePreviewImage = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjEwMDAiIHZpZXdCb3g9IjAgMCA4MDAgMTAwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjEwMDAiIGZpbGw9IndoaXRlIi8+PHJlY3QgeD0iNDAiIHk9IjQwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI0VCRjRGRiIgcng9IjgiLz48cmVjdCB4PSIyODAiIHk9IjQwIiB3aWR0aD0iNDgwIiBoZWlnaHQ9IjQ4IiBmaWxsPSIjRUJGNEZGIiByeD0iOCIvPjxyZWN0IHg9IjI4MCIgeT0iMTA0IiB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyIiBmaWxsPSIjRUJGNEZGIiByeD0iOCIvPjxyZWN0IHg9IjQwIiB5PSIyODAiIHdpZHRoPSI3MjAiIGhlaWdodD0iMzIiIGZpbGw9IiM0MzM4Q0EiIHJ4PSI4Ii8+PHJlY3QgeD0iNDAiIHk9IjM0MCIgd2lkdGg9IjcyMCIgaGVpZ2h0PSIxNiIgZmlsbD0iI0VCRjRGRiIgcng9IjgiLz48cmVjdCB4PSI0MCIgeT0iMzgwIiB3aWR0aD0iNzIwIiBoZWlnaHQ9IjE2IiBmaWxsPSIjRUJGNEZGIiByeD0iOCIvPjxyZWN0IHg9IjQwIiB5PSI0MjAiIHdpZHRoPSI3MjAiIGhlaWdodD0iMTYiIGZpbGw9IiNFQkY0RkYiIHJ4PSI4Ii8+PHJlY3QgeD0iNDAiIHk9IjQ4MCIgd2lkdGg9IjcyMCIgaGVpZ2h0PSIzMiIgZmlsbD0iIzQzMzhDQSIgcng9IjgiLz48cmVjdCB4PSI0MCIgeT0iNTQwIiB3aWR0aD0iNzIwIiBoZWlnaHQ9IjE2IiBmaWxsPSIjRUJGNEZGIiByeD0iOCIvPjxyZWN0IHg9IjQwIiB5PSI1ODAiIHdpZHRoPSI3MjAiIGhlaWdodD0iMTYiIGZpbGw9IiNFQkY0RkYiIHJ4PSI4Ii8+PHJlY3QgeD0iNDAiIHk9IjYyMCIgd2lkdGg9IjcyMCIgaGVpZ2h0PSIxNiIgZmlsbD0iI0VCRjRGRiIgcng9IjgiLz48cmVjdCB4PSI0MCIgeT0iNjgwIiB3aWR0aD0iNzIwIiBoZWlnaHQ9IjMyIiBmaWxsPSIjNDMzOENBIiByeD0iOCIvPjxyZWN0IHg9IjQwIiB5PSI3NDAiIHdpZHRoPSI3MjAiIGhlaWdodD0iMTYiIGZpbGw9IiNFQkY0RkYiIHJ4PSI4Ii8+PHJlY3QgeD0iNDAiIHk9Ijc4MCIgd2lkdGg9IjcyMCIgaGVpZ2h0PSIxNiIgZmlsbD0iI0VCRjRGRiIgcng9IjgiLz48cmVjdCB4PSI0MCIgeT0iODIwIiB3aWR0aD0iNzIwIiBoZWlnaHQ9IjE2IiBmaWxsPSIjRUJGNEZGIiByeD0iOCIvPjwvc3ZnPg==";

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <div className="mb-8">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm text-indigo-600 animate-pulse">
                  <span className="font-medium">Limited Time Offer</span>
                  <span className="text-indigo-400">|</span>
                  <span>50% Off Premium Templates</span>
                </div>
                <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                  Land Your Dream Job with an <span className="text-indigo-600 relative">
                    ATS-Optimized
                    <span className="absolute bottom-0 left-0 w-full h-2 bg-indigo-100 -z-10"></span>
                  </span> Resume
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Join over 100,000+ professionals who've trusted ResumeSpark to create stunning, ATS-friendly resumes that get more interviews and job offers.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link to="/builder">
                  <Button size="lg" className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/25 transform transition hover:-translate-y-1">
                    Create Your Resume <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/templates">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 hover:bg-indigo-50">
                    View Templates
                  </Button>
                </Link>
              </div>

              <div className="flex flex-col gap-4">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/50 backdrop-blur-sm rounded-lg p-3 shadow-sm">
                    <CheckCircle2 className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative lg:ml-auto">
              <div className="relative rounded-xl overflow-hidden shadow-2xl bg-white transform transition-transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent pointer-events-none" />
                <img 
                  src={resumePreviewImage}
                  alt="Resume Preview" 
                  className="w-full"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Live Preview</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-50 rounded-full blur-2xl opacity-60 animate-pulse" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-50 rounded-full blur-2xl opacity-60 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,theme(colors.indigo.50),white)]" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              Craft the Perfect Resume with Powerful Features
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our intelligent resume builder combines beautiful design with powerful features to help you create a resume that gets results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-gray-100 bg-white/50 backdrop-blur-sm hover:-translate-y-1">
                <div className="h-14 w-14 rounded-xl bg-indigo-50 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-indigo-600 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.indigo.500),theme(colors.indigo.800))] opacity-100" />
        <div className="absolute inset-0 bg-grid-white/10" style={{ backgroundSize: '32px 32px' }} />
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">
              Start Building Your Professional Resume Today
            </h2>
            <p className="text-xl text-indigo-100 mb-10 leading-relaxed">
              Join thousands of successful professionals who have already created stunning resumes with ResumeSpark. Try it free, no credit card required.
            </p>
            <Link to="/builder">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 shadow-lg shadow-indigo-900/20 transform transition hover:-translate-y-1">
                Create Your Resume Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <h3 className="font-semibold text-gray-900 mb-4">ResumeSpark</h3>
              <p className="text-sm text-gray-600">
                Create professional resumes that help you land your dream job.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-indigo-600">Templates</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-indigo-600">Examples</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-indigo-600">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-indigo-600">Guide</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-indigo-600">FAQ</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-indigo-600">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-indigo-600">About</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-indigo-600">Contact</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-indigo-600">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t">
            <p className="text-sm text-gray-600 text-center">
              © {new Date().getFullYear()} ResumeSpark. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
