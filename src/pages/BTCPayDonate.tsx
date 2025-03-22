import React from 'react';
import { useSearchParams } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import PageBanner from '@/components/ui/PageBanner';
import BTCPayButton from '@/components/donations/BTCPayButton';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bitcoin } from 'lucide-react';

const BTCPayDonatePage = () => {
  const { translate, language } = useLanguage();
  const [searchParams] = useSearchParams();
  const amount = searchParams.get('amount') || '';
  const success = searchParams.get('success') === 'true';
  
  return (
    <PageLayout>
      <PageBanner 
        title={language === 'en' ? "Donate with Bitcoin" : translate('donatePage.cryptoDonation')}
        subtitle={language === 'en' ? "Support us with cryptocurrency" : translate('donatePage.subtitle')}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {success ? (
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 mr-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                  {language === 'en' ? "Thank You for Your Donation!" : translate('donatePage.donationSuccessful')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700">
                  {language === 'en' 
                    ? "Your donation has been successfully processed. Thank you for your support!" 
                    : `${translate('donatePage.thankYouForYour')} ${translate('donatePage.donation')}!`}
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-orange-100 mb-6">
                <Bitcoin className="h-10 w-10 text-orange-500" />
              </div>
              
              <h2 className="text-3xl font-playfair font-bold mb-4">
                {language === 'en' ? "Donate with Cryptocurrency" : translate('donatePage.cryptoDonation')}
              </h2>
              
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                {language === 'en' 
                  ? "Support our mission with Bitcoin, Lightning Network, or other cryptocurrencies. All donations go directly to our projects." 
                  : translate('donatePage.taxDeductible')}
              </p>
              
              <div className="flex justify-center mb-8">
                <BTCPayButton 
                  price={amount} 
                  currency="USD" 
                  buttonText={language === 'en' ? "Donate Now" : translate('donatePage.donateNow')}
                  checkoutDesc={language === 'en' ? "Support our mission" : translate('donatePage.supportOurMission')}
                  payButtonText={language === 'en' ? "Pay with Crypto" : translate('donatePage.payWithCrypto')}
                />
              </div>
              
              <p className="text-sm text-gray-500 mt-8">
                {language === 'en' 
                  ? "Secure payments powered by BTCPay Server - Self-hosted, open-source cryptocurrency payment processor." 
                  : "Безопасные платежи на базе BTCPay Server - Самостоятельно размещенный процессор криптовалютных платежей с открытым исходным кодом."}
              </p>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default BTCPayDonatePage; 