
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import PageBanner from '@/components/ui/PageBanner';
import SectionHeading from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/card';
import { FileText, Download, PieChart, BarChart3, LineChart } from 'lucide-react';
import { 
  PieChart as RechartPie, 
  Pie, 
  Cell, 
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart as RechartsLineChart,
  Line
} from 'recharts';

const FinancialTransparency = () => {
  const reports = [
    { name: "Annual Report 2023", date: "Jan 15, 2024", size: "2.4 MB", url: "#" },
    { name: "Q4 Financial Statement", date: "Jan 10, 2024", size: "1.1 MB", url: "#" },
    { name: "Audit Report 2023", date: "Feb 1, 2024", size: "3.2 MB", url: "#" },
    { name: "Annual Report 2022", date: "Jan 20, 2023", size: "2.1 MB", url: "#" },
    { name: "Impact Assessment", date: "Dec 5, 2023", size: "4.5 MB", url: "#" },
    { name: "Strategic Plan 2022-2025", date: "Mar 10, 2022", size: "1.8 MB", url: "#" }
  ];

  const expenseData = [
    { name: 'Direct Child Care', value: 65 },
    { name: 'Education', value: 15 },
    { name: 'Healthcare', value: 10 },
    { name: 'Administration', value: 7 },
    { name: 'Fundraising', value: 3 }
  ];

  const COLORS = ['#9b87f5', '#7E69AB', '#6E59A5', '#D6BCFA', '#E5DEFF'];

  const fundRaisingData = [
    { name: 'Jan', donations: 12000, expenses: 10000 },
    { name: 'Feb', donations: 15000, expenses: 12000 },
    { name: 'Mar', donations: 18000, expenses: 14000 },
    { name: 'Apr', donations: 16000, expenses: 13500 },
    { name: 'May', donations: 21000, expenses: 15000 },
    { name: 'Jun', donations: 19000, expenses: 16000 },
    { name: 'Jul', donations: 23000, expenses: 17500 },
    { name: 'Aug', donations: 25000, expenses: 18000 },
    { name: 'Sep', donations: 22000, expenses: 17000 },
    { name: 'Oct', donations: 26000, expenses: 19000 },
    { name: 'Nov', donations: 30000, expenses: 22000 },
    { name: 'Dec', donations: 35000, expenses: 25000 }
  ];

  const programExpenditureData = [
    { name: 'Food', amount: 35000 },
    { name: 'Education', amount: 45000 },
    { name: 'Healthcare', amount: 30000 },
    { name: 'Clothing', amount: 15000 },
    { name: 'Recreation', amount: 12000 },
    { name: 'Utilities', amount: 20000 },
    { name: 'Facility', amount: 25000 }
  ];

  const yearlyGrowthData = [
    { year: '2018', children: 45, donors: 120 },
    { year: '2019', children: 60, donors: 180 },
    { year: '2020', children: 75, donors: 250 },
    { year: '2021', children: 90, donors: 320 },
    { year: '2022', children: 110, donors: 380 },
    { year: '2023', children: 125, donors: 450 }
  ];

  return (
    <PageLayout>
      <PageBanner 
        title="Financial Transparency" 
        subtitle="We believe in full transparency about how your donations are used to support our mission."
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Financial Overview" 
            subtitle="Here's how we allocate funds to ensure the maximum impact for the children in our care."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            <Card className="p-6 col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <PieChart className="h-6 w-6 text-primary" />
                <h3 className="font-playfair font-semibold text-xl">Fund Allocation</h3>
              </div>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartPie>
                    <Pie
                      data={expenseData}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {expenseData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </RechartPie>
                </ResponsiveContainer>
              </div>
              
              <p className="text-gray-600 text-sm mt-4">
                We prioritize direct child care, ensuring that the majority of funds directly benefit the children.
              </p>
            </Card>
            
            <Card className="p-6 col-span-1 lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
                <h3 className="font-playfair font-semibold text-xl">Income vs. Expenses (2023)</h3>
              </div>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={fundRaisingData}
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
                    <Bar dataKey="expenses" name="Expenses" fill="#6E59A5" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <p className="text-gray-600 text-sm mt-4">
                Monthly breakdown of donations received and expenses incurred throughout 2023.
              </p>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
                <h3 className="font-playfair font-semibold text-xl">Program Expenditure</h3>
              </div>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={programExpenditureData}
                    layout="vertical"
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Bar dataKey="amount" name="Amount (USD)" fill="#7E69AB" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <p className="text-gray-600 text-sm mt-4">
                Breakdown of how funds are allocated across different program areas.
              </p>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <LineChart className="h-6 w-6 text-primary" />
                <h3 className="font-playfair font-semibold text-xl">Growth Over Time</h3>
              </div>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsLineChart
                    data={yearlyGrowthData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="children" name="Children Supported" stroke="#9b87f5" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="donors" name="Active Donors" stroke="#6E59A5" />
                  </RechartsLineChart>
                </ResponsiveContainer>
              </div>
              
              <p className="text-gray-600 text-sm mt-4">
                Growth in the number of children supported and active donors over the years.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Annual Reports & Documents" 
            subtitle="Download our financial reports and other documents for detailed information about our finances and operations."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {reports.map((report, index) => (
              <a href={report.url} key={index} className="block">
                <Card className="p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="mr-4">
                      <FileText className="h-10 w-10 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">{report.name}</h3>
                      <p className="text-gray-500 text-sm">{report.date}</p>
                      <div className="flex items-center mt-3">
                        <span className="text-gray-600 text-sm mr-3">{report.size}</span>
                        <Download className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Fundraising Principles" 
            subtitle="Our approach to fundraising is guided by these core principles."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="p-6 bg-gradient-to-br from-white to-primary-50">
              <h3 className="font-playfair font-semibold text-xl mb-4 text-primary">Transparency</h3>
              <p className="text-gray-700">
                We are committed to complete financial transparency. All donation information and 
                expense details are regularly published and available to donors and the public.
              </p>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-white to-pastel-blue">
              <h3 className="font-playfair font-semibold text-xl mb-4 text-primary">Stewardship</h3>
              <p className="text-gray-700">
                We carefully manage all resources entrusted to us, ensuring that funds are used 
                effectively to maximize impact for the children in our care.
              </p>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-white to-pastel-green">
              <h3 className="font-playfair font-semibold text-xl mb-4 text-primary">Accountability</h3>
              <p className="text-gray-700">
                We undergo regular external audits and maintain strict internal controls to ensure 
                proper fund management and compliance with all regulations.
              </p>
            </Card>
          </div>
          
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="font-playfair font-semibold text-xl mb-4">Our Commitment to You</h3>
            <p className="text-gray-700 mb-4">
              When you donate to HeartfeltHome, you can trust that your contribution will be used 
              wisely and effectively to improve children's lives. We promise to:
            </p>
            <ul className="space-y-2 list-disc pl-5 text-gray-700">
              <li>Use at least 85% of all donations for direct program expenses</li>
              <li>Provide regular updates on how funds are being used</li>
              <li>Respond promptly to any questions about our finances</li>
              <li>Maintain the highest standards of financial management</li>
              <li>Never sell or share donor information with third parties</li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default FinancialTransparency;
