import React from 'react';
import Link from 'next/link';
import { FiFileText, FiShield, FiBookOpen, FiDollarSign } from 'react-icons/fi';
import PageLayout from '@/components/layout/PageLayout';
import PageBanner from '@/components/ui/PageBanner';
import { useLanguage } from '@/contexts/LanguageContext';

const DocumentsIndex = () => {
  const { language } = useLanguage();

  const documents = [
    {
      title: {
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
      icon: <FiFileText className="w-12 h-12 text-primary" />,
      link: "/documents/AnnualReport"
    },
    {
      title: {
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
      icon: <FiShield className="w-12 h-12 text-primary" />,
      link: "/documents/ChildProtectionPolicy"
    },
    {
      title: {
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
      icon: <FiBookOpen className="w-12 h-12 text-primary" />,
      link: "/documents/OrganizationBylaws"
    },
    {
      title: {
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
      icon: <FiDollarSign className="w-12 h-12 text-primary" />,
      link: "/documents/FinancialStatements"
    }
  ];

  return (
    <PageLayout>
      <PageBanner 
        title={
          language === 'en' ? "Key Documents" : 
          language === 'es' ? "Documentos Clave" : 
          language === 'uk' ? "Ключові документи" : 
          "מסמכים מרכזיים"
        }
        subtitle={
          language === 'en' ? "Transparency and accountability in our operations" : 
          language === 'es' ? "Transparencia y responsabilidad en nuestras operaciones" : 
          language === 'uk' ? "Прозорість та підзвітність у нашій діяльності" : 
          "שקיפות ואחריותיות בפעילות שלנו"
        }
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <p className="text-gray-700 max-w-3xl mx-auto">
              {language === 'en' && "These documents provide insight into our governance, operations, and impact. We believe in being fully transparent about how we operate and use our resources to support children in need."}
              {language === 'es' && "Estos documentos proporcionan información sobre nuestra gobernanza, operaciones e impacto. Creemos en ser completamente transparentes sobre cómo operamos y usamos nuestros recursos para apoyar a los niños necesitados."}
              {language === 'uk' && "Ці документи дають уявлення про наше управління, діяльність та вплив. Ми віримо в повну прозорість того, як ми працюємо та використовуємо наші ресурси для підтримки дітей у потребі."}
              {language === 'he' && "מסמכים אלה מספקים תובנות לגבי הממשל, הפעילות וההשפעה שלנו. אנו מאמינים בשקיפות מלאה לגבי אופן הפעולה שלנו והשימוש במשאבים לתמיכה בילדים נזקקים."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {documents.map((doc, index) => (
              <Link href={doc.link} key={index} className="block">
                <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg hover:translate-y-[-2px] h-full flex flex-col">
                  <div className="mb-4 flex justify-center">{doc.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-center">
                    {doc.title[language]}
                  </h3>
                  <p className="text-gray-600 flex-grow">
                    {doc.description[language]}
                  </p>
                  <div className="mt-6 text-center">
                    <span className="inline-block px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition">
                      {language === 'en' ? "View Document" : 
                       language === 'es' ? "Ver Documento" : 
                       language === 'uk' ? "Переглянути документ" : 
                       "צפה במסמך"}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default DocumentsIndex; 