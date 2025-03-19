
import React from 'react';
import { ThemeProvider } from "next-themes";
import Header from './Header';
import Footer from './Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
      <LanguageProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default PageLayout;
