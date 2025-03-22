import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import FundraiserCard from './FundraiserCard';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const FundraisersSection = () => {
  const { translate } = useLanguage();
  
  const fundraisers = [
    {
      name: translate('homePage.fundraisers.educational'),
      description: translate('homePage.fundraisers.educationalDesc'),
      goal: 25000,
      raised: 18750,
      imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2309&q=80"
    },
    {
      name: translate('homePage.fundraisers.healthcare'),
      description: translate('homePage.fundraisers.healthcareDesc'),
      goal: 15000,
      raised: 9200,
      imageUrl: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2352&q=80"
    },
    {
      name: translate('homePage.fundraisers.facility'),
      description: translate('homePage.fundraisers.facilityDesc'),
      goal: 50000,
      raised: 32500,
      imageUrl: "https://images.unsplash.com/photo-1531956003775-1b2dae38d5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-white to-primary-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title={translate('homePage.fundraisers.title')}
          subtitle={translate('homePage.fundraisers.description')}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fundraisers.map((fundraiser, index) => (
            <FundraiserCard 
              key={index}
              name={fundraiser.name}
              description={fundraiser.description}
              goal={fundraiser.goal}
              raised={fundraiser.raised}
              imageUrl={fundraiser.imageUrl}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/how-to-help">
            <Button className="bg-primary hover:bg-primary-600 text-white py-6 px-8 rounded-lg shadow-md text-lg">
              {translate('homePage.fundraisers.viewAllButton')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FundraisersSection;
