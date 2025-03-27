import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { translate, language } = useLanguage();
  
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-pastel-purple py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left column with text */}
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-gray-800 mb-4">
              {translate('homePage.hero.title')}
              {language !== 'he' && <br />}
              <span className="text-primary">{translate('homePage.hero.titleHighlight')}</span>
            </h1>
            <h2 className="font-medium text-2xl md:text-3xl text-gray-700 mb-6">
              {language === 'en' && "Quietly. Systematically. With love."}
              {language === 'es' && "Silenciosamente. Sistemáticamente. Con amor."}
              {language === 'uk' && "Тихо. Системно. З любов'ю."}
              {language === 'he' && "בשקט. באופן שיטתי. עם אהבה."}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              {language === 'en' && 
                "There are children who just need a little more warmth. Some need medicine. Some need a laptop for studying. Some need to feel they are not alone. CrossCharity supports orphanages and children with cancer in the way relatives would — calmly, thoughtfully, without unnecessary noise and with attention to detail. It's important to be there. To care. To support. And to make precise decisions that really change something in their lives."
              }
              {language === 'es' && 
                "Hay niños que solo necesitan un poco más de calor. Algunos necesitan medicinas. Algunos necesitan una computadora para estudiar. Algunos necesitan sentir que no están solos. CrossCharity apoya a orfanatos y niños con cáncer de la manera en que lo harían los familiares — con calma, cuidadosamente, sin ruido innecesario y con atención al detalle. Es importante estar ahí. Cuidar. Apoyar. Y tomar decisiones precisas que realmente cambien algo en sus vidas."
              }
              {language === 'uk' && 
                "Є діти, яким просто потрібно трохи більше тепла. Комусь — ліки. Комусь — ноутбук для навчання. Комусь — можливість відчути, що вони не самотні. CrossCharity підтримує дитячі будинки та онкохворих дітей так, як це зробили б рідні люди — спокійно, продумано, без зайвого шуму та з увагою до деталей. Важливо бути поруч. Піклуватися. Підтримувати. І приймати точні рішення, які дійсно змінюють щось у їхньому житті."
              }
              {language === 'he' && 
                "יש ילדים שפשוט צריכים קצת יותר חום. חלקם צריכים תרופות. חלקם צריכים מחשב נייד ללימודים. חלקם צריכים להרגיש שהם לא לבד. CrossCharity תומכת בבתי יתומים וילדים עם סרטן בדרך שקרובי משפחה היו עושים — בשקט, בתשומת לב, ללא רעש מיותר ועם תשומת לב לפרטים. חשוב להיות שם. לדאוג. לתמוך. ולקבל החלטות מדויקות שבאמת משנות משהו בחייהם."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary-600 text-white py-6 px-8 rounded-lg shadow-md text-lg">
                {translate('homePage.hero.donateButton')}
              </Button>
              <Link to="/how-to-help">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary-100 py-6 px-8 rounded-lg text-lg">
                  {translate('howToHelp.title')} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Right column with image */}
          <div className="md:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl animate-float">
              <img 
                src="/IMG_4383.JPG" 
                alt="Happy children playing together" 
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent text-white p-6">
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="hidden md:block absolute -top-24 -right-24 w-96 h-96 bg-primary-100 rounded-full opacity-50"></div>
      <div className="hidden md:block absolute -bottom-32 -left-32 w-80 h-80 bg-pastel-purple rounded-full opacity-40"></div>
    </div>
  );
};

export default HeroSection;