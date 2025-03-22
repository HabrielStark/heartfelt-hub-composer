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
        title={language === 'en' ? "Donate" : translate('donatePage.title')}
        subtitle={language === 'en' ? "Support our mission with your contribution" : translate('donatePage.subtitle')}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold mb-4">
              {language === 'en' ? "Choose Your Donation Method" : translate('donatePage.chooseMethod')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'en' ? 
                "Your generous contribution helps us continue our mission to support those in need. All donations are tax-deductible." 
                : translate('donatePage.taxDeductible')}
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
                  <span>{language === 'en' ? "Credit Card" : translate('donatePage.creditCard')}</span>
                </TabsTrigger>
                <TabsTrigger value="crypto" className="flex items-center gap-2">
                  <Bitcoin className="h-4 w-4" />
                  <span>{language === 'en' ? "Cryptocurrency" : translate('donatePage.cryptocurrency')}</span>
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="card">
              <Card className="p-8 bg-gradient-to-br from-white to-primary-50">
                {language === 'en' ? (
                  <Alert className="mb-6 bg-yellow-50 border-yellow-200">
                    <AlertCircle className="h-4 w-4 text-yellow-600" />
                    <AlertTitle className="text-yellow-600">Coming Soon</AlertTitle>
                    <AlertDescription className="text-yellow-700">
                      Credit card payments will be available soon. We're integrating with Stripe to provide secure payment processing.
                    </AlertDescription>
                  </Alert>
                ) : (
                  <Alert className="mb-6 bg-yellow-50 border-yellow-200">
                    <AlertCircle className="h-4 w-4 text-yellow-600" />
                    <AlertTitle className="text-yellow-600">{translate('donatePage.comingSoon')}</AlertTitle>
                    <AlertDescription className="text-yellow-700">
                      {translate('donatePage.cardPaymentComingSoon')}
                    </AlertDescription>
                  </Alert>
                )}
                <DonationForm />
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
              {language === 'en' ? "Other Ways to Support Us" : translate('donatePage.otherWays')}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">{language === 'en' ? "Corporate Matching" : translate('donatePage.corporateMatching')}</h4>
                <p className="text-gray-600">
                  {language === 'en' ? 
                    "Many employers match donations made by their employees. Check with your company to see if they offer a matching gift program." 
                    : translate('donatePage.corporateMatchingDescription')}
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">{language === 'en' ? "Legacy Giving" : translate('donatePage.legacyGiving')}</h4>
                <p className="text-gray-600">
                  {language === 'en' ? 
                    "Consider including us in your estate planning to create a lasting impact on future generations." 
                    : translate('donatePage.legacyGivingDescription')}
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