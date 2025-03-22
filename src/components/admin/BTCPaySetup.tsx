import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from '@/hooks/use-toast';
import { BTCPAY_SERVER_URL, generateApiKey } from '@/lib/btcpay';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const BTCPaySetup = () => {
  const { toast } = useToast();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerateApiKey = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !password) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните имя пользователя и пароль BTCPay",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await generateApiKey(username, password);
      setApiKey(response.apiKey);
      
      // Сохраняем API ключ в localStorage для будущего использования
      localStorage.setItem('btcpay_api_key', response.apiKey);
      
      toast({
        title: "Успех",
        description: "API ключ BTCPay успешно сгенерирован",
      });
    } catch (error) {
      console.error('Error generating API key:', error);
      toast({
        title: "Ошибка",
        description: "Не удалось сгенерировать API ключ. Проверьте учетные данные и попробуйте снова.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Настройка BTCPay Server</CardTitle>
        <CardDescription>
          Сгенерируйте API ключ для подключения к вашему BTCPay Server.
          Сервер BTCPay доступен по адресу: <a href={BTCPAY_SERVER_URL} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{BTCPAY_SERVER_URL}</a>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleGenerateApiKey} className="space-y-4">
          <div>
            <Label htmlFor="username">Имя пользователя BTCPay</Label>
            <Input 
              id="username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              className="mt-1"
              placeholder="Имя пользователя BTCPay"
            />
          </div>
          
          <div>
            <Label htmlFor="password">Пароль BTCPay</Label>
            <Input 
              id="password" 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="mt-1"
              placeholder="Пароль BTCPay"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full"
            disabled={loading}
          >
            {loading ? "Генерация..." : "Сгенерировать API ключ"}
          </Button>
          
          {apiKey && (
            <div className="mt-4">
              <Label htmlFor="api-key">API ключ (сохраните его)</Label>
              <div className="flex mt-1">
                <Input 
                  id="api-key" 
                  value={apiKey} 
                  readOnly 
                  className="flex-1"
                />
                <Button 
                  type="button" 
                  onClick={() => {
                    navigator.clipboard.writeText(apiKey);
                    toast({
                      title: "Скопировано",
                      description: "API ключ скопирован в буфер обмена",
                    });
                  }}
                  className="ml-2"
                >
                  Копировать
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Скопируйте этот ключ и обновите значение BTCPAY_API_KEY в файле src/lib/btcpay.ts
              </p>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
};

export default BTCPaySetup; 