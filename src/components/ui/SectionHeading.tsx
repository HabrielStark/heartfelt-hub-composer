
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  decoration?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = true,
  decoration = true
}) => {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className="font-playfair font-semibold text-3xl md:text-4xl text-gray-800 mb-3">
        {title}
      </h2>
      
      {decoration && (
        <div className={`inline-block ${centered ? 'mx-auto' : ''}`}>
          <div className="flex items-center justify-center space-x-2 mb-3">
            <div className="w-8 h-1 bg-primary-300 rounded-full"></div>
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse-soft"></div>
            <div className="w-8 h-1 bg-primary-300 rounded-full"></div>
          </div>
        </div>
      )}
      
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
