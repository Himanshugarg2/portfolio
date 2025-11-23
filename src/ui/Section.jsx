import React from 'react';

const Section = ({ children, id, className = "" }) => (
  <section id={id} className={`py-20 px-6 md:px-12 max-w-6xl mx-auto ${className}`}>
    {children}
  </section>
);

export default Section;
