import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Mail, Link as LinkIcon, Share2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface ShareDialogProps {
  onClose: () => void;
}

export const ShareDialog: React.FC<ShareDialogProps> = ({ onClose }) => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [shareLink] = useState("https://resumespark.io/shared/r2d39fk");
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareLink);
    toast({
      title: "Link copied",
      description: "Share link has been copied to clipboard"
    });
  };
  
  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    // This would be an API call in a real app
    console.log(`Sending share link to ${email}`);
    toast({
      title: "Email sent",
      description: `Share link has been sent to ${email}`
    });
    setEmail("");
  };
  
  return (
    <div className="space-y-4">
      <Tabs defaultValue="link">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="link">Share Link</TabsTrigger>
          <TabsTrigger value="email">Email</TabsTrigger>
        </TabsList>
        
        <TabsContent value="link" className="space-y-4">
          <div className="flex mt-2">
            <Input 
              value={shareLink} 
              readOnly 
              className="flex-1 rounded-r-none"
            />
            <Button 
              onClick={handleCopyLink} 
              className="rounded-l-none"
              type="button"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex flex-col space-y-2 pt-2">
            <p className="text-sm text-gray-500">
              Anyone with this link will be able to view your resume.
            </p>
          </div>
          
          <div className="flex gap-4 mt-4">
            <Button className="flex-1 gap-2" onClick={handleCopyLink}>
              <LinkIcon className="h-4 w-4" />
              Copy Link
            </Button>
            <Button variant="outline" className="flex-1 gap-2">
              <Share2 className="h-4 w-4" />
              More Options
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="email" className="space-y-4">
          <form onSubmit={handleSendEmail}>
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="colleague@example.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="flex gap-4 mt-4">
              <Button type="submit" className="flex-1 gap-2">
                <Mail className="h-4 w-4" />
                Send Email
              </Button>
              <Button onClick={onClose} variant="outline" className="flex-1">
                Cancel
              </Button>
            </div>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ShareDialog; 