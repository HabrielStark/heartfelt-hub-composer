import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Users, Handshake } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';

const SupportCategories = () => {
  const { translate } = useLanguage();
  
  const categories = [
    {
      title: translate('homePage.supportCategories.donate.title'),
      description: translate('homePage.supportCategories.donate.description'),
      icon: <DollarSign className="h-10 w-10 text-primary" />,
      bgClass: "bg-pastel-green",
      link: "/how-to-help#donations"
    },
    {
      title: translate('homePage.supportCategories.volunteer.title'),
      description: translate('homePage.supportCategories.volunteer.description'),
      icon: <Users className="h-10 w-10 text-primary" />,
      bgClass: "bg-pastel-blue",
      link: "/how-to-help#volunteer"
    },
    {
      title: translate('homePage.supportCategories.sponsor.title'),
      description: translate('homePage.supportCategories.sponsor.description'),
      icon: <Handshake className="h-10 w-10 text-primary" />,
      bgClass: "bg-pastel-purple",
      link: "/how-to-help#partnership"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title={translate('homePage.supportCategories.title')}
          subtitle={translate('homePage.supportCategories.description')}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link 
              to={category.link} 
              key={index}
              className="group rounded-xl overflow-hidden card-hover"
            >
              <div className={`p-8 text-center h-full flex flex-col ${category.bgClass}`}>
                <div className="inline-flex items-center justify-center mx-auto rounded-full bg-white p-4 mb-6 shadow-sm">
                  {category.icon}
                </div>
                <h3 className="font-playfair font-semibold text-xl mb-4">{category.title}</h3>
                <p className="text-gray-700 flex-grow">{category.description}</p>
                <div className="mt-6 font-medium text-primary group-hover:underline">{translate('common.learnMore')}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportCategories;
