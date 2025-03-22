import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, X, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSelector } from '@/components/ui/language-selector';
import { useLanguage } from '@/contexts/LanguageContext';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { translate } = useLanguage();
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string): boolean => {
    return location.pathname === path;
  };

  const navItems = [
    { name: translate('navigation.home'), href: '/' },
    { name: translate('navigation.aboutUs'), href: '/about' },
    { name: translate('navigation.howToHelp'), href: '/how-to-help' },
    { name: translate('navigation.ourImpact'), href: '/financial-transparency' },
    { name: translate('navigation.kids'), href: '/kids' },
    { name: translate('navigation.contactUs'), href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="font-playfair font-bold text-2xl">CrossVerse group</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors hover:text-primary ${
                  isActive(item.href) ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Language and Donate Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <LanguageSelector />
            <Button className="bg-primary hover:bg-primary-600 ml-2">
              {translate('common.donate')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSelector />
            <button
              className="text-foreground/80 hover:text-primary ml-2"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-colors hover:text-primary ${
                    isActive(item.href) ? 'text-primary' : 'text-foreground/80'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-primary hover:bg-primary-600 w-full mt-2">
                {translate('common.donate')}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
