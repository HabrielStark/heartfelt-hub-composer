import React, { useState, useEffect } from 'react';
import SectionHeading from '../ui/SectionHeading';
import FundraiserCard from './FundraiserCard';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { getAllFundraisers } from '@/lib/db';

const FundraisersSection = () => {
  const { translate, language } = useLanguage();
  const [fundraisers, setFundraisers] = useState(getAllFundraisers());
  
  // При обновлении прогресса обновляем данные на странице
  const handleProgressUpdate = () => {
    setFundraisers([...getAllFundraisers()]);
  };

  const getFundraiserName = (id) => {
    if (language === 'en') {
      switch (id) {
        case 'educational': return 'Educational Support';
        case 'healthcare': return 'Healthcare Access';
        case 'facilities': return 'Facility Renovation';
        default: return translate(`homePage.fundraisers.${id}`);
      }
    }
    return translate(`homePage.fundraisers.${id}`);
  };

  const getFundraiserDescription = (id) => {
    if (language === 'en') {
      switch (id) {
        case 'educational': return 'Providing scholarships and educational materials to underprivileged children.';
        case 'healthcare': return 'Bringing medical care and supplies to communities without adequate healthcare.';
        case 'facilities': return 'Renovating community centers to create safe spaces for education and support.';
        default: return translate(`homePage.fundraisers.${id}Desc`);
      }
    }
    return translate(`homePage.fundraisers.${id}Desc`);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title={language === 'en' ? "Current Fundraising Campaigns" : translate('homePage.fundraisers.title')}
          subtitle={language === 'en' ? "Help us reach these important goals" : translate('homePage.fundraisers.description')}
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
            {language === 'en' ? "View All Campaigns" : translate('homePage.fundraisers.viewAllButton')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FundraisersSection;
