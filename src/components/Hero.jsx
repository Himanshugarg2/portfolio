import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Section from '../ui/Section';
import FadeIn from '../ui/FadeIn';

const Hero = () => {
  return (
    <Section id="hero" className="min-h-screen flex flex-col justify-center pt-24">
      <FadeIn>
        {/* <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-stone-500 uppercase bg-stone-200/50 rounded-full">
          Available for Hire
        </span> */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-stone-900 mb-6">
          Himanshu Garg
        </h1>
        <h2 className="text-xl md:text-2xl text-stone-600 font-light mb-4">
          Computer Engineering Student <br />
          <span className="text-stone-400">Honours in Data Science & Analytics</span>
        </h2>
        <p className="text-lg text-stone-500 max-w-lg mb-8 leading-relaxed">
          Building intelligent and scalable solutions. Bridging the gap between complex data and intuitive user experiences.
        </p>
        <div className="flex gap-4">
          <a href="#contact" className="px-6 py-3 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-all shadow-lg shadow-stone-200/50">
            Contact Me
          </a>
          <a href="#" className="px-6 py-3 bg-white border border-stone-200 text-stone-800 rounded-lg hover:bg-stone-100 transition-all">
            View Resume
          </a>
        </div>
      </FadeIn>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-stone-400 animate-bounce"
      >
        <ChevronDown size={24} />
      </motion.div>
    </Section>
  );
};

export default Hero;
