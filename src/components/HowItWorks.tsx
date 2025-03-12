
import React from 'react';
import FadeIn from './animations/FadeIn';
import Button from './ui-custom/Button';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn delay={100}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-hive-darkGray">
                How <span className="text-hive-yellow">GreaterHive</span> Works
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our platform makes finding and signing up for volunteer opportunities 
                as simple as possible. Follow these easy steps to get started.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <FadeIn className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 left-0 w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 bg-hive-yellow opacity-10 transform rotate-45"></div>
                  <span className="relative z-10 text-2xl font-bold text-hive-yellow">1</span>
                </div>
                <div className="ml-4 mt-4">
                  <h3 className="text-xl font-semibold mb-4 text-hive-darkGray">Create Your Profile</h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    Sign up and tell us about your interests, skills, availability, 
                    and location preferences to help us find the perfect opportunities for you.
                  </p>
                  <div className="w-full h-1 bg-gradient-to-r from-hive-yellow to-hive-yellowLight rounded-full"></div>
                </div>
              </div>
            </FadeIn>

            <FadeIn className="relative" delay={200}>
              <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 left-0 w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 bg-hive-yellow opacity-10 transform rotate-45"></div>
                  <span className="relative z-10 text-2xl font-bold text-hive-yellow">2</span>
                </div>
                <div className="ml-4 mt-4">
                  <h3 className="text-xl font-semibold mb-4 text-hive-darkGray">Get Recommendations</h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    Our algorithm will analyze your profile and present you with 
                    personalized volunteer opportunities that match your criteria.
                  </p>
                  <div className="w-full h-1 bg-gradient-to-r from-hive-yellow to-hive-yellowLight rounded-full"></div>
                </div>
              </div>
            </FadeIn>

            <FadeIn className="relative" delay={400}>
              <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 left-0 w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 bg-hive-yellow opacity-10 transform rotate-45"></div>
                  <span className="relative z-10 text-2xl font-bold text-hive-yellow">3</span>
                </div>
                <div className="ml-4 mt-4">
                  <h3 className="text-xl font-semibold mb-4 text-hive-darkGray">Apply & Volunteer</h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    Apply directly through our platform, receive confirmations, 
                    and start making a difference in your community.
                  </p>
                  <div className="w-full h-1 bg-gradient-to-r from-hive-yellow to-hive-yellowLight rounded-full"></div>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn className="text-center">
            <Button size="lg" onClick={() => window.open('https://forms.gle/gd2m8U5a8tkLRS9m8', '_blank')}>
              Start Your Journey
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
