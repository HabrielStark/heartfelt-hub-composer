
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import PageBanner from '@/components/ui/PageBanner';
import { useLanguage } from '@/contexts/LanguageContext';
import { photos } from '@/data/photos';

const KidsEvents = () => {
  const { translate } = useLanguage();

  return (
    <PageLayout>
      <PageBanner 
        title={translate('kidsEvents')} 
        subtitle={translate('kidsEventsSubtitle')} 
      />
      
      <div className="container mx-auto py-12">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <p className="text-lg mb-6">
            {translate('kidsEventsDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <div 
              key={photo.id} 
              className="relative overflow-hidden rounded-lg group"
            >
              <img 
                src={photo.src} 
                alt={photo.description} 
                className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-4 text-white">
                  <p className="font-medium">{photo.description}</p>
                  <p className="text-sm opacity-80">{photo.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default KidsEvents;
