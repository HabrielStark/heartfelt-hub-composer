import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import PageBanner from '@/components/ui/PageBanner';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Bitcoin, ExternalLink, Heart, CreditCard } from 'lucide-react';
import { BTCPAY_SERVER_URL, BTCPAY_STORE_ID } from '@/lib/btcpay';

const CryptoDonate = () => {
  const { translate, language } = useLanguage();
  const [searchParams] = useSearchParams();
  const amount = searchParams.get('amount') || '';
  const currency = searchParams.get('currency') || 'USD';
  const success = searchParams.get('success') === 'true';
  
  // Функция для перехода к оплате на BTCPay Server
  const handlePaymentClick = () => {
    // Использую правильный URL для API BTCPay Server из скриншота
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = `${BTCPAY_SERVER_URL}/api/v1/invoices`;
    
    // Добавляем необходимые поля
    const storeIdInput = document.createElement('input');
    storeIdInput.type = 'hidden';
    storeIdInput.name = 'storeId';
    storeIdInput.value = BTCPAY_STORE_ID;
    form.appendChild(storeIdInput);
    
    const priceInput = document.createElement('input');
    priceInput.type = 'hidden';
    priceInput.name = 'price';
    priceInput.value = amount;
    form.appendChild(priceInput);
    
    const currencyInput = document.createElement('input');
    currencyInput.type = 'hidden';
    currencyInput.name = 'currency';
    currencyInput.value = currency;
    form.appendChild(currencyInput);
    
    const browserRedirectInput = document.createElement('input');
    browserRedirectInput.type = 'hidden';
    browserRedirectInput.name = 'browserRedirect';
    browserRedirectInput.value = window.location.origin + '/crypto-donate?success=true';
    form.appendChild(browserRedirectInput);
    
    // Добавляем форму в документ
    document.body.appendChild(form);
    
    // Отправляем форму
    form.submit();
    
    // Удаляем форму из документа
    document.body.removeChild(form);
  };

  return (
    <PageLayout>
      <PageBanner 
        title={translate('donatePage.cryptoTitle') || "Cryptocurrency Donation"}
        subtitle={translate('donatePage.cryptoSubtitle') || "Support our mission with digital assets"}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {success ? (
            <Card className="bg-green-50 border-green-200 border-2">
              <CardContent className="pt-6 pb-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                    <Heart className="h-8 w-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-playfair font-bold mb-4 text-green-700">
                    {translate('donatePage.cryptoThankYou') || "Thank You for Your Donation!"}
                  </h2>
                  <p className="text-green-700 mb-4">
                    {translate('donatePage.cryptoThankYouDesc') || "Your contribution helps us continue our mission. Thank you for your support!"}
                  </p>
                  <a href="/" className="text-green-600 hover:underline">
                    {translate('donatePage.returnHome') || "Return to Homepage"}
                  </a>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="flex flex-col items-center">
              <div className="mb-8 relative">
                <img 
                  src="/images/crypto-donation.jpg" 
                  alt="Cryptocurrency donation" 
                  className="rounded-xl shadow-lg max-w-full h-auto"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40 rounded-xl"></div>
              </div>
              
              <div className="text-center max-w-2xl">
                <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-orange-100 mb-6">
                  <Bitcoin className="h-10 w-10 text-orange-500" />
                </div>
                
                <h2 className="text-3xl font-playfair font-bold mb-4">
                  {translate('donatePage.cryptoDonateAmount').replace('{{amount}}', amount) || `Donate $${amount} with Cryptocurrency`}
                </h2>
                
                <p className="text-gray-600 mb-8">
                  {translate('donatePage.cryptoDescription') || "You're making a cryptocurrency donation to support our cause. Click the button below to proceed to the secure payment page."}
                </p>
                
                <ul className="mb-8 text-left">
                  <li className="flex items-start mb-3">
                    <span className="flex items-center justify-center h-5 w-5 rounded-full bg-green-100 mr-2 mt-1">
                      <svg className="h-3 w-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700">
                      {translate('donatePage.cryptoFeature1') || "Support with Bitcoin, Lightning Network, and other cryptocurrencies"}
                    </span>
                  </li>
                  <li className="flex items-start mb-3">
                    <span className="flex items-center justify-center h-5 w-5 rounded-full bg-green-100 mr-2 mt-1">
                      <svg className="h-3 w-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700">
                      {translate('donatePage.cryptoFeature2') || "Secure, private, and low-fee transactions"}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center h-5 w-5 rounded-full bg-green-100 mr-2 mt-1">
                      <svg className="h-3 w-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700">
                      {translate('donatePage.cryptoFeature3') || "100% of your donation goes to our projects"}
                    </span>
                  </li>
                </ul>
                
                <button
                  onClick={handlePaymentClick}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl w-full max-w-md mx-auto flex items-center justify-center transition-all duration-200"
                >
                  {translate('donatePage.continueToPayment') || "Continue to Payment"}
                  <ExternalLink className="ml-2 h-5 w-5" />
                </button>
                
                <div className="mt-6 flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-gray-400 mr-2" />
                  <p className="text-gray-500 text-sm">
                    {translate('donatePage.cryptoSecurePayment') || "Secure payment processing by BTCPay Server"}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default CryptoDonate; 