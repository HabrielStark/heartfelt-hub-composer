
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import PageBanner from '@/components/ui/PageBanner';
import { useLanguage } from '@/contexts/LanguageContext';
import PhotoGallery from '@/components/photos/PhotoGallery';

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

        <PhotoGallery />
      </div>
    </PageLayout>
  );
};

export default KidsEvents;
