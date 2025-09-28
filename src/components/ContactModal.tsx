import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { VulnerableDB } from "@/lib/database";
import { useToast } from "@/hooks/use-toast";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Intentional XSS vulnerability - no input sanitization
    try {
      const message = VulnerableDB.saveContactMessage(formData);
      
      toast({
        title: "Message Sent!",
        description: "We'll get back to you soon.",
      });
      
      // Intentional XSS - displaying unsanitized content
      console.log("Message received:", formData.message);
      
      onClose();
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="contact-name">Name</Label>
            <Input
              id="contact-name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Your name"
            />
          </div>
          <div>
            <Label htmlFor="contact-email">Email</Label>
            <Input
              id="contact-email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="Your email"
            />
          </div>
          <div>
            <Label htmlFor="contact-message">Message</Label>
            <Textarea
              id="contact-message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="How can we help you?"
              rows={4}
            />
          </div>
          <div className="flex gap-2">
            <Button type="submit" className="flex-1">
              Send Message
            </Button>
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};