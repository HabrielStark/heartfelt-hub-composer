import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import PageBanner from '@/components/ui/PageBanner';
import SectionHeading from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutUs = () => {
  const { translate } = useLanguage();
  
  const staffMembers = [
    {
      name: translate('aboutPage.team.members.director.name'),
      position: translate('aboutPage.team.members.director.position'),
      description: translate('aboutPage.team.members.director.description'),
      image: "/IMG_4378.JPG"
    },
    {
      name: translate('aboutPage.team.members.childcare.name'),
      position: translate('aboutPage.team.members.childcare.position'),
      description: translate('aboutPage.team.members.childcare.description'),
      image: "/IMG_4377.JPG"
    },
    {
      name: translate('aboutPage.team.members.education.name'),
      position: translate('aboutPage.team.members.education.position'),
      description: translate('aboutPage.team.members.education.description'),
      image: "/IMG_4385.JPG"
    },
    {
      name: translate('aboutPage.team.members.financial.name'),
      position: translate('aboutPage.team.members.financial.position'),
      description: translate('aboutPage.team.members.financial.description'),
      image: "/IMG_4403.PNG"
    }
  ];

  const documents = [
    { name: translate('aboutPage.documents.annual'), url: "#" },
    { name: translate('aboutPage.documents.protection'), url: "#" },
    { name: translate('aboutPage.documents.bylaws'), url: "#" },
    { name: translate('aboutPage.documents.financial'), url: "#" }
  ];

  return (
    <PageLayout>
      <PageBanner 
        title={translate('aboutPage.title')}
        subtitle={translate('aboutPage.subtitle')}
      />

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title={translate('aboutPage.history.title')}
                subtitle={translate('aboutPage.history.subtitle')}
                centered={false}
              />
              <p className="text-gray-700 mb-4">
                {translate('aboutPage.history.paragraph1')}
              </p>
              <p className="text-gray-700 mb-4">
                {translate('aboutPage.history.paragraph2')}
              </p>
              <p className="text-gray-700">
                {translate('aboutPage.history.paragraph3')}
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
            title={translate('aboutPage.values.title')}
            subtitle={translate('aboutPage.values.subtitle')}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-playfair font-semibold text-xl mb-3 text-primary">{translate('aboutPage.values.compassion.title')}</h3>
              <p className="text-gray-700">{translate('aboutPage.values.compassion.description')}</p>
            </Card>
            
            <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-playfair font-semibold text-xl mb-3 text-primary">{translate('aboutPage.values.integrity.title')}</h3>
              <p className="text-gray-700">{translate('aboutPage.values.integrity.description')}</p>
            </Card>
            
            <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-playfair font-semibold text-xl mb-3 text-primary">{translate('aboutPage.values.respect.title')}</h3>
              <p className="text-gray-700">{translate('aboutPage.values.respect.description')}</p>
            </Card>
            
            <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-playfair font-semibold text-xl mb-3 text-primary">{translate('aboutPage.values.excellence.title')}</h3>
              <p className="text-gray-700">{translate('aboutPage.values.excellence.description')}</p>
            </Card>
            
            <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-playfair font-semibold text-xl mb-3 text-primary">{translate('aboutPage.values.collaboration.title')}</h3>
              <p className="text-gray-700">{translate('aboutPage.values.collaboration.description')}</p>
            </Card>
            
            <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-playfair font-semibold text-xl mb-3 text-primary">{translate('aboutPage.values.empowerment.title')}</h3>
              <p className="text-gray-700">{translate('aboutPage.values.empowerment.description')}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title={translate('aboutPage.team.title')}
            subtitle={translate('aboutPage.team.subtitle')}
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
            title={translate('aboutPage.documents.title')}
            subtitle={translate('aboutPage.documents.subtitle')}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 max-w-4xl mx-auto">
            {documents.map((document, index) => (
              <Link to={document.url} key={index}>
                <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                  <FileText className="h-10 w-10 text-primary mx-auto mb-3" />
                  <p className="font-medium text-gray-800">{document.name}</p>
                  <p className="text-sm text-primary mt-2">{translate('aboutPage.documents.download')}</p>
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
