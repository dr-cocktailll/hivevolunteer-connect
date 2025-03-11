
import React from 'react';
import FadeIn from './animations/FadeIn';
import { Search, Users, Activity, Clock, Award, Shield } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <div className="inline-block mb-3 px-3 py-1 bg-hive-yellow/20 text-hive-black rounded-full text-sm font-light tracking-wide">
              Our Platform Features
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-hive-black tracking-tight">
              Why Choose <span className="text-hive-yellow">GreaterHive</span>
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
              Our intelligent platform is designed to make volunteering accessible, 
              meaningful, and perfectly tailored to young people's lives.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FadeIn className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-hive-yellow/20 rounded-lg flex items-center justify-center mb-4">
              <Search className="h-6 w-6 text-hive-yellow" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-hive-black">Smart Matching</h3>
            <p className="text-gray-600 font-light">
              Our algorithm analyzes your interests, skills, and values to recommend the most meaningful volunteer opportunities for you.
            </p>
          </FadeIn>

          <FadeIn className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300" delay={100}>
            <div className="w-12 h-12 bg-hive-yellow/20 rounded-lg flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-hive-yellow" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-hive-black">Calendar Integration</h3>
            <p className="text-gray-600 font-light">
              Sync your school and personal calendar to find volunteering opportunities that fit perfectly with your schedule.
            </p>
          </FadeIn>

          <FadeIn className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300" delay={200}>
            <div className="w-12 h-12 bg-hive-yellow/20 rounded-lg flex items-center justify-center mb-4">
              <Activity className="h-6 w-6 text-hive-yellow" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-hive-black">Impact Tracking</h3>
            <p className="text-gray-600 font-light">
              Monitor your volunteer hours, skills developed, and social impact created through an intuitive dashboard.
            </p>
          </FadeIn>

          <FadeIn className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300" delay={300}>
            <div className="w-12 h-12 bg-hive-yellow/20 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-hive-yellow" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-hive-black">Community Network</h3>
            <p className="text-gray-600 font-light">
              Connect with other young volunteers, share experiences, and build valuable relationships through community forums.
            </p>
          </FadeIn>

          <FadeIn className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300" delay={400}>
            <div className="w-12 h-12 bg-hive-yellow/20 rounded-lg flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-hive-yellow" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-hive-black">Skill Development</h3>
            <p className="text-gray-600 font-light">
              Identify and develop specific skills through volunteering that will help in academic and career advancement.
            </p>
          </FadeIn>

          <FadeIn className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300" delay={500}>
            <div className="w-12 h-12 bg-hive-yellow/20 rounded-lg flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-hive-yellow" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-hive-black">Automated VIA Tracking</h3>
            <p className="text-gray-600 font-light">
              Automatically track and verify your volunteer hours to simplify the reporting process for school requirements.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Features;
