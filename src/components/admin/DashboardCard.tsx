
import React, { ReactNode } from 'react';
import { Card } from "@/components/ui/card";

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  footer?: string;
  color?: 'primary' | 'secondary' | 'success' | 'warning';
}

const DashboardCard: React.FC<DashboardCardProps> = ({ 
  title, 
  value, 
  icon,
  trend,
  footer,
  color = 'primary'
}) => {
  
  const getIconClasses = () => {
    switch (color) {
      case 'primary':
        return 'bg-primary-100 text-primary';
      case 'secondary':
        return 'bg-secondary/10 text-secondary';
      case 'success':
        return 'bg-green-100 text-green-600';
      case 'warning':
        return 'bg-amber-100 text-amber-600';
      default:
        return 'bg-primary-100 text-primary';
    }
  };
  
  const getTrendClasses = () => {
    if (trend?.isPositive) {
      return 'text-green-600 bg-green-50';
    }
    return 'text-red-600 bg-red-50';
  };
  
  return (
    <Card className="p-6 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-500 text-sm font-medium mb-1">{title}</p>
          <h3 className="text-2xl font-bold font-playfair">{value}</h3>
          
          {trend && (
            <div className={`mt-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getTrendClasses()}`}>
              {trend.isPositive ? '+' : ''}{trend.value}%
            </div>
          )}
        </div>
        
        <div className={`rounded-full p-3 ${getIconClasses()}`}>
          {icon}
        </div>
      </div>
      
      {footer && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-gray-500 text-sm">{footer}</p>
        </div>
      )}
    </Card>
  );
};

export default DashboardCard;
