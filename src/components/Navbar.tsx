
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './ui-custom/Button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white py-3 shadow-sm' : 'bg-white py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img src="/lovable-uploads/100634cc-7438-47ce-8afc-bd00a25d5c53.png" alt="GreaterHive Logo" className="h-10 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-hive-black hover:text-hive-yellow transition-colors font-light"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-hive-black hover:text-hive-yellow transition-colors font-light"
            >
              How It Works
            </a>
            <Button onClick={() => window.open('https://forms.gle/gd2m8U5a8tkLRS9m8', '_blank')}>Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-hive-black hover:text-hive-yellow"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-2 pb-4 bg-white rounded-lg shadow-md animate-fade-in">
            <div className="flex flex-col space-y-3 px-4">
              <a
                href="#features"
                className="text-hive-black hover:text-hive-yellow py-2 transition-colors font-light"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-hive-black hover:text-hive-yellow py-2 transition-colors font-light"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <Button 
                className="mt-2" 
                isFullWidth 
                onClick={() => window.open('https://forms.gle/gd2m8U5a8tkLRS9m8', '_blank')}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
