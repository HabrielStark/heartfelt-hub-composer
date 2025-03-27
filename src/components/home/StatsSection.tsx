import React from 'react';
import { Users, Heart, Home, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const StatsSection = () => {
  const { translate, language } = useLanguage();
  
  // Объект для переводов статистических меток
  const getStatLabel = (key) => {
    const labels = {
      'orphans': {
        'en': "orphans receive monthly support",
        'uk': "дітей-сирот щомісяця отримують підтримку",
        'es': "huérfanos reciben apoyo mensual",
        'he': "יתומים מקבלים תמיכה חודשית",
        'ru': "детей-сирот ежемесячно получают поддержку"
      },
      'orphanages': {
        'en': "orphanages collaborate with CrossCharity",
        'uk': "дитячих будинків співпрацюють з CrossCharity",
        'es': "orfanatos colaboran con CrossCharity",
        'he': "בתי יתומים משתפים פעולה עם CrossCharity",
        'ru': "детских домов сотрудничают с CrossCharity"
      },
      'cancerChildren': {
        'en': "children with cancer involved",
        'uk': "залучених дітей з онкологією",
        'es': "niños con cáncer involucrados",
        'he': "ילדים חולי סרטן מעורבים",
        'ru': "вовлечённых онкодетей"
      },
      'volunteers': {
        'en': "volunteers and foundation staff",
        'uk': "волонтерів та працівників фонду",
        'es': "voluntarios y personal de la fundación",
        'he': "מתנדבים וצוות הקרן",
        'ru': "волонтёров и сотрудников фонда"
      }
    };
    
    return labels[key][language] || labels[key]['en'];
  };

  const stats = [
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      number: "1500+",
      label: getStatLabel('orphans')
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      number: "13",
      label: getStatLabel('orphanages')
    },
    {
      icon: <Home className="h-10 w-10 text-primary" />,
      number: "300+",
      label: getStatLabel('cancerChildren')
    },
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      number: "40+",
      label: getStatLabel('volunteers')
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
