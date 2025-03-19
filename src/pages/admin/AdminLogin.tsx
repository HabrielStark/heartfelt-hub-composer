
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Eye, EyeOff, Heart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AdminLogin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, authenticate with a backend
    toast({
      title: "Login Successful",
      description: "Welcome to the admin dashboard.",
    });
    
    navigate('/admin');
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white p-4">
      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-2">
            <Heart className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold font-playfair">HeartfeltHome Admin</h1>
          <p className="text-gray-600 mt-2">Sign in to manage the children's home website</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@heartfelthome.org"
                required
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative mt-1">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  required
                  className="pr-10"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            
            <div className="text-right">
              <a href="#forgot-password" className="text-sm text-primary hover:underline">
                Forgot password?
              </a>
            </div>
            
            <Button type="submit" className="w-full bg-primary hover:bg-primary-600">
              Sign In
            </Button>
          </div>
        </form>
        
        <div className="mt-6 text-center">
          <a href="/" className="text-sm text-gray-600 hover:text-primary">
            Return to Website
          </a>
        </div>
      </Card>
    </div>
  );
};

export default AdminLogin;
