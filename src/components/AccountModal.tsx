import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { VulnerableDB } from "@/lib/database";
import { useToast } from "@/hooks/use-toast";

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  accountType: string;
}

export const AccountModal = ({ isOpen, onClose, accountType }: AccountModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    initialDeposit: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Intentional vulnerability - no input validation
    const userData = {
      name: formData.name, // No XSS protection
      email: formData.email, // No email validation
      accountType,
      balance: parseFloat(formData.initialDeposit) || 0,
    };

    try {
      const user = VulnerableDB.createUser(userData);
      
      // Intentional information disclosure
      toast({
        title: "Account Created Successfully!",
        description: `User ID: ${user.id} | Account: ${accountType}`,
      });
      
      // Log sensitive information
      console.log("Account created:", user);
      
      onClose();
      setFormData({ name: '', email: '', initialDeposit: '' });
    } catch (error) {
      // Intentional error disclosure
      toast({
        title: "Error",
        description: `Database error: ${error}`,
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
          <DialogTitle>Open {accountType} Account</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div>
            <Label htmlFor="deposit">Initial Deposit ($)</Label>
            <Input
              id="deposit"
              type="number"
              value={formData.initialDeposit}
              onChange={(e) => handleInputChange('initialDeposit', e.target.value)}
              placeholder="Minimum $25"
              min="25"
            />
          </div>
          <div className="flex gap-2">
            <Button type="submit" className="flex-1">
              Create Account
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