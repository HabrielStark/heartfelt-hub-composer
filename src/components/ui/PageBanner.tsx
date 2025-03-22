import React from 'react';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageBanner: React.FC<PageBannerProps> = ({
  title,
  subtitle,
  backgroundImage
}) => {
  const bannerStyle = backgroundImage ? {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  } : {};

  return (
    <div 
      className="relative py-16 md:py-24 bg-gradient-to-r from-primary-50 to-pastel-blue"
      style={bannerStyle}
    >
      {/* Полупрозрачная темная подложка для лучшей видимости текста */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/50" />
      )}
      
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl mb-4 text-white drop-shadow-lg">
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white drop-shadow-md">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageBanner;
