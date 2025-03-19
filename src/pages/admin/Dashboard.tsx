
import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import DashboardCard from '@/components/admin/DashboardCard';
import { Card } from "@/components/ui/card";
import { 
  DollarSign, 
  Users, 
  Heart, 
  TrendingUp,
  BarChart3 
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';

const Dashboard = () => {
  const monthlyData = [
    { name: 'Jan', donations: 12000, expenses: 10000 },
    { name: 'Feb', donations: 15000, expenses: 12000 },
    { name: 'Mar', donations: 18000, expenses: 14000 },
    { name: 'Apr', donations: 16000, expenses: 13500 },
    { name: 'May', donations: 21000, expenses: 15000 },
    { name: 'Jun', donations: 19000, expenses: 16000 },
  ];

  const campaignData = [
    { name: 'Education', amount: 45000 },
    { name: 'Healthcare', amount: 30000 },
    { name: 'Food', amount: 35000 },
    { name: 'Facility', amount: 25000 },
    { name: 'Recreation', amount: 12000 },
  ];

  const recentDonations = [
    { donor: 'John Smith', amount: 250, date: '2023-06-15', campaign: 'Education Fund' },
    { donor: 'Sarah Johnson', amount: 500, date: '2023-06-14', campaign: 'General Support' },
    { donor: 'Michael Brown', amount: 100, date: '2023-06-13', campaign: 'Healthcare Initiative' },
    { donor: 'Emily Davis', amount: 750, date: '2023-06-12', campaign: 'Facility Renovation' },
    { donor: 'Robert Wilson', amount: 1000, date: '2023-06-11', campaign: 'Education Fund' },
  ];

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold font-playfair">Dashboard</h1>
        <p className="text-gray-600">Welcome to the admin dashboard. Here's an overview of your organization.</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard 
          title="Total Donations" 
          value="$262,500" 
          icon={<DollarSign className="h-5 w-5" />}
          trend={{ value: 12, isPositive: true }}
          footer="Compared to last month"
          color="primary"
        />
        
        <DashboardCard 
          title="Active Fundraisers" 
          value="8" 
          icon={<Heart className="h-5 w-5" />}
          color="secondary"
        />
        
        <DashboardCard 
          title="Donors" 
          value="256" 
          icon={<Users className="h-5 w-5" />}
          trend={{ value: 5, isPositive: true }}
          footer="New donors this month"
          color="success"
        />
        
        <DashboardCard 
          title="Monthly Goal" 
          value="75%" 
          icon={<TrendingUp className="h-5 w-5" />}
          footer="$75,000 of $100,000"
          color="warning"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center space-x-2 mb-6">
            <BarChart3 className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold font-playfair">Monthly Overview</h2>
          </div>
          
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={monthlyData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="donations" name="Donations" fill="#9b87f5" />
                <Bar dataKey="expenses" name="Expenses" fill="#7E69AB" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center space-x-2 mb-6">
            <BarChart3 className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold font-playfair">Campaign Performance</h2>
          </div>
          
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={[
                  { name: 'Week 1', education: 5000, healthcare: 4000, facility: 3000 },
                  { name: 'Week 2', education: 7000, healthcare: 5500, facility: 3200 },
                  { name: 'Week 3', education: 9000, healthcare: 6800, facility: 4500 },
                  { name: 'Week 4', education: 12000, healthcare: 8000, facility: 6000 },
                ]}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="education" name="Education Fund" stroke="#9b87f5" />
                <Line type="monotone" dataKey="healthcare" name="Healthcare Initiative" stroke="#7E69AB" />
                <Line type="monotone" dataKey="facility" name="Facility Renovation" stroke="#6E59A5" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Recent Donations */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <DollarSign className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold font-playfair">Recent Donations</h2>
          </div>
          <a href="/admin/donations" className="text-primary hover:underline text-sm font-medium">
            View All
          </a>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-3 py-2 text-left text-sm font-medium text-gray-500">Donor</th>
                <th className="px-3 py-2 text-left text-sm font-medium text-gray-500">Amount</th>
                <th className="px-3 py-2 text-left text-sm font-medium text-gray-500">Date</th>
                <th className="px-3 py-2 text-left text-sm font-medium text-gray-500">Campaign</th>
              </tr>
            </thead>
            <tbody>
              {recentDonations.map((donation, index) => (
                <tr 
                  key={index} 
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-3 py-3 text-sm">{donation.donor}</td>
                  <td className="px-3 py-3 text-sm font-medium">${donation.amount}</td>
                  <td className="px-3 py-3 text-sm text-gray-500">
                    {new Date(donation.date).toLocaleDateString()}
                  </td>
                  <td className="px-3 py-3 text-sm">{donation.campaign}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </AdminLayout>
  );
};

export default Dashboard;
