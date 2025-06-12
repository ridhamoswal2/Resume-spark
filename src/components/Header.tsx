import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Sparkles, Menu, X, ChevronDown, User, LogOut, Settings, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const isActive = (path: string) => location.pathname === path;
  
  // Mock function - would be replaced with actual auth logic
  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);
  
  const navigation = [
    { name: 'Templates', path: '/templates' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Examples', path: '/examples' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
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
              
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-indigo-600">
                  Resources <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem>
                    <Link to="/guides" className="flex w-full">Resume Guides</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/ats-tips" className="flex w-full">ATS Tips</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/career-advice" className="flex w-full">Career Advice</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                {!isActive('/builder') && (
                  <Button asChild variant="default" size="sm">
                    <Link to="/builder">My Resumes</Link>
                  </Button>
                )}
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="rounded-full w-10 h-10 p-0">
                      <Avatar>
                        <AvatarImage src="/avatars/user.png" alt="User" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <div className="flex items-center justify-start gap-2 p-2">
                      <div className="rounded-full bg-indigo-100 p-1">
                        <Crown className="h-4 w-4 text-indigo-600" />
                      </div>
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium">Premium Plan</p>
                        <p className="text-xs text-muted-foreground">Active until Dec 2023</p>
                      </div>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link to="/profile" className="flex items-center w-full">
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link to="/settings" className="flex items-center w-full">
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Button onClick={handleLogin} variant="ghost" size="sm">
                  Log in
                </Button>
                <Button asChild size="sm">
                  <Link to="/signup">Sign up</Link>
                </Button>
              </div>
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
                    <Link to="/guides" className="text-sm font-medium text-gray-700">
                      Resume Guides
                    </Link>
                    <Link to="/ats-tips" className="text-sm font-medium text-gray-700">
                      ATS Tips
                    </Link>
                    <Link to="/career-advice" className="text-sm font-medium text-gray-700">
                      Career Advice
                    </Link>
                  </nav>
                  
                  <div className="flex flex-col gap-2 pt-4 border-t">
                    {isAuthenticated ? (
                      <>
                        <Button asChild>
                          <Link to="/builder">My Resumes</Link>
                        </Button>
                        <Button variant="outline" onClick={handleLogout}>
                          Log out
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button onClick={handleLogin} variant="outline">
                          Log in
                        </Button>
                        <Button asChild>
                          <Link to="/signup">Sign up</Link>
                        </Button>
                      </>
                    )}
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
