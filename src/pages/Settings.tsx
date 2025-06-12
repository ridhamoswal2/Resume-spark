import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";

const Settings = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("account");
  
  // Form states
  const [profileData, setProfileData] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    bio: "Software engineer with 5+ years of experience in frontend development."
  });
  
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  
  const [notificationSettings, setNotificationSettings] = useState({
    emailUpdates: true,
    resumeTips: true,
    newFeatures: true,
    marketing: false
  });
  
  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle profile update logic
    toast({
      title: "Profile updated",
      description: "Your profile information has been updated successfully."
    });
  };
  
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Password validation would go here
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure both passwords match.",
        variant: "destructive"
      });
      return;
    }
    
    // Handle password update logic
    toast({
      title: "Password updated",
      description: "Your password has been changed successfully."
    });
    
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
  };
  
  const handleNotificationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle notification settings update
    toast({
      title: "Notification preferences updated",
      description: "Your notification settings have been saved."
    });
  };
  
  const handleDeleteAccount = () => {
    // In a real app, this would show a confirmation dialog
    console.log("Delete account requested");
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="container py-8 flex-1">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Account Settings</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-4">
                  <div className="flex flex-col items-center space-y-4 py-6">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>AJ</AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                      <h3 className="font-medium">{profileData.name}</h3>
                      <p className="text-sm text-gray-500">{profileData.email}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Change avatar
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <div className="hidden md:block">
                <Tabs 
                  orientation="vertical" 
                  value={activeTab} 
                  onValueChange={setActiveTab}
                  className="w-full"
                >
                  <TabsList className="flex flex-col items-start w-full h-auto bg-transparent space-y-1">
                    <TabsTrigger 
                      value="account" 
                      className="w-full justify-start px-3 data-[state=active]:bg-gray-100"
                    >
                      Account
                    </TabsTrigger>
                    <TabsTrigger 
                      value="security" 
                      className="w-full justify-start px-3 data-[state=active]:bg-gray-100"
                    >
                      Security
                    </TabsTrigger>
                    <TabsTrigger 
                      value="notifications" 
                      className="w-full justify-start px-3 data-[state=active]:bg-gray-100"
                    >
                      Notifications
                    </TabsTrigger>
                    <TabsTrigger 
                      value="billing" 
                      className="w-full justify-start px-3 data-[state=active]:bg-gray-100"
                    >
                      Billing
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              
              <div className="md:hidden">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="security">Security</TabsTrigger>
                    <TabsTrigger value="notifications">Notifications</TabsTrigger>
                    <TabsTrigger value="billing">Billing</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
            
            <div>
              <TabsContent value="account" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Information</CardTitle>
                    <CardDescription>
                      Update your account details and public profile information.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleProfileSubmit} className="space-y-6">
                      <div className="space-y-4">
                        <div className="grid gap-2">
                          <Label htmlFor="name">Name</Label>
                          <Input 
                            id="name" 
                            value={profileData.name}
                            onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                            required
                          />
                        </div>
                        
                        <div className="grid gap-2">
                          <Label htmlFor="email">Email</Label>
                          <Input 
                            id="email" 
                            type="email" 
                            value={profileData.email}
                            onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                            required
                          />
                        </div>
                        
                        <div className="grid gap-2">
                          <Label htmlFor="bio">Bio</Label>
                          <Input 
                            id="bio" 
                            value={profileData.bio}
                            onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                          />
                          <p className="text-sm text-gray-500">
                            This will be displayed on your public profile.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button type="submit">Save changes</Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
                
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Delete Account</CardTitle>
                    <CardDescription>
                      Permanently delete your account and all of your data.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 mb-4">
                      Once you delete your account, there is no going back. All information associated with your account will be permanently deleted.
                    </p>
                    <Button variant="destructive" onClick={handleDeleteAccount}>
                      Delete Account
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="security" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Password</CardTitle>
                    <CardDescription>
                      Update your password to keep your account secure.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handlePasswordSubmit} className="space-y-6">
                      <div className="space-y-4">
                        <div className="grid gap-2">
                          <Label htmlFor="current-password">Current Password</Label>
                          <Input 
                            id="current-password" 
                            type="password" 
                            value={passwordData.currentPassword}
                            onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                            required
                          />
                        </div>
                        
                        <div className="grid gap-2">
                          <Label htmlFor="new-password">New Password</Label>
                          <Input 
                            id="new-password" 
                            type="password" 
                            value={passwordData.newPassword}
                            onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                            required
                          />
                        </div>
                        
                        <div className="grid gap-2">
                          <Label htmlFor="confirm-password">Confirm New Password</Label>
                          <Input 
                            id="confirm-password" 
                            type="password" 
                            value={passwordData.confirmPassword}
                            onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button type="submit">Change Password</Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="notifications" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Settings</CardTitle>
                    <CardDescription>
                      Manage how and when you'll be notified.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleNotificationSubmit}>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="email-updates">Email Updates</Label>
                            <p className="text-sm text-gray-500">
                              Receive updates about your account activity.
                            </p>
                          </div>
                          <Switch 
                            id="email-updates" 
                            checked={notificationSettings.emailUpdates}
                            onCheckedChange={(checked) => 
                              setNotificationSettings({...notificationSettings, emailUpdates: checked})
                            }
                          />
                        </div>
                        
                        <Separator />
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="resume-tips">Resume Tips</Label>
                            <p className="text-sm text-gray-500">
                              Get periodic tips to improve your resume.
                            </p>
                          </div>
                          <Switch 
                            id="resume-tips" 
                            checked={notificationSettings.resumeTips}
                            onCheckedChange={(checked) => 
                              setNotificationSettings({...notificationSettings, resumeTips: checked})
                            }
                          />
                        </div>
                        
                        <Separator />
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="new-features">New Features</Label>
                            <p className="text-sm text-gray-500">
                              Be the first to know about new features.
                            </p>
                          </div>
                          <Switch 
                            id="new-features" 
                            checked={notificationSettings.newFeatures}
                            onCheckedChange={(checked) => 
                              setNotificationSettings({...notificationSettings, newFeatures: checked})
                            }
                          />
                        </div>
                        
                        <Separator />
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="marketing">Marketing Emails</Label>
                            <p className="text-sm text-gray-500">
                              Receive promotional offers and updates.
                            </p>
                          </div>
                          <Switch 
                            id="marketing" 
                            checked={notificationSettings.marketing}
                            onCheckedChange={(checked) => 
                              setNotificationSettings({...notificationSettings, marketing: checked})
                            }
                          />
                        </div>
                      </div>
                      
                      <div className="flex justify-end mt-6">
                        <Button type="submit">Save preferences</Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="billing" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Billing & Subscription</CardTitle>
                    <CardDescription>
                      Manage your subscription and billing information.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">Current Plan</h3>
                          <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200">Pro</Badge>
                        </div>
                        <p className="text-sm text-gray-500 mb-4">
                          Your subscription renews on October 12, 2023
                        </p>
                        <div className="flex gap-4">
                          <Button variant="outline" size="sm">Change Plan</Button>
                          <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
                            Cancel Subscription
                          </Button>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-medium mb-2">Payment Method</h3>
                        <div className="flex justify-between items-center p-3 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="bg-gray-200 rounded p-1">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="4" fill="#E5E7EB" />
                                <path d="M16 8H8V16H16V8Z" fill="#9CA3AF" />
                              </svg>
                            </div>
                            <div>
                              <p className="font-medium">Visa ending in 4242</p>
                              <p className="text-sm text-gray-500">Expires 04/2025</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">Edit</Button>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-medium mb-2">Billing History</h3>
                        <div className="border rounded-lg overflow-hidden">
                          <table className="w-full">
                            <thead className="bg-gray-50 text-xs text-gray-500 uppercase">
                              <tr>
                                <th className="px-4 py-2 text-left">Date</th>
                                <th className="px-4 py-2 text-left">Amount</th>
                                <th className="px-4 py-2 text-left">Status</th>
                                <th className="px-4 py-2 text-right">Invoice</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y">
                              <tr className="text-sm">
                                <td className="px-4 py-3">Sep 12, 2023</td>
                                <td className="px-4 py-3">$12.00</td>
                                <td className="px-4 py-3">
                                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                                    Paid
                                  </Badge>
                                </td>
                                <td className="px-4 py-3 text-right">
                                  <Button variant="ghost" size="sm">
                                    Download
                                  </Button>
                                </td>
                              </tr>
                              <tr className="text-sm">
                                <td className="px-4 py-3">Aug 12, 2023</td>
                                <td className="px-4 py-3">$12.00</td>
                                <td className="px-4 py-3">
                                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                                    Paid
                                  </Badge>
                                </td>
                                <td className="px-4 py-3 text-right">
                                  <Button variant="ghost" size="sm">
                                    Download
                                  </Button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
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

export default Settings; 