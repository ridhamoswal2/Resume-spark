import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLoader from "@/components/PageLoader";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const Builder = lazy(() => import("./pages/Builder"));
const Templates = lazy(() => import("./pages/Templates"));
const Examples = lazy(() => import("./pages/Examples"));
const Pricing = lazy(() => import("./pages/Pricing"));  // Ensure 'Pricing.tsx' exists and has correct casing
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Guides = lazy(() => import("./pages/Guides"));
const ATSTips = lazy(() => import("./pages/ATSTips"));
const CareerAdvice = lazy(() => import("./pages/CareerAdvice"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Profile = lazy(() => import("./pages/Profile"));
const Settings = lazy(() => import("./pages/Settings"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/builder" element={<Builder />} />
            <Route path="/builder/:resumeId" element={<Builder />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/examples" element={<Examples />} />
            <Route path="/pricing" element={<Pricing />} /> {/* Make sure 'Pricing.tsx' is correctly named */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/ats-tips" element={<ATSTips />} />
            <Route path="/career-advice" element={<CareerAdvice />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
