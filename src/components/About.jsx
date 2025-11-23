import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Section from "../ui/Section";
import FadeIn from "../ui/FadeIn";

export default function About() {
  const [isWaving, setIsWaving] = useState(false);

  // ✅ Images from /public
  const workingImage = "/working.png";
  const greetingImage = "/greeting.png";

  return (
    <Section id="about">
      <FadeIn>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6">About Me</h3>

            <p className="text-stone-600 leading-7 mb-4">
              I am a final year Computer Engineering student with a deep passion
              for data and software architecture.
            </p>

            <p className="text-stone-600 leading-7 mb-6">
              Whether it's training a machine learning model or building a
              full-stack app, I love solving real problems.
            </p>
          </div>

          {/* ✅ IMAGE SECTION */}
          <div className="relative w-full aspect-square bg-stone-200 rounded-2xl overflow-hidden shadow-xl shadow-stone-200/50 mx-auto max-w-[260px] md:max-w-[320px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={isWaving ? "greeting" : "working"}
                src={isWaving ? greetingImage : workingImage}
                alt={isWaving ? "Waving hello" : "Working / coding"}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onError={(e) => (e.target.src = workingImage)}
                className="object-cover w-full h-full absolute top-0 left-0"
              />
            </AnimatePresence>

            {/* ✅ Click to Say Hi */}
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

            {/* ✅ Manual Back to Work */}
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
}
