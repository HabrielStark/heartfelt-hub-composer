
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import PageBanner from '@/components/ui/PageBanner';
import SectionHeading from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

const AboutUs = () => {
  const staffMembers = [
    {
      name: "Dr. Emma Rodriguez",
      position: "Executive Director",
      description: "With over 15 years in child welfare, Emma leads our organization with compassion and vision.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80"
    },
    {
      name: "James Wilson",
      position: "Head of Child Care",
      description: "James ensures each child receives personalized care and attention to support their development.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
    },
    {
      name: "Sarah Chen",
      position: "Education Coordinator",
      description: "Sarah develops our educational programs to help children reach their full academic potential.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80"
    },
    {
      name: "Michael Johnson",
      position: "Financial Director",
      description: "Michael ensures donor funds are managed responsibly and transparently to maximize impact.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
    }
  ];

  const documents = [
    { name: "Annual Report 2023", url: "#" },
    { name: "Child Protection Policy", url: "#" },
    { name: "Organization Bylaws", url: "#" },
    { name: "Financial Statement", url: "#" }
  ];

  return (
    <PageLayout>
      <PageBanner 
        title="About Us" 
        subtitle="Learn about our mission, history, and the dedicated team behind HeartfeltHome."
      />

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Our History" 
                subtitle="A journey of compassion and dedication since 2010."
                centered={false}
              />
              <p className="text-gray-700 mb-4">
                HeartfeltHome was founded in 2010 by a group of passionate individuals who recognized 
                the urgent need for quality care for orphaned and vulnerable children in our community.
              </p>
              <p className="text-gray-700 mb-4">
                What began as a small initiative with just five children has grown into a comprehensive 
                care program that has supported over 500 children through our residential and community-based programs.
              </p>
              <p className="text-gray-700">
                Over the years, we've expanded our services to include education support, healthcare, 
                psychological counseling, and life skills training to ensure every child receives 
                the care they need to thrive.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1617191979507-967792787a51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="HeartfeltHome History" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Core Values" 
            subtitle="These principles guide everything we do at HeartfeltHome."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-playfair font-semibold text-xl mb-3 text-primary">Compassion</h3>
              <p className="text-gray-700">We approach each child with empathy and understanding, recognizing their unique experiences and needs.</p>
            </Card>
            
            <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-playfair font-semibold text-xl mb-3 text-primary">Integrity</h3>
              <p className="text-gray-700">We maintain the highest ethical standards in all our operations and are committed to transparency.</p>
            </Card>
            
            <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-playfair font-semibold text-xl mb-3 text-primary">Respect</h3>
              <p className="text-gray-700">We honor the dignity of every child and recognize their inherent worth as individuals.</p>
            </Card>
            
            <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-playfair font-semibold text-xl mb-3 text-primary">Excellence</h3>
              <p className="text-gray-700">We strive for the highest quality in all our services to provide the best possible care for children.</p>
            </Card>
            
            <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-playfair font-semibold text-xl mb-3 text-primary">Collaboration</h3>
              <p className="text-gray-700">We work together with partners, communities, and families to create a supportive network for children.</p>
            </Card>
            
            <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-playfair font-semibold text-xl mb-3 text-primary">Empowerment</h3>
              <p className="text-gray-700">We equip children with the skills, confidence, and opportunities to build better futures for themselves.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Team" 
            subtitle="Meet the dedicated professionals who make our work possible."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {staffMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="rounded-full w-40 h-40 mx-auto overflow-hidden mb-4 border-4 border-white shadow-md">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-playfair font-semibold text-xl mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.position}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Official Documents" 
            subtitle="Access our public documents to learn more about our organization's governance and operations."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 max-w-4xl mx-auto">
            {documents.map((document, index) => (
              <Link to={document.url} key={index}>
                <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                  <FileText className="h-10 w-10 text-primary mx-auto mb-3" />
                  <p className="font-medium text-gray-800">{document.name}</p>
                  <p className="text-sm text-primary mt-2">Download PDF</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutUs;
