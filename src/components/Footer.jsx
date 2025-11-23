import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 text-center text-stone-400 text-sm border-t border-stone-200/50">
      <p>© {new Date().getFullYear()} Himanshu Garg. </p>
    </footer>
  );
};

export default Footer;
