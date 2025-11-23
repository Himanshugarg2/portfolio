import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import FadeIn from '../ui/FadeIn';
import { SKILLS_DATA } from '../data/portfolio';

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm flex flex-col items-center justify-center gap-3 hover:shadow-md transition-all"
    >
      {/* ✅ Render black & white logo */}
      <img
        src={skill.logo}
        alt={skill.name}
        className="w-8 h-8 opacity-80"
      />

      <span className="font-medium text-stone-800">
        {skill.name}
      </span>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <Section id="skills" className="bg-stone-100/50 rounded-3xl my-10">
      <FadeIn>
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold mb-2">Technical Arsenal</h3>
          <p className="text-stone-500">
            Tools and technologies I work with.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SKILLS_DATA.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </FadeIn>
    </Section>
  );
};

export default Skills;
