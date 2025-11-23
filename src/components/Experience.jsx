import React from 'react';
import Section from '../ui/Section';
import FadeIn from '../ui/FadeIn';

const Experience = () => {
  return (
    <Section id="experience">
      <FadeIn>
        <h3 className="text-2xl font-semibold mb-8">Experience</h3>

        {/* ✅ ConnectWise Internship */}
        <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm relative overflow-hidden mb-8">
          <div className="absolute top-0 left-0 w-1 h-full bg-stone-900"></div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <div>
              <h4 className="text-xl font-bold text-stone-900">Engineering Intern</h4>
              <p className="text-stone-500">ConnectWise</p>
            </div>
            <span className="mt-2 md:mt-0 px-3 py-1 bg-stone-100 text-stone-600 text-xs font-medium rounded-full">
              June 2025 – July 2025
            </span>
          </div>

          <ul className="list-disc list-inside text-stone-600 space-y-2 text-sm md:text-base">
            <li>Built RESTful APIs using Go and GoFiber for seamless internal data transfer.</li>
            <li>Developed GraphQL layer using gqlgen with filtering, sorting, and pagination.</li>
            <li>Implemented unit tests with GoMock to maintain high code quality.</li>
          </ul>
        </div>

        {/* ✅ KJSCE Data Science Internship */}
        <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-stone-900"></div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <div>
              <h4 className="text-xl font-bold text-stone-900">Data Science Intern</h4>
              <p className="text-stone-500">KJSCE</p>
            </div>
            <span className="mt-2 md:mt-0 px-3 py-1 bg-stone-100 text-stone-600 text-xs font-medium rounded-full">
              July 2024 – December 2024
            </span>
          </div>

          <ul className="list-disc list-inside text-stone-600 space-y-2 text-sm md:text-base">
            <li>Built and trained a CNN model using TensorFlow for disease detection.</li>
            <li>Performed data collection, cleaning, and preprocessing for model training.</li>
            <li>Integrated the model into mobile and web apps for real-time predictions.</li>
            <li>Presented research paper at ICTEAH 2025 showcasing performance results.</li>
          </ul>
        </div>
      </FadeIn>
    </Section>
  );
};

export default Experience;
