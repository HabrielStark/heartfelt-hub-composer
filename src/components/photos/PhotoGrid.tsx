
import React, { useState } from 'react';
import { 
  Dialog,
  DialogContent,
  DialogTitle 
} from "@/components/ui/dialog";
import { Photo } from '@/types/photo';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PhotoGridProps {
  photos: Photo[];
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openPhotoModal = (photo: Photo, index: number) => {
    setSelectedPhoto(photo);
    setCurrentIndex(index);
  };

  const closePhotoModal = () => {
    setSelectedPhoto(null);
  };

  const goToNextPhoto = () => {
    if (currentIndex < photos.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedPhoto(photos[currentIndex + 1]);
    }
  };

  const goToPrevPhoto = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedPhoto(photos[currentIndex - 1]);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <div 
            key={photo.id} 
            className="relative overflow-hidden rounded-lg aspect-square hover:opacity-90 transition-opacity cursor-pointer hover-scale"
            onClick={() => openPhotoModal(photo, index)}
          >
            <img 
              src={photo.src} 
              alt={photo.description} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <Dialog open={!!selectedPhoto} onOpenChange={() => closePhotoModal()}>
          <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none">
            <div className="relative bg-background rounded-lg overflow-hidden">
              <div className="flex justify-between items-center p-4 absolute top-0 left-0 right-0 z-10 bg-background/80 backdrop-blur-sm">
                <DialogTitle>{selectedPhoto.description}</DialogTitle>
                <Button variant="ghost" size="icon" onClick={closePhotoModal}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="relative pt-16">
                <img 
                  src={selectedPhoto.src} 
                  alt={selectedPhoto.description} 
                  className="w-full max-h-[80vh] object-contain"
                />
              </div>
              
              <div className="flex justify-between p-4">
                <Button 
                  variant="outline" 
                  onClick={goToPrevPhoto}
                  disabled={currentIndex === 0}
                >
                  <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                </Button>
                <Button 
                  variant="outline" 
                  onClick={goToNextPhoto}
                  disabled={currentIndex === photos.length - 1}
                >
                  Next <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default PhotoGrid;
