import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const { translate } = useLanguage();

  return (
    <footer className="bg-gradient-to-br from-primary-50 to-background pt-12 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-primary" />
              <span className="font-playfair font-bold text-xl">CrossVerse Group</span>
            </Link>
            <div className="flex space-x-3">
              <a href="#" className="text-foreground/50 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-foreground/50 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-foreground/50 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-foreground/50 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">{translate('navigation.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  {translate('navigation.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  {translate('navigation.aboutUs')}
                </Link>
              </li>
              <li>
                <Link to="/how-to-help" className="text-muted-foreground hover:text-primary transition-colors">
                  {translate('navigation.howToHelp')}
                </Link>
              </li>
              <li>
                <Link to="/financial-transparency" className="text-muted-foreground hover:text-primary transition-colors">
                  {translate('navigation.ourImpact')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  {translate('navigation.contactUs')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">{translate('navigation.contactUs')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">1234 Charitable Way, Donation City, DC 12345</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground">info@crossversegroup.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">{translate('News letter')}</h3>
            <p className="text-muted-foreground">
              {translate('Subscribe')}
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Email" type="email" className="bg-white border-muted" />
              <Button>{translate('Subscribe')}</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div>
            &copy; {new Date().getFullYear()} CrossVerse Group. {translate('All Rights Reserved')}
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              {translate('Privacy Policy')}
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              {translate('Terms of Service')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
