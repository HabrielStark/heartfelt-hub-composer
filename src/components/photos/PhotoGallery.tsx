
import React, { useState } from 'react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { useLanguage } from '@/contexts/LanguageContext';
import PhotoGrid from './PhotoGrid';
import { allPhotoCategories, categorizedPhotos } from '@/data/photos';

const PhotoGallery = () => {
  const { translate } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(allPhotoCategories[0]);

  return (
    <div className="space-y-8">
      <Tabs defaultValue={activeCategory} onValueChange={setActiveCategory}>
        <div className="flex justify-center">
          <TabsList className="mb-8">
            {allPhotoCategories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {translate(category)}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        
        {allPhotoCategories.map((category) => (
          <TabsContent key={category} value={category} className="animation-fade-in">
            <PhotoGrid photos={categorizedPhotos[category]} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default PhotoGallery;
