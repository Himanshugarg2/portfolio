import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import Section from '../ui/Section';
import FadeIn from '../ui/FadeIn';

const Contact = () => {
  return (
    <Section id="contact" className="mb-20">
      <FadeIn>
        <div className="bg-stone-900 text-stone-50 rounded-3xl p-8 md:p-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's work together.</h2>

          <p className="text-stone-400 mb-8 max-w-xl mx-auto">
            Currently looking for new opportunities. Whether you have a question or just want to say hi,
            my inbox is always open.
          </p>

          {/* ✅ Updated email */}
          <a
            href="mailto:himanshu.garg@somaiya.edu"
            className="inline-block bg-white text-stone-900 px-8 py-4 rounded-full font-medium hover:bg-stone-200 transition-colors"
          >
            Say Hello
          </a>

          <div className="mt-12 flex justify-center gap-6">
            {/* ✅ Updated LinkedIn */}
            <a
              href="https://www.linkedin.com/in/himanshu-garg-413a14280/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>

            {/* ✅ Updated GitHub */}
            <a
              href="https://github.com/Himanshugarg2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>

            {/* ✅ Updated email icon link */}
            <a
              href="mailto:himanshu.garg@somaiya.edu"
              className="text-stone-400 hover:text-white transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
};

export default Contact;
