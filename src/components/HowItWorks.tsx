
import React from 'react';
import FadeIn from './animations/FadeIn';
import Button from './ui-custom/Button';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-hive-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <div className="inline-block mb-3 px-3 py-1 bg-hive-blue/10 text-hive-blue rounded-full text-sm font-medium">
                Simple Process
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-hive-darkGray">
                How <span className="text-gradient">GreaterHive</span> Works
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
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-hive-blue rounded-full text-white flex items-center justify-center text-xl font-bold">1</div>
                <h3 className="text-xl font-semibold mb-4 text-hive-darkGray mt-4">Create Your Profile</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Sign up and tell us about your interests, skills, availability, 
                  and location preferences to help us find the perfect opportunities for you.
                </p>
                <div className="w-full h-1 bg-hive-blue/20 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-hive-blue animate-pulse-subtle"></div>
                </div>
              </div>
            </FadeIn>

            <FadeIn className="relative" delay={200}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-hive-yellow rounded-full text-hive-darkGray flex items-center justify-center text-xl font-bold">2</div>
                <h3 className="text-xl font-semibold mb-4 text-hive-darkGray mt-4">Get Recommendations</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Our algorithm will analyze your profile and present you with 
                  personalized volunteer opportunities that match your criteria.
                </p>
                <div className="w-full h-1 bg-hive-yellow/20 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-hive-yellow animate-pulse-subtle"></div>
                </div>
              </div>
            </FadeIn>

            <FadeIn className="relative" delay={400}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-hive-blue rounded-full text-white flex items-center justify-center text-xl font-bold">3</div>
                <h3 className="text-xl font-semibold mb-4 text-hive-darkGray mt-4">Apply & Volunteer</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Apply directly through our platform, receive confirmations, 
                  and start making a difference in your community.
                </p>
                <div className="w-full h-1 bg-hive-blue/20 rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-hive-blue animate-pulse-subtle"></div>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn className="text-center">
            <Button size="lg">
              Start Your Journey
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
