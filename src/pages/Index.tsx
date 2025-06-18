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
} from "lucide-react";
import Header from "@/components/Header";

const Index = () => {
  const features = [
    {
      icon: <FileText className="h-6 w-6 text-indigo-500" />,
      title: "Professional Templates",
      description:
        "Choose from our collection of professionally designed resume templates",
    },
    {
      icon: <Zap className="h-6 w-6 text-indigo-500" />,
      title: "Easy to Use",
      description:
        "Simple and intuitive interface to build your resume quickly",
    },
    {
      icon: <Clock className="h-6 w-6 text-indigo-500" />,
      title: "Quick & Easy",
      description:
        "Create your perfect resume in under 10 minutes with our streamlined builder",
    },
    {
      icon: <Download className="h-6 w-6 text-indigo-500" />,
      title: "Multiple Export Options",
      description:
        "Export in PDF, DOCX, or JPEG format, with custom styling and formatting preserved",
    },
  ];

  const benefits = [
    "Professional resume templates",
    "Easy-to-use resume builder",
    "Export in multiple formats",
    "Customizable sections and styling",
  ];

  const resumePreviewImage = "/resume.svg";

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
                <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                  Create Your Professional Resume in Minutes
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Build a professional resume easily with our intuitive resume
                  builder and professionally designed templates.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link to="/builder">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/25 transform transition hover:-translate-y-1"
                  >
                    Create Your Resume <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/templates">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-2 hover:bg-indigo-50"
                  >
                    View Templates
                  </Button>
                </Link>
              </div>

              <div className="flex flex-col gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white/50 backdrop-blur-sm rounded-lg p-3 shadow-sm"
                  >
                    <CheckCircle2 className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative lg:ml-auto">
              <div className="relative rounded-xl overflow-hidden shadow-2xl bg-white transform transition-transform hover:scale-105">
                <img
                  src={resumePreviewImage}
                  alt="Resume Preview"
                  className="w-full"
                />
              </div>
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
              Everything You Need to Create a Great Resume
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our resume builder combines beautiful design with powerful
              features to help you create a professional resume
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 border-gray-100 bg-white/50 backdrop-blur-sm hover:-translate-y-1"
              >
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
        <div
          className="absolute inset-0 bg-grid-white/10"
          style={{ backgroundSize: "32px 32px" }}
        />
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">
              Start Building Your Resume Today
            </h2>
            <p className="text-xl text-indigo-100 mb-10 leading-relaxed">
              Create a professional resume in minutes with our easy-to-use
              builder.
            </p>
            <Link to="/builder">
              <Button
                size="lg"
                className="bg-white text-indigo-600 hover:bg-indigo-50 shadow-lg shadow-indigo-900/20 transform transition hover:-translate-y-1"
              >
                Create Your Resume Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} ResumeSpark. Create professional
              resumes that help you land your dream job.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
