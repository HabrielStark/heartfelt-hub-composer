
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

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll respond as soon as possible.",
    });
  };

  return (
    <PageLayout>
      <PageBanner 
        title="Contact Us" 
        subtitle="We'd love to hear from you. Reach out with any questions, concerns, or to learn more about our work."
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading 
                title="Get in Touch" 
                subtitle="Fill out the form and our team will get back to you as soon as possible."
                centered={false}
              />
              
              <form onSubmit={handleSubmit} className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" className="mt-1" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" className="mt-1" required />
                  </div>
                </div>
                
                <div className="mb-6">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" className="mt-1" required />
                </div>
                
                <div className="mb-6">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" className="mt-1" rows={6} required />
                </div>
                
                <Button type="submit" className="bg-primary hover:bg-primary-600">
                  Send Message
                </Button>
              </form>
            </div>
            
            <div>
              <SectionHeading 
                title="Contact Information" 
                subtitle="Find us at our location or reach out through any of the contact methods below."
                centered={false}
              />
              
              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Our Location</h3>
                    <p className="text-gray-600">
                      123 Caring Street <br />
                      Compassion City, CA 12345 <br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Phone Numbers</h3>
                    <p className="text-gray-600">
                      Main Office: (123) 456-7890 <br />
                      Donations: (123) 456-7891 <br />
                      Volunteer Information: (123) 456-7892
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Email Addresses</h3>
                    <p className="text-gray-600">
                      General Inquiries: info@heartfelthome.org <br />
                      Donations: donate@heartfelthome.org <br />
                      Volunteer: volunteer@heartfelthome.org
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mr-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Hours of Operation</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM <br />
                      Saturday: 10:00 AM - 2:00 PM <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-yellow-600 mr-2" />
                  <h3 className="font-medium text-yellow-700">Visiting Information</h3>
                </div>
                <p className="text-yellow-600 mt-2 text-sm">
                  For the privacy and security of our children, all visits to our facility must be 
                  scheduled in advance. Please contact us to arrange a visit.
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
