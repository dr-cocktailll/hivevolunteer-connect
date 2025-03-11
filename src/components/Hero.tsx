
import React from 'react';
import Button from './ui-custom/Button';
import { HandHeart, GraduationCap, Calendar, MapPin } from 'lucide-react';
import FadeIn from './animations/FadeIn';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-24 relative overflow-hidden bg-gradient-to-b from-white to-hive-gray">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80')] bg-cover bg-center opacity-[0.03]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <FadeIn>
              <div className="inline-block mb-3 px-3 py-1 bg-hive-blue/10 text-hive-blue rounded-full text-sm font-medium">
                Find your perfect volunteer opportunity
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-hive-darkGray">
                Connecting Youth to 
                <span className="text-gradient block"> Meaningful Volunteer Experiences</span>
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                GreaterHive lowers barriers to youth volunteerism with hyper-personalized recommendations 
                based on your interests, schedule, and location.
              </p>
            </FadeIn>

            <FadeIn delay={300} className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg">
                Start Volunteering
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </FadeIn>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FadeIn delay={400} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="bg-hive-blue/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <HandHeart className="h-6 w-6 text-hive-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-hive-darkGray">Cause Alignment</h3>
              <p className="text-gray-600">Find opportunities that match your passions and values</p>
            </FadeIn>

            <FadeIn delay={500} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="bg-hive-yellow/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-hive-yellow" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-hive-darkGray">Smart Scheduling</h3>
              <p className="text-gray-600">Works around your school timetable for perfect timing</p>
            </FadeIn>

            <FadeIn delay={600} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="bg-hive-blue/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-hive-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-hive-darkGray">Location Proximity</h3>
              <p className="text-gray-600">Find opportunities close to your school or home</p>
            </FadeIn>

            <FadeIn delay={700} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="bg-hive-yellow/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-hive-yellow" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-hive-darkGray">Youth Focused</h3>
              <p className="text-gray-600">Designed specifically for students and young volunteers</p>
            </FadeIn>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
