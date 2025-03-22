import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Bitcoin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

const CryptoDonationForm = ({ onDonationSuccess, fundraiserId }: { 
  onDonationSuccess?: (amount: number) => void,
  fundraiserId?: string 
}) => {
  const [customAmount, setCustomAmount] = useState('');
  const [selectedPresetAmount, setSelectedPresetAmount] = useState('');
  const { translate, language } = useLanguage();
  const navigate = useNavigate();

  // Получаем текущую сумму для пожертвования
  const currentAmount = selectedPresetAmount || customAmount;
  
  // Функция для перехода на страницу подтверждения пожертвования
  const handleDonateClick = () => {
    if (currentAmount && parseFloat(currentAmount) > 0) {
      navigate(`/crypto-donate?amount=${currentAmount}&currency=USD`);
    }
  };

  return (
    <div>
      <div className="flex items-center space-x-4 mb-6">
        <div className="bg-orange-100 rounded-full p-3">
          <Bitcoin className="h-6 w-6 text-orange-500" />
        </div>
        <h3 className="font-playfair font-semibold text-xl">{translate('donatePage.cryptoDonation') || 'Cryptocurrency Donation'}</h3>
      </div>
      
      <div className="mb-6">
        <Label className="mb-2 block">{translate('donatePage.chooseAmount') || 'Choose Amount'}</Label>
        <RadioGroup value={selectedPresetAmount} onValueChange={setSelectedPresetAmount} className="grid grid-cols-2 gap-3">
          {['25', '50', '100', '250'].map((amount) => (
            <div key={amount}>
              <RadioGroupItem
                value={amount}
                id={`crypto-amount-${amount}`}
                className="peer sr-only"
              />
              <Label
                htmlFor={`crypto-amount-${amount}`}
                className="flex h-10 items-center justify-center rounded-md border-2 border-orange-100 bg-white px-3 hover:bg-orange-50 hover:text-orange-500 peer-data-[state=checked]:border-orange-500 peer-data-[state=checked]:bg-orange-500 peer-data-[state=checked]:text-white cursor-pointer"
              >
                ${amount}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      
      <div className="mb-6">
        <Label htmlFor="crypto-custom-amount">{translate('donatePage.customAmount') || 'Custom Amount'}</Label>
        <div className="relative mt-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
          <Input 
            id="crypto-custom-amount" 
            type="number" 
            min="1"
            step="0.01"
            placeholder={translate('donatePage.enterAmount') || 'Enter Amount'}
            className="pl-8"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value);
              setSelectedPresetAmount('');
            }}
          />
        </div>
      </div>
      
      <div className="flex justify-center mb-4">
        <button
          onClick={handleDonateClick}
          disabled={!currentAmount || parseFloat(currentAmount) <= 0}
          className={`w-full font-bold py-3 px-4 rounded-lg transition-all duration-200 ${
            currentAmount && parseFloat(currentAmount) > 0
              ? 'bg-orange-500 hover:bg-orange-600 text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {translate('donatePage.proceedToPayment') || 'Proceed to Payment'}
        </button>
      </div>
      
      <p className="text-xs text-gray-500 mt-2 text-center">
        {language === 'en' 
          ? "Powered by BTCPay Server - Accept cryptocurrency payments securely." 
          : "Работает на BTCPay Server - Безопасный прием криптовалютных платежей."}
      </p>
    </div>
  );
};

export default CryptoDonationForm; 