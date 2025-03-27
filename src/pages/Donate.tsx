import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import PageBanner from '@/components/ui/PageBanner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from '@/components/ui/card';
import CryptoDonationForm from '@/components/donations/CryptoDonationForm';
import DonationForm from '@/components/donations/DonationForm';
import { useLanguage } from '@/contexts/LanguageContext';
import { Bitcoin, CreditCard, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const DonatePage = () => {
  const { translate, language } = useLanguage();
  const [donationMethod, setDonationMethod] = useState('card');

  return (
    <PageLayout>
      <PageBanner 
        title={translate('donatePage.title')}
        subtitle={translate('donatePage.subtitle')}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold mb-4">
              {translate('donatePage.chooseMethod')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {translate('donatePage.taxDeductible')}
            </p>
          </div>

          <Tabs 
            defaultValue="card" 
            className="w-full" 
            value={donationMethod} 
            onValueChange={setDonationMethod}
          >
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 w-full max-w-md">
                <TabsTrigger value="card" className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  <span>{translate('donatePage.creditCard')}</span>
                </TabsTrigger>
                <TabsTrigger value="crypto" className="flex items-center gap-2">
                  <Bitcoin className="h-4 w-4" />
                  <span>{translate('donatePage.cryptocurrency')}</span>
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="card">
              <Card className="p-8 bg-gradient-to-br from-white to-primary-50">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center justify-center z-10 bg-yellow-50/90 backdrop-blur-sm rounded-md">
                    <div className="text-center px-8 py-12 bg-yellow-100 rounded-xl border-2 border-yellow-200 shadow-lg max-w-md">
                      <AlertCircle className="h-16 w-16 text-yellow-600 mx-auto mb-4" />
                      <h3 className="text-3xl font-bold text-yellow-800 mb-4">{translate('donatePage.comingSoon')}</h3>
                      <p className="text-yellow-700 text-lg">
                        {translate('donatePage.cardPaymentComingSoon')}
                      </p>
                    </div>
                  </div>
                  
                  <DonationForm />
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="crypto">
              <Card className="p-8 bg-gradient-to-br from-white to-orange-50">
                <CryptoDonationForm />
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-playfair font-semibold mb-4">
              {translate('donatePage.otherWays')}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">{translate('donatePage.corporateMatching')}</h4>
                <p className="text-gray-600">
                  {translate('donatePage.corporateMatchingDescription')}
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">{translate('donatePage.legacyGiving')}</h4>
                <p className="text-gray-600">
                  {translate('donatePage.legacyGivingDescription')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default DonatePage; 