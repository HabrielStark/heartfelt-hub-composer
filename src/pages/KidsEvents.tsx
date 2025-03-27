import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import PageBanner from '@/components/ui/PageBanner';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { photos } from '@/data/photos';
import { Photo } from '@/types/photo';
import { Heart, ZoomIn, Users, Gift, Clock, Target, ArrowRight, AlertCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogClose,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SectionHeading from '@/components/ui/SectionHeading';
import CryptoDonationForm from '@/components/donations/CryptoDonationForm';
import DonationForm from '@/components/donations/DonationForm';
import { cn } from '@/lib/utils';

const Kids = () => {
  const { translate, language } = useLanguage();
  const [openPhotoId, setOpenPhotoId] = useState<string | null>(null);
  const [liked, setLiked] = useState<Record<string, boolean>>({});
  const [selectedKid, setSelectedKid] = useState<string | null>(null);
  const [donationMethod, setDonationMethod] = useState<'card' | 'crypto'>('card');

  const handleLike = (id: string) => {
    setLiked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Примеры профилей детей
  const kidsProfiles = [
    {
      id: 'alex',
      name: language === 'en' ? 'Alex, 7 years old' : 'Алекс, 7 років',
      image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      description: language === 'en' 
        ? 'Alex needs help with medical treatment for his ongoing respiratory condition. He loves playing soccer and dreams of becoming a professional player one day.'
        : 'Алексу потрібна допомога з медичним лікуванням його респіраторного захворювання. Він любить грати у футбол і мріє одного дня стати професійним гравцем.',
      goalAmount: 5000,
      raisedAmount: 1250,
      tags: ['Medical', 'Urgent']
    },
    {
      id: 'maria',
      name: language === 'en' ? 'Maria, 10 years old' : 'Марія, 10 років',
      image: 'https://images.unsplash.com/photo-1595039838779-f3780873afdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      description: language === 'en'
        ? 'Maria is passionate about learning and needs support for educational materials and school tuition. She excels in mathematics and science, and dreams of becoming a doctor.'
        : 'Марія захоплюється навчанням і потребує підтримки для навчальних матеріалів та шкільного навчання. Вона відмінно володіє математикою та природничими науками та мріє стати лікарем.',
      goalAmount: 3000,
      raisedAmount: 1800,
      tags: ['Education', 'Supplies']
    },
    {
      id: 'victor',
      name: language === 'en' ? 'Victor, 5 years old' : 'Віктор, 5 років',
      image: 'https://images.unsplash.com/photo-1611281697064-dbf1413dfa3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      description: language === 'en'
        ? 'Victor is recovering from surgery and needs rehabilitation therapy. He is a cheerful boy who loves drawing and creating stories about superheroes who save the world.'
        : 'Віктор відновлюється після операції і потребує реабілітаційної терапії. Він життєрадісний хлопчик, який любить малювати та створювати історії про супергероїв, які рятують світ.',
      goalAmount: 4500,
      raisedAmount: 2200,
      tags: ['Medical', 'Rehabilitation']
    }
  ];

  const handleOpenDonationModal = (kidId: string) => {
    setSelectedKid(kidId);
  };

  // Тексты для разных языков
  const getComingSoonText = () => {
    if (language === 'en') return 'COMING SOON';
    if (language === 'uk') return 'СКОРО';
    if (language === 'es') return 'PRÓXIMAMENTE';
    if (language === 'he') return 'בקרוב';
    return 'COMING SOON';
  };

  const getSupportTitleText = () => {
    if (language === 'en') return 'Help a Child Directly';
    if (language === 'uk') return 'Допоможіть дитині напряму';
    if (language === 'es') return 'Ayuda a un niño directamente';
    if (language === 'he') return 'עזור לילד ישירות';
    return 'Help a Child Directly';
  };

  const getSupportDescriptionText = () => {
    if (language === 'en') return 'This feature is coming soon! You will be able to donate directly to support a specific child\'s needs, whether it\'s medical treatment, education, or basic necessities.';
    if (language === 'uk') return 'Ця функція скоро з\'явиться! Ви зможете робити пожертви безпосередньо для підтримки конкретних потреб дитини, будь то медичне лікування, освіта чи базові потреби.';
    if (language === 'es') return 'Esta función estará disponible pronto. Podrás donar directamente para apoyar las necesidades específicas de un niño, ya sea tratamiento médico, educación o necesidades básicas.';
    if (language === 'he') return 'תכונה זו תגיע בקרוב! תוכל לתרום ישירות כדי לתמוך בצרכים הספציפיים של ילד, בין אם מדובר בטיפול רפואי, חינוך או צרכים בסיסיים.';
    return 'This feature is coming soon! You will be able to donate directly to support a specific child\'s needs, whether it\'s medical treatment, education, or basic necessities.';
  };

  const getWorkingHardText = () => {
    if (language === 'en') return 'We are working hard to bring this feature to you soon!';
    if (language === 'uk') return 'Ми наполегливо працюємо, щоб скоро представити вам цю функцію!';
    if (language === 'es') return '¡Estamos trabajando arduamente para ofrecerte esta función pronto!';
    if (language === 'he') return 'אנו עובדים קשה כדי להביא לכם את התכונה הזו בקרוב!';
    return 'We are working hard to bring this feature to you soon!';
  };

  const getTagText = (tag: string) => {
    if (tag === 'Medical') {
      if (language === 'en') return 'Medical';
      if (language === 'uk') return 'Медичний';
      if (language === 'es') return 'Médico';
      if (language === 'he') return 'רפואי';
    } else if (tag === 'Urgent') {
      if (language === 'en') return 'Urgent';
      if (language === 'uk') return 'Терміново';
      if (language === 'es') return 'Urgente';
      if (language === 'he') return 'דחוף';
    } else if (tag === 'Education') {
      if (language === 'en') return 'Education';
      if (language === 'uk') return 'Освіта';
      if (language === 'es') return 'Educación';
      if (language === 'he') return 'חינוך';
    } else if (tag === 'Supplies') {
      if (language === 'en') return 'Supplies';
      if (language === 'uk') return 'Матеріали';
      if (language === 'es') return 'Suministros';
      if (language === 'he') return 'ציוד';
    } else if (tag === 'Rehabilitation') {
      if (language === 'en') return 'Rehabilitation';
      if (language === 'uk') return 'Реабілітація';
      if (language === 'es') return 'Rehabilitación';
      if (language === 'he') return 'שיקום';
    }
    return tag;
  };

  const getRaisedText = () => {
    if (language === 'en') return 'Raised';
    if (language === 'uk') return 'Зібрано';
    if (language === 'es') return 'Recaudado';
    if (language === 'he') return 'נאסף';
    return 'Raised';
  };

  const getGoalText = () => {
    if (language === 'en') return 'Goal';
    if (language === 'uk') return 'Ціль';
    if (language === 'es') return 'Meta';
    if (language === 'he') return 'מטרה';
    return 'Goal';
  };

  const getCompleteText = () => {
    if (language === 'en') return 'complete';
    if (language === 'uk') return 'виконано';
    if (language === 'es') return 'completado';
    if (language === 'he') return 'הושלם';
    return 'complete';
  };

  const getNeededText = () => {
    if (language === 'en') return 'Needed';
    if (language === 'uk') return 'Потрібно';
    if (language === 'es') return 'Necesario';
    if (language === 'he') return 'נדרש';
    return 'Needed';
  };

  const getDonateText = () => {
    if (language === 'en') return 'Donate to Help';
    if (language === 'uk') return 'Пожертвувати на допомогу';
    if (language === 'es') return 'Donar para ayudar';
    if (language === 'he') return 'תרום לעזרה';
    return 'Donate to Help';
  };

  return (
    <PageLayout>
      <PageBanner 
        title={translate('kids.title')}
        subtitle={translate('kids.subtitle')}
        backgroundImage="/IMG_4383.JPG"
      />
      
      <section className="container mx-auto py-12 px-4">
        <Tabs defaultValue="gallery" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="gallery">
              <Users className="mr-2 h-4 w-4" />
              {translate('kids.tabs.gallery')}
            </TabsTrigger>
            <TabsTrigger value="profiles">
              <Gift className="mr-2 h-4 w-4" />
              {translate('kids.tabs.supportChild')}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="gallery" className="mt-0">
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
          </TabsContent>
          
          <TabsContent value="profiles">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-primary/5 rounded-3xl" />
              <div className="relative p-8 md:p-12 rounded-3xl border border-primary/20 bg-white/80 backdrop-blur-sm">
                {/* Большой серый баннер COMING SOON */}
                <div className="absolute inset-0 z-10 bg-gray-700/80 backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center">
                  <div className="w-full max-w-3xl mx-auto px-6 py-16 flex flex-col items-center">
                    <div className="bg-amber-500/90 text-white px-8 py-4 rounded-xl mb-8 transform -rotate-2 shadow-xl">
                      <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
                        {getComingSoonText()}
                      </h2>
                    </div>
                    
                    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl max-w-2xl">
                      <AlertCircle className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                      <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">
                        {getSupportTitleText()}
                      </h3>
                      <p className="text-lg text-center text-gray-600 mb-3">
                        {getSupportDescriptionText()}
                      </p>
                      <p className="text-sm text-center text-gray-500">
                        {getWorkingHardText()}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {kidsProfiles.map((kid) => (
                    <Card key={kid.id} className="overflow-hidden border-none shadow-lg">
                      <div className="aspect-[4/3] relative w-full overflow-hidden">
                        <img 
                          src={kid.image} 
                          alt={kid.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <CardHeader className="pt-6">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-xl">{kid.name}</CardTitle>
                        </div>
                        <div className="flex gap-2 mt-2">
                          {kid.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="bg-gray-100">
                              {getTagText(tag)}
                            </Badge>
                          ))}
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <p className="text-gray-600 mb-4">{kid.description}</p>
                        
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-gray-600">{getRaisedText()}: ${kid.raisedAmount}</span>
                              <span className="text-gray-600">{getGoalText()}: ${kid.goalAmount}</span>
                            </div>
                            <Progress value={(kid.raisedAmount / kid.goalAmount) * 100} className="h-2" />
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-1 text-sm text-gray-600">
                              <Target className="h-4 w-4 text-primary" />
                              <span>
                                {Math.round((kid.raisedAmount / kid.goalAmount) * 100)}% {getCompleteText()}
                              </span>
                            </div>
                            <span className="text-sm text-gray-600">
                              {getNeededText()}: ${kid.goalAmount - kid.raisedAmount}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                      
                      <CardFooter className="bg-gray-50 border-t border-gray-100 p-4">
                        <Button 
                          className="w-full"
                          onClick={() => handleOpenDonationModal(kid.id)}
                        >
                          {getDonateText()}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
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
      
      {/* Donation Modal */}
      <Dialog open={selectedKid !== null} onOpenChange={() => setSelectedKid(null)}>
        <DialogContent className="max-w-2xl">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-center mb-6">
              {getComingSoonText()}
            </h2>
            <p className="text-center text-gray-600 mb-8">
              {language === 'en' 
                ? 'This feature is still in development. Soon you will be able to donate directly to support this child.' 
                : language === 'uk'
                ? 'Ця функція ще в розробці. Незабаром ви зможете зробити пожертву безпосередньо для підтримки цієї дитини.'
                : language === 'es'
                ? 'Esta función aún está en desarrollo. Pronto podrás donar directamente para apoyar a este niño.'
                : language === 'he'
                ? 'תכונה זו עדיין בפיתוח. בקרוב תוכל לתרום ישירות כדי לתמוך בילד זה.'
                : 'This feature is still in development. Soon you will be able to donate directly to support this child.'}
            </p>
            
            <div className="flex justify-center">
              <DialogClose asChild>
                <Button>{language === 'en' ? 'Close' : language === 'uk' ? 'Закрити' : language === 'es' ? 'Cerrar' : language === 'he' ? 'סגור' : 'Close'}</Button>
              </DialogClose>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </PageLayout>
  );
};

export default Kids;
