
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary-50 to-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-6 w-6 text-primary" />
              <span className="font-playfair font-bold text-xl">HeartfeltHome</span>
            </div>
            <p className="text-gray-600 mb-4">
              Providing love, care, and support to children in need since 2010. 
              Together we can make a difference in their lives.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/how-to-help" className="text-gray-600 hover:text-primary transition-colors">
                  How to Help
                </Link>
              </li>
              <li>
                <Link to="/financial-transparency" className="text-gray-600 hover:text-primary transition-colors">
                  Financial Transparency
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved Column */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/how-to-help" className="text-gray-600 hover:text-primary transition-colors">
                  Make a Donation
                </Link>
              </li>
              <li>
                <Link to="/how-to-help" className="text-gray-600 hover:text-primary transition-colors">
                  Become a Volunteer
                </Link>
              </li>
              <li>
                <Link to="/how-to-help" className="text-gray-600 hover:text-primary transition-colors">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link to="/how-to-help" className="text-gray-600 hover:text-primary transition-colors">
                  Fundraise for Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span className="text-gray-600">
                  123 Caring Street, <br />
                  Compassion City, <br />
                  CA 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2" />
                <span className="text-gray-600">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2" />
                <span className="text-gray-600">info@heartfelthome.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} HeartfeltHome Children's Foundation. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-500 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-500 hover:text-primary text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/admin" className="text-gray-500 hover:text-primary text-sm transition-colors">
                Admin Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
