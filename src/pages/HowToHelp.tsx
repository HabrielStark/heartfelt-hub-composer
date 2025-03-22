import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import PageBanner from '@/components/ui/PageBanner';
import SectionHeading from '@/components/ui/SectionHeading';
import { Button } from "@/components/ui/button";
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DollarSign, Gift, Clock, Heart, Building, Check, HandHeart, ArrowRight } from 'lucide-react';
import FundraiserCard from '@/components/home/FundraiserCard';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from '@/hooks/use-toast';
import DonationForm from '@/components/donations/DonationForm';
import CryptoDonationForm from '@/components/donations/CryptoDonationForm';
import { useLanguage } from '@/contexts/LanguageContext';
import { getAllFundraisers } from '@/lib/db';
import { Link } from 'react-router-dom';

const HowToHelp = () => {
  const { toast } = useToast();
  const { translate, language } = useLanguage();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [fundraisers, setFundraisers] = useState(getAllFundraisers());

  const handleMaterialAidSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: translate('howToHelp.materialAid.thankYou'),
      description: translate('howToHelp.materialAid.confirmation'),
    });
  };

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: translate('howToHelp.volunteer.applicationReceived'),
      description: translate('howToHelp.volunteer.confirmation'),
    });
  };

  const handleProgressUpdate = () => {
    setFundraisers([...getAllFundraisers()]);
  };

  const getFundraiserName = (id) => {
    if (language === 'en') {
      switch (id) {
        case 'educational': return 'Educational Support';
        case 'healthcare': return 'Healthcare Access';
        case 'facilities': return 'Facility Renovation';
        case 'recreational': return 'Recreational Programs';
        default: return translate(`homePage.fundraisers.${id}`);
      }
    }
    return translate(`homePage.fundraisers.${id}`);
  };

  const getFundraiserDescription = (id) => {
    if (language === 'en') {
      switch (id) {
        case 'educational': return 'Providing scholarships and educational materials to underprivileged children.';
        case 'healthcare': return 'Bringing medical care and supplies to communities without adequate healthcare.';
        case 'facilities': return 'Renovating community centers to create safe spaces for education and support.';
        case 'recreational': return 'Creating recreational programs and spaces for children to play and grow.';
        default: return translate(`homePage.fundraisers.${id}Desc`);
      }
    }
    return translate(`homePage.fundraisers.${id}Desc`);
  };

  const partners = [
    {
      name: language === 'en' ? "ABC Foundation" : translate('howToHelp.partners.abc.name'),
      description: language === 'en' ? "Provides financial support for our educational programs." : translate('howToHelp.partners.abc.description'),
      logo: "https://via.placeholder.com/150?text=ABC"
    },
    {
      name: language === 'en' ? "XYZ Corporation" : translate('howToHelp.partners.xyz.name'),
      description: language === 'en' ? "Sponsors health initiatives and medical checkups." : translate('howToHelp.partners.xyz.description'),
      logo: "https://via.placeholder.com/150?text=XYZ"
    },
    {
      name: language === 'en' ? "Community Bank" : translate('howToHelp.partners.bank.name'),
      description: language === 'en' ? "Supports facility improvements and renovations." : translate('howToHelp.partners.bank.description'),
      logo: "https://via.placeholder.com/150?text=Bank"
    },
    {
      name: language === 'en' ? "Global Helpers" : translate('howToHelp.partners.global.name'),
      description: language === 'en' ? "Provides volunteers and professional services." : translate('howToHelp.partners.global.description'),
      logo: "https://via.placeholder.com/150?text=Global"
    }
  ];

  const neededItems = [
    { id: "clothes", label: language === 'en' ? "Clothes & Shoes" : translate('howToHelp.materialAid.items.clothes') },
    { id: "school", label: language === 'en' ? "School Supplies" : translate('howToHelp.materialAid.items.school') },
    { id: "toys", label: language === 'en' ? "Toys & Games" : translate('howToHelp.materialAid.items.toys') },
    { id: "books", label: language === 'en' ? "Books" : translate('howToHelp.materialAid.items.books') },
    { id: "toiletries", label: language === 'en' ? "Toiletries" : translate('howToHelp.materialAid.items.toiletries') },
    { id: "furniture", label: language === 'en' ? "Furniture" : translate('howToHelp.materialAid.items.furniture') },
    { id: "electronics", label: language === 'en' ? "Electronics" : translate('howToHelp.materialAid.items.electronics') },
    { id: "bedding", label: language === 'en' ? "Bedding & Linens" : translate('howToHelp.materialAid.items.bedding') }
  ];

  return (
    <PageLayout>
      <PageBanner 
        title={language === 'en' ? "How to Help" : translate('howToHelp.title')}
        subtitle={language === 'en' ? "Join us in making a difference" : translate('howToHelp.subtitle')}
      />

      <section className="py-10 bg-white" id="options">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="donations" className="w-full">
            <TabsList className="grid w-full md:max-w-2xl mx-auto grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="donations">{language === 'en' ? "Donations" : translate('howToHelp.tabs.donations')}</TabsTrigger>
              <TabsTrigger value="material">{language === 'en' ? "Material Aid" : translate('howToHelp.tabs.material')}</TabsTrigger>
              <TabsTrigger value="volunteer">{language === 'en' ? "Volunteer" : translate('howToHelp.tabs.volunteer')}</TabsTrigger>
              <TabsTrigger value="partners">{language === 'en' ? "Partners" : translate('howToHelp.tabs.partners')}</TabsTrigger>
            </TabsList>
            
            <TabsContent value="donations" id="donations">
              <SectionHeading 
                title={language === 'en' ? "Make a Donation" : translate('howToHelp.donations.title')}
                subtitle={language === 'en' ? "Your financial support helps us continue our mission" : translate('howToHelp.donations.subtitle')}
              />
              
              <div className="flex flex-col items-center justify-center mt-12 mb-16">
                <p className="text-lg text-center max-w-2xl mb-8">
                  {language === 'en' 
                    ? "Your generous contribution helps us continue our mission to support those in need. All donations are tax-deductible."
                    : translate('Tax Dedutible')}
                </p>
                
                <Link to="/donate">
                  <Button size="lg" className="bg-primary hover:bg-primary-600 px-8 py-6 text-white text-lg font-medium rounded-md flex items-center">
                    {language === 'en' ? "Go to Donation Page" : translate('Go to Donation Page')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              
              <div className="mt-16" id="fundraisers">
                <SectionHeading 
                  title={language === 'en' ? "Current Fundraising Campaigns" : translate('howToHelp.donations.allFundraisers')}
                  subtitle={language === 'en' ? "Help us reach these important goals" : translate('howToHelp.donations.allFundraisersSubtitle')}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                  {fundraisers.map((fundraiser) => (
                    <FundraiserCard 
                      key={fundraiser.id}
                      id={fundraiser.id}
                      name={getFundraiserName(fundraiser.id)}
                      description={getFundraiserDescription(fundraiser.id)}
                      goal={fundraiser.goal}
                      raised={fundraiser.raised}
                      imageUrl={fundraiser.imageUrl}
                      onProgressUpdate={handleProgressUpdate}
                    />
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="material">
              <SectionHeading 
                title={language === 'en' ? "Donate Material Aid" : translate('howToHelp.materialAid.title')}
                subtitle={language === 'en' ? "Contribute essential items to those in need" : translate('howToHelp.materialAid.subtitle')}
              />
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
                <Card className="p-8 col-span-1 lg:col-span-1 bg-gradient-to-br from-white to-pastel-blue">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-blue-100 rounded-full p-3">
                      <Gift className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-playfair font-semibold text-xl">{language === 'en' ? "Material Donation Form" : translate('howToHelp.materialAid.formTitle')}</h3>
                  </div>
                  
                  <form onSubmit={handleMaterialAidSubmit}>
                    <div className="mb-4">
                      <Label htmlFor="name">{language === 'en' ? "Your Name" : translate('howToHelp.form.name')}</Label>
                      <Input id="name" className="mt-1" />
                    </div>
                    
                    <div className="mb-4">
                      <Label htmlFor="email">{language === 'en' ? "Email Address" : translate('howToHelp.form.email')}</Label>
                      <Input id="email" type="email" className="mt-1" />
                    </div>
                    
                    <div className="mb-4">
                      <Label htmlFor="phone">{language === 'en' ? "Phone Number" : translate('howToHelp.form.phone')}</Label>
                      <Input id="phone" type="tel" className="mt-1" />
                    </div>
                    
                    <div className="mb-6">
                      <Label className="mb-2 block">{language === 'en' ? "Items You'd Like to Donate" : translate('howToHelp.materialAid.itemsToDonate')}</Label>
                      <div className="grid grid-cols-2 gap-2">
                        {neededItems.map((item) => (
                          <div className="flex items-center space-x-2" key={item.id}>
                            <Checkbox 
                              id={item.id}
                              checked={selectedItems.includes(item.id)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setSelectedItems([...selectedItems, item.id]);
                                } else {
                                  setSelectedItems(selectedItems.filter(id => id !== item.id));
                                }
                              }}
                            />
                            <Label htmlFor={item.id}>{item.label}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <Label htmlFor="details">{language === 'en' ? "Additional Details" : translate('howToHelp.form.additionalDetails')}</Label>
                      <Textarea id="details" placeholder={language === 'en' ? "Please describe the items you'd like to donate" : translate('howToHelp.materialAid.detailsPlaceholder')} className="mt-1" />
                    </div>
                    
                    <Button type="submit" className="w-full bg-primary hover:bg-primary-600">
                      {language === 'en' ? "Submit" : translate('common.submit')}
                    </Button>
                  </form>
                </Card>
                
                <div className="col-span-1 lg:col-span-2">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-primary-100 rounded-full p-3">
                      <Check className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-playfair font-semibold text-xl">{language === 'en' ? "Currently Needed Items" : translate('howToHelp.materialAid.neededItems')}</h3>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-3 text-primary">{language === 'en' ? "Clothing & Bedding" : translate('howToHelp.materialAid.categories.clothing')}</h4>
                        <ul className="space-y-2 list-disc pl-5 text-gray-700">
                          <li>{language === 'en' ? "Children's clothes (ages 2-16)" : translate('howToHelp.materialAid.items.childrenClothes')}</li>
                          <li>{language === 'en' ? "Pajamas and sleepwear" : translate('howToHelp.materialAid.items.pajamas')}</li>
                          <li>{language === 'en' ? "Shoes and socks" : translate('howToHelp.materialAid.items.shoes')}</li>
                          <li>{language === 'en' ? "Bed sheets and blankets" : translate('howToHelp.materialAid.items.bedsheets')}</li>
                          <li>{language === 'en' ? "Towels and washcloths" : translate('howToHelp.materialAid.items.towels')}</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-lg mb-3 text-primary">{language === 'en' ? "Educational Materials" : translate('howToHelp.materialAid.categories.educational')}</h4>
                        <ul className="space-y-2 list-disc pl-5 text-gray-700">
                          <li>{language === 'en' ? "Notebooks and paper" : translate('howToHelp.materialAid.items.notebooks')}</li>
                          <li>{language === 'en' ? "Pens, pencils, and markers" : translate('howToHelp.materialAid.items.pens')}</li>
                          <li>{language === 'en' ? "Backpacks" : translate('howToHelp.materialAid.items.backpacks')}</li>
                          <li>{language === 'en' ? "Children's books" : translate('howToHelp.materialAid.items.books')}</li>
                          <li>{language === 'en' ? "Educational toys" : translate('howToHelp.materialAid.items.educationalToys')}</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-lg mb-3 text-primary">{language === 'en' ? "Hygiene Products" : translate('howToHelp.materialAid.categories.hygiene')}</h4>
                        <ul className="space-y-2 list-disc pl-5 text-gray-700">
                          <li>{language === 'en' ? "Soap and body wash" : translate('howToHelp.materialAid.items.soap')}</li>
                          <li>{language === 'en' ? "Shampoo and conditioner" : translate('howToHelp.materialAid.items.shampoo')}</li>
                          <li>{language === 'en' ? "Toothbrushes and toothpaste" : translate('howToHelp.materialAid.items.toothbrushes')}</li>
                          <li>{language === 'en' ? "Hairbrushes and combs" : translate('howToHelp.materialAid.items.hairbrushes')}</li>
                          <li>{language === 'en' ? "Diapers (all sizes)" : translate('howToHelp.materialAid.items.diapers')}</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-lg mb-3 text-primary">{language === 'en' ? "Recreational Items" : translate('howToHelp.materialAid.categories.recreational')}</h4>
                        <ul className="space-y-2 list-disc pl-5 text-gray-700">
                          <li>{language === 'en' ? "Board games" : translate('howToHelp.materialAid.items.boardGames')}</li>
                          <li>{language === 'en' ? "Sports equipment" : translate('howToHelp.materialAid.items.sportsEquipment')}</li>
                          <li>{language === 'en' ? "Art supplies" : translate('howToHelp.materialAid.items.artSupplies')}</li>
                          <li>{language === 'en' ? "Musical instruments" : translate('howToHelp.materialAid.items.musicalInstruments')}</li>
                          <li>{language === 'en' ? "Outdoor play equipment" : translate('howToHelp.materialAid.items.outdoorEquipment')}</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                      <p className="text-gray-700">
                        <span className="font-semibold">{language === 'en' ? "Drop-off Location:" : translate('howToHelp.materialAid.dropoffLocation')}</span> 123 Caring Street, Compassion City, CA 12345
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold">{language === 'en' ? "Drop-off Hours:" : translate('howToHelp.materialAid.dropoffHours')}</span> Monday-Friday 9am-5pm, Saturday 10am-2pm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="volunteer" id="volunteer">
              <SectionHeading 
                title={language === 'en' ? "Volunteer With Us" : translate('howToHelp.volunteer.title')} 
                subtitle={language === 'en' ? "Share your time, skills, and compassion to make a direct impact on children's lives." : translate('howToHelp.volunteer.subtitle')}
              />
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
                <Card className="p-8 col-span-1 lg:col-span-1 bg-gradient-to-br from-white to-pastel-green">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-green-100 rounded-full p-3">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-playfair font-semibold text-xl">{language === 'en' ? "Volunteer Application" : translate('howToHelp.volunteer.formTitle')}</h3>
                  </div>
                  
                  <form onSubmit={handleVolunteerSubmit}>
                    <div className="mb-4">
                      <Label htmlFor="v-name">{language === 'en' ? "Your Name" : translate('howToHelp.form.name')}</Label>
                      <Input id="v-name" className="mt-1" />
                    </div>
                    
                    <div className="mb-4">
                      <Label htmlFor="v-email">{language === 'en' ? "Email" : translate('howToHelp.form.email')}</Label>
                      <Input id="v-email" type="email" className="mt-1" />
                    </div>
                    
                    <div className="mb-4">
                      <Label htmlFor="v-phone">{language === 'en' ? "Phone" : translate('howToHelp.form.phone')}</Label>
                      <Input id="v-phone" type="tel" className="mt-1" />
                    </div>
                    
                    <div className="mb-4">
                      <Label>{language === 'en' ? "Areas of Interest" : translate('howToHelp.volunteer.areasOfInterest')}</Label>
                      <div className="grid grid-cols-1 gap-2 mt-1">
                        {[
                          language === 'en' ? "Childcare assistance" : translate('howToHelp.volunteer.areas.childcare'),
                          language === 'en' ? "Educational support" : translate('howToHelp.volunteer.areas.education'),
                          language === 'en' ? "Recreational activities" : translate('howToHelp.volunteer.areas.recreation'),
                          language === 'en' ? "Administrative help" : translate('howToHelp.volunteer.areas.admin'),
                          language === 'en' ? "Event planning" : translate('howToHelp.volunteer.areas.events'),
                          language === 'en' ? "Fundraising" : translate('howToHelp.volunteer.areas.fundraising')
                        ].map((area) => (
                          <div className="flex items-center space-x-2" key={area}>
                            <Checkbox id={`area-${area}`} />
                            <Label htmlFor={`area-${area}`}>{area}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <Label>{language === 'en' ? "Availability" : translate('howToHelp.volunteer.availability')}</Label>
                      <div className="grid grid-cols-2 gap-2 mt-1">
                        {[
                          language === 'en' ? "Weekdays (morning)" : translate('howToHelp.volunteer.time.weekdayMorning'),
                          language === 'en' ? "Weekdays (afternoon)" : translate('howToHelp.volunteer.time.weekdayAfternoon'),
                          language === 'en' ? "Weekends (morning)" : translate('howToHelp.volunteer.time.weekendMorning'),
                          language === 'en' ? "Weekends (afternoon)" : translate('howToHelp.volunteer.time.weekendAfternoon')
                        ].map((time) => (
                          <div className="flex items-center space-x-2" key={time}>
                            <Checkbox id={`time-${time}`} />
                            <Label htmlFor={`time-${time}`}>{time}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <Label htmlFor="v-message">{language === 'en' ? "Tell us about yourself" : translate('howToHelp.volunteer.aboutYourself')}</Label>
                      <Textarea id="v-message" placeholder={language === 'en' ? "Share your skills, experience, and why you want to volunteer with us" : translate('howToHelp.volunteer.aboutYourselfPlaceholder')} className="mt-1" />
                    </div>
                    
                    <Button type="submit" className="w-full bg-primary hover:bg-primary-600">
                      {language === 'en' ? "Submit Application" : translate('howToHelp.volunteer.submitApplication')}
                    </Button>
                  </form>
                </Card>
                
                <div className="col-span-1 lg:col-span-2">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-primary-100 rounded-full p-3">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-playfair font-semibold text-xl">{language === 'en' ? "Volunteer Opportunities" : translate('howToHelp.volunteer.opportunities')}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="p-6">
                      <h4 className="font-semibold text-lg mb-3 text-primary">{language === 'en' ? "Child Care Support" : translate('howToHelp.volunteer.types.childcare')}</h4>
                      <p className="text-gray-700 mb-4">
                        {language === 'en' ? "Assist our staff in daily activities with the children, including meal times, playtime, and bedtime routines." : translate('howToHelp.volunteer.descriptions.childcare')}
                      </p>
                      <ul className="space-y-1 list-disc pl-5 text-gray-700">
                        <li>{language === 'en' ? "Minimum commitment: 4 hours/week" : translate('howToHelp.volunteer.childcare.commitment')}</li>
                        <li>{language === 'en' ? "Background check required" : translate('howToHelp.volunteer.common.backgroundCheck')}</li>
                        <li>{language === 'en' ? "Training provided" : translate('howToHelp.volunteer.childcare.training')}</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-6">
                      <h4 className="font-semibold text-lg mb-3 text-primary">{language === 'en' ? "Academic Tutoring" : translate('howToHelp.volunteer.types.tutoring')}</h4>
                      <p className="text-gray-700 mb-4">
                        {language === 'en' ? "Help children with homework, reading, and other academic subjects to support their educational development." : translate('howToHelp.volunteer.descriptions.tutoring')}
                      </p>
                      <ul className="space-y-1 list-disc pl-5 text-gray-700">
                        <li>{language === 'en' ? "Minimum commitment: 2 hours/week" : translate('howToHelp.volunteer.tutoring.commitment')}</li>
                        <li>{language === 'en' ? "Background check required" : translate('howToHelp.volunteer.common.backgroundCheck')}</li>
                        <li>{language === 'en' ? "Educational experience preferred" : translate('howToHelp.volunteer.tutoring.experience')}</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-6">
                      <h4 className="font-semibold text-lg mb-3 text-primary">{language === 'en' ? "Special Skills Volunteer" : translate('howToHelp.volunteer.types.specialSkills')}</h4>
                      <p className="text-gray-700 mb-4">
                        {language === 'en' ? "Share your talents in music, art, sports, or other areas to enrich children's experiences and development." : translate('howToHelp.volunteer.descriptions.specialSkills')}
                      </p>
                      <ul className="space-y-1 list-disc pl-5 text-gray-700">
                        <li>{language === 'en' ? "Flexible schedule" : translate('howToHelp.volunteer.specialSkills.schedule')}</li>
                        <li>{language === 'en' ? "Background check required" : translate('howToHelp.volunteer.common.backgroundCheck')}</li>
                        <li>{language === 'en' ? "Demonstration of skills may be requested" : translate('howToHelp.volunteer.specialSkills.demonstration')}</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-6">
                      <h4 className="font-semibold text-lg mb-3 text-primary">{language === 'en' ? "Administrative Support" : translate('howToHelp.volunteer.types.admin')}</h4>
                      <p className="text-gray-700 mb-4">
                        {language === 'en' ? "Assist with office tasks, donor communications, event planning, and other administrative needs." : translate('howToHelp.volunteer.descriptions.admin')}
                      </p>
                      <ul className="space-y-1 list-disc pl-5 text-gray-700">
                        <li>{language === 'en' ? "Flexible schedule" : translate('howToHelp.volunteer.admin.schedule')}</li>
                        <li>{language === 'en' ? "Background check required" : translate('howToHelp.volunteer.common.backgroundCheck')}</li>
                        <li>{language === 'en' ? "Office skills preferred" : translate('howToHelp.volunteer.admin.skills')}</li>
                      </ul>
                    </Card>
                  </div>
                  
                  <div className="mt-8 p-5 bg-primary-50 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">{language === 'en' ? "Volunteer Process" : translate('howToHelp.volunteer.process.title')}</h4>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                      <li>{language === 'en' ? "Submit application form" : translate('howToHelp.volunteer.process.submit')}</li>
                      <li>{language === 'en' ? "Initial phone interview" : translate('howToHelp.volunteer.process.interview')}</li>
                      <li>{language === 'en' ? "Background check" : translate('howToHelp.volunteer.process.backgroundCheck')}</li>
                      <li>{language === 'en' ? "Orientation session" : translate('howToHelp.volunteer.process.orientation')}</li>
                      <li>{language === 'en' ? "Training specific to your volunteer role" : translate('howToHelp.volunteer.process.training')}</li>
                      <li>{language === 'en' ? "Begin volunteering!" : translate('howToHelp.volunteer.process.begin')}</li>
                    </ol>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="partners" id="partnership">
              <SectionHeading 
                title={language === 'en' ? "Partnership Opportunities" : translate('howToHelp.partners.title')} 
                subtitle={language === 'en' ? "Organizations and businesses can create meaningful partnerships to support our mission." : translate('howToHelp.partners.subtitle')}
              />
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
                <Card className="p-8 col-span-1 lg:col-span-1 bg-gradient-to-br from-white to-pastel-yellow">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-yellow-100 rounded-full p-3">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-playfair font-semibold text-xl">{language === 'en' ? "Partner With Us" : translate('howToHelp.partners.formTitle')}</h3>
                  </div>
                  
                  <form>
                    <div className="mb-4">
                      <Label htmlFor="org-name">{language === 'en' ? "Organization Name" : translate('howToHelp.partners.form.orgName')}</Label>
                      <Input id="org-name" className="mt-1" />
                    </div>
                    
                    <div className="mb-4">
                      <Label htmlFor="contact-person">{language === 'en' ? "Contact Person" : translate('howToHelp.partners.form.contactPerson')}</Label>
                      <Input id="contact-person" className="mt-1" />
                    </div>
                    
                    <div className="mb-4">
                      <Label htmlFor="org-email">{language === 'en' ? "Email" : translate('howToHelp.form.email')}</Label>
                      <Input id="org-email" type="email" className="mt-1" />
                    </div>
                    
                    <div className="mb-4">
                      <Label htmlFor="org-phone">{language === 'en' ? "Phone" : translate('howToHelp.form.phone')}</Label>
                      <Input id="org-phone" type="tel" className="mt-1" />
                    </div>
                    
                    <div className="mb-4">
                      <Label>{language === 'en' ? "Partnership Interest" : translate('howToHelp.partners.form.interest')}</Label>
                      <div className="grid grid-cols-1 gap-2 mt-1">
                        {[
                          language === 'en' ? "Financial support" : translate('howToHelp.partners.interests.financial'),
                          language === 'en' ? "In-kind donations" : translate('howToHelp.partners.interests.inkind'),
                          language === 'en' ? "Volunteer days" : translate('howToHelp.partners.interests.volunteer'),
                          language === 'en' ? "Professional services" : translate('howToHelp.partners.interests.services'),
                          language === 'en' ? "Event sponsorship" : translate('howToHelp.partners.interests.events')
                        ].map((type) => (
                          <div className="flex items-center space-x-2" key={type}>
                            <Checkbox id={`type-${type}`} />
                            <Label htmlFor={`type-${type}`}>{type}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <Label htmlFor="partnership-details">{language === 'en' ? "Additional Details" : translate('howToHelp.form.additionalDetails')}</Label>
                      <Textarea id="partnership-details" placeholder={language === 'en' ? "Tell us about your organization and potential partnership ideas" : translate('howToHelp.partners.form.detailsPlaceholder')} className="mt-1" />
                    </div>
                    
                    <Button className="w-full bg-primary hover:bg-primary-600">
                      {language === 'en' ? "Submit Inquiry" : translate('howToHelp.partners.submitInquiry')}
                    </Button>
                  </form>
                </Card>
                
                <div className="col-span-1 lg:col-span-2">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-primary-100 rounded-full p-3">
                      <HandHeart className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-playfair font-semibold text-xl">{language === 'en' ? "Current Partners" : translate('howToHelp.partners.currentPartners')}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {partners.map((partner, index) => (
                      <Card key={index} className="p-6 flex flex-col items-center text-center">
                        <img src={partner.logo} alt={partner.name} className="h-16 w-auto mb-4" />
                        <h4 className="font-semibold text-lg mb-2">{partner.name}</h4>
                        <p className="text-gray-600">{partner.description}</p>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="font-semibold text-lg mb-4">{language === 'en' ? "Partnership Benefits" : translate('howToHelp.partners.benefits')}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white p-5 rounded-lg shadow">
                        <h5 className="font-medium text-primary mb-3">{language === 'en' ? "For Your Organization" : translate('howToHelp.partners.benefits.forOrganization')}</h5>
                        <ul className="space-y-2 list-disc pl-5 text-gray-700">
                          <li>{language === 'en' ? "Demonstrate corporate social responsibility" : translate('howToHelp.partners.benefits.orgBenefits.csr')}</li>
                          <li>{language === 'en' ? "Employee engagement opportunities" : translate('howToHelp.partners.benefits.orgBenefits.engagement')}</li>
                          <li>{language === 'en' ? "Brand visibility in our materials and events" : translate('howToHelp.partners.benefits.orgBenefits.visibility')}</li>
                          <li>{language === 'en' ? "Tax benefits for eligible contributions" : translate('howToHelp.partners.benefits.orgBenefits.tax')}</li>
                          <li>{language === 'en' ? "Positive community impact" : translate('howToHelp.partners.benefits.orgBenefits.impact')}</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-5 rounded-lg shadow">
                        <h5 className="font-medium text-primary mb-3">{language === 'en' ? "For the Children" : translate('howToHelp.partners.benefits.forChildren')}</h5>
                        <ul className="space-y-2 list-disc pl-5 text-gray-700">
                          <li>{language === 'en' ? "Improved facilities and resources" : translate('howToHelp.partners.benefits.childBenefits.facilities')}</li>
                          <li>{language === 'en' ? "Enhanced educational opportunities" : translate('howToHelp.partners.benefits.childBenefits.education')}</li>
                          <li>{language === 'en' ? "Access to professional expertise" : translate('howToHelp.partners.benefits.childBenefits.expertise')}</li>
                          <li>{language === 'en' ? "Enriching experiences and activities" : translate('howToHelp.partners.benefits.childBenefits.experiences')}</li>
                          <li>{language === 'en' ? "Exposure to positive role models" : translate('howToHelp.partners.benefits.childBenefits.roleModels')}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </PageLayout>
  );
};

export default HowToHelp;
