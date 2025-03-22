import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import BTCPaySetup from '@/components/admin/BTCPaySetup';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const BTCPaySettings = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Настройки BTCPay Server</h1>
        <p className="text-gray-500">
          Настройте интеграцию с BTCPay Server для приема криптовалютных пожертвований.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Интеграция BTCPay Server</CardTitle>
            <CardDescription>
              BTCPay Server - это бесплатный и открытый сервер для обработки криптовалютных платежей.
              Вам нужно установить соединение с вашим сервером BTCPay, чтобы принимать пожертвования в криптовалюте.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <BTCPaySetup />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Инструкция по настройке</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Следуйте этим шагам, чтобы настроить интеграцию BTCPay:</p>
            
            <ol className="list-decimal list-inside space-y-2">
              <li>
                <strong>Запустите BTCPay Server:</strong> Убедитесь, что ваш BTCPay Server запущен и доступен 
                по адресу, указанному в настройках.
              </li>
              <li>
                <strong>Создайте API ключ:</strong> Используйте форму выше, чтобы сгенерировать API ключ.
                Вам потребуется имя пользователя и пароль от вашего BTCPay Server.
              </li>
              <li>
                <strong>Обновите настройки:</strong> После получения API ключа, скопируйте его 
                и обновите значение <code>BTCPAY_API_KEY</code> в файле <code>src/lib/btcpay.ts</code>.
              </li>
              <li>
                <strong>Проверьте интеграцию:</strong> Перейдите на страницу пожертвований и 
                попробуйте сделать тестовое пожертвование в криптовалюте.
              </li>
            </ol>

            <div className="bg-yellow-50 p-4 rounded-md border border-yellow-200 mt-4">
              <h4 className="font-semibold text-yellow-800 mb-2">Важное примечание:</h4>
              <p className="text-yellow-700">
                Убедитесь, что ваш BTCPay Server настроен правильно и поддерживает нужные вам криптовалюты. 
                Для рабочей среды рекомендуется использовать HTTPS для обеспечения безопасной передачи данных.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default BTCPaySettings; 