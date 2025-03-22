import axios from 'axios';

// Конфигурация BTCPay Server
// В реальном приложении эти значения должны быть взяты из переменных окружения
export const BTCPAY_SERVER_URL = 'https://btcpay.coincharge.io'; // URL BTCPay Server из скриншота
export const BTCPAY_API_KEY = 'rI7WH7MCYIUIQbO0VoLdRoYvriZVyiYEvWrpoyokWdG'; // API ключ из скриншота
export const BTCPAY_STORE_ID = '5jghr5SBa2FtFTNAnfMwdibYokLk7idQRb2WR86Ah29h'; // ID магазина из скриншота

// Создаем клиент для работы с API BTCPay Server
export const btcpayClient = axios.create({
  baseURL: `${BTCPAY_SERVER_URL}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `token ${BTCPAY_API_KEY}`
  }
});

// Функция для создания инвойса
export const createInvoice = async (amount: number, currency: string = 'USD', metadata: any = {}) => {
  try {
    const response = await btcpayClient.post(`/stores/${BTCPAY_STORE_ID}/invoices`, {
      amount,
      currency,
      metadata,
      checkout: {
        redirectURL: window.location.origin + '/donate?success=true',
        defaultPaymentMethod: 'BTC',
        expirationMinutes: 60
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error creating invoice:', error);
    throw error;
  }
};

// Функция для получения информации об инвойсе
export const getInvoice = async (invoiceId: string) => {
  try {
    const response = await btcpayClient.get(`/stores/${BTCPAY_STORE_ID}/invoices/${invoiceId}`);
    return response.data;
  } catch (error) {
    console.error('Error getting invoice:', error);
    throw error;
  }
};

// Функция для обновления прогресса сбора средств
export const updateFundraiserProgress = async (fundraiserId: string, amount: number) => {
  // В реальном приложении здесь должна быть логика обновления прогресса в базе данных
  // Этот пример просто демонстрирует концепцию
  console.log(`Updating fundraiser ${fundraiserId} progress with amount ${amount}`);
  // Здесь должен быть код для обновления прогресса сбора в базе данных
  return { success: true };
};

// Функция для получения API ключа
export const generateApiKey = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${BTCPAY_SERVER_URL}/api/v1/api-keys`, {
      label: 'Heartfelt Hub Donation Integration',
      permissions: ['btcpay.store.canviewinvoices', 'btcpay.store.cancreateinvoice']
    }, {
      auth: {
        username,
        password
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error generating API key:', error);
    throw error;
  }
}; 