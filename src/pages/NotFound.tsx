import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileQuestion } from "lucide-react";
import Header from "@/components/Header";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="max-w-md w-full text-center">
          <div className="bg-indigo-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileQuestion className="h-10 w-10 text-indigo-600" />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-3">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
          
          <p className="text-gray-600 mb-8">
            We couldn't find the page you're looking for. 
            The page might have been moved, deleted, or never existed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link to="/">
                Go to Home
              </Link>
            </Button>
            
            <Button variant="outline" asChild>
              <Link to="/builder">
                Create a Resume
              </Link>
            </Button>
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

export default NotFound;
