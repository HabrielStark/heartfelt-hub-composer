
import React, { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import DonationTable from '@/components/admin/DonationTable';
import FundraiserForm from '@/components/admin/FundraiserForm';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from 'lucide-react';
import { Card } from "@/components/ui/card";

const Donations = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  
  // Sample data
  const donations = [
    {
      id: '1',
      donor: 'John Smith',
      email: 'john.smith@example.com',
      amount: 250,
      date: '2023-06-15',
      campaign: 'Education Fund',
      status: 'completed' as const,
    },
    {
      id: '2',
      donor: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      amount: 500,
      date: '2023-06-14',
      campaign: 'General Support',
      status: 'completed' as const,
    },
    {
      id: '3',
      donor: 'Michael Brown',
      email: 'mbrown@example.com',
      amount: 100,
      date: '2023-06-13',
      campaign: 'Healthcare Initiative',
      status: 'completed' as const,
    },
    {
      id: '4',
      donor: 'Emily Davis',
      email: 'emily.davis@example.com',
      amount: 750,
      date: '2023-06-12',
      campaign: 'Facility Renovation',
      status: 'completed' as const,
    },
    {
      id: '5',
      donor: 'Robert Wilson',
      email: 'rwilson@example.com',
      amount: 1000,
      date: '2023-06-11',
      campaign: 'Education Fund',
      status: 'completed' as const,
    },
    {
      id: '6',
      donor: 'Lisa Anderson',
      email: 'lisa.a@example.com',
      amount: 150,
      date: '2023-06-10',
      campaign: 'Healthcare Initiative',
      status: 'pending' as const,
    },
    {
      id: '7',
      donor: 'David Martinez',
      email: 'dmartinez@example.com',
      amount: 300,
      date: '2023-06-09',
      campaign: 'General Support',
      status: 'completed' as const,
    },
    {
      id: '8',
      donor: 'Jennifer Lee',
      email: 'jlee@example.com',
      amount: 75,
      date: '2023-06-08',
      campaign: 'Facility Renovation',
      status: 'failed' as const,
    },
  ];
  
  const fundraisers = [
    {
      id: '1',
      name: 'Educational Support Fund',
      description: 'Help provide school supplies, books, and educational resources for children to thrive academically.',
      goal: 25000,
      raised: 18750,
      startDate: '2023-01-15',
      endDate: '2023-12-31',
      isActive: true,
      featuredImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2309&q=80'
    },
    {
      id: '2',
      name: 'Healthcare Initiative',
      description: 'Support essential healthcare services, regular check-ups, and medications for children in our care.',
      goal: 15000,
      raised: 9200,
      startDate: '2023-02-01',
      endDate: '2023-11-30',
      isActive: true,
      featuredImage: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2352&q=80'
    },
    {
      id: '3',
      name: 'Facility Renovation',
      description: 'Help us renovate our main building to create a safer, more comfortable environment for the children.',
      goal: 50000,
      raised: 32500,
      startDate: '2023-03-15',
      endDate: '2023-10-31',
      isActive: true,
      featuredImage: 'https://images.unsplash.com/photo-1531956003775-1b2dae38d5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
    },
  ];
  
  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold font-playfair">Donations Management</h1>
        <p className="text-gray-600">Manage donations and fundraising campaigns.</p>
      </div>
      
      <Tabs defaultValue="donations">
        <div className="flex justify-between items-center mb-6">
          <TabsList>
            <TabsTrigger value="donations">Donations</TabsTrigger>
            <TabsTrigger value="fundraisers">Fundraisers</TabsTrigger>
          </TabsList>
          
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary-600">
                <Plus className="h-4 w-4 mr-2" />
                New Fundraiser
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <FundraiserForm 
                onClose={() => setDialogOpen(false)}
              />
            </DialogContent>
          </Dialog>
        </div>
        
        <TabsContent value="donations" className="mt-0">
          <DonationTable donations={donations} />
        </TabsContent>
        
        <TabsContent value="fundraisers" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fundraisers.map((fundraiser) => (
              <Card key={fundraiser.id} className="overflow-hidden">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={fundraiser.featuredImage} 
                    alt={fundraiser.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{fundraiser.name}</h3>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-700">
                      Raised: ${fundraiser.raised.toLocaleString()}
                    </span>
                    <span className="text-gray-500">
                      Goal: ${fundraiser.goal.toLocaleString()}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${Math.min((fundraiser.raised / fundraiser.goal) * 100, 100)}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      fundraiser.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {fundraiser.isActive ? 'Active' : 'Inactive'}
                    </span>
                    <div className="space-x-2">
                      <Button variant="ghost" size="sm">Edit</Button>
                      <Button variant="ghost" size="sm">View</Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </AdminLayout>
  );
};

export default Donations;
