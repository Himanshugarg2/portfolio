import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Database, 
  Brain, 
  Menu, 
  X,
  ChevronDown
} from 'lucide-react';

// --- Data ---

const skills = [
  { name: "Python", category: "Core" },
  { name: "React", category: "Frontend" },
  { name: "SQL", category: "Database" },
  { name: "TensorFlow", category: "AI/ML" },
  { name: "Flask", category: "Backend" },
  { name: "Firebase", category: "Cloud" },
  { name: "Git", category: "Tools" },
  { name: "Data Analytics", category: "Core" },
];

const projects = [
  {
    title: "Predictive Analytics Dashboard",
    desc: "An AI-driven dashboard predicting market trends using historical data visualization.",
    stack: ["Python", "Streamlit", "Scikit-learn"],
    link: "#"
  },
  {
    title: "Smart Task Manager",
    desc: "A minimalist productivity app with real-time sync and collaborative features.",
    stack: ["React", "Firebase", "Tailwind"],
    link: "#"
  },
  {
    title: "Image Recognition API",
    desc: "REST API capable of classifying objects in images with 95% accuracy.",
    stack: ["Flask", "TensorFlow", "Docker"],
    link: "#"
  }
];

// --- Components ---

const Section = ({ children, id, className = "" }) => (
  <section id={id} className={`py-20 px-6 md:px-12 max-w-6xl mx-auto ${className}`}>
    {children}
  </section>
);

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-stone-50/80 backdrop-blur-md z-50 border-b border-stone-200/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-semibold tracking-tight text-stone-900">HG.</a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm text-stone-600 hover:text-stone-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-stone-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-stone-50 border-b border-stone-200 px-6 py-4"
        >
          <div className="flex flex-col space-y-4">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-stone-600 hover:text-stone-900"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-stone-200">
      <Navbar />

      {/* Hero Section */}
      <Section id="hero" className="min-h-screen flex flex-col justify-center pt-24">
        <FadeIn>
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-stone-500 uppercase bg-stone-200/50 rounded-full">
            Available for Hire
          </span>
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

      {/* About Section */}
      <Section id="about">
        <FadeIn>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">About Me</h3>
              <p className="text-stone-600 leading-7 mb-4">
                I am a final year Computer Engineering student with a deep passion for data and software architecture. My academic journey has been focused on mastering the intersection of full-stack development and artificial intelligence.
              </p>
              <p className="text-stone-600 leading-7">
                Whether it's training a machine learning model to recognize patterns or building a responsive React application to display those insights, I love solving problems that matter.
              </p>
            </div>
            {/* Placeholder Image */}
            <div className="relative aspect-square bg-stone-200 rounded-2xl overflow-hidden shadow-xl shadow-stone-200/50">
               {/* Replace src with actual image */}
               <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Himanshu Garg" 
                className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Skills Section */}
      <Section id="skills" className="bg-stone-100/50 rounded-3xl my-10">
        <FadeIn>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-2">Technical Arsenal</h3>
            <p className="text-stone-500">Tools and technologies I work with.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm flex flex-col items-center justify-center gap-3 hover:shadow-md transition-all"
              >
                {/* Logic to show icons based on skill type (Simplified for this demo) */}
                {skill.category === 'AI/ML' || skill.category === 'Data' ? <Brain size={24} className="text-stone-700" /> : 
                 skill.category === 'Database' ? <Database size={24} className="text-stone-700" /> :
                 <Code size={24} className="text-stone-700" />}
                
                <span className="font-medium text-stone-800">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <FadeIn>
          <h3 className="text-2xl font-semibold mb-8">Featured Projects</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white rounded-xl border border-stone-200 overflow-hidden hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300">
                <div className="h-48 bg-stone-100 relative flex items-center justify-center">
                  {/* Project Placeholder Visual */}
                  <Code className="text-stone-300 w-12 h-12" />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold mb-2 group-hover:text-stone-600 transition-colors">{project.title}</h4>
                  <p className="text-stone-500 text-sm mb-4 line-clamp-2">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map(tech => (
                      <span key={tech} className="text-xs px-2 py-1 bg-stone-100 text-stone-600 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="inline-flex items-center text-sm font-medium text-stone-900 hover:underline">
                    View Project <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Experience Section */}
      <Section id="experience">
        <FadeIn>
          <h3 className="text-2xl font-semibold mb-8">Experience</h3>
          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-stone-900"></div>
             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h4 className="text-xl font-bold text-stone-900">Data Science Intern</h4>
                  <p className="text-stone-500">TechSolutions Inc. • Mumbai, India</p>
                </div>
                <span className="mt-2 md:mt-0 px-3 py-1 bg-stone-100 text-stone-600 text-xs font-medium rounded-full">
                  June 2023 - Aug 2023
                </span>
             </div>
             <ul className="list-disc list-inside text-stone-600 space-y-2 text-sm md:text-base">
                <li>Developed and optimized machine learning models achieving a 15% increase in prediction accuracy.</li>
                <li>Collaborated with the backend team to integrate Python-based analytics tools into the main product.</li>
                <li>Automated data cleaning pipelines using Pandas and SQL, reducing manual workload by 40%.</li>
             </ul>
          </div>
        </FadeIn>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="mb-20">
        <FadeIn>
          <div className="bg-stone-900 text-stone-50 rounded-3xl p-8 md:p-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Let's work together.</h2>
            <p className="text-stone-400 mb-8 max-w-xl mx-auto">
              Currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
            </p>
            <a 
              href="mailto:contact@himanshu.dev" 
              className="inline-block bg-white text-stone-900 px-8 py-4 rounded-full font-medium hover:bg-stone-200 transition-colors"
            >
              Say Hello
            </a>
            
            <div className="mt-12 flex justify-center gap-6">
              <a href="#" className="text-stone-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Minimal Footer */}
      <footer className="py-8 text-center text-stone-400 text-sm border-t border-stone-200/50">
        <p>© {new Date().getFullYear()} Himanshu Garg. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}