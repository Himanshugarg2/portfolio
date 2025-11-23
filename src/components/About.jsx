import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Section from '../ui/Section';
import FadeIn from '../ui/FadeIn';

const About = () => {
  const [isWaving, setIsWaving] = useState(false);

  const workingImage =
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
  const wavingImage =
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

  return (
    <Section id="about">
      <FadeIn>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6">About Me</h3>

            <p className="text-stone-600 leading-7 mb-4">
              I am a final year Computer Engineering student with a deep passion for data and software architecture. My academic journey has been
              focused on mastering the intersection of full-stack development and artificial intelligence.
            </p>

            <p className="text-stone-600 leading-7 mb-6">
              Whether it's training a machine learning model to recognize patterns or building a responsive React application to display those insights,
              I love solving problems that matter.
            </p>
          </div>

          {/* IMAGE SECTION */}
          <div className="relative aspect-square bg-stone-200 rounded-2xl overflow-hidden shadow-xl shadow-stone-200/50">
            <AnimatePresence mode="wait">
              <motion.img
                key={isWaving ? "waving" : "working"}
                src={isWaving ? wavingImage : workingImage}
                alt={isWaving ? "Himanshu waving" : "Himanshu working"}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="object-cover w-full h-full absolute top-0 left-0"
              />
            </AnimatePresence>

            {/* ✅ CLICK TO SAY HI */}
            {!isWaving && (
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black/20 flex items-center justify-center cursor-pointer"
                onClick={() => setIsWaving(true)}
              >
                <span className="bg-white/90 text-stone-800 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                  Click to Say Hi!
                </span>
              </motion.div>
            )}

            {/* ✅ BACK TO WORK OVERLAY */}
            {isWaving && (
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black/20 flex items-center justify-center cursor-pointer"
                onClick={() => setIsWaving(false)}
              >
                <span className="bg-white/90 text-stone-800 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                  Back to Work
                </span>
              </motion.div>
            )}
          </div>
        </div>
      </FadeIn>
    </Section>
  );
};

export default About;
