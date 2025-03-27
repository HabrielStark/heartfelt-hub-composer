import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import PageBanner from '@/components/ui/PageBanner';
import { useLanguage } from '@/contexts/LanguageContext';

const ChildProtectionPolicy = () => {
  const { language } = useLanguage();

  return (
    <PageLayout>
      <PageBanner 
        title={
          language === 'en' ? "Child Protection Policy" : 
          language === 'es' ? "Política de Protección Infantil" : 
          language === 'uk' ? "Політика захисту дітей" : 
          "מדיניות הגנה על ילדים"
        }
        subtitle={
          language === 'en' ? "Our commitment to children's safety and well-being" : 
          language === 'es' ? "Nuestro compromiso con la seguridad y el bienestar de los niños" : 
          language === 'uk' ? "Наше зобов'язання щодо безпеки та благополуччя дітей" : 
          "המחויבות שלנו לבטיחות ורווחת ילדים"
        }
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          {/* Introduction */}
          <section className="mb-10">
            <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
              {language === 'en' ? "Introduction" : 
               language === 'es' ? "Introducción" : 
               language === 'uk' ? "Вступ" : 
               "מבוא"}
            </h2>
            <p className="text-gray-700 mb-4">
              {language === 'en' && "CrossCharity Foundation is committed to creating a safe environment for all children under our care. We recognize that children, especially those in vulnerable circumstances, have the right to protection from all forms of harm, abuse, neglect, and exploitation. This policy outlines our commitment and approach to safeguarding children."}
              {language === 'es' && "La Fundación CrossCharity está comprometida con la creación de un entorno seguro para todos los niños bajo nuestro cuidado. Reconocemos que los niños, especialmente aquellos en circunstancias vulnerables, tienen derecho a protección contra todas las formas de daño, abuso, negligencia y explotación. Esta política describe nuestro compromiso y enfoque para salvaguardar a los niños."}
              {language === 'uk' && "Фонд CrossCharity прагне створити безпечне середовище для всіх дітей, які перебувають під нашою опікою. Ми визнаємо, що діти, особливо ті, хто перебуває у вразливих обставинах, мають право на захист від усіх форм шкоди, жорстокого поводження, нехтування та експлуатації. Ця політика окреслює наше зобов'язання та підхід до захисту дітей."}
              {language === 'he' && "קרן CrossCharity מחויבת ליצירת סביבה בטוחה לכל הילדים תחת טיפולנו. אנו מכירים בכך שילדים, במיוחד אלה בנסיבות פגיעות, זכאים להגנה מפני כל צורות הפגיעה, ההתעללות, ההזנחה והניצול. מדיניות זו מתווה את המחויבות והגישה שלנו להגנה על ילדים."}
            </p>
          </section>

          {/* Purpose and Scope */}
          <section className="mb-10">
            <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
              {language === 'en' ? "Purpose and Scope" : 
               language === 'es' ? "Propósito y Alcance" : 
               language === 'uk' ? "Мета та сфера застосування" : 
               "מטרה והיקף"}
            </h2>
            <p className="text-gray-700 mb-4">
              {language === 'en' && "This policy applies to all staff, volunteers, board members, partners, and any other individuals associated with CrossCharity Foundation. It aims to:"}
              {language === 'es' && "Esta política se aplica a todo el personal, voluntarios, miembros de la junta, socios y cualquier otra persona asociada con la Fundación CrossCharity. Su objetivo es:"}
              {language === 'uk' && "Ця політика поширюється на всіх співробітників, волонтерів, членів правління, партнерів та будь-яких інших осіб, пов'язаних із Фондом CrossCharity. Вона має на меті:"}
              {language === 'he' && "מדיניות זו חלה על כל העובדים, המתנדבים, חברי הדירקטוריון, שותפים וכל אדם אחר הקשור לקרן CrossCharity. היא מיועדת:"}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>
                {language === 'en' && "Protect children from harm, abuse, and exploitation"}
                {language === 'es' && "Proteger a los niños del daño, abuso y explotación"}
                {language === 'uk' && "Захистити дітей від шкоди, жорстокого поводження та експлуатації"}
                {language === 'he' && "להגן על ילדים מפני פגיעה, התעללות וניצול"}
              </li>
              <li>
                {language === 'en' && "Establish clear protocols for prevention, reporting, and response"}
                {language === 'es' && "Establecer protocolos claros para la prevención, informes y respuesta"}
                {language === 'uk' && "Встановити чіткі протоколи запобігання, звітування та реагування"}
                {language === 'he' && "לקבוע פרוטוקולים ברורים למניעה, דיווח ותגובה"}
              </li>
              <li>
                {language === 'en' && "Create a safe environment for children in all our programs and activities"}
                {language === 'es' && "Crear un entorno seguro para los niños en todos nuestros programas y actividades"}
                {language === 'uk' && "Створити безпечне середовище для дітей у всіх наших програмах та заходах"}
                {language === 'he' && "ליצור סביבה בטוחה לילדים בכל התוכניות והפעילויות שלנו"}
              </li>
              <li>
                {language === 'en' && "Ensure all associated individuals understand their responsibilities"}
                {language === 'es' && "Asegurar que todas las personas asociadas entiendan sus responsabilidades"}
                {language === 'uk' && "Забезпечити розуміння всіма пов'язаними особами своїх обов'язків"}
                {language === 'he' && "להבטיח שכל האנשים הקשורים מבינים את אחריותם"}
              </li>
            </ul>
          </section>

          {/* Core Principles */}
          <section className="mb-10">
            <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
              {language === 'en' ? "Core Principles" : 
               language === 'es' ? "Principios Fundamentales" : 
               language === 'uk' ? "Основні принципи" : 
               "עקרונות ליבה"}
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-xl mb-2 text-gray-800">
                  {language === 'en' ? "1. Best Interest of the Child" : 
                   language === 'es' ? "1. El Mejor Interés del Niño" : 
                   language === 'uk' ? "1. Найкращі інтереси дитини" : 
                   "1. טובת הילד"}
                </h3>
                <p className="text-gray-700">
                  {language === 'en' && "All decisions and actions concerning children will prioritize their best interests, taking into account their unique needs, rights, and circumstances."}
                  {language === 'es' && "Todas las decisiones y acciones relacionadas con los niños priorizarán sus mejores intereses, teniendo en cuenta sus necesidades, derechos y circunstancias únicas."}
                  {language === 'uk' && "Усі рішення та дії щодо дітей будуть пріоритезувати їхні найкращі інтереси, враховуючи їхні унікальні потреби, права та обставини."}
                  {language === 'he' && "כל ההחלטות והפעולות הנוגעות לילדים יתנו עדיפות לטובתם, תוך התחשבות בצרכיהם, זכויותיהם ונסיבותיהם הייחודיות."}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2 text-gray-800">
                  {language === 'en' ? "2. Zero Tolerance for Abuse" : 
                   language === 'es' ? "2. Tolerancia Cero al Abuso" : 
                   language === 'uk' ? "2. Нульова толерантність до насильства" : 
                   "2. אפס סובלנות להתעללות"}
                </h3>
                <p className="text-gray-700">
                  {language === 'en' && "We maintain a strict zero-tolerance stance on all forms of child abuse, neglect, and exploitation. Any confirmed cases will result in immediate action, including potential termination of employment or association and reporting to relevant authorities."}
                  {language === 'es' && "Mantenemos una estricta postura de tolerancia cero ante todas las formas de abuso infantil, negligencia y explotación. Cualquier caso confirmado resultará en acción inmediata, incluyendo la posible terminación del empleo o asociación y la denuncia a las autoridades pertinentes."}
                  {language === 'uk' && "Ми дотримуємося суворої політики нульової толерантності щодо всіх форм жорстокого поводження з дітьми, нехтування та експлуатації. Будь-які підтверджені випадки призведуть до негайних дій, включно з можливим припиненням працевлаштування чи співпраці та повідомленням відповідних органів влади."}
                  {language === 'he' && "אנו שומרים על עמדה נוקשה של אפס סובלנות לכל צורות ההתעללות בילדים, הזנחה וניצול. כל מקרה מאושר יביא לפעולה מיידית, כולל אפשרות לסיום העסקה או שותפות ודיווח לרשויות הרלוונטיות."}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2 text-gray-800">
                  {language === 'en' ? "3. Confidentiality and Dignity" : 
                   language === 'es' ? "3. Confidencialidad y Dignidad" : 
                   language === 'uk' ? "3. Конфіденційність та гідність" : 
                   "3. סודיות וכבוד"}
                </h3>
                <p className="text-gray-700">
                  {language === 'en' && "We respect children's privacy and dignity at all times. Information related to child protection concerns will be handled with the utmost confidentiality, shared only on a need-to-know basis."}
                  {language === 'es' && "Respetamos la privacidad y dignidad de los niños en todo momento. La información relacionada con preocupaciones de protección infantil se manejará con la máxima confidencialidad, compartida solo según la necesidad de conocimiento."}
                  {language === 'uk' && "Ми поважаємо приватність та гідність дітей у будь-який час. Інформація, пов'язана з питаннями захисту дітей, буде оброблятися з максимальною конфіденційністю, поширюватися лише за принципом необхідності знати."}
                  {language === 'he' && "אנו מכבדים את פרטיותם וכבודם של ילדים בכל עת. מידע הקשור לחששות להגנת ילדים יטופל בסודיות מרבית, ויישמר רק על בסיס הצורך לדעת."}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2 text-gray-800">
                  {language === 'en' ? "4. Inclusivity" : 
                   language === 'es' ? "4. Inclusividad" : 
                   language === 'uk' ? "4. Інклюзивність" : 
                   "4. הכללה"}
                </h3>
                <p className="text-gray-700">
                  {language === 'en' && "Our protection measures apply equally to all children regardless of age, gender, ability, religion, ethnicity, or background. We are committed to providing inclusive support that acknowledges and respects diversity."}
                  {language === 'es' && "Nuestras medidas de protección se aplican por igual a todos los niños sin importar su edad, género, capacidad, religión, etnia o antecedentes. Estamos comprometidos a proporcionar apoyo inclusivo que reconozca y respete la diversidad."}
                  {language === 'uk' && "Наші заходи захисту однаково поширюються на всіх дітей, незалежно від віку, статі, здібностей, релігії, етнічної приналежності чи походження. Ми зобов'язуємося надавати інклюзивну підтримку, яка визнає та поважає різноманітність."}
                  {language === 'he' && "אמצעי ההגנה שלנו חלים באופן שווה על כל הילדים ללא קשר לגיל, מגדר, יכולת, דת, מוצא אתני או רקע. אנו מחויבים לספק תמיכה מכלילה המכירה ומכבדת את השונות."}
                </p>
              </div>
            </div>
          </section>

          {/* Preventive Measures */}
          <section className="mb-10">
            <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
              {language === 'en' ? "Preventive Measures" : 
               language === 'es' ? "Medidas Preventivas" : 
               language === 'uk' ? "Запобіжні заходи" : 
               "אמצעי מניעה"}
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                <span className="font-semibold">
                  {language === 'en' ? "Staff Screening and Vetting" : 
                   language === 'es' ? "Selección y Verificación del Personal" : 
                   language === 'uk' ? "Перевірка та оцінка персоналу" : 
                   "סינון ובדיקת צוות"}
                </span>: 
                {language === 'en' && " All staff and volunteers undergo thorough background checks, reference verification, and regular performance evaluations."}
                {language === 'es' && " Todo el personal y los voluntarios se someten a exhaustivas verificaciones de antecedentes, verificación de referencias y evaluaciones regulares de desempeño."}
                {language === 'uk' && " Усі співробітники та волонтери проходять ретельну перевірку біографічних даних, перевірку рекомендацій та регулярні оцінки результатів діяльності."}
                {language === 'he' && " כל הצוות והמתנדבים עוברים בדיקות רקע מקיפות, אימות המלצות והערכות ביצועים קבועות."}
              </li>
              <li>
                <span className="font-semibold">
                  {language === 'en' ? "Mandatory Training" : 
                   language === 'es' ? "Capacitación Obligatoria" : 
                   language === 'uk' ? "Обов'язкове навчання" : 
                   "הכשרה חובה"}
                </span>: 
                {language === 'en' && " All individuals working with children receive comprehensive child protection training upon joining and regular refresher courses thereafter."}
                {language === 'es' && " Todas las personas que trabajan con niños reciben capacitación integral sobre protección infantil al unirse y cursos de actualización regulares a partir de entonces."}
                {language === 'uk' && " Усі особи, які працюють з дітьми, отримують комплексне навчання з питань захисту дітей при приєднанні та регулярні курси підвищення кваліфікації в подальшому."}
                {language === 'he' && " כל האנשים העובדים עם ילדים מקבלים הכשרה מקיפה להגנת ילדים עם הצטרפותם וקורסי ריענון קבועים לאחר מכן."}
              </li>
              <li>
                <span className="font-semibold">
                  {language === 'en' ? "Risk Assessment" : 
                   language === 'es' ? "Evaluación de Riesgos" : 
                   language === 'uk' ? "Оцінка ризиків" : 
                   "הערכת סיכונים"}
                </span>: 
                {language === 'en' && " Regular assessments of potential risks to children in our programs with documented mitigation strategies."}
                {language === 'es' && " Evaluaciones regulares de riesgos potenciales para los niños en nuestros programas con estrategias documentadas de mitigación."}
                {language === 'uk' && " Регулярні оцінки потенційних ризиків для дітей у наших програмах із задокументованими стратегіями пом'якшення."}
                {language === 'he' && " הערכות סדירות של סיכונים פוטנציאליים לילדים בתוכניות שלנו עם אסטרטגיות מתועדות להפחתתם."}
              </li>
              <li>
                <span className="font-semibold">
                  {language === 'en' ? "Safe Programming" : 
                   language === 'es' ? "Programación Segura" : 
                   language === 'uk' ? "Безпечне програмування" : 
                   "תכנות בטוח"}
                </span>: 
                {language === 'en' && " All programs and activities are designed with child safety as a priority, including appropriate supervision ratios and clear boundaries."}
                {language === 'es' && " Todos los programas y actividades están diseñados con la seguridad infantil como prioridad, incluyendo proporciones de supervisión apropiadas y límites claros."}
                {language === 'uk' && " Усі програми та заходи розроблені з приорітетом безпеки дітей, включаючи відповідні співвідношення нагляду та чіткі межі."}
                {language === 'he' && " כל התוכניות והפעילויות מתוכננות עם בטיחות הילד כעדיפות, כולל יחסי פיקוח מתאימים וגבולות ברורים."}
              </li>
            </ul>
          </section>

          {/* Reporting Procedures */}
          <section className="mb-10">
            <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
              {language === 'en' ? "Reporting Procedures" : 
               language === 'es' ? "Procedimientos de Informe" : 
               language === 'uk' ? "Процедури звітування" : 
               "נוהלי דיווח"}
            </h2>
            <p className="text-gray-700 mb-4">
              {language === 'en' && "All staff, volunteers, and associates have a mandatory duty to report any suspected child protection concerns."}
              {language === 'es' && "Todo el personal, voluntarios y asociados tienen el deber obligatorio de informar cualquier sospecha de preocupación relacionada con la protección infantil."}
              {language === 'uk' && "Усі співробітники, волонтери та партнери мають обов'язковий обов'язок повідомляти про будь-які підозрювані занепокоєння щодо захисту дітей."}
              {language === 'he' && "כל העובדים, המתנדבים והשותפים חייבים לדווח על כל חשש להגנת ילדים."}
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              <li>
                {language === 'en' && "Immediately report concerns to the designated Child Protection Officer."}
                {language === 'es' && "Informar inmediatamente las preocupaciones al Oficial de Protección Infantil designado."}
                {language === 'uk' && "Негайно повідомляйте про проблеми призначеному офіцеру з захисту дітей."}
                {language === 'he' && "דווח מייד על חששות לקצין הגנת הילדים המיועד."}
              </li>
              <li>
                {language === 'en' && "Complete a standardized incident report form, documenting all relevant details."}
                {language === 'es' && "Completar un formulario estandarizado de informe de incidentes, documentando todos los detalles relevantes."}
                {language === 'uk' && "Заповніть стандартизовану форму звіту про інцидент, документуючи всі відповідні деталі."}
                {language === 'he' && "מלא טופס דוח אירוע סטנדרטי, ותעד את כל הפרטים הרלוונטיים."}
              </li>
              <li>
                {language === 'en' && "All reports will be treated confidentially and investigated thoroughly by a designated team."}
                {language === 'es' && "Todos los informes serán tratados confidencialmente e investigados exhaustivamente por un equipo designado."}
                {language === 'uk' && "Усі звіти будуть розглядатися конфіденційно та ретельно розслідуватися призначеною командою."}
                {language === 'he' && "כל הדיווחים יטופלו בסודיות וייחקרו ביסודיות על ידי צוות ייעודי."}
              </li>
              <li>
                {language === 'en' && "Appropriate authorities will be notified as legally required and necessary for the child's safety."}
                {language === 'es' && "Se notificará a las autoridades apropiadas según sea legalmente requerido y necesario para la seguridad del niño."}
                {language === 'uk' && "Відповідні органи влади будуть повідомлені, як це юридично необхідно і потрібно для безпеки дитини."}
                {language === 'he' && "הרשויות המתאימות יקבלו הודעה כנדרש על פי חוק וכנדרש לבטיחות הילד."}
              </li>
            </ol>
          </section>

          {/* Implementation and Monitoring */}
          <section>
            <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
              {language === 'en' ? "Implementation and Monitoring" : 
               language === 'es' ? "Implementación y Monitoreo" : 
               language === 'uk' ? "Впровадження та моніторинг" : 
               "יישום וניטור"}
            </h2>
            <p className="text-gray-700 mb-4">
              {language === 'en' && "This policy will be reviewed annually and updated as necessary to ensure it remains effective and aligned with current best practices and legal requirements. Regular monitoring includes:"}
              {language === 'es' && "Esta política será revisada anualmente y actualizada según sea necesario para garantizar que siga siendo efectiva y alineada con las mejores prácticas actuales y los requisitos legales. El monitoreo regular incluye:"}
              {language === 'uk' && "Ця політика буде переглядатися щорічно та оновлюватися за необхідності, щоб забезпечити її ефективність та відповідність сучасним найкращим практикам та юридичним вимогам. Регулярний моніторинг включає:"}
              {language === 'he' && "מדיניות זו תיבחן מחדש מדי שנה ותעודכן לפי הצורך כדי להבטיח שהיא נשארת יעילה ומותאמת לפרקטיקות המיטביות העדכניות ולדרישות החוק. ניטור קבוע כולל:"}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                {language === 'en' && "Regular audits of child protection practices across all programs."}
                {language === 'es' && "Auditorías regulares de prácticas de protección infantil en todos los programas."}
                {language === 'uk' && "Регулярні аудити практик захисту дітей у всіх програмах."}
                {language === 'he' && "ביקורות קבועות של נוהלי הגנת ילדים בכל התוכניות."}
              </li>
              <li>
                {language === 'en' && "Tracking of reported incidents, responses, and outcomes."}
                {language === 'es' && "Seguimiento de incidentes reportados, respuestas y resultados."}
                {language === 'uk' && "Відстеження повідомлених інцидентів, реакцій та результатів."}
                {language === 'he' && "מעקב אחר אירועים מדווחים, תגובות ותוצאות."}
              </li>
              <li>
                {language === 'en' && "Feedback mechanisms for children, families, and staff."}
                {language === 'es' && "Mecanismos de retroalimentación para niños, familias y personal."}
                {language === 'uk' && "Механізми зворотного зв'язку для дітей, сімей та персоналу."}
                {language === 'he' && "מנגנוני משוב לילדים, משפחות וצוות."}
              </li>
              <li>
                {language === 'en' && "Regular assessments of staff knowledge and adherence to policy."}
                {language === 'es' && "Evaluaciones regulares del conocimiento del personal y el cumplimiento de la política."}
                {language === 'uk' && "Регулярні оцінки знань персоналу та дотримання політики."}
                {language === 'he' && "הערכות קבועות של ידע הצוות והקפדה על המדיניות."}
              </li>
            </ul>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default ChildProtectionPolicy; 