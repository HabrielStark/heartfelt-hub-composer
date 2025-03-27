import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import PageBanner from '@/components/ui/PageBanner';
import { useLanguage } from '@/contexts/LanguageContext';

const OrganizationBylaws = () => {
  const { language } = useLanguage();

  return (
    <PageLayout>
      <PageBanner 
        title={
          language === 'en' ? "Organization Bylaws" : 
          language === 'es' ? "Estatutos de la Organización" : 
          language === 'uk' ? "Статут організації" : 
          "תקנון הארגון"
        }
        subtitle={
          language === 'en' ? "Governance structure and operational framework" : 
          language === 'es' ? "Estructura de gobierno y marco operativo" : 
          language === 'uk' ? "Структура управління та операційна основа" : 
          "מבנה הממשל ומסגרת התפעול"
        }
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          {/* Article I: Name and Purpose */}
          <section className="mb-10">
            <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
              {language === 'en' ? "Article I: Name and Purpose" : 
               language === 'es' ? "Artículo I: Nombre y Propósito" : 
               language === 'uk' ? "Стаття I: Назва та мета" : 
               "סעיף א': שם ומטרה"}
            </h2>
            <p className="text-gray-700 mb-4">
              {language === 'en' && "The name of this organization shall be CrossCharity Foundation. The Foundation is established exclusively for charitable purposes, specifically to provide assistance, support, education, and healthcare to orphaned children and children battling cancer."}
              {language === 'es' && "El nombre de esta organización será Fundación CrossCharity. La Fundación se establece exclusivamente con fines benéficos, específicamente para proporcionar asistencia, apoyo, educación y atención médica a niños huérfanos y niños que luchan contra el cáncer."}
              {language === 'uk' && "Назва цієї організації - Фонд CrossCharity. Фонд створений виключно для благодійних цілей, зокрема для надання допомоги, підтримки, освіти та охорони здоров'я дітям-сиротам та дітям, які борються з раком."}
              {language === 'he' && "שם הארגון יהיה קרן CrossCharity. הקרן הוקמה באופן בלעדי למטרות צדקה, במיוחד כדי לספק סיוע, תמיכה, חינוך וטיפול רפואי לילדים יתומים וילדים הנלחמים בסרטן."}
            </p>
          </section>

          {/* Article II: Board of Directors */}
          <section className="mb-10">
            <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
              {language === 'en' ? "Article II: Board of Directors" : 
               language === 'es' ? "Artículo II: Junta Directiva" : 
               language === 'uk' ? "Стаття II: Рада директорів" : 
               "סעיף ב': מועצת המנהלים"}
            </h2>
            <div className="mb-4">
              <h3 className="font-semibold text-xl mb-2 text-gray-800">
                {language === 'en' ? "Section 1: Composition" : 
                 language === 'es' ? "Sección 1: Composición" : 
                 language === 'uk' ? "Розділ 1: Склад" : 
                 "סעיף 1: הרכב"}
              </h3>
              <p className="text-gray-700">
                {language === 'en' && "The Board of Directors shall consist of no fewer than five (5) and no more than fifteen (15) directors. The Board shall include the Founder, President, Vice President, Treasurer, and Secretary, as well as additional directors as deemed necessary."}
                {language === 'es' && "La Junta Directiva estará compuesta por no menos de cinco (5) y no más de quince (15) directores. La Junta incluirá al Fundador, Presidente, Vicepresidente, Tesorero y Secretario, así como directores adicionales según se considere necesario."}
                {language === 'uk' && "Рада директорів складається не менше ніж з п'яти (5) і не більше п'ятнадцяти (15) директорів. До складу Ради входять Засновник, Президент, Віце-президент, Скарбник та Секретар, а також додаткові директори за необхідності."}
                {language === 'he' && "מועצת המנהלים תכלול לא פחות מחמישה (5) ולא יותר מחמישה עשר (15) דירקטורים. המועצה תכלול את המייסד, הנשיא, סגן הנשיא, הגזבר והמזכיר, וכן דירקטורים נוספים לפי הצורך."}
              </p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold text-xl mb-2 text-gray-800">
                {language === 'en' ? "Section 2: Terms" : 
                 language === 'es' ? "Sección 2: Mandatos" : 
                 language === 'uk' ? "Розділ 2: Терміни" : 
                 "סעיף 2: תקופות כהונה"}
              </h3>
              <p className="text-gray-700">
                {language === 'en' && "Directors shall serve a term of three (3) years and may be reelected for consecutive terms. Terms shall be staggered to ensure continuity of governance."}
                {language === 'es' && "Los directores servirán un mandato de tres (3) años y podrán ser reelegidos para mandatos consecutivos. Los mandatos serán escalonados para garantizar la continuidad de la gobernanza."}
                {language === 'uk' && "Директори служать протягом трьох (3) років і можуть бути переобрані на послідовні терміни. Терміни повинні бути розподілені для забезпечення безперервності управління."}
                {language === 'he' && "הדירקטורים יכהנו לתקופה של שלוש (3) שנים ויוכלו להיבחר מחדש לתקופות רצופות. התקופות יהיו מדורגות כדי להבטיח המשכיות בממשל."}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2 text-gray-800">
                {language === 'en' ? "Section 3: Responsibilities" : 
                 language === 'es' ? "Sección 3: Responsabilidades" : 
                 language === 'uk' ? "Розділ 3: Обов'язки" : 
                 "סעיף 3: אחריות"}
              </h3>
              <p className="text-gray-700">
                {language === 'en' && "The Board shall be responsible for establishing the organization's strategic direction, approving the annual budget, ensuring financial oversight, evaluating the Executive Director's performance, and overseeing the organization's adherence to its mission and legal obligations."}
                {language === 'es' && "La Junta será responsable de establecer la dirección estratégica de la organización, aprobar el presupuesto anual, garantizar la supervisión financiera, evaluar el desempeño del Director Ejecutivo y supervisar el cumplimiento de la misión y las obligaciones legales de la organización."}
                {language === 'uk' && "Рада відповідає за встановлення стратегічного напрямку організації, затвердження річного бюджету, забезпечення фінансового нагляду, оцінку діяльності Виконавчого директора та нагляд за дотриманням організацією своєї місії та юридичних зобов'язань."}
                {language === 'he' && "המועצה תהיה אחראית לקביעת הכיוון האסטרטגי של הארגון, אישור התקציב השנתי, הבטחת פיקוח פיננסי, הערכת ביצועי המנהל הכללי, ופיקוח על עמידת הארגון במשימתו ובחובותיו החוקיות."}
              </p>
            </div>
          </section>

          {/* Article III: Officers */}
          <section className="mb-10">
            <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
              {language === 'en' ? "Article III: Officers" : 
               language === 'es' ? "Artículo III: Oficiales" : 
               language === 'uk' ? "Стаття III: Посадові особи" : 
               "סעיף ג': נושאי משרה"}
            </h2>
            <p className="text-gray-700 mb-4">
              {language === 'en' && "The Officers of the organization shall include a President, Vice President, Secretary, and Treasurer, each serving a term of two (2) years. Officers shall perform the duties prescribed by these bylaws and by the parliamentary authority adopted by the organization."}
              {language === 'es' && "Los Oficiales de la organización incluirán un Presidente, Vicepresidente, Secretario y Tesorero, cada uno sirviendo un mandato de dos (2) años. Los oficiales desempeñarán las funciones prescritas por estos estatutos y por la autoridad parlamentaria adoptada por la organización."}
              {language === 'uk' && "Посадові особи організації включають Президента, Віце-президента, Секретаря та Скарбника, кожен з яких служить протягом двох (2) років. Посадові особи виконують обов'язки, визначені цим статутом та парламентарною владою, прийнятою організацією."}
              {language === 'he' && "נושאי המשרה של הארגון יכללו נשיא, סגן נשיא, מזכיר וגזבר, כל אחד מכהן לתקופה של שנתיים (2). נושאי המשרה יבצעו את החובות המוגדרות בתקנון זה ועל ידי הסמכות הפרלמנטרית שאומצה על ידי הארגון."}
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                <span className="font-semibold">
                  {language === 'en' ? "President" : 
                   language === 'es' ? "Presidente" : 
                   language === 'uk' ? "Президент" : 
                   "נשיא"}
                </span>: 
                {language === 'en' && " Shall preside at all meetings, serve as the principal officer, and oversee the execution of the organization's policies."}
                {language === 'es' && " Presidirá todas las reuniones, servirá como oficial principal y supervisará la ejecución de las políticas de la organización."}
                {language === 'uk' && " Головує на всіх зустрічах, виступає в якості головної посадової особи та контролює виконання політик організації."}
                {language === 'he' && " יישב בראש כל הישיבות, ישמש כנושא המשרה הראשי, ויפקח על ביצוע מדיניות הארגון."}
              </li>
              <li>
                <span className="font-semibold">
                  {language === 'en' ? "Vice President" : 
                   language === 'es' ? "Vicepresidente" : 
                   language === 'uk' ? "Віце-президент" : 
                   "סגן נשיא"}
                </span>: 
                {language === 'en' && " Shall assist the President and assume the President's duties in their absence."}
                {language === 'es' && " Ayudará al Presidente y asumirá las funciones del Presidente en su ausencia."}
                {language === 'uk' && " Допомагає Президенту та виконує обов'язки Президента в його відсутність."}
                {language === 'he' && " יסייע לנשיא ויקבל על עצמו את תפקידי הנשיא בהיעדרו."}
              </li>
              <li>
                <span className="font-semibold">
                  {language === 'en' ? "Secretary" : 
                   language === 'es' ? "Secretario" : 
                   language === 'uk' ? "Секретар" : 
                   "מזכיר"}
                </span>: 
                {language === 'en' && " Shall keep records of all meetings, maintain official documents, and ensure legal compliance."}
                {language === 'es' && " Mantendrá registros de todas las reuniones, mantendrá documentos oficiales y garantizará el cumplimiento legal."}
                {language === 'uk' && " Веде записи всіх зустрічей, підтримує офіційні документи та забезпечує дотримання законодавства."}
                {language === 'he' && " ישמור רישומים של כל הישיבות, יתחזק מסמכים רשמיים, ויבטיח ציות לחוק."}
              </li>
              <li>
                <span className="font-semibold">
                  {language === 'en' ? "Treasurer" : 
                   language === 'es' ? "Tesorero" : 
                   language === 'uk' ? "Скарбник" : 
                   "גזבר"}
                </span>: 
                {language === 'en' && " Shall oversee the financial operations, maintain financial records, prepare financial reports, and ensure proper financial controls."}
                {language === 'es' && " Supervisará las operaciones financieras, mantendrá registros financieros, preparará informes financieros y garantizará controles financieros adecuados."}
                {language === 'uk' && " Контролює фінансові операції, веде фінансові записи, готує фінансові звіти та забезпечує належний фінансовий контроль."}
                {language === 'he' && " יפקח על הפעילות הפיננסית, ישמור על רשומות פיננסיות, יכין דוחות כספיים, ויבטיח בקרות פיננסיות נאותות."}
              </li>
            </ul>
          </section>

          {/* Article IV: Financial Management */}
          <section className="mb-10">
            <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
              {language === 'en' ? "Article IV: Financial Management" : 
               language === 'es' ? "Artículo IV: Gestión Financiera" : 
               language === 'uk' ? "Стаття IV: Фінансове управління" : 
               "סעיף ד': ניהול פיננסי"}
            </h2>
            <div className="mb-4">
              <h3 className="font-semibold text-xl mb-2 text-gray-800">
                {language === 'en' ? "Section 1: Fiscal Year" : 
                 language === 'es' ? "Sección 1: Año Fiscal" : 
                 language === 'uk' ? "Розділ 1: Фінансовий рік" : 
                 "סעיף 1: שנת כספים"}
              </h3>
              <p className="text-gray-700">
                {language === 'en' && "The fiscal year of the organization shall begin on January 1 and end on December 31 of each year."}
                {language === 'es' && "El año fiscal de la organización comenzará el 1 de enero y terminará el 31 de diciembre de cada año."}
                {language === 'uk' && "Фінансовий рік організації починається 1 січня і закінчується 31 грудня кожного року."}
                {language === 'he' && "שנת הכספים של הארגון תתחיל ב-1 בינואר ותסתיים ב-31 בדצמבר בכל שנה."}
              </p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold text-xl mb-2 text-gray-800">
                {language === 'en' ? "Section 2: Budget" : 
                 language === 'es' ? "Sección 2: Presupuesto" : 
                 language === 'uk' ? "Розділ 2: Бюджет" : 
                 "סעיף 2: תקציב"}
              </h3>
              <p className="text-gray-700">
                {language === 'en' && "An annual budget shall be prepared by the Treasurer and presented to the Board for approval prior to the beginning of each fiscal year. The budget shall outline expected income and planned expenditures in alignment with the organization's strategic objectives."}
                {language === 'es' && "El Tesorero preparará un presupuesto anual y lo presentará a la Junta para su aprobación antes del comienzo de cada año fiscal. El presupuesto delineará los ingresos esperados y los gastos planificados en alineación con los objetivos estratégicos de la organización."}
                {language === 'uk' && "Річний бюджет готується Скарбником і представляється Раді для затвердження до початку кожного фінансового року. Бюджет повинен окреслювати очікуваний дохід та заплановані витрати відповідно до стратегічних цілей організації."}
                {language === 'he' && "תקציב שנתי יוכן על ידי הגזבר ויוצג למועצה לאישור לפני תחילת כל שנת כספים. התקציב יתווה את ההכנסה הצפויה והוצאות מתוכננות בהתאמה ליעדים האסטרטגיים של הארגון."}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2 text-gray-800">
                {language === 'en' ? "Section 3: Audits" : 
                 language === 'es' ? "Sección 3: Auditorías" : 
                 language === 'uk' ? "Розділ 3: Аудити" : 
                 "סעיף 3: ביקורות"}
              </h3>
              <p className="text-gray-700">
                {language === 'en' && "The financial records of the organization shall be audited annually by an independent certified public accountant. The audit report shall be presented to the Board and made available to stakeholders upon request."}
                {language === 'es' && "Los registros financieros de la organización serán auditados anualmente por un contador público certificado independiente. El informe de auditoría se presentará a la Junta y estará disponible para las partes interesadas que lo soliciten."}
                {language === 'uk' && "Фінансові записи організації повинні щорічно перевірятися незалежним сертифікованим бухгалтером. Аудиторський звіт представляється Раді і доступний зацікавленим сторонам за запитом."}
                {language === 'he' && "הרשומות הפיננסיות של הארגון יעברו ביקורת שנתית על ידי רואה חשבון מוסמך עצמאי. דוח הביקורת יוצג למועצה ויהיה זמין לבעלי עניין לפי בקשה."}
              </p>
            </div>
          </section>

          {/* Article V: Amendments */}
          <section className="mb-10">
            <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
              {language === 'en' ? "Article V: Amendments" : 
               language === 'es' ? "Artículo V: Enmiendas" : 
               language === 'uk' ? "Стаття V: Поправки" : 
               "סעיף ה': תיקונים"}
            </h2>
            <p className="text-gray-700">
              {language === 'en' && "These bylaws may be amended by a two-thirds vote of the Board of Directors, provided that the proposed amendment has been submitted in writing to all directors at least thirty (30) days prior to the meeting at which the vote is taken."}
              {language === 'es' && "Estos estatutos pueden ser enmendados por un voto de dos tercios de la Junta Directiva, siempre que la enmienda propuesta haya sido presentada por escrito a todos los directores al menos treinta (30) días antes de la reunión en la que se toma el voto."}
              {language === 'uk' && "Ці статути можуть бути змінені двома третинами голосів Ради директорів, за умови, що запропонована поправка була подана в письмовій формі всім директорам не менше ніж за тридцять (30) днів до зустрічі, на якій відбувається голосування."}
              {language === 'he' && "ניתן לתקן תקנון זה על ידי הצבעה של שני שלישים ממועצת המנהלים, בתנאי שהתיקון המוצע הוגש בכתב לכל הדירקטורים לפחות שלושים (30) ימים לפני הישיבה שבה מתקיימת ההצבעה."}
            </p>
          </section>

          {/* Article VI: Dissolution */}
          <section>
            <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
              {language === 'en' ? "Article VI: Dissolution" : 
               language === 'es' ? "Artículo VI: Disolución" : 
               language === 'uk' ? "Стаття VI: Розпуск" : 
               "סעיף ו': פירוק"}
            </h2>
            <p className="text-gray-700">
              {language === 'en' && "Upon dissolution of the organization, the Board shall, after paying or making provision for payment of all liabilities, dispose of all assets exclusively for charitable purposes to organizations that operate exclusively for charitable purposes. Any assets not so disposed of shall be disposed of by a court of competent jurisdiction in the country where the principal office is located, exclusively for charitable purposes."}
              {language === 'es' && "En caso de disolución de la organización, la Junta, después de pagar o hacer provisión para el pago de todas las obligaciones, dispondrá de todos los activos exclusivamente para fines benéficos a organizaciones que operan exclusivamente para fines benéficos. Cualquier activo no dispuesto de esta manera será dispuesto por un tribunal de jurisdicción competente en el país donde se encuentra la oficina principal, exclusivamente para fines benéficos."}
              {language === 'uk' && "При розпуску організації Рада, після оплати або забезпечення оплати всіх зобов'язань, розпоряджається всіма активами виключно для благодійних цілей організаціям, які діють виключно для благодійних цілей. Будь-які активи, які не розпоряджаються таким чином, будуть розпоряджені судом відповідної юрисдикції в країні, де знаходиться головний офіс, виключно для благодійних цілей."}
              {language === 'he' && "עם פירוק הארגון, לאחר תשלום או הקצאה לתשלום כל ההתחייבויות, המועצה תעביר את כל הנכסים באופן בלעדי למטרות צדקה לארגונים הפועלים באופן בלעדי למטרות צדקה. נכסים שלא הועברו כך יועברו על ידי בית משפט בעל סמכות שיפוט במדינה בה ממוקם המשרד הראשי, באופן בלעדי למטרות צדקה."}
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default OrganizationBylaws; 