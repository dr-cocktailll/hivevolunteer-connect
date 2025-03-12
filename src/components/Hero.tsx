
import React from 'react';
import Button from './ui-custom/Button';
import { HandHeart, GraduationCap, Calendar, MapPin } from 'lucide-react';
import FadeIn from './animations/FadeIn';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-24 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80')] bg-cover bg-center opacity-[0.02]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <FadeIn>
              <div className="inline-block mb-3 px-3 py-1 bg-hive-yellow text-hive-black rounded-full text-sm font-light tracking-wide">
                Find your perfect volunteer opportunity
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-hive-black tracking-tight">
                Connecting Youths to 
                <span className="block text-hive-yellow"> Meaningful Volunteer Experiences</span>
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-light italic transform hover:scale-105 transition-transform duration-500">
                <span className="relative inline-block">
                  A volunteer first social impact platform. Growing the next generation of giving.
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-hive-yellow transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
                </span>
              </p>
            </FadeIn>

            <FadeIn delay={300} className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" onClick={() => window.open('https://forms.gle/gd2m8U5a8tkLRS9m8', '_blank')}>
                Start Volunteering
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.open('https://forms.gle/gd2m8U5a8tkLRS9m8', '_blank')}>
                Learn More
              </Button>
            </FadeIn>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FadeIn delay={400} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="bg-hive-yellow/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <HandHeart className="h-6 w-6 text-hive-yellow" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-hive-black">Cause Alignment</h3>
              <p className="text-hive-black/80 font-light">Find opportunities that match your passions and values</p>
            </FadeIn>

            <FadeIn delay={500} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="bg-hive-yellow/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-hive-yellow" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-hive-black">Smart Scheduling</h3>
              <p className="text-hive-black/80 font-light">Works around your school timetable for perfect timing</p>
            </FadeIn>

            <FadeIn delay={600} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="bg-hive-yellow/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-hive-yellow" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-hive-black">Location Proximity</h3>
              <p className="text-hive-black/80 font-light">Find opportunities close to your school or home</p>
            </FadeIn>

            <FadeIn delay={700} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="bg-hive-yellow/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-hive-yellow" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-hive-black">Youth Focused</h3>
              <p className="text-hive-black/80 font-light">Designed specifically for students and young volunteers</p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
