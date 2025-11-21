import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Internships from "./Internships";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 text-gray-900 p-8 space-y-16">
      <Header />
      <About />
      <Skills />
      <Internships />
      <Projects />
      <Contact />
    </div>
  );
}
