
import React from 'react';
import { Mail, Link } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center mb-4">
              <img src="/lovable-uploads/100634cc-7438-47ce-8afc-bd00a25d5c53.png" alt="GreaterHive Logo" className="h-12 w-auto mr-2" />
            </div>
            <p className="text-gray-300">
              Connecting young volunteers with meaningful opportunities to make a difference.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-gray-300" />
                <a href="mailto:greaterhive@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  greaterhive@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Link size={18} className="mr-2 text-gray-300" />
                <a href="https://linktr.ee/GreaterHive" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  linktr.ee/GreaterHive
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} GreaterHive. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
