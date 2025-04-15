import React, { useState, useEffect } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import PageBanner from '@/components/ui/PageBanner';
import SectionHeading from '@/components/ui/SectionHeading';
import { Button } from "@/components/ui/button";
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DollarSign, Clock, Heart, Building, Check, HandHeart, ArrowRight, Users, CircleDollarSign, Briefcase, Globe } from 'lucide-react';
import FundraiserCard from '@/components/home/FundraiserCard';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from '@/hooks/use-toast';
import DonationForm from '@/components/donations/DonationForm';
import CryptoDonationForm from '@/components/donations/CryptoDonationForm';
import { useLanguage } from '@/contexts/LanguageContext';
import { getAllFundraisers } from '@/lib/db';
import { Link, useSearchParams } from 'react-router-dom';

const HowToHelp = () => {
  const { toast } = useToast();
  const { translate, language } = useLanguage();
  const [fundraisers, setFundraisers] = useState(getAllFundraisers());
  const [searchParams] = useSearchParams();
  const tabFromUrl = searchParams.get('tab');

  useEffect(() => {
    // Плавна прокрутка к верху страницы при загрузке компонента
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: translate('howToHelp.volunteer.applicationReceived'),
      description: translate('howToHelp.volunteer.confirmation'),
    });
  };

  const handleProgressUpdate = () => {
    setFundraisers([...getAllFundraisers()]);
  };

  const getFundraiserName = (id) => {
    if (language === 'en') {
      switch (id) {
        case 'educational': return 'Educational Support';
        case 'healthcare': return 'Healthcare Access';
        case 'facilities': return 'Facility Renovation';
        case 'recreational': return 'Recreational Programs';
        default: return translate(`fundraisers.${id}`);
      }
    }
    
    switch (id) {
      case 'educational': return 'Підтримка освіти';
      case 'healthcare': return 'Медична ініціатива';
      case 'facilities': return 'Реконструкція закладу';
      case 'recreational': return 'Розважальні програми';
      default: return translate(`fundraisers.${id}`);
    }
  };

  const getFundraiserDescription = (id) => {
    if (language === 'en') {
      switch (id) {
        case 'educational': return 'Providing scholarships and educational materials to underprivileged children.';
        case 'healthcare': return 'Bringing medical care and supplies to communities without adequate healthcare.';
        case 'facilities': return 'Renovating community centers to create safe spaces for education and support.';
        case 'recreational': return 'Creating recreational programs and spaces for children to play and grow.';
        default: return translate(`fundraisers.${id}Desc`);
      }
    }
    
    switch (id) {
      case 'educational': return 'Допоможіть забезпечити шкільне приладдя, книги та освітні ресурси для дітей.';
      case 'healthcare': return 'Підтримайте основні медичні послуги, регулярні огляди та ліки для дітей.';
      case 'facilities': return 'Допоможіть нам реконструювати нашу головну будівлю, щоб створити безпечний простір.';
      case 'recreational': return 'Створення розважальних програм та просторів для дітей.';
      default: return translate(`fundraisers.${id}Desc`);
    }
  };

  const partners = [
    {
      name: language === 'en' ? "ABC Foundation" : translate('howToHelp.partners.abc.name'),
      description: language === 'en' ? "Provides financial support for our educational programs." : translate('howToHelp.partners.abc.description'),
      logo: "https://via.placeholder.com/150?text=ABC"
    },
    {
      name: language === 'en' ? "XYZ Corporation" : translate('howToHelp.partners.xyz.name'),
      description: language === 'en' ? "Sponsors health initiatives and medical checkups." : translate('howToHelp.partners.xyz.description'),
      logo: "https://via.placeholder.com/150?text=XYZ"
    },
    {
      name: language === 'en' ? "Community Bank" : translate('howToHelp.partners.bank.name'),
      description: language === 'en' ? "Supports facility improvements and renovations." : translate('howToHelp.partners.bank.description'),
      logo: "https://via.placeholder.com/150?text=Bank"
    },
    {
      name: language === 'en' ? "Global Helpers" : translate('howToHelp.partners.global.name'),
      description: language === 'en' ? "Provides volunteers and professional services." : translate('howToHelp.partners.global.description'),
      logo: "https://via.placeholder.com/150?text=Global"
    }
  ];

  return (
    <PageLayout>
      <PageBanner 
        title={language === 'en' ? "How to Help" : translate('howToHelp.title')}
        subtitle={language === 'en' ? "Join us in making a difference" : translate('howToHelp.subtitle')}
      />

      <section className="py-10 bg-white" id="options">
        <div className="container mx-auto px-4">
          <Tabs 
            defaultValue={tabFromUrl || "donations"} 
            className="w-full"
            onValueChange={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="flex justify-center mb-10">
              <TabsList className="flex justify-between items-center space-x-8 md:space-x-16 lg:space-x-24 bg-transparent">
                <TabsTrigger 
                  value="donations" 
                  className="group flex flex-col items-center space-y-2 bg-transparent data-[state=active]:bg-transparent"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-data-[state=active]:bg-primary/20 transition-all">
                    <HandHeart size={24} className="text-primary" />
                  </div>
                  <span className="text-sm font-medium text-gray-600 group-data-[state=active]:text-primary transition-colors">
                    {language === 'en' ? "Donations" : translate('howToHelp.tabs.donations')}
                  </span>
                </TabsTrigger>
                
                <TabsTrigger 
                  value="volunteer" 
                  className="group flex flex-col items-center space-y-2 bg-transparent data-[state=active]:bg-transparent"
                >
                  <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center group-data-[state=active]:bg-purple-200 transition-all">
                    <Users size={24} className="text-purple-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-600 group-data-[state=active]:text-purple-600 transition-colors">
                    {language === 'en' ? "Volunteer" : translate('howToHelp.tabs.volunteer')}
                  </span>
                </TabsTrigger>
                
                <TabsTrigger 
                  value="partners" 
                  className="group flex flex-col items-center space-y-2 bg-transparent data-[state=active]:bg-transparent"
                >
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center group-data-[state=active]:bg-blue-200 transition-all">
                    <Briefcase size={24} className="text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-600 group-data-[state=active]:text-blue-600 transition-colors">
                    {language === 'en' ? "Partners" : translate('howToHelp.tabs.partners')}
                  </span>
                </TabsTrigger>
                
                <TabsTrigger 
                  value="fundraising" 
                  className="group flex flex-col items-center space-y-2 bg-transparent data-[state=active]:bg-transparent"
                >
                  <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center group-data-[state=active]:bg-amber-200 transition-all">
                    <CircleDollarSign size={24} className="text-amber-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-600 group-data-[state=active]:text-amber-600 transition-colors">
                    {language === 'en' ? "Fundraising" : 
                     language === 'es' ? "Recaudación de fondos" : 
                     language === 'uk' ? "Збір коштів" : 
                     language === 'he' ? "גיוס כספים" : "Fundraising"}
                  </span>
                </TabsTrigger>
            </TabsList>
            </div>
            
            <TabsContent value="donations" id="donations">
              <SectionHeading 
                title={
                  language === 'en' ? "Make a Donation" : 
                  language === 'es' ? "Hacer una donación" :
                  language === 'uk' ? "Пожертвування" :
                  language === 'he' ? "לתרום" : "Make a Donation"
                } 
                subtitle={
                  language === 'en' ? "Your donations help us expand, grow, and help even more children" : 
                  language === 'es' ? "Sus donaciones nos ayudan a expandirnos, crecer y ayudar a más niños" :
                  language === 'uk' ? "Ваші донати допоможуть нам розширюватися, рости та допомагати ще більшій кількості дітей" :
                  language === 'he' ? "התרומות שלך עוזרות לנו להתרחב, לצמוח ולעזור ליותר ילדים" : 
                  "Your donations help us expand, grow, and help even more children"
                }
              />
              
              <div className="max-w-5xl mx-auto mt-12 mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Основные опции пожертвования */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="p-8">
                      <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                        <DollarSign className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-playfair font-semibold mb-3">
                        {language === 'en' ? "One-time Donation" : 
                         language === 'es' ? "Donación única" :
                         language === 'uk' ? "Одноразова пожертва" :
                         language === 'he' ? "תרומה חד פעמית" : 
                         "One-time Donation"}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {language === 'en' ? "Support our immediate needs and help us make an impact today." : 
                         language === 'es' ? "Apoye nuestras necesidades inmediatas y ayúdenos a generar un impacto hoy." :
                         language === 'uk' ? "Підтримайте наші нагальні потреби та допоможіть нам внести зміни вже сьогодні." :
                         language === 'he' ? "תמכו בצרכים המיידיים שלנו ועזרו לנו להשפיע היום." : 
                         "Support our immediate needs and help us make an impact today."}
                      </p>
                      <div className="flex flex-wrap gap-3 mb-6">
                        <Button variant="outline" className="font-medium text-lg rounded-md">$10</Button>
                        <Button variant="outline" className="font-medium text-lg rounded-md">$25</Button>
                        <Button variant="outline" className="font-medium text-lg rounded-md">$50</Button>
                        <Button variant="outline" className="font-medium text-lg rounded-md">$100</Button>
                      </div>
                      <Link to="/donate" className="block">
                        <Button className="w-full py-3 font-medium bg-primary hover:bg-primary-600 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                          {language === 'en' ? "Donate Now" : 
                           language === 'es' ? "Donar ahora" :
                           language === 'uk' ? "Пожертвувати зараз" :
                           language === 'he' ? "לתרום עכשיו" : 
                           "Donate Now"}
                        </Button>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Ежемесячная подписка */}
                  <div className="bg-gradient-to-br from-primary/5 to-purple-50 rounded-xl shadow-lg overflow-hidden border border-primary/10 relative">
                    <div className="absolute top-6 right-6">
                      <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded-full uppercase">
                        {language === 'en' ? "Recommended" : 
                         language === 'es' ? "Recomendado" :
                         language === 'uk' ? "Рекомендовано" :
                         language === 'he' ? "מומלץ" : 
                         "Recommended"}
                      </span>
                    </div>
                    <div className="p-8">
                      <div className="bg-primary/20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-playfair font-semibold mb-3">
                        {language === 'en' ? "Monthly Subscription" : 
                         language === 'es' ? "Suscripción mensual" :
                         language === 'uk' ? "Щомісячна підписка" :
                         language === 'he' ? "מנוי חודשי" : 
                         "Monthly Subscription"}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {language === 'en' ? "Become a regular supporter and help us plan and expand our programs sustainably." : 
                         language === 'es' ? "Conviértase en un colaborador habitual y ayúdenos a planificar y ampliar nuestros programas de forma sostenible." :
                         language === 'uk' ? "Станьте постійним прихильником і допоможіть нам планувати та розширювати наші програми." :
                         language === 'he' ? "הפכו לתומך קבוע ועזרו לנו לתכנן ולהרחיב את התוכניות שלנו באופן בר-קיימא." : 
                         "Become a regular supporter and help us plan and expand our programs sustainably."}
                      </p>
                      <div className="flex flex-wrap gap-3 mb-6">
                        <Button variant="outline" className="font-medium text-lg rounded-md">$5/
                          {language === 'en' ? "mo" : 
                           language === 'es' ? "mes" :
                           language === 'uk' ? "міс" :
                           language === 'he' ? "חודש" : 
                           "mo"}
                        </Button>
                        <Button variant="outline" className="font-medium text-lg rounded-md">$10/
                          {language === 'en' ? "mo" : 
                           language === 'es' ? "mes" :
                           language === 'uk' ? "міс" :
                           language === 'he' ? "חודש" : 
                           "mo"}
                        </Button>
                        <Button variant="outline" className="font-medium text-lg rounded-md">$20/
                          {language === 'en' ? "mo" : 
                           language === 'es' ? "mes" :
                           language === 'uk' ? "міс" :
                           language === 'he' ? "חודש" : 
                           "mo"}
                        </Button>
                        <Button variant="outline" className="font-medium text-lg rounded-md">$50/
                          {language === 'en' ? "mo" : 
                           language === 'es' ? "mes" :
                           language === 'uk' ? "міс" :
                           language === 'he' ? "חודש" : 
                           "mo"}
                        </Button>
                      </div>
                      <Link to="/donate?monthly=true" className="block">
                        <Button className="w-full py-3 font-medium bg-primary hover:bg-primary-600 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                          {language === 'en' ? "Subscribe Monthly" : 
                           language === 'es' ? "Suscribirse mensualmente" :
                           language === 'uk' ? "Підписатися щомісячно" :
                           language === 'he' ? "להירשם למנוי חודשי" : 
                           "Subscribe Monthly"}
                  </Button>
                </Link>
                    </div>
                  </div>
              </div>
              
                <div className="mt-10 bg-gray-50 rounded-xl p-6 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700 font-medium">
                      {language === 'en' ? "Tax Deductible" : 
                       language === 'es' ? "Deducible de impuestos" :
                       language === 'uk' ? "Податкове вирахування" :
                       language === 'he' ? "ניכוי מס" : 
                       "Tax Deductible"}
                    </span>
                  </div>
                  <p className="text-gray-600">
                    {language === 'en' ? "Your donations may be eligible for tax deductions in accordance with local regulations." : 
                     language === 'es' ? "Sus donaciones pueden ser elegibles para deducciones fiscales de acuerdo con las regulaciones locales." :
                     language === 'uk' ? "Ваші пожертви можуть бути звільнені від податків відповідно до місцевих правил." :
                     language === 'he' ? "התרומות שלך עשויות להיות זכאיות לניכויי מס בהתאם לתקנות המקומיות." : 
                     "Your donations may be eligible for tax deductions in accordance with local regulations."}
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="volunteer" id="volunteer">
              <SectionHeading 
                title={
                  language === 'en' ? "Volunteer With Us" : 
                  language === 'es' ? "Voluntariado con nosotros" :
                  language === 'uk' ? "Волонтерство з нами" :
                  language === 'he' ? "התנדבות איתנו" : 
                  "Volunteer With Us"
                } 
                subtitle={
                  language === 'en' ? "Share your time, skills, and compassion to make a direct impact on children's lives" : 
                  language === 'es' ? "Comparte tu tiempo, habilidades y compasión para impactar directamente en la vida de los niños" :
                  language === 'uk' ? "Поділіться своїм часом, навичками та співчуттям, щоб безпосередньо впливати на життя дітей" :
                  language === 'he' ? "שתפו את הזמן, הכישורים והחמלה שלכם כדי להשפיע ישירות על חיי הילדים" : 
                  "Share your time, skills, and compassion to make a direct impact on children's lives"
                }
              />
              
              <div className="mt-12 mb-16">
                {/* Hero Section */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-primary p-8 md:p-12 mb-16">
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      {language === 'en' ? "Who is volunteering for" : 
                       language === 'es' ? "¿Para quién es el voluntariado?" :
                       language === 'uk' ? "Кому підійде волонтерство" :
                       language === 'he' ? "למי מתאימה ההתנדבות" : 
                       "Who is volunteering for"}
                    </h2>
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl">
                      {language === 'en' ? 
                        "For those who want to help not \"somewhere out there,\" but in an understandable, living system:" :
                       language === 'es' ? 
                        "Para aquellos que quieren ayudar no \"en algún lugar\", sino en un sistema comprensible y vivo:" :
                       language === 'uk' ? 
                        "Для тих, хто хоче допомагати не \"десь там\", а в зрозумілій, живій системі." :
                       language === 'he' ? 
                        "לאלה שרוצים לעזור לא \"אי שם\", אלא במערכת מובנת וחיה:" : 
                        "For those who want to help not \"somewhere out there,\" but in an understandable, living system:"}
                    </p>
                    </div>
                  <div className="absolute right-0 bottom-0 opacity-10">
                    <svg className="w-64 h-64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
                    </svg>
                  </div>
                    </div>
                    
                {/* Volunteer Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {/* Professional Skills */}
                  <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                    <div className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Briefcase className="w-6 h-6 text-purple-600" />
                    </div>
                      <h3 className="text-xl font-semibold mb-3">
                        {language === 'en' ? "Professional Skills" : 
                         language === 'es' ? "Habilidades Profesionales" :
                         language === 'uk' ? "Професійні навички" :
                         language === 'he' ? "כישורים מקצועיים" : 
                         "Professional Skills"}
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          {language === 'en' ? "Marketers and PR specialists" : 
                           language === 'es' ? "Especialistas en marketing y relaciones públicas" :
                           language === 'uk' ? "Маркетологи та PR-спеціалісти" :
                           language === 'he' ? "אנשי שיווק ויחסי ציבור" : 
                           "Marketers and PR specialists"}
                        </li>
                        <li className="flex items-center">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          {language === 'en' ? "Designers and developers" : 
                           language === 'es' ? "Diseñadores y desarrolladores" :
                           language === 'uk' ? "Дизайнери та розробники" :
                           language === 'he' ? "מעצבים ומפתחים" : 
                           "Designers and developers"}
                        </li>
                        <li className="flex items-center">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          {language === 'en' ? "Psychologists and teachers" : 
                           language === 'es' ? "Psicólogos y profesores" :
                           language === 'uk' ? "Психологи та вчителі" :
                           language === 'he' ? "פסיכולוגים ומורים" : 
                           "Psychologists and teachers"}
                        </li>
                        <li className="flex items-center">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          {language === 'en' ? "Lawyers, doctors, partnership managers" : 
                           language === 'es' ? "Abogados, médicos, gerentes de asociaciones" :
                           language === 'uk' ? "Юристи, лікарі, менеджери з партнерства" :
                           language === 'he' ? "עורכי דין, רופאים, מנהלי שותפויות" : 
                           "Lawyers, doctors, partnership managers"}
                        </li>
                      </ul>
                    </div>
                    </div>
                    
                  {/* Ways to Help */}
                  <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                    <div className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Heart className="w-6 h-6 text-blue-600" />
                          </div>
                      <h3 className="text-xl font-semibold mb-3">
                        {language === 'en' ? "How you can help" : 
                         language === 'es' ? "Cómo puedes ayudar" :
                         language === 'uk' ? "Як ви можете допомогти" :
                         language === 'he' ? "איך אתם יכולים לעזור" : 
                         "How you can help"}
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          {language === 'en' ? "Help with texts, websites, projects, logistics" : 
                           language === 'es' ? "Ayuda con textos, sitios web, proyectos, logística" :
                           language === 'uk' ? "Допомога з текстами, сайтами, проектами, логістикою" :
                           language === 'he' ? "עזרה עם טקסטים, אתרים, פרויקטים, לוגיסטיקה" : 
                           "Help with texts, websites, projects, logistics"}
                        </li>
                        <li className="flex items-center">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          {language === 'en' ? "Participation in programs for orphanages" : 
                           language === 'es' ? "Participación en programas para orfanatos" :
                           language === 'uk' ? "Участь у програмах для дитячих будинків" :
                           language === 'he' ? "השתתפות בתוכניות לבתי יתומים" : 
                           "Participation in programs for orphanages"}
                        </li>
                        <li className="flex items-center">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          {language === 'en' ? "Accompanying children in hospitals" : 
                           language === 'es' ? "Acompañamiento de niños en hospitales" :
                           language === 'uk' ? "Супровід дітей у лікарнях" :
                           language === 'he' ? "ליווי ילדים בבתי חולים" : 
                           "Accompanying children in hospitals"}
                        </li>
                        <li className="flex items-center">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          {language === 'en' ? "Conducting creative and educational activities" : 
                           language === 'es' ? "Realización de actividades creativas y educativas" :
                           language === 'uk' ? "Проведення творчих та освітніх заходів" :
                           language === 'he' ? "העברת פעילויות יצירתיות וחינוכיות" : 
                           "Conducting creative and educational activities"}
                        </li>
                      </ul>
                      </div>
                    </div>
                    
                  {/* Participation Formats */}
                  <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                    <div className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Globe className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">
                        {language === 'en' ? "Formats of participation" : 
                         language === 'es' ? "Formatos de participación" :
                         language === 'uk' ? "Формати участі" :
                         language === 'he' ? "אופני השתתפות" : 
                         "Formats of participation"}
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          {language === 'en' ? "Long-term volunteering" : 
                           language === 'es' ? "Voluntariado a largo plazo" :
                           language === 'uk' ? "Довгострокове волонтерство" :
                           language === 'he' ? "התנדבות ארוכת טווח" : 
                           "Long-term volunteering"}
                        </li>
                        <li className="flex items-center">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          {language === 'en' ? "One-time tasks (events, specific projects)" : 
                           language === 'es' ? "Tareas puntuales (eventos, proyectos específicos)" :
                           language === 'uk' ? "Разові завдання (події, конкретні проекти)" :
                           language === 'he' ? "משימות חד פעמיות (אירועים, פרויקטים ספציפיים)" : 
                           "One-time tasks (events, specific projects)"}
                        </li>
                        <li className="flex items-center">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          {language === 'en' ? "Online volunteering from anywhere in the world" : 
                           language === 'es' ? "Voluntariado en línea desde cualquier parte del mundo" :
                           language === 'uk' ? "Онлайн-волонтерство з будь-якої точки світу" :
                           language === 'he' ? "התנדבות מקוונת מכל מקום בעולם" : 
                           "Online volunteering from anywhere in the world"}
                        </li>
                      </ul>
                    </div>
                  </div>
                    </div>
                    
                {/* How It Works */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 mb-16">
                  <h3 className="text-2xl font-bold mb-8 text-center">
                    {language === 'en' ? "How it works" : 
                     language === 'es' ? "Cómo funciona" :
                     language === 'uk' ? "Як це працює" :
                     language === 'he' ? "איך זה עובד" : 
                     "How it works"}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative bg-white rounded-lg p-6">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                          <span className="text-xl font-bold text-primary">1</span>
                    </div>
                        <p className="text-gray-600">
                          {language === 'en' ? 
                            "Each volunteer is accompanied by a coordinator" :
                           language === 'es' ? 
                            "Cada voluntario está acompañado por un coordinador" :
                           language === 'uk' ? 
                            "Кожного волонтера супроводжує координатор" :
                           language === 'he' ? 
                            "כל מתנדב מלווה על ידי מתאם" : 
                            "Each volunteer is accompanied by a coordinator"}
                        </p>
                  </div>
                      </div>
                      
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative bg-white rounded-lg p-6">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                          <span className="text-xl font-bold text-primary">2</span>
                      </div>
                        <p className="text-gray-600">
                          {language === 'en' ? 
                            "At the beginning — a short introduction, explanation of the format, goals, and tasks" :
                           language === 'es' ? 
                            "Al principio — una breve introducción, explicación del formato, objetivos y tareas" :
                           language === 'uk' ? 
                            "На початку — коротке знайомство, пояснення формату, цілей та завдань" :
                           language === 'he' ? 
                            "בהתחלה - היכרות קצרה, הסבר על הפורמט, המטרות והמשימות" : 
                            "At the beginning — a short introduction, explanation of the format, goals, and tasks"}
                        </p>
                      </div>
                      </div>
                      
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative bg-white rounded-lg p-6">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                          <span className="text-xl font-bold text-primary">3</span>
                        </div>
                        <p className="text-gray-600">
                          {language === 'en' ? 
                            "Feedback and respect for personal boundaries are mandatory" :
                           language === 'es' ? 
                            "La retroalimentación y el respeto por los límites personales son obligatorios" :
                           language === 'uk' ? 
                            "Зворотній зв'язок та повага до особистих меж обов'язкові" :
                           language === 'he' ? 
                            "משוב וכבוד לגבולות אישיים הם חובה" : 
                            "Feedback and respect for personal boundaries are mandatory"}
                        </p>
                      </div>
                    </div>
                      </div>
                    </div>
                    
                {/* Join Us Form */}
                <div className="max-w-2xl mx-auto">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-6 text-center">
                        {language === 'en' ? "Want to join?" : 
                         language === 'es' ? "¿Quieres unirte?" :
                         language === 'uk' ? "Хочеш приєднатися?" :
                         language === 'he' ? "רוצה להצטרף?" : 
                         "Want to join?"}
                      </h3>
                      
                      <div className="flex flex-col items-center justify-center space-y-6 py-8">
                        <div className="text-center">
                          <p className="text-lg mb-6">
                            {language === 'en' 
                              ? "If you would like to help as a volunteer, please call us:" 
                              : language === 'es' 
                              ? "Si desea ayudar como voluntario, llámenos:"
                              : language === 'uk' 
                              ? "Якщо ви хочете допомогти як волонтер, будь ласка, зателефонуйте нам:"
                              : language === 'he'
                              ? "אם ברצונך לעזור כמתנדב, אנא התקשר אלינו:"
                              : "If you would like to help as a volunteer, please call us:"}
                          </p>
                          <div className="bg-primary/10 rounded-lg p-6 inline-block mb-6">
                            <p className="text-2xl font-bold text-primary">+380961727085</p>
                          </div>
                          
                          <div className="mt-8">
                            <h4 className="text-lg font-medium mb-2">
                              {language === 'en' 
                                ? "Office Address:" 
                                : language === 'es' 
                                ? "Dirección de la oficina:"
                                : language === 'uk' 
                                ? "Адреса офісу:"
                                : language === 'he'
                                ? "כתובת המשרד:"
                                : "Office Address:"}
                            </h4>
                            <p className="text-lg font-semibold mb-2">Ярославская 58</p>
                            <p className="text-sm text-gray-600 italic mb-2">
                              {language === 'en' 
                                ? "Visits by appointment only" 
                                : language === 'es' 
                                ? "Visitas solo con cita previa"
                                : language === 'uk' 
                                ? "Відвідування тільки за попередньою домовленістю"
                                : language === 'he'
                                ? "ביקורים בתיאום מראש בלבד"
                                : "Visits by appointment only"}
                            </p>
                            <p className="text-sm text-gray-600 italic">
                              {language === 'en' 
                                ? "Closed on Saturday and Sunday" 
                                : language === 'es' 
                                ? "Cerrado sábados y domingos"
                                : language === 'uk' 
                                ? "У суботу та неділю не працюємо"
                                : language === 'he'
                                ? "סגור בשבת וראשון"
                                : "Closed on Saturday and Sunday"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="partners" id="partnership">
              <SectionHeading 
                title={
                  language === 'en' ? "Sponsorship" : 
                  language === 'es' ? "Patrocinio" :
                  language === 'uk' ? "Спонсорство" :
                  language === 'he' ? "חסות" : 
                  "Sponsorship"
                } 
                subtitle={
                  language === 'en' ? "Through businesses and private partners, CrossCharity implements systematic support for children" : 
                  language === 'es' ? "A través de empresas y socios privados, CrossCharity implementa apoyo sistemático para niños" :
                  language === 'uk' ? "Завдяки бізнесам та приватним партнерам CrossCharity реалізує системну підтримку дітей" :
                  language === 'he' ? "באמצעות עסקים ושותפים פרטיים, CrossCharity מיישמת תמיכה שיטתית בילדים" : 
                  "Through businesses and private partners, CrossCharity implements systematic support for children"
                }
              />
              
              {/* Hero Section */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500 to-primary p-8 md:p-12 mb-12 mt-10">
                <div className="relative z-10 max-w-3xl">
                  <p className="text-white/90 text-lg md:text-xl">
                    {language === 'en' ? 
                      "Sponsorship is not just help. It's an investment in stability, development, and confidence in tomorrow. If this approach resonates with you — let's get acquainted." :
                     language === 'es' ? 
                      "El patrocinio no es solo ayuda. Es una inversión en estabilidad, desarrollo y confianza en el mañana. Si este enfoque resuena con usted, conozcámonos." :
                     language === 'uk' ? 
                      "Спонсорство — це не просто допомога. Це вклад у стабільність, розвиток і впевненість у завтрашньому дні. Якщо вам близький такий підхід — давайте знайомитися." :
                     language === 'he' ? 
                      "חסות אינה רק עזרה. זו השקעה ביציבות, בפיתוח ובביטחון במחר. אם גישה זו מהדהדת אצלך - בוא נכיר." : 
                      "Sponsorship is not just help. It's an investment in stability, development, and confidence in tomorrow."
                    }
                  </p>
                </div>
                <div className="absolute right-0 bottom-0 opacity-10">
                  <svg className="w-64 h-64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 5H5V19H19V5Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
              
              <div id="sponsorship-details" className="mb-12">
                {/* Introduction Section */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {language === 'en' ? 
                      "Entrepreneurs often talk about how important it is not only to earn, but also to share. Helping is not a one-time action. It's part of maturity, a priority, an internal mindset. One that is always felt — even if it's not shouted about." :
                     language === 'es' ? 
                      "Los empresarios a menudo hablan de lo importante que es no solo ganar, sino también compartir. Ayudar no es una acción puntual. Es parte de la madurez, una prioridad, una mentalidad interna. Una que siempre se siente, incluso si no se grita." :
                     language === 'uk' ? 
                      "Підприємці часто говорять, наскільки важливо не тільки заробляти, але й ділитися. Допомагати — це не разова акція. Це частина зрілості, пріоритет, внутрішня установка. Та, яка завжди відчувається — навіть якщо про неї не кричать." :
                     language === 'he' ? 
                      "יזמים מדברים לעתים קרובות על כמה חשוב לא רק להרוויח, אלא גם לחלוק. לעזור זו לא פעולה חד פעמית. זה חלק מבגרות, עדיפות, גישה פנימית. כזו שתמיד מורגשת - גם אם לא צועקים עליה." : 
                      "Entrepreneurs often talk about how important it is not only to earn, but also to share."
                    }
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {language === 'en' ? 
                      "CrossCharity is a space where help becomes part of your routine, values, and reputation. Here you can not just transfer resources — here you can create meaning." :
                     language === 'es' ? 
                      "CrossCharity es un espacio donde la ayuda se convierte en parte de tu rutina, valores y reputación. Aquí no solo puedes transferir recursos, aquí puedes crear significado." :
                     language === 'uk' ? 
                      "CrossCharity — простір, де допомога стає частиною вашої рутини, цінностей та репутації. Тут можна не просто передати ресурси — тут можна створювати сенс." :
                     language === 'he' ? 
                      "CrossCharity הוא מרחב שבו עזרה הופכת לחלק מהשגרה, הערכים והמוניטין שלך. כאן אתה יכול לא רק להעביר משאבים - כאן אתה יכול ליצור משמעות." : 
                      "CrossCharity is a space where help becomes part of your routine, values, and reputation."
                    }
                  </p>
                    </div>
                    
                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                  {/* Why It's Important */}
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md p-8">
                    <h3 className="font-playfair font-semibold text-2xl mb-4 text-primary">
                      {language === 'en' ? "Why this is important" : 
                       language === 'es' ? "Por qué esto es importante" :
                       language === 'uk' ? "Чому це важливо" :
                       language === 'he' ? "למה זה חשוב" : 
                       "Why this is important"}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {language === 'en' ? 
                        "CrossCharity focuses on children. Children living in orphanages. And children undergoing treatment for cancer." :
                       language === 'es' ? 
                        "CrossCharity se centra en los niños. Niños que viven en orfanatos. Y niños sometidos a tratamiento contra el cáncer." :
                       language === 'uk' ? 
                        "В фокусі CrossCharity — діти. Діти, які живуть у дитячих будинках. І діти, які проходять лікування від онкології." :
                       language === 'he' ? 
                        "CrossCharity מתמקדת בילדים. ילדים החיים בבתי יתומים. וילדים העוברים טיפול בסרטן." : 
                        "CrossCharity focuses on children. Children living in orphanages. And children undergoing treatment for cancer."
                      }
                    </p>
                    <p className="text-gray-700">
                      {language === 'en' ? 
                        "They are outside of politics. Outside of noise. Outside of breaking news. But they also need someone nearby. Not once — but constantly." :
                       language === 'es' ? 
                        "Están fuera de la política. Fuera del ruido. Fuera de las noticias de última hora. Pero también necesitan a alguien cerca. No una vez, sino constantemente." :
                       language === 'uk' ? 
                        "Вони поза політикою. Поза шумом. Поза гучними новинами. Але їм також потрібен хтось поруч. Не один раз — а постійно." :
                       language === 'he' ? 
                        "הם מחוץ לפוליטיקה. מחוץ לרעש. מחוץ לחדשות סנסציוניות. אבל גם הם צריכים מישהו קרוב. לא פעם אחת - אלא באופן קבוע." : 
                        "They are outside of politics. Outside of noise. Outside of breaking news. But they also need someone nearby. Not once — but constantly."
                      }
                    </p>
                    </div>
                    
                  {/* What Sponsorship Provides */}
                  <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl shadow-md p-8">
                    <h3 className="font-playfair font-semibold text-2xl mb-4 text-primary">
                      {language === 'en' ? "What sponsorship provides" : 
                       language === 'es' ? "Qué proporciona el patrocinio" :
                       language === 'uk' ? "Що дає спонсорство" :
                       language === 'he' ? "מה החסות מספקת" : 
                       "What sponsorship provides"}
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-3">
                          <Check className="h-4 w-4 text-primary" />
                          </div>
                        <p className="text-gray-700">
                          {language === 'en' ? "Participation in projects that are accountable" : 
                           language === 'es' ? "Participación en proyectos responsables" :
                           language === 'uk' ? "Участь у проектах, які є підзвітними" :
                           language === 'he' ? "השתתפות בפרויקטים הנושאים באחריות" : 
                           "Participation in projects that are accountable"}
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-3">
                          <Check className="h-4 w-4 text-primary" />
                      </div>
                        <p className="text-gray-700">
                          {language === 'en' ? "Opportunity to do good publicly and with dignity" : 
                           language === 'es' ? "Oportunidad de hacer el bien públicamente y con dignidad" :
                           language === 'uk' ? "Можливість робити добро публічно та гідно" :
                           language === 'he' ? "הזדמנות לעשות טוב בפומבי ובכבוד" : 
                           "Opportunity to do good publicly and with dignity"}
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-3">
                          <Check className="h-4 w-4 text-primary" />
                    </div>
                        <p className="text-gray-700">
                          {language === 'en' ? "Joint media stories, PR, and cases that reflect your values" : 
                           language === 'es' ? "Historias conjuntas en medios, PR y casos que reflejan tus valores" :
                           language === 'uk' ? "Спільні медіа-історії, PR та кейси, які відображають ваші цінності" :
                           language === 'he' ? "סיפורי מדיה משותפים, יחסי ציבור ומקרים המשקפים את הערכים שלך" : 
                           "Joint media stories, PR, and cases that reflect your values"}
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-3">
                          <Check className="h-4 w-4 text-primary" />
                          </div>
                        <p className="text-gray-700">
                          {language === 'en' ? "Packaging social initiatives for your brand" : 
                           language === 'es' ? "Empaquetado de iniciativas sociales para tu marca" :
                           language === 'uk' ? "Упаковку соціальних ініціатив для вашого бренду" :
                           language === 'he' ? "אריזת יוזמות חברתיות למותג שלך" : 
                           "Packaging social initiatives for your brand"}
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-3">
                          <Check className="h-4 w-4 text-primary" />
                      </div>
                        <p className="text-gray-700">
                          {language === 'en' ? "A space where you can be useful without unnecessary pathos" : 
                           language === 'es' ? "Un espacio donde puedes ser útil sin pathos innecesario" :
                           language === 'uk' ? "Простір, де можна бути корисним без зайвого пафосу" :
                           language === 'he' ? "מרחב בו אתה יכול להיות מועיל ללא פאתוס מיותר" : 
                           "A space where you can be useful without unnecessary pathos"}
                        </p>
                      </li>
                    </ul>
                    <p className="text-gray-500 italic mt-4 text-sm">
                      {language === 'en' ? "* Publicity by request" : 
                       language === 'es' ? "* Publicidad bajo petición" :
                       language === 'uk' ? "* Публічність за бажанням" :
                       language === 'he' ? "* פרסום לפי בקשה" : 
                       "* Publicity by request"}
                    </p>
                  </div>
                    </div>
                    
                {/* How It Works */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
                  <h3 className="font-playfair font-semibold text-2xl mb-6 text-primary text-center">
                    {language === 'en' ? "How it works" : 
                     language === 'es' ? "Cómo funciona" :
                     language === 'uk' ? "Як це працює" :
                     language === 'he' ? "איך זה עובד" : 
                     "How it works"}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="relative group h-full">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative bg-white rounded-lg p-6 h-full flex flex-col">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 flex-shrink-0">
                          <span className="text-xl font-bold text-primary">1</span>
                          </div>
                        <div className="flex-grow flex items-center">
                          <p className="text-gray-700">
                            {language === 'en' ? "Transparency at all stages" : 
                             language === 'es' ? "Transparencia en todas las etapas" :
                             language === 'uk' ? "Прозорість на всіх етапах" :
                             language === 'he' ? "שקיפות בכל השלבים" : 
                             "Transparency at all stages"}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative group h-full">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative bg-white rounded-lg p-6 h-full flex flex-col">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 flex-shrink-0">
                          <span className="text-xl font-bold text-primary">2</span>
                          </div>
                        <div className="flex-grow flex items-center">
                          <p className="text-gray-700">
                            {language === 'en' ? "Choice of formats from financing to integrations" : 
                             language === 'es' ? "Elección de formatos desde financiación hasta integraciones" :
                             language === 'uk' ? "Формати на вибір від фінансування до інтеграцій" :
                             language === 'he' ? "בחירת פורמטים ממימון ועד אינטגרציות" : 
                             "Choice of formats from financing to integrations"}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative group h-full">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative bg-white rounded-lg p-6 h-full flex flex-col">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 flex-shrink-0">
                          <span className="text-xl font-bold text-primary">3</span>
                        </div>
                        <div className="flex-grow flex items-center">
                          <p className="text-gray-700">
                            {language === 'en' ? "Simple communication, connect, discuss, choose your approach" : 
                             language === 'es' ? "Comunicación simple, conectar, discutir, elegir tu enfoque" :
                             language === 'uk' ? "Проста комунікація, можна зв'язатися, обговорити, вибрати своє" :
                             language === 'he' ? "תקשורת פשוטה, להתחבר, לדון, לבחור את הגישה שלך" : 
                             "Simple communication, connect, discuss, choose your approach"}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative group h-full">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative bg-white rounded-lg p-6 h-full flex flex-col">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 flex-shrink-0">
                          <span className="text-xl font-bold text-primary">4</span>
                        </div>
                        <div className="flex-grow flex items-center">
                          <p className="text-gray-700">
                            {language === 'en' ? "And, most importantly — the result that is always visible" : 
                             language === 'es' ? "Y, lo más importante — el resultado que siempre es visible" :
                             language === 'uk' ? "І, найголовніше — результат, який завжди видно" :
                             language === 'he' ? "והכי חשוב - התוצאה שתמיד נראית" : 
                             "And, most importantly — the result that is always visible"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-center text-gray-700 italic mt-8">
                    {language === 'en' ? 
                      "Because the warmth invested in children never remains in the shadows." :
                     language === 'es' ? 
                      "Porque el calor invertido en los niños nunca permanece en las sombras." :
                     language === 'uk' ? 
                      "Тому що тепло, вкладене в дітей, ніколи не залишається в тіні." :
                     language === 'he' ? 
                      "כי החום המושקע בילדים לעולם אינו נשאר בצל." : 
                      "Because the warmth invested in children never remains in the shadows."
                    }
                  </p>
                </div>
                
                {/* Contact */}
                <div className="p-8 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl max-w-md mx-auto text-center">
                  <h3 className="font-medium text-xl mb-3 text-primary">
                    {language === 'en' ? "Contact us" : 
                     language === 'es' ? "Contáctenos" :
                     language === 'uk' ? "Зв'яжіться з нами" :
                     language === 'he' ? "צור קשר" : 
                     "Contact us"}
                  </h3>
                  <p className="text-lg text-gray-700">+380 93 729 59 66 (Anastasia)</p>
                  
                  <div className="mt-6">
                    <Button 
                      className="bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                    >
                      {language === 'en' ? "Become a sponsor" : 
                       language === 'es' ? "Convertirse en patrocinador" :
                       language === 'uk' ? "Стати спонсором" :
                       language === 'he' ? "להיות ספונסר" : 
                       "Become a sponsor"}
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="fundraising" id="fundraising">
              <SectionHeading 
                title={
                  language === 'en' ? "Fundraising" : 
                  language === 'es' ? "Recaudación de fondos" :
                  language === 'uk' ? "Збір коштів" :
                  language === 'he' ? "גיוס כספים" : 
                  "Fundraising"
                } 
                subtitle={
                  language === 'en' ? "For businesses, brands, and teams — raise the needed amount together" : 
                  language === 'es' ? "Para empresas, marcas y equipos — recaudar la cantidad necesaria juntos" :
                  language === 'uk' ? "Для бізнесу, бренду, команди — зібрати потрібну суму разом" :
                  language === 'he' ? "לעסקים, מותגים וצוותים - לגייס יחד את הסכום הנדרש" : 
                  "For businesses, brands, and teams — raise the needed amount together"
                }
              />
              
              {/* Hero Banner */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 p-8 md:p-12 mb-12 mt-8">
                <div className="relative z-10 max-w-3xl">
                  <p className="text-white/90 text-lg md:text-xl mb-6">
                    {language === 'en' ? 
                      "For a specific goal, with clear communication and results. We help to package, explain, and launch." :
                     language === 'es' ? 
                      "Para un objetivo específico, con comunicación clara y resultados. Ayudamos a empaquetar, explicar y lanzar." :
                     language === 'uk' ? 
                      "На конкретну ціль, з зрозумілою комунікацією та результатом. Допомагаємо упакувати, розказати, запустити." :
                     language === 'he' ? 
                      "למטרה ספציפית, עם תקשורת ותוצאות ברורות. אנו עוזרים לארוז, להסביר ולהשיק." : 
                      "For a specific goal, with clear communication and results. We help to package, explain, and launch."
                    }
                  </p>
                  <button 
                    onClick={() => {
                      const fundraisingDetails = document.getElementById('fundraising-details');
                      if (fundraisingDetails) {
                        fundraisingDetails.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-amber-600 hover:bg-amber-700 hover:text-white transition-all duration-300 font-medium"
                  >
                    {language === 'en' ? "Learn more about fundraising" : 
                     language === 'es' ? "Más información sobre la recaudación de fondos" :
                     language === 'uk' ? "Дізнатися більше про збір коштів" :
                     language === 'he' ? "מידע נוסף על גיוס כספים" : 
                     "Learn more about fundraising"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                    </div>
                <div className="absolute right-0 bottom-0 opacity-10">
                  <svg className="w-64 h-64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1L17 6H7L12 1Z" fill="currentColor" />
                    <path d="M17 6V16C17 17.1046 16.1046 18 15 18H9C7.89543 18 7 17.1046 7 16V6" fill="currentColor" />
                    <path d="M5 20H19V22H5V20Z" fill="currentColor" />
                  </svg>
                </div>
                  </div>
                  
              <div id="fundraising-details" className="mb-16">
                {/* What is Fundraising Section */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-12 transform transition-all duration-500 hover:shadow-xl">
                  <h3 className="font-playfair font-semibold text-2xl mb-6 text-amber-600 text-center">
                    {language === 'en' ? "Fundraising is not about \"chipping in for something\"" : 
                     language === 'es' ? "La recaudación de fondos no se trata de \"contribuir para algo\"" :
                     language === 'uk' ? "Збір — це не про «скинутися на щось»" :
                     language === 'he' ? "גיוס כספים אינו על \"תרומה למשהו\"" : 
                     "Fundraising is not about \"chipping in for something\""}
                  </h3>
                  
                  <div className="space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {language === 'en' ? 
                        "It's about joining forces for a specific goal. A company, brand, or team can launch their own fundraiser and close a specific need: medicines, technology, clothing, education, psychological help." :
                       language === 'es' ? 
                        "Se trata de unir fuerzas por un objetivo específico. Una empresa, marca o equipo puede lanzar su propia recaudación de fondos y cubrir una necesidad específica: medicinas, tecnología, ropa, educación, ayuda psicológica." :
                       language === 'uk' ? 
                        "Це про об'єднання зусиль заради точної мети. Компанія, бренд, команда — можуть запустити власний збір та закрити конкретну потребу: медикаменти, техніка, одяг, освіта, психологічна допомога." :
                       language === 'he' ? 
                        "זה על חיבור כוחות למטרה ספציפית. חברה, מותג או צוות יכולים להשיק את גיוס הכספים שלהם ולסגור צורך ספציפי: תרופות, טכנולוגיה, ביגוד, חינוך, עזרה פסיכולוגית." : 
                        "It's about joining forces for a specific goal."
                      }
                    </p>
                    
                    <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-500">
                      <h4 className="font-semibold text-lg mb-3 text-amber-700">
                        {language === 'en' ? "CrossCharity takes care of everything else:" : 
                         language === 'es' ? "CrossCharity se encarga de todo lo demás:" :
                         language === 'uk' ? "CrossCharity бере на себе все інше:" :
                         language === 'he' ? "CrossCharity מטפלת בכל השאר:" : 
                         "CrossCharity takes care of everything else:"}
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                            <Check className="h-4 w-4 text-amber-600" />
                          </div>
                          <span className="text-gray-700">
                            {language === 'en' ? "We select the goal and format" : 
                             language === 'es' ? "Seleccionamos el objetivo y formato" :
                             language === 'uk' ? "Підбираємо мету і формат" :
                             language === 'he' ? "אנו בוחרים את המטרה והפורמט" : 
                             "We select the goal and format"}
                          </span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                            <Check className="h-4 w-4 text-amber-600" />
                          </div>
                          <span className="text-gray-700">
                            {language === 'en' ? "We provide visuals, texts, links" : 
                             language === 'es' ? "Proporcionamos visuales, textos, enlaces" :
                             language === 'uk' ? "Даємо візуал, тексти, посилання" :
                             language === 'he' ? "אנו מספקים חומרים חזותיים, טקסטים, קישורים" : 
                             "We provide visuals, texts, links"}
                          </span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                            <Check className="h-4 w-4 text-amber-600" />
                          </div>
                          <span className="text-gray-700">
                            {language === 'en' ? "We accompany and consult throughout" : 
                             language === 'es' ? "Acompañamos y consultamos a lo largo del proceso" :
                             language === 'uk' ? "Супроводжуємо, консультуємо" :
                             language === 'he' ? "אנו מלווים ומייעצים לאורך כל הדרך" : 
                             "We accompany and consult throughout"}
                          </span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                            <Check className="h-4 w-4 text-amber-600" />
                          </div>
                          <span className="text-gray-700">
                            {language === 'en' ? "We show how it made an impact" : 
                             language === 'es' ? "Mostramos cómo impactó" :
                             language === 'uk' ? "Показуємо, як це вплинуло" :
                             language === 'he' ? "אנו מראים כיצד זה השפיע" : 
                             "We show how it made an impact"}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Who is it for Section */}
                <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl shadow-md p-8 mb-12">
                  <h3 className="font-playfair font-semibold text-2xl mb-6 text-amber-600">
                    {language === 'en' ? "Who is it for" : 
                     language === 'es' ? "Para quién es" :
                     language === 'uk' ? "Кому це підійде" :
                     language === 'he' ? "למי זה מתאים" : 
                     "Who is it for"}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="flex items-start mb-4">
                        <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-4 flex-shrink-0">
                          <Heart className="h-5 w-5 text-amber-600" />
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          {language === 'en' ? 
                            "Brands with an audience and desire to do good" :
                           language === 'es' ? 
                            "Marcas con audiencia y deseo de hacer el bien" :
                           language === 'uk' ? 
                            "Брендам, у яких є аудиторія та бажання робити добро" :
                           language === 'he' ? 
                            "מותגים עם קהל ורצון לעשות טוב" : 
                            "Brands with an audience and desire to do good"
                          }
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="flex items-start mb-4">
                        <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-4 flex-shrink-0">
                          <Building className="h-5 w-5 text-amber-600" />
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          {language === 'en' ? 
                            "Companies that value team involvement and meaning" :
                           language === 'es' ? 
                            "Empresas que valoran la participación del equipo y el significado" :
                           language === 'uk' ? 
                            "Компаніям, які цінують командне залучення та сенс" :
                           language === 'he' ? 
                            "חברות המעריכות מעורבות צוותית ומשמעות" : 
                            "Companies that value team involvement and meaning"
                          }
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="flex items-start mb-4">
                        <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-4 flex-shrink-0">
                          <Users className="h-5 w-5 text-amber-600" />
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          {language === 'en' ? 
                            "Friends, families, communities who want to raise money for something important" :
                           language === 'es' ? 
                            "Amigos, familias, comunidades que quieren recaudar dinero para algo importante" :
                           language === 'uk' ? 
                            "Друзям, сім'ям, спільнотам, які хочуть зібрати на щось важливе" :
                           language === 'he' ? 
                            "חברים, משפחות, קהילות שרוצים לגייס כסף למשהו חשוב" : 
                            "Friends, families, communities who want to raise money for something important"
                          }
                        </p>
                      </div>
                  </div>
                  
                    <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="flex items-start mb-4">
                        <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-4 flex-shrink-0">
                          <Globe className="h-5 w-5 text-amber-600" />
                  </div>
                        <p className="text-gray-700 leading-relaxed">
                          {language === 'en' ? 
                            "Opinion leaders, influencers, and creators who want to engage their audience in social projects" :
                           language === 'es' ? 
                            "Líderes de opinión, influencers y creadores que quieren involucrar a su audiencia en proyectos sociales" :
                           language === 'uk' ? 
                            "Лідерам думок, інфлюенсерам та креаторам, які хочуть залучити аудиторію в соціальні проекти" :
                           language === 'he' ? 
                            "מובילי דעה, משפיענים ויוצרים הרוצים לערב את הקהל שלהם בפרויקטים חברתיים" : 
                            "Opinion leaders, influencers, and creators who want to engage their audience in social projects"
                          }
                        </p>
                </div>
              </div>
                  </div>
                </div>
                
                {/* Fundraising Process */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
                  <h3 className="font-playfair font-semibold text-2xl mb-10 text-amber-600 text-center">
                    {language === 'en' ? "Fundraising Process" : 
                     language === 'es' ? "Proceso de recaudación de fondos" :
                     language === 'uk' ? "Як проходить збір" :
                     language === 'he' ? "תהליך גיוס הכספים" : 
                     "Fundraising Process"}
                  </h3>
                  
                  <div className="relative">
                    {/* Timeline connector */}
                    <div className="absolute left-[39px] top-0 bottom-0 w-1 bg-amber-200 hidden md:block"></div>
                    
                    <div className="space-y-12">
                      {/* Stage 1 */}
                      <div className="relative md:pl-24">
                        <div className="absolute left-0 top-0 w-20 h-20 rounded-full bg-amber-100 flex flex-col items-center justify-center hidden md:flex">
                          <span className="text-3xl font-bold text-amber-500">1</span>
                          <span className="text-xs text-amber-700 font-medium">Stage</span>
                    </div>
                        
                        <div className="bg-amber-50 rounded-lg p-6 transform transition-all duration-300 hover:shadow-md ml-0 md:ml-6">
                          <div className="flex items-center md:hidden mb-4">
                            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                              <span className="text-xl font-bold text-amber-500">1</span>
                            </div>
                            <h4 className="font-semibold text-xl text-amber-700">
                              {language === 'en' ? "Meeting/Call" : 
                               language === 'es' ? "Reunión/Llamada" :
                               language === 'uk' ? "Зустріч/дзвінок" :
                               language === 'he' ? "פגישה/שיחה" : 
                               "Meeting/Call"}
                            </h4>
                  </div>
                  
                          <h4 className="font-semibold text-xl text-amber-700 hidden md:block mb-3">
                            {language === 'en' ? "Meeting/Call" : 
                             language === 'es' ? "Reunión/Llamada" :
                             language === 'uk' ? "Зустріч/дзвінок" :
                             language === 'he' ? "פגישה/שיחה" : 
                             "Meeting/Call"}
                          </h4>
                          
                          <p className="text-gray-700">
                            {language === 'en' ? 
                              "We briefly explain how you can help. We listen to how you would like to be useful." :
                             language === 'es' ? 
                              "Explicamos brevemente cómo puede ayudar. Escuchamos cómo le gustaría ser útil." :
                             language === 'uk' ? 
                              "Коротко розказуємо, як можна допомогти. Слухаємо, чим хочете бути корисні." :
                             language === 'he' ? 
                              "אנו מסבירים בקצרה כיצד ניתן לעזור. אנו מקשיבים לאיך הייתם רוצים להיות שימושיים." : 
                              "We briefly explain how you can help. We listen to how you would like to be useful."
                            }
                          </p>
                        </div>
                    </div>
                    
                      {/* Stage 2 */}
                      <div className="relative md:pl-24">
                        <div className="absolute left-0 top-0 w-20 h-20 rounded-full bg-amber-100 flex flex-col items-center justify-center hidden md:flex">
                          <span className="text-3xl font-bold text-amber-500">2</span>
                          <span className="text-xs text-amber-700 font-medium">Stage</span>
                    </div>
                    
                        <div className="bg-amber-50 rounded-lg p-6 transform transition-all duration-300 hover:shadow-md ml-0 md:ml-6">
                          <div className="flex items-center md:hidden mb-4">
                            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                              <span className="text-xl font-bold text-amber-500">2</span>
                            </div>
                            <h4 className="font-semibold text-xl text-amber-700">
                              {language === 'en' ? "Goal Selection" : 
                               language === 'es' ? "Selección de objetivo" :
                               language === 'uk' ? "Підбір мети" :
                               language === 'he' ? "בחירת מטרה" : 
                               "Goal Selection"}
                            </h4>
                    </div>
                    
                          <h4 className="font-semibold text-xl text-amber-700 hidden md:block mb-3">
                            {language === 'en' ? "Goal Selection" : 
                             language === 'es' ? "Selección de objetivo" :
                             language === 'uk' ? "Підбір мети" :
                             language === 'he' ? "בחירת מטרה" : 
                             "Goal Selection"}
                          </h4>
                          
                          <p className="text-gray-700">
                            {language === 'en' ? 
                              "You choose a direction: medicine, children in orphanages, technology, a specific story, etc." :
                             language === 'es' ? 
                              "Elige una dirección: medicina, niños en orfanatos, tecnología, una historia específica, etc." :
                             language === 'uk' ? 
                              "Вибираєте напрямок: медицина, діти в дитбудинках, техніка, конкретна історія тощо." :
                             language === 'he' ? 
                              "אתם בוחרים כיוון: רפואה, ילדים בבתי יתומים, טכנולוגיה, סיפור ספציפי וכו'." : 
                              "You choose a direction: medicine, children in orphanages, technology, a specific story, etc."
                            }
                          </p>
                        </div>
                    </div>
                    
                      {/* Stage 3 */}
                      <div className="relative md:pl-24">
                        <div className="absolute left-0 top-0 w-20 h-20 rounded-full bg-amber-100 flex flex-col items-center justify-center hidden md:flex">
                          <span className="text-3xl font-bold text-amber-500">3</span>
                          <span className="text-xs text-amber-700 font-medium">Stage</span>
                          </div>
                        
                        <div className="bg-amber-50 rounded-lg p-6 transform transition-all duration-300 hover:shadow-md ml-0 md:ml-6">
                          <div className="flex items-center md:hidden mb-4">
                            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                              <span className="text-xl font-bold text-amber-500">3</span>
                      </div>
                            <h4 className="font-semibold text-xl text-amber-700">
                              {language === 'en' ? "Packaging" : 
                               language === 'es' ? "Empaquetado" :
                               language === 'uk' ? "Упаковка" :
                               language === 'he' ? "אריזה" : 
                               "Packaging"}
                            </h4>
                    </div>
                    
                          <h4 className="font-semibold text-xl text-amber-700 hidden md:block mb-3">
                            {language === 'en' ? "Packaging" : 
                             language === 'es' ? "Empaquetado" :
                             language === 'uk' ? "Упаковка" :
                             language === 'he' ? "אריזה" : 
                             "Packaging"}
                          </h4>
                          
                          <p className="text-gray-700">
                            {language === 'en' ? 
                              "We prepare texts, visuals, links, QR codes — everything needed for launch." :
                             language === 'es' ? 
                              "Preparamos textos, visuales, enlaces, códigos QR: todo lo necesario para el lanzamiento." :
                             language === 'uk' ? 
                              "Готуємо тексти, візуал, посилання, QR-коди — все, що потрібно для старту." :
                             language === 'he' ? 
                              "אנו מכינים טקסטים, חומרים חזותיים, קישורים, קודי QR - כל מה שצריך להשקה." : 
                              "We prepare texts, visuals, links, QR codes — everything needed for launch."
                            }
                          </p>
                        </div>
                    </div>
                    
                      {/* Stage 4 */}
                      <div className="relative md:pl-24">
                        <div className="absolute left-0 top-0 w-20 h-20 rounded-full bg-amber-100 flex flex-col items-center justify-center hidden md:flex">
                          <span className="text-3xl font-bold text-amber-500">4</span>
                          <span className="text-xs text-amber-700 font-medium">Stage</span>
                        </div>
                        
                        <div className="bg-amber-50 rounded-lg p-6 transform transition-all duration-300 hover:shadow-md ml-0 md:ml-6">
                          <div className="flex items-center md:hidden mb-4">
                            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                              <span className="text-xl font-bold text-amber-500">4</span>
                    </div>
                            <h4 className="font-semibold text-xl text-amber-700">
                              {language === 'en' ? "Launch" : 
                               language === 'es' ? "Lanzamiento" :
                               language === 'uk' ? "Запуск" :
                               language === 'he' ? "השקה" : 
                               "Launch"}
                            </h4>
                  </div>
                  
                          <h4 className="font-semibold text-xl text-amber-700 hidden md:block mb-3">
                            {language === 'en' ? "Launch" : 
                             language === 'es' ? "Lanzamiento" :
                             language === 'uk' ? "Запуск" :
                             language === 'he' ? "השקה" : 
                             "Launch"}
                          </h4>
                          
                          <p className="text-gray-700">
                            {language === 'en' ? 
                              "You publish the fundraiser internally or publicly. We accompany, support, and share." :
                             language === 'es' ? 
                              "Publica la recaudación de fondos interna o públicamente. Nosotros acompañamos, apoyamos y compartimos." :
                             language === 'uk' ? 
                              "Публікуєте збір всередині команди або публічно. Ми супроводжуємо, підтримуємо, розповідаємо." :
                             language === 'he' ? 
                              "אתם מפרסמים את גיוס הכספים באופן פנימי או ציבורי. אנו מלווים, תומכים ומשתפים." : 
                              "You publish the fundraiser internally or publicly. We accompany, support, and share."
                            }
                          </p>
                        </div>
                  </div>
                  
                      {/* Stage 5 */}
                      <div className="relative md:pl-24">
                        <div className="absolute left-0 top-0 w-20 h-20 rounded-full bg-amber-100 flex flex-col items-center justify-center hidden md:flex">
                          <span className="text-3xl font-bold text-amber-500">5</span>
                          <span className="text-xs text-amber-700 font-medium">Stage</span>
                      </div>
                      
                        <div className="bg-amber-50 rounded-lg p-6 transform transition-all duration-300 hover:shadow-md ml-0 md:ml-6">
                          <div className="flex items-center md:hidden mb-4">
                            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                              <span className="text-xl font-bold text-amber-500">5</span>
                      </div>
                            <h4 className="font-semibold text-xl text-amber-700">
                              {language === 'en' ? "Report" : 
                               language === 'es' ? "Informe" :
                               language === 'uk' ? "Звіт" :
                               language === 'he' ? "דוח" : 
                               "Report"}
                            </h4>
                    </div>
                          
                          <h4 className="font-semibold text-xl text-amber-700 hidden md:block mb-3">
                            {language === 'en' ? "Report" : 
                             language === 'es' ? "Informe" :
                             language === 'uk' ? "Звіт" :
                             language === 'he' ? "דוח" : 
                             "Report"}
                          </h4>
                          
                          <p className="text-gray-700">
                            {language === 'en' ? 
                              "We show what has been achieved with photos, figures, and a short video or stories (if needed)." :
                             language === 'es' ? 
                              "Mostramos lo que se ha logrado con fotos, cifras y un video corto o historias (si es necesario)." :
                             language === 'uk' ? 
                              "Показуємо, що вийшло. З фото, цифрами, коротким відео або сторіс (якщо потрібно)." :
                             language === 'he' ? 
                              "אנו מראים את מה שהושג עם תמונות, נתונים וסרטון קצר או סיפורים (במידת הצורך)." : 
                              "We show what has been achieved with photos, figures, and a short video or stories (if needed)."
                            }
                          </p>
                  </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Closing Section */}
                <div className="text-center mb-12 p-8 bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl">
                  <h3 className="font-playfair font-semibold text-2xl mb-6 text-amber-700">
                    {language === 'en' ? "Fundraising is simple. And it's also wise." : 
                     language === 'es' ? "La recaudación de fondos es simple. Y también es sabia." :
                     language === 'uk' ? "Збір — це просто. А ще це мудро." :
                     language === 'he' ? "גיוס כספים הוא פשוט. וגם חכם." : 
                     "Fundraising is simple. And it's also wise."}
                  </h3>
                  
                  <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                    {language === 'en' ? 
                      "Fundraising can be formatted as a branded campaign, a news story, a social initiative, or an internal project. It works both for good and for the company's status. People within the team feel a sense of purpose. And externally — it's visible that you're genuinely involved." :
                     language === 'es' ? 
                      "La recaudación de fondos puede formatearse como una campaña de marca, una noticia, una iniciativa social o un proyecto interno. Funciona tanto para el bien como para el estatus de la empresa. Las personas dentro del equipo sienten un propósito. Y externamente, es visible que estás realmente involucrado." :
                     language === 'uk' ? 
                      "Збір можна оформити як брендовану акцію, інфопривід, соціальну історію, внутрішню ініціативу. Це працює і на добро, і на статус компанії. Люди всередині команди відчувають сенс. А ззовні — видно, що ви включені. По-справжньому." :
                     language === 'he' ? 
                      "ניתן לפרמט את גיוס הכספים כקמפיין ממותג, סיפור חדשותי, יוזמה חברתית או פרויקט פנימי. זה עובד גם לטובה וגם למעמד החברה. אנשים בתוך הצוות מרגישים תחושת מטרה. ומבחוץ - נראה שאתם מעורבים באמת." : 
                      "Fundraising can be formatted as a branded campaign, a news story, a social initiative, or an internal project. It works both for good and for the company's status. People within the team feel a sense of purpose. And externally — it's visible that you're genuinely involved."
                    }
                  </p>
                  
                  <Button 
                    className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg text-lg font-medium shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1"
                  >
                    {language === 'en' ? "Start Your Fundraiser" : 
                     language === 'es' ? "Iniciar su recaudación de fondos" :
                     language === 'uk' ? "Почати збір коштів" :
                     language === 'he' ? "התחל את גיוס הכספים שלך" : 
                     "Start Your Fundraiser"}
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </PageLayout>
  );
};

export default HowToHelp;

