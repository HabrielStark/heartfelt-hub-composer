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
              <p className="text-gray-700">
                {translate('aboutPage.history.paragraph3')}
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1617191979507-967792787a51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="HeartfeltHome History" 
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
            title={language === 'en' ? "Our Values" : "Наши ценности"}
            subtitle={language === 'en' ? "What guides us in our work" : "Что направляет нас в нашей работе"}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-playfair font-semibold text-xl mb-3 text-primary">{language === 'en' ? "Respect" : "Повага"}</h3>
              <p className="text-gray-700">{language === 'en' ? "Every child matters as an individual." : "Каждый ребёнок важен как личность."}</p>
            </Card>
            
            <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-playfair font-semibold text-xl mb-3 text-primary">{language === 'en' ? "Transparency" : "Прозорість"}</h3>
              <p className="text-gray-700">{language === 'en' ? "Accountability and trust." : "Отчётность и доверие."}</p>
            </Card>
            
            <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-playfair font-semibold text-xl mb-3 text-primary">{language === 'en' ? "Action, not emotion" : "Дія, а не емоція"}</h3>
              <p className="text-gray-700">{language === 'en' ? "Not pity, but solutions." : "Не жаль, а решение."}</p>
            </Card>
            
            <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-playfair font-semibold text-xl mb-3 text-primary">{language === 'en' ? "Systematic approach" : "Системність"}</h3>
              <p className="text-gray-700">{language === 'en' ? "Not one-time, but stable." : "Не разово, а стабильно."}</p>
            </Card>
            
            <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-playfair font-semibold text-xl mb-3 text-primary">{language === 'en' ? "Humanity" : "Людяність"}</h3>
              <p className="text-gray-700">{language === 'en' ? "Support with warmth." : "Поддержка с теплом."}</p>
            </Card>
            
            <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-playfair font-semibold text-xl mb-3 text-primary">{language === 'en' ? "Diversity" : "Різноманіття"}</h3>
              <p className="text-gray-700">{language === 'en' ? "Help for all children without exceptions." : "Помощь всем детям без исключений."}</p>
            </Card>
            
            <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300 lg:col-start-2">
              <h3 className="font-playfair font-semibold text-xl mb-3 text-primary">{language === 'en' ? "Community" : "Спільність"}</h3>
              <p className="text-gray-700">{language === 'en' ? "The foundation is built together." : "Фонд строится вместе."}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/team/founder.JPG" 
                alt="Louisa - Founder" 
                className="w-full h-auto"
              />
            </div>
            <div>
              <SectionHeading 
                title={language === 'en' ? "Louisa — Founder of the Foundation" : "Луїза — основательница фонда"}
                subtitle={language === 'en' ? "A personal story of dedication" : "Личная история самоотдачи"}
                centered={false}
              />
              <p className="text-gray-700 mb-4">
                {language === 'en' && 
                  "Since childhood, I felt how important it is when someone cares for you. I was drawn to those who had it harder. First volunteering, then financial help. CrossCharity was born after a personal story, which I may share later."}
                {language === 'es' && 
                  "Desde la infancia, sentí lo importante que es cuando alguien se preocupa por ti. Me sentí atraída por aquellos que lo tenían más difícil. Primero voluntariado, luego ayuda financiera. CrossCharity nació después de una historia personal, que quizás comparta más adelante."}
                {language === 'uk' && 
                  "З дитинства я відчувала, як важливо, коли про тебе дбають. Я тягнулася до тих, кому складніше. Спочатку волонтерство, потім — фінансова допомога. CrossCharity народився після особистої історії, яку, можливо, розповім пізніше."}
                {language === 'he' && 
                  "מילדות הרגשתי כמה חשוב כשמישהו דואג לך. נמשכתי לאלה שהיה להם קשה יותר. קודם התנדבות, אחר כך עזרה כספית. CrossCharity נולד אחרי סיפור אישי, שאולי אשתף בהמשך."}
              </p>
              <p className="text-gray-700 mb-4">
                {language === 'en' && 
                  "For the first two and a half years, the foundation worked quietly. Now — a team of 40+ people. This is not about image. This is about responsibility. About being there."}
                {language === 'es' && 
                  "Durante los primeros dos años y medio, la fundación trabajó en silencio. Ahora — un equipo de más de 40 personas. No se trata de imagen. Se trata de responsabilidad. De estar ahí."}
                {language === 'uk' && 
                  "Перші два з половиною роки фонд працював тихо. Зараз — команда з понад 40 осіб. Це не про імідж. Це про відповідальність. Про те, щоб бути поруч."}
                {language === 'he' && 
                  "במשך שנתיים וחצי הראשונות, הקרן עבדה בשקט. עכשיו — צוות של יותר מ-40 אנשים. זה לא על תדמית. זה על אחריות. על להיות שם."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title={language === 'en' ? "Our Team" : 
                  language === 'es' ? "Nuestro Equipo" : 
                  language === 'uk' ? "Наша Команда" : 
                  "הצוות שלנו"}
            subtitle={language === 'en' ? "Meet the dedicated professionals behind CrossCharity" : 
                     language === 'es' ? "Conozca a los profesionales dedicados detrás de CrossCharity" : 
                     language === 'uk' ? "Познайомтеся з відданими професіоналами CrossCharity" : 
                     "הכירו את אנשי המקצוע המסורים מאחורי CrossCharity"}
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
            {language === 'en' ? "Key Documents" : 
             language === 'es' ? "Documentos Clave" : 
             language === 'uk' ? "Ключові документи" : 
             "מסמכים מרכזיים"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="/documents/AnnualReport" className="block bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg">
              <div className="mb-4">
                <FiFileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">
                {language === 'en' ? "Annual Report" : 
                 language === 'es' ? "Informe Anual" : 
                 language === 'uk' ? "Річний звіт" : 
                 "דוח שנתי"}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'en' ? "Our impact and achievements" : 
                 language === 'es' ? "Nuestro impacto y logros" : 
                 language === 'uk' ? "Наш вплив та досягнення" : 
                 "ההשפעה וההישגים שלנו"}
              </p>
            </a>
            <a href="/documents/ChildProtectionPolicy" className="block bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg">
              <div className="mb-4">
                <FiShield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">
                {language === 'en' ? "Child Protection Policy" : 
                 language === 'es' ? "Política de Protección Infantil" : 
                 language === 'uk' ? "Політика захисту дітей" : 
                 "מדיניות הגנה על ילדים"}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'en' ? "Commitment to children's safety" : 
                 language === 'es' ? "Compromiso con la seguridad de los niños" : 
                 language === 'uk' ? "Зобов'язання щодо безпеки дітей" : 
                 "מחויבות לבטיחות ילדים"}
              </p>
            </a>
            <a href="/documents/OrganizationBylaws" className="block bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg">
              <div className="mb-4">
                <FiBookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">
                {language === 'en' ? "Organization Bylaws" : 
                 language === 'es' ? "Estatutos de la Organización" : 
                 language === 'uk' ? "Статут організації" : 
                 "תקנון הארגון"}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'en' ? "Our governance framework" : 
                 language === 'es' ? "Nuestro marco de gobernanza" : 
                 language === 'uk' ? "Наша структура управління" : 
                 "מסגרת הממשל שלנו"}
              </p>
            </a>
            <a href="/documents/FinancialStatements" className="block bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg">
              <div className="mb-4">
                <FiDollarSign className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">
                {language === 'en' ? "Financial Statements" : 
                 language === 'es' ? "Estados Financieros" : 
                 language === 'uk' ? "Фінансова звітність" : 
                 "דוחות כספיים"}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'en' ? "Transparent financial reporting" : 
                 language === 'es' ? "Informes financieros transparentes" : 
                 language === 'uk' ? "Прозора фінансова звітність" : 
                 "דיווח כספי שקוף"}
              </p>
            </a>
                </div>
          <div className="text-center mt-8">
            <a href="/documents" className="inline-block px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition">
              {language === 'en' ? "View All Documents" : 
               language === 'es' ? "Ver Todos los Documentos" : 
               language === 'uk' ? "Переглянути всі документи" : 
               "צפה בכל המסמכים"}
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutUs;
