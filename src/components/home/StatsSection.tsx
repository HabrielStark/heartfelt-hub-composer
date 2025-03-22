import React from 'react';
import { Users, Heart, Home, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const StatsSection = () => {
  const { translate } = useLanguage();
  
  const stats = [
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      number: "500+",
      label: translate('homePage.stats.childrenHelped'),
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      number: "10+",
      label: translate('homePage.stats.communityPrograms'),
    },
    {
      icon: <Home className="h-10 w-10 text-primary" />,
      number: "3",
      label: translate('homePage.stats.volunteersEngaged'),
    },
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      number: "85%",
      label: translate('homePage.stats.successStories'),
    },
  ];

  return (
    <div className="bg-white py-12 md:py-16 relative mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-primary-50 p-3 mb-4">
                {stat.icon}
              </div>
              <div className="font-playfair font-bold text-3xl md:text-4xl text-gray-800 mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
