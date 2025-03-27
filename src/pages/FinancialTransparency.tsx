import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import PageBanner from '@/components/ui/PageBanner';
import SectionHeading from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/card';
import { FileText, Download, TrendingUp, Heart, PiggyBank, ArrowUp, Briefcase, ShieldCheck, Percent, DollarSign, BarChart3, LineChart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FinancialTransparency = () => {
  const { translate, language } = useLanguage();
  
  const expenseData = [
    { name: translate('financial.expenses.childCare'), value: 65 },
    { name: translate('financial.expenses.education'), value: 15 },
    { name: translate('financial.expenses.healthcare'), value: 10 },
    { name: translate('financial.expenses.administration'), value: 7 },
    { name: translate('financial.expenses.fundraising'), value: 3 }
  ];

  const programExpenditureData = [
    { name: translate('financial.programs.food'), amount: 35000 },
    { name: translate('financial.programs.education'), amount: 45000 },
    { name: translate('financial.programs.healthcare'), amount: 30000 },
    { name: translate('financial.programs.clothing'), amount: 15000 },
    { name: translate('financial.programs.recreation'), amount: 12000 },
    { name: translate('financial.programs.utilities'), amount: 20000 },
    { name: translate('financial.programs.facility'), amount: 25000 }
  ];

  const yearlyGrowthData = [
    { year: '2018', children: 45, donors: 120 },
    { year: '2019', children: 60, donors: 180 },
    { year: '2020', children: 75, donors: 250 },
    { year: '2021', children: 90, donors: 320 },
    { year: '2022', children: 110, donors: 380 },
    { year: '2023', children: 125, donors: 450 }
  ];

  // Ключевые финансовые показатели за 2023 год
  const keyFinancialIndicators = [
    { 
      icon: <PiggyBank className="h-10 w-10 text-primary p-2 bg-primary/10 rounded-full" />,
      title: language === 'en' ? "Total Annual Revenue" : 
             language === 'uk' ? "Загальний річний дохід" : 
             language === 'es' ? "Ingresos Anuales Totales" :
             language === 'he' ? "הכנסה שנתית כוללת" : "Total Annual Revenue",
      value: "$4,474,500",
      change: "+18%",
      positive: true
    },
    {
      icon: <Heart className="h-10 w-10 text-rose-500 p-2 bg-rose-100 rounded-full" />,
      title: language === 'en' ? "Program Spending" : 
             language === 'uk' ? "Витрати на програми" : 
             language === 'es' ? "Gastos en Programas" :
             language === 'he' ? "הוצאות תכנית" : "Program Spending",
      value: "$3,670,800",
      change: "+22%",
      positive: true
    },
    {
      icon: <Briefcase className="h-10 w-10 text-amber-500 p-2 bg-amber-100 rounded-full" />,
      title: language === 'en' ? "Administrative Costs" : 
             language === 'uk' ? "Адміністративні витрати" : 
             language === 'es' ? "Costos Administrativos" :
             language === 'he' ? "עלויות מנהליות" : "Administrative Costs",
      value: "$299,700",
      change: "-5%",
      positive: true
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-emerald-500 p-2 bg-emerald-100 rounded-full" />,
      title: language === 'en' ? "Program Efficiency" : 
             language === 'uk' ? "Ефективність програм" : 
             language === 'es' ? "Eficiencia del Programa" :
             language === 'he' ? "יעילות תכנית" : "Program Efficiency",
      value: "87%",
      change: "+2%",
      positive: true
    }
  ];

  return (
    <PageLayout>
      <PageBanner 
        title={translate('financial.title')}
        subtitle={translate('financial.subtitle')}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title={language === 'en' ? "Impact Reports" : 
                   language === 'uk' ? "Звіти про вплив" :
                   language === 'es' ? "Informes de Impacto" :
                   language === 'he' ? "דוחות השפעה" : "Impact Reports"}
            subtitle={language === 'en' ? "The difference we've made together" : 
                      language === 'uk' ? "Різниця, яку ми створили разом" :
                      language === 'es' ? "La diferencia que hemos hecho juntos" :
                      language === 'he' ? "ההבדל שעשינו יחד" : "The difference we've made together"}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            <Card className="p-6 col-span-1">
              <h3 className="font-playfair font-semibold text-xl mb-4">
                {language === 'en' ? "2023" : 
                 language === 'uk' ? "2023 рік" :
                 language === 'es' ? "2023" :
                 language === 'he' ? "2023" : "2023"}
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="bg-primary-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-primary">
                    <ArrowUp className="h-4 w-4" />
                  </div>
                  {language === 'en' ? "Helped 389 children, including 68 with cancer (all recovered)" : 
                   language === 'uk' ? "Допомогли 389 дітям, з них 68 — онкохворі (всі одужали)" :
                   language === 'es' ? "Ayudamos a 389 niños, incluidos 68 con cáncer (todos recuperados)" :
                   language === 'he' ? "עזרנו ל-389 ילדים, כולל 68 חולי סרטן (כולם החלימו)" : 
                   "Helped 389 children, including 68 with cancer (all recovered)"}
                </li>
                <li className="flex items-center">
                  <div className="bg-primary-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-primary">
                    <ArrowUp className="h-4 w-4" />
                  </div>
                  {language === 'en' ? "$346,000 — for treating children with cancer" : 
                   language === 'uk' ? "$346,000 — на лікування онкохворих дітей" :
                   language === 'es' ? "$346,000 — para tratar a niños con cáncer" :
                   language === 'he' ? "346,000$ — לטיפול בילדים חולי סרטן" : 
                   "$346,000 — for treating children with cancer"}
                </li>
                <li className="flex items-center">
                  <div className="bg-primary-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-primary">
                    <ArrowUp className="h-4 w-4" />
                  </div>
                  {language === 'en' ? "$419,000 — for orphaned children" : 
                   language === 'uk' ? "$419,000 — на дітей з дитбудинків" :
                   language === 'es' ? "$419,000 — para niños huérfanos" :
                   language === 'he' ? "419,000$ — לילדים יתומים" : 
                   "$419,000 — for orphaned children"}
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 col-span-1">
              <h3 className="font-playfair font-semibold text-xl mb-4">
                {language === 'en' ? "2024" : 
                 language === 'uk' ? "2024 рік" :
                 language === 'es' ? "2024" :
                 language === 'he' ? "2024" : "2024"}
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="bg-primary-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-primary">
                    <ArrowUp className="h-4 w-4" />
                  </div>
                  {language === 'en' ? "197 children with cancer — completed treatment, declared healthy ($812,000)" : 
                   language === 'uk' ? "197 онкохворих дітей — завершили лікування, визнані здоровими ($812,000)" :
                   language === 'es' ? "197 niños con cáncer — completaron el tratamiento, declarados sanos ($812,000)" :
                   language === 'he' ? "197 ילדים חולי סרטן — סיימו טיפול, הוכרזו בריאים (812,000$)" : 
                   "197 children with cancer — completed treatment, declared healthy ($812,000)"}
                </li>
                <li className="flex items-center">
                  <div className="bg-primary-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-primary">
                    <ArrowUp className="h-4 w-4" />
                  </div>
                  {language === 'en' ? "783 orphaned children — received assistance ($705,000)" : 
                   language === 'uk' ? "783 дітей з дитбудинків — отримали допомогу ($705,000)" :
                   language === 'es' ? "783 niños huérfanos — recibieron asistencia ($705,000)" :
                   language === 'he' ? "783 ילדים יתומים — קיבלו סיוע (705,000$)" : 
                   "783 orphaned children — received assistance ($705,000)"}
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 col-span-1">
              <h3 className="font-playfair font-semibold text-xl mb-4">
                {language === 'en' ? "Q1 2025" : 
                 language === 'uk' ? "1 квартал 2025 року" :
                 language === 'es' ? "1º trimestre 2025" :
                 language === 'he' ? "רבעון 1, 2025" : 
                 "Q1 2025"}
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="bg-primary-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-primary">
                    <ArrowUp className="h-4 w-4" />
                  </div>
                  {language === 'en' ? "32 children with cancer in treatment process ($89,000)" : 
                   language === 'uk' ? "32 онкохворих дитини в процесі лікування ($89,000)" :
                   language === 'es' ? "32 niños con cáncer en proceso de tratamiento ($89,000)" :
                   language === 'he' ? "32 ילדים חולי סרטן בתהליך טיפול (89,000$)" : 
                   "32 children with cancer in treatment process ($89,000)"}
                </li>
                <li className="flex items-center">
                  <div className="bg-primary-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-primary">
                    <ArrowUp className="h-4 w-4" />
                  </div>
                  {language === 'en' ? "116 orphaned children received support ($97,000)" : 
                   language === 'uk' ? "116 дітей з дитбудинків отримали підтримку ($97,000)" :
                   language === 'es' ? "116 niños huérfanos recibieron apoyo ($97,000)" :
                   language === 'he' ? "116 ילדים יתומים קיבלו תמיכה (97,000$)" : 
                   "116 orphaned children received support ($97,000)"}
                </li>
              </ul>
            </Card>
          </div>
          
          <p className="text-center text-lg text-gray-700 mt-8">
            {language === 'en' ? 
              "These numbers are not about statistics. They're about care that works. About each story that changed thanks to those who are nearby." : 
             language === 'uk' ? 
              "Ці цифри — не про статистику. Це про турботу, що діє. Про кожну історію, яка змінилася завдяки тим, хто поруч." :
             language === 'es' ? 
              "Estos números no son sobre estadísticas. Son sobre el cuidado que funciona. Sobre cada historia que cambió gracias a quienes están cerca." :
             language === 'he' ? 
              "המספרים האלה אינם על סטטיסטיקה. הם על טיפול שעובד. על כל סיפור שהשתנה בזכות אלה שנמצאים בקרבה." :
              "These numbers are not about statistics. They're about care that works. About each story that changed thanks to those who are nearby."}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title={translate("financial.fundraisingPrinciples.title")} 
            subtitle={translate("financial.fundraisingPrinciples.subtitle")}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="p-6 bg-gradient-to-br from-white to-primary-50">
              <h3 className="font-playfair font-semibold text-xl mb-4 text-primary">
                {translate("financial.fundraisingPrinciples.transparency.title")}
              </h3>
              <p className="text-gray-700">
                {translate("financial.fundraisingPrinciples.transparency.description")}
              </p>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-white to-pastel-blue">
              <h3 className="font-playfair font-semibold text-xl mb-4 text-primary">
                {translate("financial.fundraisingPrinciples.stewardship.title")}
              </h3>
              <p className="text-gray-700">
                {translate("financial.fundraisingPrinciples.stewardship.description")}
              </p>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-white to-pastel-green">
              <h3 className="font-playfair font-semibold text-xl mb-4 text-primary">
                {translate("financial.fundraisingPrinciples.accountability.title")}
              </h3>
              <p className="text-gray-700">
                {translate("financial.fundraisingPrinciples.accountability.description")}
              </p>
            </Card>
          </div>
          
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="font-playfair font-semibold text-xl mb-4">
              {translate("financial.fundraisingPrinciples.commitment.title")}
            </h3>
            <p className="text-gray-700 mb-4">
              {translate("financial.fundraisingPrinciples.commitment.description")}
            </p>
            <ul className="space-y-2 list-disc pl-5 text-gray-700">
              <li>
                {language === 'en' ? "Use at least 85% of all donations for direct program expenses" :
                 language === 'uk' ? "Використовуємо щонайменше 85% всіх пожертв на прямі програмні витрати" :
                 language === 'es' ? "Usamos al menos el 85% de todas las donaciones para gastos directos del programa" :
                 language === 'he' ? "שימוש בלפחות 85% מכל התרומות להוצאות תכנית ישירות" :
                 "Use at least 85% of all donations for direct program expenses"}
              </li>
              <li>
                {language === 'en' ? "Provide regular updates on how funds are being used" :
                 language === 'uk' ? "Надаємо регулярні оновлення про те, як використовуються кошти" :
                 language === 'es' ? "Proporcionamos actualizaciones regulares sobre cómo se están utilizando los fondos" :
                 language === 'he' ? "מספקים עדכונים קבועים על אופן השימוש בכספים" :
                 "Provide regular updates on how funds are being used"}
              </li>
              <li>
                {language === 'en' ? "Respond promptly to any questions about our finances" :
                 language === 'uk' ? "Оперативно відповідаємо на будь-які питання про наші фінанси" :
                 language === 'es' ? "Respondemos con prontitud a cualquier pregunta sobre nuestras finanzas" :
                 language === 'he' ? "מגיבים במהירות לכל שאלה לגבי המימון שלנו" :
                 "Respond promptly to any questions about our finances"}
              </li>
              <li>
                {language === 'en' ? "Maintain the highest standards of financial management" :
                 language === 'uk' ? "Підтримуємо найвищі стандарти фінансового управління" :
                 language === 'es' ? "Mantenemos los más altos estándares de gestión financiera" :
                 language === 'he' ? "שומרים על הסטנדרטים הגבוהים ביותר של ניהול פיננסי" :
                 "Maintain the highest standards of financial management"}
              </li>
              <li>
                {language === 'en' ? "Never sell or share donor information with third parties" :
                 language === 'uk' ? "Ніколи не продаємо і не передаємо інформацію про донорів третім сторонам" :
                 language === 'es' ? "Nunca vendemos ni compartimos información de donantes con terceros" :
                 language === 'he' ? "לעולם לא מוכרים או משתפים מידע על תורמים עם צדדים שלישיים" :
                 "Never sell or share donor information with third parties"}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default FinancialTransparency;
