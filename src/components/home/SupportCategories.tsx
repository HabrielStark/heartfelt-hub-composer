import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Banknote, Users, Heart, CircleDollarSign, HandHeart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const SupportCategories = () => {
  const { translate, language } = useLanguage();

  const categories = [
    {
      title: language === 'en' ? "Donations" : 
             language === 'es' ? "Donaciones" : 
             language === 'uk' ? "Пожертви" : 
             "תרומות",
      description: language === 'en' ? "Your donations help us expand, grow, and help more children. Every contribution makes a difference, no matter the size." : 
                   language === 'es' ? "Sus donaciones nos ayudan a expandirnos, crecer y ayudar a más niños. Cada contribución marca la diferencia, sin importar el tamaño." : 
                   language === 'uk' ? "Ваші пожертви допомагають нам розширюватися, зростати і допомагати більшій кількості дітей. Кожен внесок має значення, незалежно від розміру." : 
                   "התרומות שלך עוזרות לנו להתרחב, לגדול ולעזור ליותר ילדים. כל תרומה עושה הבדל, ללא קשר לגודל.",
      icon: <HandHeart size={24} />,
      href: "/donate",
      color: "bg-primary-100 text-primary"
    },
    {
      title: language === 'en' ? "Volunteering" : 
             language === 'es' ? "Voluntariado" : 
             language === 'uk' ? "Волонтерство" : 
             "התנדבות",
      description: language === 'en' ? "If you are a marketer, PR specialist, developer, psychologist, or just a person with an open heart — your experience can definitely become someone's support! CrossCharity always has room for those who are ready to share time, knowledge, and care. Here you can work with the most wonderful children and become part of the team!" : 
                   language === 'es' ? "Si eres un especialista en marketing, relaciones públicas, desarrollador, psicólogo o simplemente una persona con un corazón abierto, ¡tu experiencia definitivamente puede convertirse en el apoyo de alguien! CrossCharity siempre tiene espacio para aquellos que están dispuestos a compartir tiempo, conocimiento y cuidado. Aquí puedes trabajar con los niños más maravillosos y formar parte del equipo." : 
                   language === 'uk' ? "Якщо ви маркетолог, піарник, розробник, психолог або просто людина з відкритим серцем — ваш досвід точно може стати чиєюсь опорою! У CrossCharity завжди є місце для тих, хто готовий ділитися часом, знаннями та турботою. Тут можна працювати з найпрекраснішими дітьми і стати частиною команди!" : 
                   "אם אתה איש שיווק, יחסי ציבור, מפתח, פסיכולוג, או פשוט אדם עם לב פתוח — הניסיון שלך בהחלט יכול להפוך לתמיכה של מישהו! ל-CrossCharity תמיד יש מקום לאלה שמוכנים לחלוק זמן, ידע ודאגה. כאן אתה יכול לעבוד עם הילדים הכי נפלאים ולהיות חלק מהצוות!",
      icon: <Users size={24} />,
      href: "/how-to-help?tab=volunteer",
      color: "bg-green-100 text-green-600"
    },
    {
      title: language === 'en' ? "Sponsorship" : 
             language === 'es' ? "Patrocinio" : 
             language === 'uk' ? "Спонсорство" : 
             "חסות",
      description: language === 'en' ? "Thanks to businesses and private partners, CrossCharity implements systematic support for children. Sponsorship is not just help. It is an investment in stability, development, and confidence in the future. If this approach is close to you — let's get acquainted." : 
                   language === 'es' ? "Gracias a las empresas y socios privados, CrossCharity implementa apoyo sistemático para los niños. El patrocinio no es solo ayuda. Es una inversión en estabilidad, desarrollo y confianza en el futuro. Si este enfoque te resulta cercano, conozcámonos." : 
                   language === 'uk' ? "Завдяки бізнесам та приватним партнерам CrossCharity реалізує системну підтримку дітей. Спонсорство — це не просто допомога. Це внесок у стабільність, розвиток та впевненість у завтрашньому дні. Якщо вам близький такий підхід — давайте знайомитися." : 
                   "הודות לעסקים ושותפים פרטיים, CrossCharity מיישמת תמיכה שיטתית לילדים. חסות אינה רק עזרה. זו השקעה ביציבות, פיתוח וביטחון בעתיד. אם גישה זו קרובה אליך — בוא נתוודע.",
      icon: <Heart size={24} />,
      href: "/how-to-help?tab=partners",
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: language === 'en' ? "Fundraising" : 
             language === 'es' ? "Recaudación de fondos" : 
             language === 'uk' ? "Збір коштів" : 
             "גיוס כספים",
      description: language === 'en' ? "Fundraising is not about 'chipping in for something.' It's about joining forces for a specific goal. A company, brand, or team can launch their own fundraiser and close a specific need: medicines, technology, clothing, education, psychological help. CrossCharity takes care of everything else." : 
                   language === 'es' ? "La recaudación de fondos no se trata de 'contribuir para algo'. Se trata de unir fuerzas por un objetivo específico. Una empresa, marca o equipo puede lanzar su propia recaudación y cubrir una necesidad específica: medicinas, tecnología, ropa, educación, ayuda psicológica. CrossCharity se encarga de todo lo demás." : 
                   language === 'uk' ? "Збір коштів — це не про «скинутися на щось». Це про об'єднання зусиль заради конкретної мети. Компанія, бренд, команда — можуть запустити власний збір та закрити конкретну потребу: ліки, техніка, одяг, освіта, психологічна допомога. CrossCharity бере на себе все інше." : 
                   "גיוס כספים אינו על 'תרומה למשהו'. זה על חיבור כוחות למטרה ספציפית. חברה, מותג או צוות יכולים להשיק את גיוס הכספים שלהם ולסגור צורך ספציפי: תרופות, טכנולוגיה, ביגוד, חינוך, עזרה פסיכולוגית. CrossCharity מטפלת בכל השאר.",
      icon: <CircleDollarSign size={24} />,
      href: "/how-to-help?tab=fundraising",
      color: "bg-blue-100 text-blue-600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl mb-4">
            {language === 'en' && "How You Can Help"}
            {language === 'es' && "Cómo puedes ayudar"}
            {language === 'uk' && "Як ви можете допомогти"}
            {language === 'he' && "איך אתה יכול לעזור"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {language === 'en' && "Join us in making a difference in children's lives"}
            {language === 'es' && "Únete a nosotros para marcar la diferencia en la vida de los niños"}
            {language === 'uk' && "Приєднуйтесь до нас, щоб змінити життя дітей на краще"}
            {language === 'he' && "הצטרף אלינו בעשיית שינוי בחיי ילדים"}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className={`rounded-full w-12 h-12 flex items-center justify-center mb-4 ${category.color}`}>
                {category.icon}
              </div>
              <h3 className="font-semibold text-xl mb-3">{category.title}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <Link to={category.href}>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary-50">
                  {language === 'en' && "Learn More"}
                  {language === 'es' && "Saber más"}
                  {language === 'uk' && "Дізнатися більше"}
                  {language === 'he' && "למידע נוסף"}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportCategories;
