import React from 'react';
import { ExternalLink, Code, Github } from 'lucide-react';
import Section from '../ui/Section';
import FadeIn from '../ui/FadeIn';
import { PROJECTS_DATA } from '../data/portfolio';

const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-white rounded-xl border border-stone-200 overflow-hidden hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300">
      <div className="h-48 bg-stone-100 relative flex items-center justify-center">
        <Code className="text-stone-300 w-12 h-12" />
      </div>

      <div className="p-6">
        <h4 className="text-lg font-bold mb-2 group-hover:text-stone-600 transition-colors">
          {project.title}
        </h4>

        <p className="text-stone-500 text-sm mb-4 line-clamp-2">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech) => (
            <span key={tech} className="text-xs px-2 py-1 bg-stone-100 text-stone-600 rounded-md">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Live link */}
          <a
            href={project.link}
            className="inline-flex items-center text-sm font-medium text-stone-900 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project <ExternalLink size={14} className="ml-1" />
          </a>

          {/* GitHub link (only if exists) */}
          {project.github && (
            <a
              href={project.github}
              className="inline-flex items-center text-sm font-medium text-stone-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <Github size={14} className="ml-1" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <Section id="projects">
      <FadeIn>
        <h3 className="text-2xl font-semibold mb-8">Featured Projects</h3>

        <div className="grid md:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </FadeIn>
    </Section>
  );
};

export default Projects;
