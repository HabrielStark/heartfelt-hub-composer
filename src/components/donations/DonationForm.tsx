
import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '@/lib/stripe';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from '@/hooks/use-toast';
import { DollarSign } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#32325d',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  },
};

const CheckoutForm = () => {
  const { toast } = useToast();
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedPresetAmount, setSelectedPresetAmount] = useState('');
  const { translate } = useLanguage();

  const handleDonationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setLoading(true);

    // Get the amount to charge
    const amount = selectedPresetAmount || customAmount;
    
    if (!amount) {
      toast({
        title: "Error",
        description: "Please select or enter a donation amount",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    // Create a payment method
    const cardElement = elements.getElement(CardElement);
    
    if (!cardElement) {
      toast({
        title: "Error",
        description: "Card element not found",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    // In a real application, you would make an API call to your backend
    // to create a payment intent and confirm the payment
    
    // For demo purposes, we'll just simulate a successful payment
    setTimeout(() => {
      toast({
        title: "Donation Successful",
        description: `Thank you for your $${amount} donation!`,
      });
      setLoading(false);
      setSelectedPresetAmount('');
      setCustomAmount('');
      
      // Clear the card element
      cardElement.clear();
    }, 1500);
  };

  return (
    <form onSubmit={handleDonationSubmit}>
      <div className="mb-6">
        <Label className="mb-2 block">{translate('Choose Amount')}</Label>
        <RadioGroup value={selectedPresetAmount} onValueChange={setSelectedPresetAmount} className="grid grid-cols-2 gap-3">
          {['25', '50', '100', '250'].map((amount) => (
            <div key={amount}>
              <RadioGroupItem
                value={amount}
                id={`amount-${amount}`}
                className="peer sr-only"
              />
              <Label
                htmlFor={`amount-${amount}`}
                className="flex h-10 items-center justify-center rounded-md border-2 border-primary-100 bg-white px-3 hover:bg-primary-50 hover:text-primary peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-white cursor-pointer"
              >
                ${amount}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      
      <div className="mb-6">
        <Label htmlFor="custom-amount">{translate('Custom Amount')}</Label>
        <div className="relative mt-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
          <Input 
            id="custom-amount" 
            type="number" 
            placeholder={translate('Enter Amount')}
            className="pl-8"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value);
              setSelectedPresetAmount('');
            }}
          />
        </div>
      </div>

      <div className="mb-6">
        <Label className="mb-2 block">{translate('Card Details')}</Label>
        <div className="p-3 border rounded-md">
          <CardElement options={CARD_ELEMENT_OPTIONS} />
        </div>
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-primary hover:bg-primary-600"
        disabled={!stripe || loading}
      >
        {loading ? translate('processing') : translate('donateNow')}
      </Button>
    </form>
  );
};

const DonationForm = () => {
  const { translate } = useLanguage();
  
  return (
    <div>
      <div className="flex items-center space-x-4 mb-6">
        <div className="bg-primary-100 rounded-full p-3">
          <DollarSign className="h-6 w-6 text-primary" />
        </div>
        <h3 className="font-playfair font-semibold text-xl">{translate('One Time Donation')}</h3>
      </div>
      
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default DonationForm;
