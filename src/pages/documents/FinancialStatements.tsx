import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import PageBanner from '@/components/ui/PageBanner';
import { useLanguage } from '@/contexts/LanguageContext';

const FinancialStatements = () => {
  const { language } = useLanguage();

  return (
    <PageLayout>
      <PageBanner 
        title={
          language === 'en' ? "Financial Statements" : 
          language === 'es' ? "Estados Financieros" : 
          language === 'uk' ? "Фінансова звітність" : 
          "דוחות כספיים"
        }
        subtitle={
          language === 'en' ? "Transparency in our financial operations" : 
          language === 'es' ? "Transparencia en nuestras operaciones financieras" : 
          language === 'uk' ? "Прозорість у наших фінансових операціях" : 
          "שקיפות בפעילות הפיננסית שלנו"
        }
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          {/* Statement of Financial Position */}
          <section className="mb-10">
            <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
              {language === 'en' ? "Statement of Financial Position" : 
               language === 'es' ? "Estado de Situación Financiera" : 
               language === 'uk' ? "Звіт про фінансовий стан" : 
               "דוח על המצב הכספי"}
            </h2>
            <p className="text-gray-700 mb-6">
              {language === 'en' && "As of December 31, 2023"}
              {language === 'es' && "Al 31 de diciembre de 2023"}
              {language === 'uk' && "Станом на 31 грудня 2023 року"}
              {language === 'he' && "נכון ל-31 בדצמבר 2023"}
            </p>
            
            <div className="mb-6">
              <h3 className="font-semibold text-xl mb-3 text-gray-800">
                {language === 'en' ? "Assets" : 
                 language === 'es' ? "Activos" : 
                 language === 'uk' ? "Активи" : 
                 "נכסים"}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse mb-4">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 font-medium">
                        {language === 'en' && "Cash and Cash Equivalents"}
                        {language === 'es' && "Efectivo y Equivalentes de Efectivo"}
                        {language === 'uk' && "Грошові кошти та їх еквіваленти"}
                        {language === 'he' && "מזומנים ושווי מזומנים"}
                      </td>
                      <td className="py-2 text-right">$1,245,320</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">
                        {language === 'en' && "Investments"}
                        {language === 'es' && "Inversiones"}
                        {language === 'uk' && "Інвестиції"}
                        {language === 'he' && "השקעות"}
                      </td>
                      <td className="py-2 text-right">$675,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">
                        {language === 'en' && "Grants Receivable"}
                        {language === 'es' && "Subvenciones por Cobrar"}
                        {language === 'uk' && "Дебіторська заборгованість за грантами"}
                        {language === 'he' && "מענקים לקבל"}
                      </td>
                      <td className="py-2 text-right">$320,500</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">
                        {language === 'en' && "Property and Equipment, Net"}
                        {language === 'es' && "Propiedad y Equipo, Neto"}
                        {language === 'uk' && "Основні засоби, чисті"}
                        {language === 'he' && "רכוש וציוד, נטו"}
                      </td>
                      <td className="py-2 text-right">$185,750</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">
                        {language === 'en' && "Other Assets"}
                        {language === 'es' && "Otros Activos"}
                        {language === 'uk' && "Інші активи"}
                        {language === 'he' && "נכסים אחרים"}
                      </td>
                      <td className="py-2 text-right">$42,300</td>
                    </tr>
                    <tr className="font-bold">
                      <td className="py-2">
                        {language === 'en' && "Total Assets"}
                        {language === 'es' && "Total de Activos"}
                        {language === 'uk' && "Загальні активи"}
                        {language === 'he' && "סך הנכסים"}
                      </td>
                      <td className="py-2 text-right">$2,468,870</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold text-xl mb-3 text-gray-800">
                {language === 'en' ? "Liabilities and Net Assets" : 
                 language === 'es' ? "Pasivos y Activos Netos" : 
                 language === 'uk' ? "Зобов'язання та чисті активи" : 
                 "התחייבויות ונכסים נטו"}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse mb-4">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 font-medium">
                        {language === 'en' && "Accounts Payable"}
                        {language === 'es' && "Cuentas por Pagar"}
                        {language === 'uk' && "Кредиторська заборгованість"}
                        {language === 'he' && "ספקים לשלם"}
                      </td>
                      <td className="py-2 text-right">$87,650</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">
                        {language === 'en' && "Accrued Expenses"}
                        {language === 'es' && "Gastos Acumulados"}
                        {language === 'uk' && "Нараховані витрати"}
                        {language === 'he' && "הוצאות לשלם"}
                      </td>
                      <td className="py-2 text-right">$65,420</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">
                        {language === 'en' && "Grants Payable"}
                        {language === 'es' && "Subvenciones por Pagar"}
                        {language === 'uk' && "Гранти до сплати"}
                        {language === 'he' && "מענקים לשלם"}
                      </td>
                      <td className="py-2 text-right">$230,000</td>
                    </tr>
                    <tr className="border-b font-bold">
                      <td className="py-2">
                        {language === 'en' && "Total Liabilities"}
                        {language === 'es' && "Total de Pasivos"}
                        {language === 'uk' && "Загальні зобов'язання"}
                        {language === 'he' && "סך ההתחייבויות"}
                      </td>
                      <td className="py-2 text-right">$383,070</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">
                        {language === 'en' && "Net Assets Without Donor Restrictions"}
                        {language === 'es' && "Activos Netos Sin Restricciones de Donantes"}
                        {language === 'uk' && "Чисті активи без обмежень донорів"}
                        {language === 'he' && "נכסים נטו ללא הגבלות תורמים"}
                      </td>
                      <td className="py-2 text-right">$1,385,800</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">
                        {language === 'en' && "Net Assets With Donor Restrictions"}
                        {language === 'es' && "Activos Netos Con Restricciones de Donantes"}
                        {language === 'uk' && "Чисті активи з обмеженнями донорів"}
                        {language === 'he' && "נכסים נטו עם הגבלות תורמים"}
                      </td>
                      <td className="py-2 text-right">$700,000</td>
                    </tr>
                    <tr className="font-bold">
                      <td className="py-2">
                        {language === 'en' && "Total Liabilities and Net Assets"}
                        {language === 'es' && "Total de Pasivos y Activos Netos"}
                        {language === 'uk' && "Загальні зобов'язання та чисті активи"}
                        {language === 'he' && "סך ההתחייבויות והנכסים נטו"}
                      </td>
                      <td className="py-2 text-right">$2,468,870</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Statement of Activities */}
          <section className="mb-10">
            <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
              {language === 'en' ? "Statement of Activities" : 
               language === 'es' ? "Estado de Actividades" : 
               language === 'uk' ? "Звіт про діяльність" : 
               "דוח על הפעילויות"}
            </h2>
            <p className="text-gray-700 mb-6">
              {language === 'en' && "For the Year Ended December 31, 2023"}
              {language === 'es' && "Para el Año Terminado el 31 de diciembre de 2023"}
              {language === 'uk' && "За рік, що закінчився 31 грудня 2023 року"}
              {language === 'he' && "לשנה שהסתיימה ב-31 בדצמבר 2023"}
            </p>
            
            <div className="mb-6">
              <h3 className="font-semibold text-xl mb-3 text-gray-800">
                {language === 'en' ? "Revenue and Support" : 
                 language === 'es' ? "Ingresos y Apoyo" : 
                 language === 'uk' ? "Дохід та підтримка" : 
                 "הכנסות ותמיכה"}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse mb-4">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 font-medium">
                        {language === 'en' && "Individual Contributions"}
                        {language === 'es' && "Contribuciones Individuales"}
                        {language === 'uk' && "Індивідуальні внески"}
                        {language === 'he' && "תרומות אישיות"}
                      </td>
                      <td className="py-2 text-right">$1,876,450</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">
                        {language === 'en' && "Corporate Sponsorships"}
                        {language === 'es' && "Patrocinios Corporativos"}
                        {language === 'uk' && "Корпоративне спонсорство"}
                        {language === 'he' && "חסויות תאגידיות"}
                      </td>
                      <td className="py-2 text-right">$1,150,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">
                        {language === 'en' && "Grants"}
                        {language === 'es' && "Subvenciones"}
                        {language === 'uk' && "Гранти"}
                        {language === 'he' && "מענקים"}
                      </td>
                      <td className="py-2 text-right">$620,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">
                        {language === 'en' && "Fundraising Events"}
                        {language === 'es' && "Eventos de Recaudación de Fondos"}
                        {language === 'uk' && "Фандрейзингові заходи"}
                        {language === 'he' && "אירועי גיוס כספים"}
                      </td>
                      <td className="py-2 text-right">$785,300</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">
                        {language === 'en' && "Investment Income"}
                        {language === 'es' && "Ingresos de Inversiones"}
                        {language === 'uk' && "Інвестиційний дохід"}
                        {language === 'he' && "הכנסות מהשקעות"}
                      </td>
                      <td className="py-2 text-right">$42,750</td>
                    </tr>
                    <tr className="font-bold">
                      <td className="py-2">
                        {language === 'en' && "Total Revenue and Support"}
                        {language === 'es' && "Total de Ingresos y Apoyo"}
                        {language === 'uk' && "Загальний дохід та підтримка"}
                        {language === 'he' && "סך הכנסות ותמיכה"}
                      </td>
                      <td className="py-2 text-right">$4,474,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold text-xl mb-3 text-gray-800">
                {language === 'en' ? "Expenses" : 
                 language === 'es' ? "Gastos" : 
                 language === 'uk' ? "Витрати" : 
                 "הוצאות"}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse mb-4">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 font-medium">
                        {language === 'en' && "Program Services:"}
                        {language === 'es' && "Servicios de Programas:"}
                        {language === 'uk' && "Програмні послуги:"}
                        {language === 'he' && "שירותי תוכניות:"}
                      </td>
                      <td className="py-2 text-right"></td>
                    </tr>
                    <tr className="border-b pl-4">
                      <td className="py-2 pl-4">
                        {language === 'en' && "Orphanage Support"}
                        {language === 'es' && "Apoyo a Orfanatos"}
                        {language === 'uk' && "Підтримка дитячих будинків"}
                        {language === 'he' && "תמיכה בבתי יתומים"}
                      </td>
                      <td className="py-2 text-right">$1,650,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pl-4">
                        {language === 'en' && "Cancer Treatment Support"}
                        {language === 'es' && "Apoyo al Tratamiento del Cáncer"}
                        {language === 'uk' && "Підтримка лікування раку"}
                        {language === 'he' && "תמיכה בטיפול בסרטן"}
                      </td>
                      <td className="py-2 text-right">$1,420,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pl-4">
                        {language === 'en' && "Educational Programs"}
                        {language === 'es' && "Programas Educativos"}
                        {language === 'uk' && "Освітні програми"}
                        {language === 'he' && "תוכניות חינוכיות"}
                      </td>
                      <td className="py-2 text-right">$540,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">
                        {language === 'en' && "Supporting Services:"}
                        {language === 'es' && "Servicios de Apoyo:"}
                        {language === 'uk' && "Допоміжні послуги:"}
                        {language === 'he' && "שירותי תמיכה:"}
                      </td>
                      <td className="py-2 text-right"></td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pl-4">
                        {language === 'en' && "Administrative and General"}
                        {language === 'es' && "Administrativos y Generales"}
                        {language === 'uk' && "Адміністративні та загальні"}
                        {language === 'he' && "מנהלה וכללי"}
                      </td>
                      <td className="py-2 text-right">$360,500</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pl-4">
                        {language === 'en' && "Fundraising"}
                        {language === 'es' && "Recaudación de Fondos"}
                        {language === 'uk' && "Фандрейзинг"}
                        {language === 'he' && "גיוס כספים"}
                      </td>
                      <td className="py-2 text-right">$235,700</td>
                    </tr>
                    <tr className="font-bold">
                      <td className="py-2">
                        {language === 'en' && "Total Expenses"}
                        {language === 'es' && "Total de Gastos"}
                        {language === 'uk' && "Загальні витрати"}
                        {language === 'he' && "סך ההוצאות"}
                      </td>
                      <td className="py-2 text-right">$4,206,200</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="font-bold text-lg">
              <div className="flex justify-between border-t pt-4">
                <div>
                  {language === 'en' && "Change in Net Assets"}
                  {language === 'es' && "Cambio en Activos Netos"}
                  {language === 'uk' && "Зміна чистих активів"}
                  {language === 'he' && "שינוי בנכסים נטו"}
                </div>
                <div>$268,300</div>
              </div>
            </div>
          </section>

          {/* Key Financial Indicators */}
          <section className="mb-10">
            <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
              {language === 'en' ? "Key Financial Indicators" : 
               language === 'es' ? "Indicadores Financieros Clave" : 
               language === 'uk' ? "Ключові фінансові показники" : 
               "מדדים פיננסיים עיקריים"}
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                {language === 'en' && "Program Efficiency: 80.5% of total expenses directly support our programs."}
                {language === 'es' && "Eficiencia del Programa: El 80.5% del total de gastos apoya directamente nuestros programas."}
                {language === 'uk' && "Ефективність програми: 80.5% загальних витрат безпосередньо підтримують наші програми."}
                {language === 'he' && "יעילות התוכנית: 80.5% מסך ההוצאות תומכות ישירות בתוכניות שלנו."}
              </li>
              <li>
                {language === 'en' && "Fundraising Efficiency: For every $1 spent on fundraising, we raised $19."}
                {language === 'es' && "Eficiencia de Recaudación: Por cada $1 gastado en recaudación de fondos, recaudamos $19."}
                {language === 'uk' && "Ефективність фандрейзингу: На кожен $1, витрачений на фандрейзинг, ми зібрали $19."}
                {language === 'he' && "יעילות גיוס כספים: על כל 1$ שהוצאנו על גיוס כספים, גייסנו 19$."}
              </li>
              <li>
                {language === 'en' && "Administrative Ratio: Administrative expenses account for 8.5% of total expenses."}
                {language === 'es' && "Ratio Administrativo: Los gastos administrativos representan el 8.5% del total de gastos."}
                {language === 'uk' && "Адміністративний коефіцієнт: Адміністративні витрати складають 8.5% від загальних витрат."}
                {language === 'he' && "יחס מנהלי: הוצאות מנהליות מהוות 8.5% מסך ההוצאות."}
              </li>
              <li>
                {language === 'en' && "Reserve Ratio: Current reserves could sustain operations for approximately 7 months."}
                {language === 'es' && "Ratio de Reserva: Las reservas actuales podrían mantener las operaciones durante aproximadamente 7 meses."}
                {language === 'uk' && "Коефіцієнт резерву: Поточні резерви можуть підтримувати операції приблизно 7 місяців."}
                {language === 'he' && "יחס רזרבה: הרזרבות הנוכחיות יכולות לקיים פעילות למשך כ-7 חודשים."}
              </li>
            </ul>
          </section>

          {/* Notes and Accounting Policies */}
          <section>
            <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
              {language === 'en' ? "Notes and Accounting Policies" : 
               language === 'es' ? "Notas y Políticas Contables" : 
               language === 'uk' ? "Примітки та облікова політика" : 
               "הערות ומדיניות חשבונאית"}
            </h2>
            <p className="text-gray-700 mb-4">
              {language === 'en' && "These financial statements were prepared in accordance with generally accepted accounting principles. The organization follows the accrual basis of accounting, which recognizes revenue when earned and expenses when incurred."}
              {language === 'es' && "Estos estados financieros fueron preparados de acuerdo con los principios contables generalmente aceptados. La organización sigue la base contable de acumulación, que reconoce los ingresos cuando se ganan y los gastos cuando se incurren."}
              {language === 'uk' && "Ці фінансові звіти були підготовлені відповідно до загальноприйнятих принципів бухгалтерського обліку. Організація дотримується методу нарахування, який визнає дохід при його отриманні та витрати при їх виникненні."}
              {language === 'he' && "דוחות כספיים אלה הוכנו בהתאם לעקרונות חשבונאיים מקובלים. הארגון פועל על בסיס צבירה, המכיר בהכנסות כאשר הן מתקבלות ובהוצאות כאשר הן מתהוות."}
            </p>
            <p className="text-gray-700">
              {language === 'en' && "A full independent audit was conducted by Johnson & Smith, Certified Public Accountants. The complete audited financial statements, including detailed notes, are available upon request."}
              {language === 'es' && "Johnson & Smith, Contadores Públicos Certificados, realizó una auditoría independiente completa. Los estados financieros auditados completos, incluidas notas detalladas, están disponibles a solicitud."}
              {language === 'uk' && "Повний незалежний аудит проведено компанією Johnson & Smith, сертифікованими громадськими бухгалтерами. Повні перевірені фінансові звіти, включаючи детальні примітки, доступні за запитом."}
              {language === 'he' && "ביקורת עצמאית מלאה נערכה על ידי ג'ונסון ושות', רואי חשבון מוסמכים. הדוחות הכספיים המבוקרים המלאים, כולל הערות מפורטות, זמינים לפי בקשה."}
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default FinancialStatements; 