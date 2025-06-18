import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Sparkles, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  const navigation = [
    { name: 'Templates', path: '/templates' },
    { name: 'Builder', path: '/builder' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2 text-indigo-600">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">ResumeSpark</span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navigation.map((item) => (
                <Link 
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors ${
                    isActive(item.path) 
                      ? 'text-indigo-600' 
                      : 'text-gray-700 hover:text-indigo-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            {!isActive('/builder') && (
              <Button asChild variant="default" size="sm">
                <Link to="/builder">Create Resume</Link>
              </Button>
            )}
            
            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 pt-6">
                  <nav className="flex flex-col gap-4">
                    {navigation.map((item) => (
                      <Link 
                        key={item.name}
                        to={item.path}
                        className={`text-sm font-medium ${
                          isActive(item.path) 
                            ? 'text-indigo-600' 
                            : 'text-gray-700'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                  
                  <div className="flex flex-col gap-2 pt-4 border-t">
                    <Button asChild>
                      <Link to="/builder">Create Resume</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
