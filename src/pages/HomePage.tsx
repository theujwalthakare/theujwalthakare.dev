import ScrollyCanvas from '../components/sections/ScrollyCanvas';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Education from '../components/sections/Education';
import Certifications from '../components/sections/Certifications';
import GitHubStats from '../components/sections/GitHubStats';
import Achievements from '../components/sections/Achievements';
import Contact from '../components/sections/Contact';
import Footer from '../components/sections/Footer';

const HomePage = () => {
  return (
    <div className="relative">
      {/* Hero Section - 500vh Scroll Canvas */}
      <ScrollyCanvas />

      {/* About Section */}
      <About />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />

      {/* Education Section */}
      <Education />

      {/* Certifications Section */}
      <Certifications />

      {/* GitHub Stats Section */}
      <GitHubStats />

      {/* Achievements Section */}
      <Achievements />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
