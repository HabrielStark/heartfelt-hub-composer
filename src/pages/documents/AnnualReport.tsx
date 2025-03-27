import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import PageBanner from '@/components/ui/PageBanner';
import { useLanguage } from '@/contexts/LanguageContext';

const AnnualReport = () => {
  const { language } = useLanguage();

  return (
    <PageLayout>
      <PageBanner 
        title={
          language === 'en' ? "Annual Report 2023" : 
          language === 'es' ? "Informe Anual 2023" : 
          language === 'uk' ? "Річний звіт 2023" : 
          "דוח שנתי 2023"
        }
        subtitle={
          language === 'en' ? "Our impact and achievements" : 
          language === 'es' ? "Nuestro impacto y logros" : 
          language === 'uk' ? "Наш вплив та досягнення" : 
          "ההשפעה וההישגים שלנו"
        }
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          {/* Executive Summary */}
          <section className="mb-10">
            <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
              {language === 'en' ? "Executive Summary" : 
               language === 'es' ? "Resumen Ejecutivo" : 
               language === 'uk' ? "Загальний звіт" : 
               "תקציר מנהלים"}
            </h2>
            <p className="text-gray-700 mb-4">
              {language === 'en' && "CrossCharity Foundation was officially established in February 2023 with a mission to support orphaned children and those battling cancer. In our inaugural year, we've made significant strides in creating supportive environments, providing educational resources, medical assistance, and emotional support to vulnerable children."}
              {language === 'es' && "La Fundación CrossCharity se estableció oficialmente en febrero de 2023 con la misión de apoyar a niños huérfanos y aquellos que luchan contra el cáncer. En nuestro año inaugural, hemos logrado avances significativos en la creación de entornos de apoyo, proporcionando recursos educativos, asistencia médica y apoyo emocional a niños vulnerables."}
              {language === 'uk' && "Фонд CrossCharity був офіційно заснований у лютому 2023 року з місією підтримки дітей-сиріт та тих, хто бореться з раком. У наш перший рік ми досягли значного прогресу у створенні підтримуючого середовища, наданні освітніх ресурсів, медичної допомоги та емоційної підтримки вразливим дітям."}
              {language === 'he' && "קרן CrossCharity הוקמה רשמית בפברואר 2023 במטרה לתמוך בילדים יתומים ואלה הנלחמים בסרטן. בשנה הראשונה שלנו, עשינו התקדמות משמעותית ביצירת סביבות תומכות, אספקת משאבים חינוכיים, סיוע רפואי ותמיכה רגשית לילדים פגיעים."}
            </p>
          </section>

          {/* Key Achievements */}
          <section className="mb-10">
            <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
              {language === 'en' ? "Key Achievements" : 
               language === 'es' ? "Logros Principales" : 
               language === 'uk' ? "Основні досягнення" : 
               "הישגים מרכזיים"}
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                {language === 'en' && "Supported 1,500+ orphaned children across 13 orphanages with regular educational, recreational, and psychological support programs."}
                {language === 'es' && "Apoyamos a más de 1.500 niños huérfanos en 13 orfanatos con programas regulares de apoyo educativo, recreativo y psicológico."}
                {language === 'uk' && "Підтримали понад 1500 дітей-сиріт у 13 дитячих будинках регулярними програмами освітньої, рекреаційної та психологічної підтримки."}
                {language === 'he' && "תמכנו ביותר מ-1,500 ילדים יתומים ב-13 בתי יתומים עם תוכניות תמיכה חינוכיות, בידוריות ופסיכולוגיות קבועות."}
              </li>
              <li>
                {language === 'en' && "Provided specialized medical support and treatment resources for 300+ children with cancer."}
                {language === 'es' && "Proporcionamos apoyo médico especializado y recursos de tratamiento para más de 300 niños con cáncer."}
                {language === 'uk' && "Надали спеціалізовану медичну підтримку та ресурси для лікування понад 300 дітей з раком."}
                {language === 'he' && "סיפקנו תמיכה רפואית מיוחדת ומשאבי טיפול ליותר מ-300 ילדים חולי סרטן."}
              </li>
              <li>
                {language === 'en' && "Established a volunteer network of 40+ dedicated professionals providing various support services."}
                {language === 'es' && "Establecimos una red de más de 40 profesionales voluntarios dedicados que proporcionan diversos servicios de apoyo."}
                {language === 'uk' && "Створили мережу з понад 40 відданих професіоналів-волонтерів, які надають різноманітні послуги підтримки."}
                {language === 'he' && "הקמנו רשת של יותר מ-40 אנשי מקצוע מתנדבים המספקים שירותי תמיכה שונים."}
              </li>
              <li>
                {language === 'en' && "Launched educational initiatives providing computers, books, and learning materials to children in need."}
                {language === 'es' && "Lanzamos iniciativas educativas proporcionando computadoras, libros y materiales de aprendizaje a niños necesitados."}
                {language === 'uk' && "Запустили освітні ініціативи, надаючи комп'ютери, книги та навчальні матеріали дітям, які цього потребують."}
                {language === 'he' && "השקנו יוזמות חינוכיות המספקות מחשבים, ספרים וחומרי למידה לילדים נזקקים."}
              </li>
              <li>
                {language === 'en' && "Organized regular recreational and developmental activities fostering children's social skills and emotional well-being."}
                {language === 'es' && "Organizamos actividades recreativas y de desarrollo regulares que fomentan las habilidades sociales y el bienestar emocional de los niños."}
                {language === 'uk' && "Організували регулярні рекреаційні та розвиваючі заходи, що сприяють соціальним навичкам та емоційному благополуччю дітей."}
                {language === 'he' && "ארגנו פעילויות פנאי והתפתחות קבועות המטפחות כישורים חברתיים ורווחה רגשית של ילדים."}
              </li>
            </ul>
          </section>

          {/* Financial Overview */}
          <section className="mb-10">
            <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
              {language === 'en' ? "Financial Overview" : 
               language === 'es' ? "Resumen Financiero" : 
               language === 'uk' ? "Фінансовий огляд" : 
               "סקירה פיננסית"}
            </h2>
            <div className="mb-6">
              <h3 className="font-semibold text-xl mb-3 text-gray-800">
                {language === 'en' ? "Revenue Sources" : 
                 language === 'es' ? "Fuentes de Ingresos" : 
                 language === 'uk' ? "Джерела доходу" : 
                 "מקורות הכנסה"}
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  {language === 'en' && "Individual Donations: 42%"}
                  {language === 'es' && "Donaciones Individuales: 42%"}
                  {language === 'uk' && "Індивідуальні пожертви: 42%"}
                  {language === 'he' && "תרומות אישיות: 42%"}
                </li>
                <li>
                  {language === 'en' && "Corporate Sponsorships: 26%"}
                  {language === 'es' && "Patrocinios Corporativos: 26%"}
                  {language === 'uk' && "Корпоративне спонсорство: 26%"}
                  {language === 'he' && "חסויות תאגידיות: 26%"}
                </li>
                <li>
                  {language === 'en' && "Fundraising Events: 18%"}
                  {language === 'es' && "Eventos de Recaudación de Fondos: 18%"}
                  {language === 'uk' && "Фандрейзингові заходи: 18%"}
                  {language === 'he' && "אירועי גיוס כספים: 18%"}
                </li>
                <li>
                  {language === 'en' && "Grants: 14%"}
                  {language === 'es' && "Subvenciones: 14%"}
                  {language === 'uk' && "Гранти: 14%"}
                  {language === 'he' && "מענקים: 14%"}
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-3 text-gray-800">
                {language === 'en' ? "Expenditure Allocation" : 
                 language === 'es' ? "Asignación de Gastos" : 
                 language === 'uk' ? "Розподіл витрат" : 
                 "הקצאת הוצאות"}
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  {language === 'en' && "Direct Program Support: 76%"}
                  {language === 'es' && "Apoyo Directo a Programas: 76%"}
                  {language === 'uk' && "Пряма програмна підтримка: 76%"}
                  {language === 'he' && "תמיכה ישירה בתוכניות: 76%"}
                </li>
                <li>
                  {language === 'en' && "Administrative Costs: 12%"}
                  {language === 'es' && "Costos Administrativos: 12%"}
                  {language === 'uk' && "Адміністративні витрати: 12%"}
                  {language === 'he' && "עלויות מנהליות: 12%"}
                </li>
                <li>
                  {language === 'en' && "Fundraising: 8%"}
                  {language === 'es' && "Recaudación de Fondos: 8%"}
                  {language === 'uk' && "Фандрейзинг: 8%"}
                  {language === 'he' && "גיוס כספים: 8%"}
                </li>
                <li>
                  {language === 'en' && "Reserve Fund: 4%"}
                  {language === 'es' && "Fondo de Reserva: 4%"}
                  {language === 'uk' && "Резервний фонд: 4%"}
                  {language === 'he' && "קרן רזרבית: 4%"}
                </li>
              </ul>
            </div>
          </section>

          {/* Looking Ahead */}
          <section className="mb-10">
            <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
              {language === 'en' ? "Looking Ahead: 2024 Goals" : 
               language === 'es' ? "Mirando Hacia Adelante: Objetivos para 2024" : 
               language === 'uk' ? "Плани на майбутнє: Цілі на 2024 рік" : 
               "מבט קדימה: יעדים ל-2024"}
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                {language === 'en' && "Expand our reach to support 20+ orphanages and 2,000+ children."}
                {language === 'es' && "Ampliar nuestro alcance para apoyar a más de 20 orfanatos y más de 2,000 niños."}
                {language === 'uk' && "Розширити нашу діяльність для підтримки понад 20 дитячих будинків та понад 2000 дітей."}
                {language === 'he' && "להרחיב את ההגעה שלנו לתמיכה ביותר מ-20 בתי יתומים ויותר מ-2,000 ילדים."}
              </li>
              <li>
                {language === 'en' && "Launch a specialized medical support program for children with cancer, targeting 500+ beneficiaries."}
                {language === 'es' && "Lanzar un programa especializado de apoyo médico para niños con cáncer, dirigido a más de 500 beneficiarios."}
                {language === 'uk' && "Запустити спеціалізовану програму медичної підтримки для дітей з раком, націлену на понад 500 бенефіціарів."}
                {language === 'he' && "להשיק תוכנית תמיכה רפואית מיוחדת לילדים חולי סרטן, המיועדת ליותר מ-500 מוטבים."}
              </li>
              <li>
                {language === 'en' && "Develop a digital learning platform to provide educational resources to children in remote areas."}
                {language === 'es' && "Desarrollar una plataforma de aprendizaje digital para proporcionar recursos educativos a niños en áreas remotas."}
                {language === 'uk' && "Розробити цифрову навчальну платформу для надання освітніх ресурсів дітям у віддалених районах."}
                {language === 'he' && "לפתח פלטפורמת למידה דיגיטלית כדי לספק משאבים חינוכיים לילדים באזורים מרוחקים."}
              </li>
              <li>
                {language === 'en' && "Increase volunteer engagement by 50% through expanded training and recruitment programs."}
                {language === 'es' && "Aumentar la participación de voluntarios en un 50% a través de programas ampliados de capacitación y reclutamiento."}
                {language === 'uk' && "Збільшити залучення волонтерів на 50% завдяки розширеним програмам навчання та рекрутингу."}
                {language === 'he' && "להגדיל את מעורבות המתנדבים ב-50% באמצעות תוכניות הדרכה וגיוס מורחבות."}
              </li>
              <li>
                {language === 'en' && "Establish partnerships with 5+ international organizations to exchange expertise and resources."}
                {language === 'es' && "Establecer asociaciones con más de 5 organizaciones internacionales para intercambiar experiencia y recursos."}
                {language === 'uk' && "Встановити партнерські відносини з понад 5 міжнародними організаціями для обміну досвідом та ресурсами."}
                {language === 'he' && "יצירת שותפויות עם יותר מ-5 ארגונים בינלאומיים לחילופי מומחיות ומשאבים."}
              </li>
            </ul>
          </section>

          {/* Acknowledgements */}
          <section>
            <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
              {language === 'en' ? "Acknowledgements" : 
               language === 'es' ? "Agradecimientos" : 
               language === 'uk' ? "Подяки" : 
               "תודות"}
            </h2>
            <p className="text-gray-700">
              {language === 'en' && "We extend our heartfelt gratitude to all our donors, volunteers, partners, and the dedicated team whose collective efforts have made our mission possible. Your support has directly impacted the lives of countless children, providing them with hope, opportunities, and the care they deserve."}
              {language === 'es' && "Extendemos nuestro más sincero agradecimiento a todos nuestros donantes, voluntarios, socios y al equipo dedicado cuyos esfuerzos colectivos han hecho posible nuestra misión. Su apoyo ha impactado directamente en las vidas de innumerables niños, proporcionándoles esperanza, oportunidades y el cuidado que merecen."}
              {language === 'uk' && "Ми висловлюємо щиру вдячність усім нашим донорам, волонтерам, партнерам та відданій команді, чиї колективні зусилля зробили можливою нашу місію. Ваша підтримка безпосередньо вплинула на життя незліченної кількості дітей, надаючи їм надію, можливості та турботу, на яку вони заслуговують."}
              {language === 'he' && "אנו מביעים את תודתנו הכנה לכל התורמים שלנו, המתנדבים, השותפים והצוות המסור שהמאמצים המשותפים שלהם הפכו את המשימה שלנו לאפשרית. התמיכה שלכם השפיעה ישירות על חייהם של אינספור ילדים, מספקת להם תקווה, הזדמנויות והטיפול שהם ראויים לו."}
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default AnnualReport; 