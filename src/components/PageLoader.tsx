import React from "react";
import { Sparkles } from "lucide-react";

const PageLoader = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-600 animate-pulse">
          <Sparkles className="h-6 w-6 text-white" />
        </div>
        <div className="mt-2 text-sm font-medium text-gray-600">Loading ResumeSpark...</div>
      </div>
    </div>
  );
};

export default PageLoader; 