
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Heart } from 'lucide-react';

interface FundraiserCardProps {
  name: string;
  description: string;
  goal: number;
  raised: number;
  imageUrl: string;
}

const FundraiserCard: React.FC<FundraiserCardProps> = ({
  name,
  description,
  goal,
  raised,
  imageUrl,
}) => {
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
          <span className="font-medium text-gray-700">${raised.toLocaleString()} raised</span>
          <span className="text-gray-500">Goal: ${goal.toLocaleString()}</span>
        </div>
        
        <button className="w-full py-2 bg-primary hover:bg-primary-600 text-white rounded-md transition-colors duration-300">
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default FundraiserCard;
