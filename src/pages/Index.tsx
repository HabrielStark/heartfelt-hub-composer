import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import SupportCategories from '@/components/home/SupportCategories';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import PartnersSection from '@/components/home/PartnersSection';
import CtaSection from '@/components/home/CtaSection';

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <StatsSection />
      <SupportCategories />
      <TestimonialsSection />
      <PartnersSection />
      <CtaSection />
    </PageLayout>
  );
};

export default Index;
