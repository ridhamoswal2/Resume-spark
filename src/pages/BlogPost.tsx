import React from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const BlogPost = () => {
  const { slug } = useParams();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container py-12">
        <div className="max-w-3xl mx-auto">
          <Button variant="ghost" className="mb-6 gap-2" asChild>
            <Link to="/blog">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
          
          <div className="text-center py-20">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Coming Soon</h2>
            <p className="text-gray-600 mb-8">
              This blog post (slug: {slug}) is currently being written. Check back soon!
            </p>
          </div>
        </div>
      </main>
      
      <footer className="bg-white border-t py-8">
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

export default BlogPost; 