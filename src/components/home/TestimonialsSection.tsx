import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TestimonialsSection = () => {
  const { translate, language } = useLanguage();
  
  const testimonials = [
    {
      quote: "The work that HeartfeltHome does is truly incredible. I've seen firsthand how their care transforms children's lives, giving them hope and opportunities they wouldn't otherwise have.",
      author: "Sarah Johnson",
      role: "Regular Donor",
      image: "/IMG_4396.JPG"
    },
    {
      quote: "Volunteering with HeartfeltHome has been one of the most rewarding experiences of my life. The dedication of the staff and the resilience of the children is truly inspiring.",
      author: "Michael Chen",
      role: "Volunteer",
      image: "/IMG_4397.JPG"
    },
    {
      quote: "Our partnership with HeartfeltHome has been meaningful not just for the children, but for our entire company. Their transparency and impact-focused approach makes them an ideal partner.",
      author: "Emily Rodriguez",
      role: "Corporate Partner",
      image: "/IMG_4399.JPG"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title={translate('homePage.testimonials.title')}
          subtitle={translate('homePage.testimonials.subtitle')}
        />
        
        <div className="mt-12">
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="border-none shadow-lg bg-gradient-to-br from-white to-primary-50 rounded-xl">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="md:w-1/4 flex-shrink-0">
                          <div className="relative rounded-full w-24 h-24 md:w-28 md:h-28 mx-auto overflow-hidden border-4 border-white shadow-md">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.author} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="md:w-3/4 text-center md:text-left">
                          <Quote className="h-8 w-8 text-primary-300 mb-2 mx-auto md:mx-0" />
                          <p className="text-gray-700 italic mb-4">{testimonial.quote}</p>
                          <div className="font-playfair font-semibold text-lg">{testimonial.author}</div>
                          <div className="text-gray-500">{testimonial.role}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselNext className="right-0 md:-right-12" />
            <CarouselPrevious className="left-0 md:-left-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
