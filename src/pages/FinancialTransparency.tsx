import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import PageBanner from '@/components/ui/PageBanner';
import SectionHeading from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/card';
import { FileText, Download, PieChart, BarChart3, LineChart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
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
  const { translate } = useLanguage();
  
  const reports = [
    { name: translate('financial.documents.annualReport2023'), date: "Jan 15, 2024", size: "2.4 MB", url: "#" },
    { name: translate('financial.documents.q4Statement'), date: "Jan 10, 2024", size: "1.1 MB", url: "#" },
    { name: translate('financial.documents.auditReport'), date: "Feb 1, 2024", size: "3.2 MB", url: "#" },
    { name: translate('financial.documents.annualReport2022'), date: "Jan 20, 2023", size: "2.1 MB", url: "#" },
    { name: translate('financial.documents.impactAssessment'), date: "Dec 5, 2023", size: "4.5 MB", url: "#" },
    { name: translate('financial.documents.strategicPlan'), date: "Mar 10, 2022", size: "1.8 MB", url: "#" }
  ];

  const expenseData = [
    { name: translate('financial.expenses.childCare'), value: 65 },
    { name: translate('financial.expenses.education'), value: 15 },
    { name: translate('financial.expenses.healthcare'), value: 10 },
    { name: translate('financial.expenses.administration'), value: 7 },
    { name: translate('financial.expenses.fundraising'), value: 3 }
  ];

  const COLORS = ['#9b87f5', '#7E69AB', '#6E59A5', '#D6BCFA', '#E5DEFF'];

  const fundRaisingData = [
    { name: translate('months.jan'), donations: 12000, expenses: 10000 },
    { name: translate('months.feb'), donations: 15000, expenses: 12000 },
    { name: translate('months.mar'), donations: 18000, expenses: 14000 },
    { name: translate('months.apr'), donations: 16000, expenses: 13500 },
    { name: translate('months.may'), donations: 21000, expenses: 15000 },
    { name: translate('months.jun'), donations: 19000, expenses: 16000 },
    { name: translate('months.jul'), donations: 23000, expenses: 17500 },
    { name: translate('months.aug'), donations: 25000, expenses: 18000 },
    { name: translate('months.sep'), donations: 22000, expenses: 17000 },
    { name: translate('months.oct'), donations: 26000, expenses: 19000 },
    { name: translate('months.nov'), donations: 30000, expenses: 22000 },
    { name: translate('months.dec'), donations: 35000, expenses: 25000 }
  ];

  const programExpenditureData = [
    { name: translate('financial.programs.food'), amount: 35000 },
    { name: translate('financial.programs.education'), amount: 45000 },
    { name: translate('financial.programs.healthcare'), amount: 30000 },
    { name: translate('financial.programs.clothing'), amount: 15000 },
    { name: translate('financial.programs.recreation'), amount: 12000 },
    { name: translate('financial.programs.utilities'), amount: 20000 },
    { name: translate('financial.programs.facility'), amount: 25000 }
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
        title={translate('financial.title')}
        subtitle={translate('financial.subtitle')}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title={translate('financial.overview.title')}
            subtitle={translate('financial.overview.subtitle')}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            <Card className="p-6 col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <PieChart className="h-6 w-6 text-primary" />
                <h3 className="font-playfair font-semibold text-xl">{translate('financial.overview.fundAllocation')}</h3>
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
                {translate('financial.overview.priorityText')}
              </p>
            </Card>
            
            <Card className="p-6 col-span-1 lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
                <h3 className="font-playfair font-semibold text-xl">{translate('financial.overview.incomeVsExpenses')}</h3>
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
                    <Bar dataKey="donations" name={translate('financial.overview.donations')} fill="#9b87f5" />
                    <Bar dataKey="expenses" name={translate('financial.overview.expenses')} fill="#6E59A5" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <p className="text-gray-600 text-sm mt-4">
                {translate('financial.overview.monthlyBreakdown')}
              </p>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
                <h3 className="font-playfair font-semibold text-xl">{translate('financial.overview.programExpenditure')}</h3>
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
                    <Bar dataKey="amount" name={translate('financial.overview.amountUSD')} fill="#7E69AB" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <p className="text-gray-600 text-sm mt-4">
                {translate('financial.overview.programBreakdown')}
              </p>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <LineChart className="h-6 w-6 text-primary" />
                <h3 className="font-playfair font-semibold text-xl">{translate('financial.overview.growthOverTime')}</h3>
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
                    <Line type="monotone" dataKey="children" name={translate('financial.overview.childrenSupported')} stroke="#9b87f5" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="donors" name={translate('financial.overview.activeDonors')} stroke="#6E59A5" />
                  </RechartsLineChart>
                </ResponsiveContainer>
              </div>
              
              <p className="text-gray-600 text-sm mt-4">
                {translate('financial.overview.growthText')}
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title={translate('financial.reports.title')}
            subtitle={translate('financial.reports.subtitle')}
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
            title={translate("financial.fundraisingPrinciples.title")} 
            subtitle={translate("financial.fundraisingPrinciples.subtitle")}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="p-6 bg-gradient-to-br from-white to-primary-50">
              <h3 className="font-playfair font-semibold text-xl mb-4 text-primary">
                {translate("financial.fundraisingPrinciples.transparency.title")}
              </h3>
              <p className="text-gray-700">
                {translate("financial.fundraisingPrinciples.transparency.description")}
              </p>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-white to-pastel-blue">
              <h3 className="font-playfair font-semibold text-xl mb-4 text-primary">
                {translate("financial.fundraisingPrinciples.stewardship.title")}
              </h3>
              <p className="text-gray-700">
                {translate("financial.fundraisingPrinciples.stewardship.description")}
              </p>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-white to-pastel-green">
              <h3 className="font-playfair font-semibold text-xl mb-4 text-primary">
                {translate("financial.fundraisingPrinciples.accountability.title")}
              </h3>
              <p className="text-gray-700">
                {translate("financial.fundraisingPrinciples.accountability.description")}
              </p>
            </Card>
          </div>
          
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="font-playfair font-semibold text-xl mb-4">
              {translate("financial.fundraisingPrinciples.commitment.title")}
            </h3>
            <p className="text-gray-700 mb-4">
              {translate("financial.fundraisingPrinciples.commitment.description")}
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
