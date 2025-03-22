import React, { useEffect, useRef, useState } from 'react';
import { BTCPAY_SERVER_URL, BTCPAY_STORE_ID } from '@/lib/btcpay';

interface BTCPayButtonProps {
  price?: string;
  currency?: string;
  buttonText?: string;
  checkoutDesc?: string;
  payButtonText?: string;
  className?: string;
}

const BTCPayButton: React.FC<BTCPayButtonProps> = ({ 
  price = '', 
  currency = 'USD',
  buttonText = 'Donate',
  checkoutDesc = 'Support our mission',
  payButtonText = 'Pay with crypto',
  className = ''
}) => {
  const buttonContainerRef = useRef<HTMLDivElement>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  
  useEffect(() => {
    // Проверяем наличие суммы
    if (!price || price === '0') {
      return; // Не загружаем кнопку если сумма не указана
    }

    // Проверяем, загружен ли уже скрипт
    if (document.querySelector('script[src*="btcpay.js"]')) {
      setScriptLoaded(true);
      createButton();
      return;
    }
    
    // Загружаем скрипт BTCPay
    const script = document.createElement('script');
    script.src = `${BTCPAY_SERVER_URL}/modal/btcpay.js`;
    script.async = true;
    document.head.appendChild(script);
    
    // После загрузки скрипта создаем кнопку
    script.onload = () => {
      setScriptLoaded(true);
      createButton();
    };
    
    script.onerror = (e) => {
      console.error('Failed to load BTCPay script:', e);
      setScriptLoaded(false);
    };
    
    return () => {
      // Удаляем скрипт при размонтировании компонента
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [price, currency, buttonText, checkoutDesc, payButtonText]);
  
  // Функция для создания кнопки
  const createButton = () => {
    if (buttonContainerRef.current) {
      // Очищаем контейнер перед добавлением кнопки
      buttonContainerRef.current.innerHTML = '';
      
      // Создаем кнопку
      const button = document.createElement('button');
      button.className = 'btcpay-button';
      button.setAttribute('data-btcpay-button', '');
      button.setAttribute('data-store-id', BTCPAY_STORE_ID);
      button.setAttribute('data-price', price);
      button.setAttribute('data-currency', currency);
      button.setAttribute('data-buy-button-text', buttonText);
      button.setAttribute('data-checkout-desc', checkoutDesc);
      button.setAttribute('data-pay-button-text', payButtonText);
      
      // Добавляем кнопку в контейнер
      buttonContainerRef.current.appendChild(button);
    }
  };
  
  // Если скрипт не загружен или сумма не указана, показываем временную кнопку
  const getDefaultButton = () => {
    if (!price || price === '0') {
      return null;
    }
    
    return (
      <button 
        onClick={() => window.location.href = `${BTCPAY_SERVER_URL}/apps/3H1F5JfRUdT44GkxYNoZwfq2qEHd/${BTCPAY_STORE_ID}/pos?amount=${price}&currency=${currency}`}
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
      >
        {buttonText}
      </button>
    );
  };
  
  return (
    <div className={`${className} min-h-[40px] min-w-[150px]`}>
      {!scriptLoaded ? getDefaultButton() : <div ref={buttonContainerRef} className="min-h-[40px]"></div>}
    </div>
  );
};

export default BTCPayButton; 