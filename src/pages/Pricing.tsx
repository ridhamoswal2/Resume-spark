import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Header from "@/components/Header";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with resume creation",
      features: [
        "1 resume",
        "Basic templates",
        "Export as PDF",
        "ATS compatibility check",
      ],
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
    },
    {
      name: "Pro",
      price: "$12",
      period: "monthly",
      description: "For job seekers who need more options",
      features: [
        "Unlimited resumes",
        "All templates",
        "Export in multiple formats",
        "Advanced ATS optimization",
        "Cover letter builder",
        "30-day revision history",
      ],
      buttonText: "Upgrade to Pro",
      buttonVariant: "default" as const,
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "$29",
      period: "monthly",
      description: "For teams and career services professionals",
      features: [
        "Everything in Pro",
        "Team collaboration features",
        "Custom branding",
        "API access",
        "Resume analytics",
        "Priority support",
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-1 container py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan to help you create professional resumes that stand out and get noticed by employers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.name}
              className={`bg-white rounded-lg shadow-sm border overflow-hidden ${
                plan.highlighted ? "ring-2 ring-indigo-600 relative" : ""
              }`}
            >
              {plan.highlighted && (
                <div className="bg-indigo-600 text-white text-xs font-medium px-3 py-1 text-center">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{plan.name}</h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500 ml-1">/{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <Button variant={plan.buttonVariant} className="w-full mb-6">
                  {plan.buttonText}
                </Button>
                
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-indigo-50 rounded-lg p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need a custom solution?</h2>
          <p className="text-gray-600 mb-6">
            We offer custom packages for educational institutions, career centers, and large enterprises.
            Contact our sales team to discuss your specific requirements.
          </p>
          <Button>Contact Us</Button>
        </div>
      </main>
      
      <footer className="bg-white border-t py-8 mt-auto">
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

export default Pricing; 