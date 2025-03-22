import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import PageBanner from '@/components/ui/PageBanner';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { photos } from '@/data/photos';
import { Photo } from '@/types/photo';
import { Heart, ZoomIn } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogClose,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

const Kids = () => {
  const { translate } = useLanguage();
  const [openPhotoId, setOpenPhotoId] = useState<string | null>(null);
  const [liked, setLiked] = useState<Record<string, boolean>>({});

  const handleLike = (id: string) => {
    setLiked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <PageLayout>
      <PageBanner 
        title={translate('kids.title')}
        subtitle={translate('kids.subtitle')}
        backgroundImage="/IMG_4383.JPG"
      />
      
      <section className="container mx-auto py-12 px-4">
        <div className="max-w-6xl mx-auto mb-12 text-center">
          <p className="text-lg text-gray-700 mb-8">
            {translate('kids.description')}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="group relative rounded-xl overflow-hidden shadow-lg bg-white transform hover:-translate-y-1 transition-transform duration-200"
              >
                <div 
                  className="aspect-square overflow-hidden cursor-pointer"
                  onClick={() => setOpenPhotoId(photo.id)}
                >
                  <img 
                    src={photo.src} 
                    alt={photo.description}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-4 bg-white">
                  <div className="flex justify-between items-center">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="p-0 hover:bg-transparent"
                      onClick={() => handleLike(photo.id)}
                    >
                      <Heart 
                        className={cn(
                          "h-5 w-5 transition-colors", 
                          liked[photo.id] ? "fill-red-500 text-red-500" : "text-gray-400"
                        )} 
                      />
                    </Button>
                    
                    <div className="flex space-x-1">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="p-1 text-gray-500 hover:text-primary hover:bg-primary-50 rounded-full"
                        onClick={() => setOpenPhotoId(photo.id)}
                      >
                        <ZoomIn className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Dialog/Modal */}
      <Dialog open={openPhotoId !== null} onOpenChange={() => setOpenPhotoId(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none">
          <div className="relative bg-white rounded-lg overflow-hidden">
            <div className="flex items-center justify-center bg-black">
              {openPhotoId && (
                <img
                  src={photos.find(p => p.id === openPhotoId)?.src}
                  alt="Full size"
                  className="max-h-[80vh] max-w-full object-contain"
                />
              )}
            </div>
            
            <div className="p-4 bg-white">
              {openPhotoId && (
                <>
                  <div className="flex justify-between mt-4">
                    <Button 
                      variant="ghost" 
                      onClick={() => handleLike(openPhotoId)}
                      className="flex items-center space-x-1"
                    >
                      <Heart 
                        className={cn(
                          "h-5 w-5", 
                          liked[openPhotoId] ? "fill-red-500 text-red-500" : "text-gray-400"
                        )} 
                      />
                      <span>{translate('kids.actions.like')}</span>
                    </Button>
                    
                    <DialogClose asChild>
                      <Button variant="outline">{translate('kids.actions.close')}</Button>
                    </DialogClose>
                  </div>
                </>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </PageLayout>
  );
};

export default Kids;
