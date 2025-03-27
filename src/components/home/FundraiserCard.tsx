import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

interface FundraiserCardProps {
  id: string;
  name: string;
  description: string;
  goal: number;
  raised: number;
  imageUrl: string;
  onProgressUpdate?: () => void;
}

const FundraiserCard: React.FC<FundraiserCardProps> = ({
  id,
  name,
  description,
  goal,
  raised,
  imageUrl,
  onProgressUpdate
}) => {
  const { translate } = useLanguage();
  const progress = Math.min(Math.round((raised / goal) * 100), 100);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3 bg-white bg-opacity-90 rounded-full p-2">
          <Heart className={`h-5 w-5 ${raised >= goal ? 'text-primary fill-primary' : 'text-primary'}`} />
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-playfair font-semibold text-xl mb-2">{name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        <div className="mb-2">
          <Progress 
            value={progress} 
            className="h-2 bg-gray-100"
          />
        </div>
        
        <div className="flex justify-between text-sm mb-4">
          <span className="font-medium text-gray-700">${raised.toLocaleString()} {translate('homePage.fundraisers.progressLabel')} </span>
          <span className="text-gray-500">{translate('common.goal')}: ${goal.toLocaleString()}</span>
        </div>
        
        <Link to="/donate">
          <button 
            className="w-full py-2.5 bg-primary hover:bg-primary-600 text-white rounded-md transition-all duration-300 font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5 flex items-center justify-center gap-1"
          >
            <Heart className="h-4 w-4" /> {translate('common.donate') || 'Пожертвувати'}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FundraiserCard;
