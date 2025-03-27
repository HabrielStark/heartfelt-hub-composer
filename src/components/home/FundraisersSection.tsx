import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionHeading from '@/components/ui/SectionHeading';
import FundraiserCard from '@/components/home/FundraiserCard';

const FundraisersSection = () => {
  const { translate, language } = useLanguage();
  const [fundraisers, setFundraisers] = useState([
    {
      id: 'educational',
      goal: 5000,
      raised: 2750,
      imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1422&q=80'
    },
    {
      id: 'healthcare',
      goal: 8000,
      raised: 5200,
      imageUrl: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'
    },
    {
      id: 'facility',
      goal: 12000,
      raised: 3600,
      imageUrl: 'https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
    }
  ]);

  // Functions to get localized texts
  const getFundraiserName = (id) => {
    return translate(`homePage.fundraisers.${id}`);
  };

  const getFundraiserDescription = (id) => {
    return translate(`homePage.fundraisers.${id}Desc`);
  };

  // Создаем версию handleProgressUpdate, совместимую с типом в FundraiserCard
  const handleProgressUpdate = () => {
    // При вызове из FundraiserCard, эта функция обновляет состояние
    // Можно оставить пустой, так как мы не используем параметры
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title={translate('homePage.fundraisers.title')}
          subtitle={translate('homePage.fundraisers.description')}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {fundraisers.slice(0, 3).map((fundraiser, index) => (
            <FundraiserCard
              key={fundraiser.id}
              id={fundraiser.id}
              name={getFundraiserName(fundraiser.id)}
              description={getFundraiserDescription(fundraiser.id)}
              goal={fundraiser.goal}
              raised={fundraiser.raised}
              imageUrl={fundraiser.imageUrl}
              onProgressUpdate={handleProgressUpdate}
            />
          ))}
        </div>
        
        <div className="text-center">
          <a 
            href="/how-to-help#fundraisers" 
            className="inline-flex items-center py-3 px-6 bg-primary hover:bg-primary-600 text-white font-medium rounded-md transition-colors"
          >
            {translate('homePage.fundraisers.viewAllButton')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FundraisersSection;
