import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import PageBanner from '@/components/ui/PageBanner';
import SectionHeading from '@/components/ui/SectionHeading';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { toast } = useToast();
  const { translate } = useLanguage();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: translate('contact.messageSent'),
      description: translate('contact.messageConfirmation'),
    });
  };

  return (
    <PageLayout>
      <PageBanner 
        title={translate('contact.title')}
        subtitle={translate('contact.subtitle')}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading 
                title={translate('contact.getInTouch.title')}
                subtitle={translate('contact.getInTouch.subtitle')}
                centered={false}
              />
              
              <form onSubmit={handleSubmit} className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="name">{translate('contact.form.name')}</Label>
                    <Input id="name" className="mt-1" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">{translate('contact.form.email')}</Label>
                    <Input id="email" type="email" className="mt-1" required />
                  </div>
                </div>
                
                <div className="mb-6">
                  <Label htmlFor="subject">{translate('contact.form.subject')}</Label>
                  <Input id="subject" className="mt-1" required />
                </div>
                
                <div className="mb-6">
                  <Label htmlFor="message">{translate('contact.form.message')}</Label>
                  <Textarea id="message" className="mt-1" rows={6} required />
                </div>
                
                <Button type="submit" className="bg-primary hover:bg-primary-600">
                  {translate('contact.form.send')}
                </Button>
              </form>
            </div>
            
            <div>
              <SectionHeading 
                title={translate('contact.info.title')}
                subtitle={translate('contact.info.subtitle')}
                centered={false}
              />
              
              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">{translate('contact.info.location.title')}</h3>
                    <p className="text-gray-600">
                      {translate('contact.info.location.address1')} <br />
                      {translate('contact.info.location.address2')} <br />
                      {translate('contact.info.location.country')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">{translate('contact.info.phone.title')}</h3>
                    <p className="text-gray-600">
                      {translate('contact.info.phone.main')}: (123) 456-7890 <br />
                      {translate('contact.info.phone.donations')}: (123) 456-7891 <br />
                      {translate('contact.info.phone.volunteer')}: (123) 456-7892
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">{translate('contact.info.email.title')}</h3>
                    <p className="text-gray-600">
                      {translate('contact.info.email.general')}: info@heartfelthome.org <br />
                      {translate('contact.info.email.donations')}: donate@heartfelthome.org <br />
                      {translate('contact.info.email.volunteer')}: volunteer@heartfelthome.org
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mr-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">{translate('contact.info.hours.title')}</h3>
                    <p className="text-gray-600">
                      {translate('contact.info.hours.weekdays')} <br />
                      {translate('contact.info.hours.saturday')} <br />
                      {translate('contact.info.hours.sunday')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-yellow-600 mr-2" />
                  <h3 className="font-medium text-yellow-700">{translate('contact.visiting.title')}</h3>
                </div>
                <p className="text-yellow-600 mt-2 text-sm">
                  {translate('contact.visiting.info')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423283.4355537047!2d-118.69192057645281!3d34.020731277884844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sca!4v1653427926116!5m2!1sen!2sca" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="HeartfeltHome Location"
            ></iframe>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
