
import React from 'react';
import FadeIn from './animations/FadeIn';

const testimonials = [
  {
    id: 1,
    name: "Sophie Chen",
    role: "High School Student",
    quote: "GreaterHive helped me find volunteer opportunities that fit perfectly between my classes and extracurriculars. I was able to contribute to causes I care about without sacrificing my academics.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    name: "Jamal Williams",
    role: "University Freshman",
    quote: "The personalized recommendations were spot on! I found an environmental conservation project just 10 minutes from my dorm that perfectly aligned with my environmental science major.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "High School Junior",
    quote: "What I love about GreaterHive is how it helped me discover volunteering opportunities I never knew existed in my community. It's expanded my horizons and helped me develop new skills.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <div className="inline-block mb-3 px-3 py-1 bg-hive-blue/10 text-hive-blue rounded-full text-sm font-medium">
              Success Stories
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-hive-darkGray">
              What Our <span className="text-gradient">Volunteers</span> Say
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from students who have found meaningful volunteer opportunities 
              through our platform.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn 
              key={testimonial.id} 
              delay={index * 200}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <div className="mb-4 flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-semibold text-hive-darkGray">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-4">
                {Array(5).fill(0).map((_, i) => (
                  <span key={i} className="text-hive-yellow">★</span>
                ))}
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
