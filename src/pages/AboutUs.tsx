import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import PageBanner from '@/components/ui/PageBanner';
import SectionHeading from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { FileText, Shield, BookOpen, DollarSign } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { FiFileText, FiShield, FiBookOpen, FiDollarSign, FiEye } from 'react-icons/fi';

const AboutUs = () => {
  const { translate, language } = useLanguage();
  
  const staffMembers = [
    {
      name: "Luiza Shapiro",
      position: language === 'en' ? "Founder" : 
               language === 'es' ? "Fundadora" : 
               language === 'uk' ? "Засновниця" : 
               "מייסדת",
      description: language === 'en' ? "Visionary leader and founder of CrossCharity" : 
                   language === 'es' ? "Líder visionaria y fundadora de CrossCharity" : 
                   language === 'uk' ? "Візіонерка та засновниця CrossCharity" : 
                   "מנהיגה חזונית ומייסדת של CrossCharity",
      image: "/team/founder.JPG"
    },
    {
      name: "Boris Verchenko",
      position: language === 'en' ? "Financial Director" : 
                language === 'es' ? "Director Financiero" : 
                language === 'uk' ? "Фінансовий директор" : 
                "מנהל כספים",
      description: language === 'en' ? "Manages all financial aspects of the foundation" : 
                   language === 'es' ? "Gestiona todos los aspectos financieros de la fundación" : 
                   language === 'uk' ? "Керує всіма фінансовими аспектами фонду" : 
                   "מנהל את כל ההיבטים הפיננסיים של הקרן",
      image: "/team/finance_director.jpg"
    },
    {
      name: "Ekaterina Lisova",
      position: language === 'en' ? "Program Manager" : 
                language === 'es' ? "Gerente de Programas" : 
                language === 'uk' ? "Менеджер програм" : 
                "מנהלת תכניות",
      description: language === 'en' ? "Coordinates support programs and charitable initiatives" : 
                   language === 'es' ? "Coordina programas de apoyo e iniciativas benéficas" : 
                   language === 'uk' ? "Координує програми підтримки та благодійні ініціативи" : 
                   "מתאמת תכניות תמיכה ויוזמות צדקה",
      image: "/team/assistance_program_manager.jpg"
    },
    {
      name: "Anastasya Salienko",
      position: language === 'en' ? "Communication Manager" : 
                language === 'es' ? "Gerente de Comunicación" : 
                language === 'uk' ? "Менеджер комунікацій" : 
                "מנהלת תקשורת",
      description: language === 'en' ? "Handles external communications and public relations" : 
                   language === 'es' ? "Maneja las comunicaciones externas y las relaciones públicas" : 
                   language === 'uk' ? "Відповідає за зовнішні комунікації та зв'язки з громадськістю" : 
                   "מטפלת בתקשורת חיצונית ויחסי ציבור",
      image: "/team/Communication_manager.jpg"
    },
    {
      name: "Inna Anesova",
      position: language === 'en' ? "Fundraising Manager" : 
                language === 'es' ? "Gerente de Recaudación de Fondos" : 
                language === 'uk' ? "Менеджер з фандрейзингу" : 
                "מנהלת גיוס כספים",
      description: language === 'en' ? "Develops and implements fundraising strategies" : 
                   language === 'es' ? "Desarrolla e implementa estrategias de recaudación de fondos" : 
                   language === 'uk' ? "Розробляє та впроваджує стратегії фандрейзингу" : 
                   "מפתחת ומיישמת אסטרטגיות לגיוס כספים",
      image: "/team/Fundraising_Manager.jpg"
    },
    {
      name: "Ekaterina Illinskaya",
      position: language === 'en' ? "Volunteer Coordinator" : 
                language === 'es' ? "Coordinadora de Voluntarios" : 
                language === 'uk' ? "Координатор волонтерів" : 
                "רכזת מתנדבים",
      description: language === 'en' ? "Recruits and manages volunteer activities" : 
                   language === 'es' ? "Recluta y gestiona actividades de voluntariado" : 
                   language === 'uk' ? "Набирає та керує діяльністю волонтерів" : 
                   "מגייסת ומנהלת פעילויות התנדבות",
      image: "/team/Volunteer_Coordinator.jpg"
    },
    {
      name: "Artem Mirnov",
      position: language === 'en' ? "Coordinator" : 
                language === 'es' ? "Coordinador" : 
                language === 'uk' ? "Координатор" : 
                "מתאם",
      description: language === 'en' ? "Coordinates projects and ensures efficient operations" : 
                   language === 'es' ? "Coordina proyectos y garantiza operaciones eficientes" : 
                   language === 'uk' ? "Координує проекти та забезпечує ефективну роботу" : 
                   "מתאם פרויקטים ומבטיח פעילות יעילה",
      image: "/team/coordinator.jpg"
    },
    {
      name: "Evelina Zaharina",
      position: language === 'en' ? "System Administrator" : 
                language === 'es' ? "Administradora de Sistemas" : 
                language === 'uk' ? "Системний адміністратор" : 
                "מנהלת מערכת",
      description: language === 'en' ? "Maintains IT infrastructure and technical support" : 
                   language === 'es' ? "Mantiene la infraestructura de TI y soporte técnico" : 
                   language === 'uk' ? "Підтримує ІТ-інфраструктуру та технічну підтримку" : 
                   "מתחזקת תשתיות IT ותמיכה טכנית",
      image: "/team/system_admin.jpg"
    },
    {
      name: "Mikhail Risenberg",
      position: language === 'en' ? "Lawyer" : 
                language === 'es' ? "Abogado" : 
                language === 'uk' ? "Юрист" : 
                "עורך דין",
      description: language === 'en' ? "Provides legal advice and handles legal matters" : 
                   language === 'es' ? "Proporciona asesoramiento legal y maneja asuntos legales" : 
                   language === 'uk' ? "Надає юридичні консультації та вирішує правові питання" : 
                   "מספק ייעוץ משפטי ומטפל בעניינים משפטיים",
      image: "/team/lawyer.jpg"
    },
    {
      name: "Evgeniy Kirbaba",
      position: language === 'en' ? "Psychotherapist" : 
                language === 'es' ? "Psicoterapeuta" : 
                language === 'uk' ? "Психотерапевт" : 
                "פסיכותרפיסט",
      description: language === 'en' ? "Provides psychological support to children and staff" : 
                   language === 'es' ? "Proporciona apoyo psicológico a niños y personal" : 
                   language === 'uk' ? "Надає психологічну підтримку дітям та персоналу" : 
                   "מספק תמיכה פסיכולוגית לילדים וצוות",
      image: "/team/Psychotherapist.jpg"
    }
  ];

  const documents = [
    {
      name: {
        en: "Annual Report",
        es: "Informe Anual",
        uk: "Річний звіт",
        he: "דוח שנתי"
      },
      description: {
        en: "A comprehensive overview of our activities, achievements, and financial impact over the past year.",
        es: "Una visión integral de nuestras actividades, logros e impacto financiero durante el último año.",
        uk: "Комплексний огляд нашої діяльності, досягнень та фінансового впливу за минулий рік.",
        he: "סקירה מקיפה של הפעילויות, ההישגים וההשפעה הפיננסית שלנו בשנה האחרונה."
      },
      url: "/documents/annual-report"
    },
    {
      name: {
        en: "Child Protection Policy",
        es: "Política de Protección Infantil",
        uk: "Політика захисту дітей",
        he: "מדיניות הגנה על ילדים"
      },
      description: {
        en: "Our protocols and measures for ensuring the safety and well-being of all children under our care.",
        es: "Nuestros protocolos y medidas para garantizar la seguridad y el bienestar de todos los niños bajo nuestro cuidado.",
        uk: "Наші протоколи та заходи для забезпечення безпеки та благополуччя всіх дітей під нашою опікою.",
        he: "הפרוטוקולים והאמצעים שלנו להבטחת בטיחותם ורווחתם של כל הילדים תחת טיפולנו."
      },
      url: "/documents/child-protection-policy"
    },
    {
      name: {
        en: "Organization Bylaws",
        es: "Estatutos de la Organización",
        uk: "Статут організації",
        he: "תקנון הארגון"
      },
      description: {
        en: "The governance structure and operational framework that guides our foundation's activities and decision-making.",
        es: "La estructura de gobierno y el marco operativo que guía las actividades y la toma de decisiones de nuestra fundación.",
        uk: "Структура управління та операційна основа, яка керує діяльністю та прийняттям рішень нашого фонду.",
        he: "מבנה הממשל והמסגרת התפעולית המנחים את פעילויות קבלת ההחלטות של הקרן שלנו."
      },
      url: "/documents/organization-bylaws"
    },
    {
      name: {
        en: "Financial Statements",
        es: "Estados Financieros",
        uk: "Фінансова звітність",
        he: "דוחות כספיים"
      },
      description: {
        en: "Transparent reporting of our financial operations, income sources, and resource allocation.",
        es: "Informes transparentes de nuestras operaciones financieras, fuentes de ingresos y asignación de recursos.",
        uk: "Прозора звітність про наші фінансові операції, джерела доходу та розподіл ресурсів.",
        he: "דיווח שקוף על הפעילות הפיננסית שלנו, מקורות הכנסה והקצאת משאבים."
      },
      url: "/documents/financial-statements"
    }
  ];

  return (
    <PageLayout>
      <PageBanner 
        title={translate('aboutPage.title')}
        subtitle={translate('aboutPage.subtitle')}
      />

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title={translate('aboutPage.history.title')}
                subtitle={translate('aboutPage.history.subtitle')}
                centered={false}
              />
              <p className="text-gray-700 mb-4">
                {translate('aboutPage.history.paragraph1')}
              </p>
              <p className="text-gray-700 mb-4">
                {translate('aboutPage.history.paragraph2')}
              </p>
              <p className="text-gray-700 mb-4">
                {translate('aboutPage.history.paragraph3')}
              </p>
              <p className="text-gray-700 mb-4">
                {translate('aboutPage.history.paragraph4')}
              </p>
              <p className="text-gray-700 mb-4">
                {translate('aboutPage.history.paragraph5')}
              </p>
              <p className="text-gray-700 mb-4">
                {translate('aboutPage.history.paragraph6')}
              </p>
              <p className="text-gray-700">
                {translate('aboutPage.history.paragraph7')}
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/team/founder.JPG" 
                alt="CrossCharity Founder" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title={translate('aboutUs.values.title')}
            subtitle={translate('aboutUs.values.subtitle')}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-playfair font-semibold text-xl mb-3 text-primary">{translate('aboutUs.values.respect.title')}</h3>
              <p className="text-gray-700">{translate('aboutUs.values.respect.description')}</p>
            </Card>
            
            <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-playfair font-semibold text-xl mb-3 text-primary">{translate('aboutUs.values.transparency.title')}</h3>
              <p className="text-gray-700">{translate('aboutUs.values.transparency.description')}</p>
            </Card>
            
            <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-playfair font-semibold text-xl mb-3 text-primary">{translate('aboutUs.values.action.title')}</h3>
              <p className="text-gray-700">{translate('aboutUs.values.action.description')}</p>
            </Card>
            
            <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-playfair font-semibold text-xl mb-3 text-primary">{translate('aboutUs.values.systematic.title')}</h3>
              <p className="text-gray-700">{translate('aboutUs.values.systematic.description')}</p>
            </Card>
            
            <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-playfair font-semibold text-xl mb-3 text-primary">{translate('aboutUs.values.humanity.title')}</h3>
              <p className="text-gray-700">{translate('aboutUs.values.humanity.description')}</p>
            </Card>
            
            <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-playfair font-semibold text-xl mb-3 text-primary">{translate('aboutUs.values.diversity.title')}</h3>
              <p className="text-gray-700">{translate('aboutUs.values.diversity.description')}</p>
            </Card>
            
            <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300 lg:col-start-2">
              <h3 className="font-playfair font-semibold text-xl mb-3 text-primary">{translate('aboutUs.values.community.title')}</h3>
              <p className="text-gray-700">{translate('aboutUs.values.community.description')}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-gradient-to-br from-primary-100 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-playfair text-3xl font-semibold text-primary mb-4">{translate('founder.story.title')}</h2>
              <h3 className="text-xl text-gray-600 mb-6">{translate('founder.story.subtitle')}</h3>
              <p className="text-gray-700 mb-6">
                {translate('founder.story.content')}
              </p>
            </div>
            <div className="order-1 md:order-2 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/team/founder.JPG" 
                alt={`${translate('founder.name')} - ${translate('founder.title')}`} 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title={translate('aboutPage.team.title')}
            subtitle={translate('aboutPage.team.subtitle')}
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mt-10">
            {staffMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="rounded-full w-32 h-32 sm:w-36 sm:h-36 mx-auto overflow-hidden mb-4 border-4 border-white shadow-md">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-playfair font-semibold text-lg md:text-xl mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-2 text-sm md:text-base">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Documents section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl font-bold text-center mb-8">
            {translate('aboutPage.documents.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="/documents/AnnualReport" className="block bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg">
              <div className="mb-4">
                <FiFileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">
                {translate('aboutPage.documents.annual')}
              </h3>
              <p className="text-gray-600 text-sm">
                {translate('aboutPage.documents.annualDesc')}
              </p>
            </a>
            <a href="/documents/ChildProtectionPolicy" className="block bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg">
              <div className="mb-4">
                <FiShield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">
                {translate('aboutPage.documents.protection')}
              </h3>
              <p className="text-gray-600 text-sm">
                {translate('aboutPage.documents.protectionDesc')}
              </p>
            </a>
            <a href="/documents/OrganizationBylaws" className="block bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg">
              <div className="mb-4">
                <FiBookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">
                {translate('aboutPage.documents.bylaws')}
              </h3>
              <p className="text-gray-600 text-sm">
                {translate('aboutPage.documents.bylawsDesc')}
              </p>
            </a>
            <a href="/documents/FinancialStatements" className="block bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg">
              <div className="mb-4">
                <FiDollarSign className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">
                {translate('aboutPage.documents.financial')}
              </h3>
              <p className="text-gray-600 text-sm">
                {translate('aboutPage.documents.financialDesc')}
              </p>
            </a>
          </div>
          <div className="text-center mt-8">
            <a href="/documents" className="inline-block px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition">
              {translate('aboutPage.documents.viewAll')}
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutUs;
