
import React from 'react';
import SectionHeading from '../ui/SectionHeading';

const PartnersSection = () => {
  const partners = [
    {
      name: "ABC Foundation",
      logo: "https://via.placeholder.com/200x80?text=ABC+Foundation"
    },
    {
      name: "XYZ Corporation",
      logo: "https://via.placeholder.com/200x80?text=XYZ+Corp"
    },
    {
      name: "Global Helpers",
      logo: "https://via.placeholder.com/200x80?text=Global+Helpers"
    },
    {
      name: "Community Bank",
      logo: "https://via.placeholder.com/200x80?text=Community+Bank"
    },
    {
      name: "Caring Partners Inc.",
      logo: "https://via.placeholder.com/200x80?text=Caring+Partners"
    }
  ];

  return (
    <section className="py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Our Partners" 
          subtitle="We're grateful for the support of these organizations who help make our work possible."
          decoration={false}
        />
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-12 md:h-16 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
