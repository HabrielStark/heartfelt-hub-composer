
import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Users, Handshake } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const SupportCategories = () => {
  const categories = [
    {
      title: "Make a Donation",
      description: "Your financial contributions help provide essential care, education, and opportunities for children in need.",
      icon: <DollarSign className="h-10 w-10 text-primary" />,
      bgClass: "bg-pastel-green",
      link: "/how-to-help#donations"
    },
    {
      title: "Volunteer Your Time",
      description: "Share your skills, knowledge, and compassion by volunteering with us to make a direct impact on children's lives.",
      icon: <Users className="h-10 w-10 text-primary" />,
      bgClass: "bg-pastel-blue",
      link: "/how-to-help#volunteer"
    },
    {
      title: "Partner With Us",
      description: "Organizations and businesses can create meaningful partnerships to support our mission and expand our reach.",
      icon: <Handshake className="h-10 w-10 text-primary" />,
      bgClass: "bg-pastel-purple",
      link: "/how-to-help#partnership"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="How You Can Help" 
          subtitle="There are many ways to support our mission and make a difference in the lives of children in need."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link 
              to={category.link} 
              key={index}
              className="group rounded-xl overflow-hidden card-hover"
            >
              <div className={`p-8 text-center h-full flex flex-col ${category.bgClass}`}>
                <div className="inline-flex items-center justify-center mx-auto rounded-full bg-white p-4 mb-6 shadow-sm">
                  {category.icon}
                </div>
                <h3 className="font-playfair font-semibold text-xl mb-4">{category.title}</h3>
                <p className="text-gray-700 flex-grow">{category.description}</p>
                <div className="mt-6 font-medium text-primary group-hover:underline">Learn more</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportCategories;
