
import React from 'react';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundClass?: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ 
  title, 
  subtitle, 
  backgroundImage,
  backgroundClass = "bg-gradient-to-r from-primary-100 to-pastel-purple"
}) => {
  return (
    <div 
      className={`py-16 md:py-24 ${backgroundClass}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
    >
      <div className="container mx-auto text-center">
        <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-gray-800 mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageBanner;
