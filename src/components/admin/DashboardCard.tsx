import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from 'lucide-react';

interface TrendProps {
  value: number;
  isPositive: boolean;
}

interface DashboardCardProps {
  title: string;
  value: string;
  icon?: React.ReactNode;
  trend?: TrendProps;
  footer?: string;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  icon,
  trend,
  footer,
  color = 'primary'
}) => {
  const colorStyles = {
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-purple-100 text-purple-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-amber-100 text-amber-800',
    danger: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800'
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-500 font-medium mb-1">{title}</p>
            <h3 className="text-2xl font-bold">{value}</h3>
            
            {trend && (
              <div className="flex items-center mt-2">
                {trend.isPositive ? (
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                )}
                <span className={trend.isPositive ? 'text-green-600' : 'text-red-600'}>
                  {trend.value}%
                </span>
              </div>
            )}
            
            {footer && (
              <p className="text-xs text-gray-500 mt-1">{footer}</p>
            )}
          </div>
          
          {icon && (
            <div className={`p-3 rounded-full ${colorStyles[color]}`}>
              {icon}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard; 