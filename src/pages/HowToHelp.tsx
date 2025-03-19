
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
import { DollarSign, Gift, Clock, Heart, Building, Check } from 'lucide-react';
import FundraiserCard from '@/components/home/FundraiserCard';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from '@/hooks/use-toast';

const HowToHelp = () => {
  const { toast } = useToast();
  const [customAmount, setCustomAmount] = useState('');
  const [selectedPresetAmount, setSelectedPresetAmount] = useState('');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Donation Initiated",
      description: "You'll be redirected to complete your donation securely.",
    });
  };

  const handleMaterialAidSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank You!",
      description: "We'll contact you soon about your material aid donation.",
    });
  };

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Volunteer Application Received",
      description: "We appreciate your interest! Our team will contact you soon.",
    });
  };

  const fundraisers = [
    {
      name: "Educational Support Fund",
      description: "Help provide school supplies, books, and educational resources for children to thrive academically.",
      goal: 25000,
      raised: 18750,
      imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2309&q=80"
    },
    {
      name: "Healthcare Initiative",
      description: "Support essential healthcare services, regular check-ups, and medications for children in our care.",
      goal: 15000,
      raised: 9200,
      imageUrl: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2352&q=80"
    },
    {
      name: "Facility Renovation",
      description: "Help us renovate our main building to create a safer, more comfortable environment for the children.",
      goal: 50000,
      raised: 32500,
      imageUrl: "https://images.unsplash.com/photo-1531956003775-1b2dae38d5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    },
    {
      name: "Recreational Activities Fund",
      description: "Support sports equipment, art supplies, and field trips to enrich children's lives with fun and creativity.",
      goal: 10000,
      raised: 4200,
      imageUrl: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    }
  ];

  const partners = [
    {
      name: "ABC Foundation",
      description: "Providing financial support for our educational programs.",
      logo: "https://via.placeholder.com/150?text=ABC"
    },
    {
      name: "XYZ Corporation",
      description: "Sponsoring healthcare initiatives and medical check-ups.",
      logo: "https://via.placeholder.com/150?text=XYZ"
    },
    {
      name: "Community Bank",
      description: "Supporting facility improvements and renovations.",
      logo: "https://via.placeholder.com/150?text=Bank"
    },
    {
      name: "Global Helpers",
      description: "Providing volunteers and professional services.",
      logo: "https://via.placeholder.com/150?text=Global"
    }
  ];

  const neededItems = [
    { id: "clothes", label: "Children's Clothing" },
    { id: "school", label: "School Supplies" },
    { id: "toys", label: "Toys and Games" },
    { id: "books", label: "Books" },
    { id: "toiletries", label: "Toiletries" },
    { id: "furniture", label: "Furniture" },
    { id: "electronics", label: "Electronics" },
    { id: "bedding", label: "Bedding" }
  ];

  return (
    <PageLayout>
      <PageBanner 
        title="How You Can Help" 
        subtitle="There are many ways to support our mission and make a positive impact in children's lives."
      />

      <section className="py-10 bg-white" id="options">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="donations" className="w-full">
            <TabsList className="grid w-full md:max-w-2xl mx-auto grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="donations">Donations</TabsTrigger>
              <TabsTrigger value="material">Material Aid</TabsTrigger>
              <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
              <TabsTrigger value="partners">Partners</TabsTrigger>
            </TabsList>
            
            {/* Donations Tab */}
            <TabsContent value="donations" id="donations">
              <SectionHeading 
                title="Make a Donation" 
                subtitle="Your financial support helps us provide care, education, and opportunities for children in need."
              />
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
                <Card className="p-8 col-span-1 lg:col-span-1 bg-gradient-to-br from-white to-primary-50">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-primary-100 rounded-full p-3">
                      <DollarSign className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-playfair font-semibold text-xl">One-time Donation</h3>
                  </div>
                  
                  <form onSubmit={handleDonationSubmit}>
                    <div className="mb-6">
                      <Label className="mb-2 block">Choose an amount</Label>
                      <RadioGroup value={selectedPresetAmount} onValueChange={setSelectedPresetAmount} className="grid grid-cols-2 gap-3">
                        {['25', '50', '100', '250'].map((amount) => (
                          <div key={amount}>
                            <RadioGroupItem
                              value={amount}
                              id={`amount-${amount}`}
                              className="peer sr-only"
                            />
                            <Label
                              htmlFor={`amount-${amount}`}
                              className="flex h-10 items-center justify-center rounded-md border-2 border-primary-100 bg-white px-3 hover:bg-primary-50 hover:text-primary peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-white cursor-pointer"
                            >
                              ${amount}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    
                    <div className="mb-6">
                      <Label htmlFor="custom-amount">Custom amount</Label>
                      <div className="relative mt-1">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                        <Input 
                          id="custom-amount" 
                          type="number" 
                          placeholder="Enter amount" 
                          className="pl-8"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <Button type="submit" className="w-full bg-primary hover:bg-primary-600">
                      Donate Now
                    </Button>
                  </form>
                </Card>
                
                <div className="col-span-1 lg:col-span-2">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-primary-100 rounded-full p-3">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-playfair font-semibold text-xl">Current Fundraisers</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {fundraisers.slice(0, 2).map((fundraiser, index) => (
                      <FundraiserCard 
                        key={index}
                        name={fundraiser.name}
                        description={fundraiser.description}
                        goal={fundraiser.goal}
                        raised={fundraiser.raised}
                        imageUrl={fundraiser.imageUrl}
                      />
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <a href="#fundraisers" className="text-primary hover:underline font-medium">
                      View all fundraisers
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-16" id="fundraisers">
                <SectionHeading 
                  title="All Fundraisers" 
                  subtitle="Support our campaigns targeted at specific needs of the children and our facilities."
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                  {fundraisers.map((fundraiser, index) => (
                    <FundraiserCard 
                      key={index}
                      name={fundraiser.name}
                      description={fundraiser.description}
                      goal={fundraiser.goal}
                      raised={fundraiser.raised}
                      imageUrl={fundraiser.imageUrl}
                    />
                  ))}
                </div>
              </div>
            </TabsContent>
            
            {/* Material Aid Tab */}
            <TabsContent value="material">
              <SectionHeading 
                title="Donate Material Aid" 
                subtitle="Help us provide for the children's daily needs with in-kind donations."
              />
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
                <Card className="p-8 col-span-1 lg:col-span-1 bg-gradient-to-br from-white to-pastel-blue">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-blue-100 rounded-full p-3">
                      <Gift className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-playfair font-semibold text-xl">Material Aid Form</h3>
                  </div>
                  
                  <form onSubmit={handleMaterialAidSubmit}>
                    <div className="mb-4">
                      <Label htmlFor="name">Your Name</Label>
                      <Input id="name" className="mt-1" />
                    </div>
                    
                    <div className="mb-4">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" className="mt-1" />
                    </div>
                    
                    <div className="mb-4">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" className="mt-1" />
                    </div>
                    
                    <div className="mb-6">
                      <Label className="mb-2 block">Items you wish to donate</Label>
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
                      <Label htmlFor="details">Additional Details</Label>
                      <Textarea id="details" placeholder="Tell us more about the items you wish to donate" className="mt-1" />
                    </div>
                    
                    <Button type="submit" className="w-full bg-primary hover:bg-primary-600">
                      Submit
                    </Button>
                  </form>
                </Card>
                
                <div className="col-span-1 lg:col-span-2">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-primary-100 rounded-full p-3">
                      <Check className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-playfair font-semibold text-xl">Currently Needed Items</h3>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-3 text-primary">Clothing & Bedding</h4>
                        <ul className="space-y-2 list-disc pl-5 text-gray-700">
                          <li>Children's clothes (ages 2-16)</li>
                          <li>Pajamas and sleepwear</li>
                          <li>Shoes and socks</li>
                          <li>Bed sheets and blankets</li>
                          <li>Towels and washcloths</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-lg mb-3 text-primary">Educational Materials</h4>
                        <ul className="space-y-2 list-disc pl-5 text-gray-700">
                          <li>Notebooks and paper</li>
                          <li>Pens, pencils, and markers</li>
                          <li>Backpacks</li>
                          <li>Children's books</li>
                          <li>Educational toys</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-lg mb-3 text-primary">Hygiene Products</h4>
                        <ul className="space-y-2 list-disc pl-5 text-gray-700">
                          <li>Soap and body wash</li>
                          <li>Shampoo and conditioner</li>
                          <li>Toothbrushes and toothpaste</li>
                          <li>Hairbrushes and combs</li>
                          <li>Diapers (all sizes)</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-lg mb-3 text-primary">Recreational Items</h4>
                        <ul className="space-y-2 list-disc pl-5 text-gray-700">
                          <li>Board games</li>
                          <li>Sports equipment</li>
                          <li>Art supplies</li>
                          <li>Musical instruments</li>
                          <li>Outdoor play equipment</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                      <p className="text-gray-700">
                        <span className="font-semibold">Drop-off Location:</span> 123 Caring Street, Compassion City, CA 12345
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold">Drop-off Hours:</span> Monday-Friday 9am-5pm, Saturday 10am-2pm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Volunteer Tab */}
            <TabsContent value="volunteer" id="volunteer">
              <SectionHeading 
                title="Volunteer With Us" 
                subtitle="Share your time, skills, and compassion to make a direct impact on children's lives."
              />
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
                <Card className="p-8 col-span-1 lg:col-span-1 bg-gradient-to-br from-white to-pastel-green">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-green-100 rounded-full p-3">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-playfair font-semibold text-xl">Volunteer Application</h3>
                  </div>
                  
                  <form onSubmit={handleVolunteerSubmit}>
                    <div className="mb-4">
                      <Label htmlFor="v-name">Your Name</Label>
                      <Input id="v-name" className="mt-1" />
                    </div>
                    
                    <div className="mb-4">
                      <Label htmlFor="v-email">Email</Label>
                      <Input id="v-email" type="email" className="mt-1" />
                    </div>
                    
                    <div className="mb-4">
                      <Label htmlFor="v-phone">Phone</Label>
                      <Input id="v-phone" type="tel" className="mt-1" />
                    </div>
                    
                    <div className="mb-4">
                      <Label>Areas of Interest</Label>
                      <div className="grid grid-cols-1 gap-2 mt-1">
                        {[
                          "Childcare assistance",
                          "Educational support",
                          "Recreational activities",
                          "Administrative help",
                          "Event planning",
                          "Fundraising"
                        ].map((area) => (
                          <div className="flex items-center space-x-2" key={area}>
                            <Checkbox id={`area-${area}`} />
                            <Label htmlFor={`area-${area}`}>{area}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <Label>Availability</Label>
                      <div className="grid grid-cols-2 gap-2 mt-1">
                        {[
                          "Weekdays (morning)",
                          "Weekdays (afternoon)",
                          "Weekends (morning)",
                          "Weekends (afternoon)"
                        ].map((time) => (
                          <div className="flex items-center space-x-2" key={time}>
                            <Checkbox id={`time-${time}`} />
                            <Label htmlFor={`time-${time}`}>{time}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <Label htmlFor="v-message">Tell us about yourself</Label>
                      <Textarea id="v-message" placeholder="Share your skills, experience, and why you want to volunteer with us" className="mt-1" />
                    </div>
                    
                    <Button type="submit" className="w-full bg-primary hover:bg-primary-600">
                      Submit Application
                    </Button>
                  </form>
                </Card>
                
                <div className="col-span-1 lg:col-span-2">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-primary-100 rounded-full p-3">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-playfair font-semibold text-xl">Volunteer Opportunities</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="p-6">
                      <h4 className="font-semibold text-lg mb-3 text-primary">Child Care Support</h4>
                      <p className="text-gray-700 mb-4">
                        Assist our staff in daily activities with the children, including meal times, playtime, and bedtime routines.
                      </p>
                      <ul className="space-y-1 list-disc pl-5 text-gray-700">
                        <li>Minimum commitment: 4 hours/week</li>
                        <li>Background check required</li>
                        <li>Training provided</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-6">
                      <h4 className="font-semibold text-lg mb-3 text-primary">Academic Tutoring</h4>
                      <p className="text-gray-700 mb-4">
                        Help children with homework, reading, and other academic subjects to support their educational development.
                      </p>
                      <ul className="space-y-1 list-disc pl-5 text-gray-700">
                        <li>Minimum commitment: 2 hours/week</li>
                        <li>Background check required</li>
                        <li>Educational experience preferred</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-6">
                      <h4 className="font-semibold text-lg mb-3 text-primary">Special Skills Volunteer</h4>
                      <p className="text-gray-700 mb-4">
                        Share your talents in music, art, sports, or other areas to enrich children's experiences and development.
                      </p>
                      <ul className="space-y-1 list-disc pl-5 text-gray-700">
                        <li>Flexible schedule</li>
                        <li>Background check required</li>
                        <li>Demonstration of skills may be requested</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-6">
                      <h4 className="font-semibold text-lg mb-3 text-primary">Administrative Support</h4>
                      <p className="text-gray-700 mb-4">
                        Assist with office tasks, donor communications, event planning, and other administrative needs.
                      </p>
                      <ul className="space-y-1 list-disc pl-5 text-gray-700">
                        <li>Flexible schedule</li>
                        <li>Background check required</li>
                        <li>Office skills preferred</li>
                      </ul>
                    </Card>
                  </div>
                  
                  <div className="mt-8 p-5 bg-primary-50 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Volunteer Process</h4>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                      <li>Submit application form</li>
                      <li>Initial phone interview</li>
                      <li>Background check</li>
                      <li>Orientation session</li>
                      <li>Training specific to your volunteer role</li>
                      <li>Begin volunteering!</li>
                    </ol>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Partners Tab */}
            <TabsContent value="partners" id="partnership">
              <SectionHeading 
                title="Partnership Opportunities" 
                subtitle="Organizations and businesses can create meaningful partnerships to support our mission."
              />
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
                <Card className="p-8 col-span-1 lg:col-span-1 bg-gradient-to-br from-white to-pastel-yellow">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-yellow-100 rounded-full p-3">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-playfair font-semibold text-xl">Partner With Us</h3>
                  </div>
                  
                  <form>
                    <div className="mb-4">
                      <Label htmlFor="org-name">Organization Name</Label>
                      <Input id="org-name" className="mt-1" />
                    </div>
                    
                    <div className="mb-4">
                      <Label htmlFor="contact-person">Contact Person</Label>
                      <Input id="contact-person" className="mt-1" />
                    </div>
                    
                    <div className="mb-4">
                      <Label htmlFor="org-email">Email</Label>
                      <Input id="org-email" type="email" className="mt-1" />
                    </div>
                    
                    <div className="mb-4">
                      <Label htmlFor="org-phone">Phone</Label>
                      <Input id="org-phone" type="tel" className="mt-1" />
                    </div>
                    
                    <div className="mb-4">
                      <Label>Partnership Interest</Label>
                      <div className="grid grid-cols-1 gap-2 mt-1">
                        {[
                          "Financial support",
                          "In-kind donations",
                          "Volunteer days",
                          "Professional services",
                          "Event sponsorship"
                        ].map((type) => (
                          <div className="flex items-center space-x-2" key={type}>
                            <Checkbox id={`type-${type}`} />
                            <Label htmlFor={`type-${type}`}>{type}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <Label htmlFor="partnership-details">Additional Details</Label>
                      <Textarea id="partnership-details" placeholder="Tell us about your organization and potential partnership ideas" className="mt-1" />
                    </div>
                    
                    <Button className="w-full bg-primary hover:bg-primary-600">
                      Submit Inquiry
                    </Button>
                  </form>
                </Card>
                
                <div className="col-span-1 lg:col-span-2">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-primary-100 rounded-full p-3">
                      <Handshake className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-playfair font-semibold text-xl">Current Partners</h3>
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
                    <h4 className="font-semibold text-lg mb-4">Partnership Benefits</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white p-5 rounded-lg shadow">
                        <h5 className="font-medium text-primary mb-3">For Your Organization</h5>
                        <ul className="space-y-2 list-disc pl-5 text-gray-700">
                          <li>Demonstrate corporate social responsibility</li>
                          <li>Employee engagement opportunities</li>
                          <li>Brand visibility in our materials and events</li>
                          <li>Tax benefits for eligible contributions</li>
                          <li>Positive community impact</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-5 rounded-lg shadow">
                        <h5 className="font-medium text-primary mb-3">For the Children</h5>
                        <ul className="space-y-2 list-disc pl-5 text-gray-700">
                          <li>Improved facilities and resources</li>
                          <li>Enhanced educational opportunities</li>
                          <li>Access to professional expertise</li>
                          <li>Enriching experiences and activities</li>
                          <li>Exposure to positive role models</li>
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
