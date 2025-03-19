
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useToast } from '@/hooks/use-toast';

interface FundraiserFormProps {
  initialData?: {
    name: string;
    description: string;
    goal: number;
    startDate: string;
    endDate: string;
    isActive: boolean;
    featuredImage: string;
  };
  onClose: () => void;
}

const FundraiserForm: React.FC<FundraiserFormProps> = ({ initialData, onClose }) => {
  const { toast } = useToast();
  const isEditing = !!initialData;
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: isEditing ? "Fundraiser Updated" : "Fundraiser Created",
      description: isEditing 
        ? "The fundraiser has been successfully updated."
        : "The new fundraiser has been successfully created.",
    });
    onClose();
  };
  
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6 font-playfair">
        {isEditing ? 'Edit Fundraiser' : 'Create New Fundraiser'}
      </h2>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Fundraiser Name</Label>
            <Input 
              id="name" 
              defaultValue={initialData?.name} 
              required 
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea 
              id="description" 
              defaultValue={initialData?.description} 
              required 
              className="mt-1"
              rows={4}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="goal">Goal Amount ($)</Label>
              <Input 
                id="goal" 
                type="number" 
                defaultValue={initialData?.goal} 
                required 
                min="1"
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="featured-image">Featured Image URL</Label>
              <Input 
                id="featured-image" 
                defaultValue={initialData?.featuredImage} 
                className="mt-1"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="start-date">Start Date</Label>
              <Input 
                id="start-date" 
                type="date" 
                defaultValue={initialData?.startDate} 
                required 
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="end-date">End Date</Label>
              <Input 
                id="end-date" 
                type="date" 
                defaultValue={initialData?.endDate} 
                className="mt-1"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Switch 
              id="active" 
              defaultChecked={initialData?.isActive ?? true}
            />
            <Label htmlFor="active">Active Fundraiser</Label>
          </div>
        </div>
        
        <div className="flex justify-end space-x-4 mt-6">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" className="bg-primary hover:bg-primary-600">
            {isEditing ? 'Update Fundraiser' : 'Create Fundraiser'}
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default FundraiserForm;
