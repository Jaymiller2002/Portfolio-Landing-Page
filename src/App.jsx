import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Header = ({ handleSectionChange }) => (
  <header>
    <h1>Portfolio</h1>
    <nav>
      <ul>
        <li><button onClick={() => handleSectionChange('home')} style={{marginLeft: "250px"}}>Home</button></li>
        <li><button onClick={() => handleSectionChange('about')} style={{marginLeft: "250px"}}>About</button></li>
        <li><button onClick={() => handleSectionChange('features')} style={{marginLeft: "250px"}}>Features</button></li>
        <li><button onClick={() => handleSectionChange('projects')} style={{marginLeft: "250px"}}>Projects</button></li>
        <li><button onClick={() => handleSectionChange('contact')} style={{marginLeft: "250px"}}>Contact</button></li>
        {/* Add other navigation options */}
      </ul>
    </nav>
  </header>
);

const Home = () => (
  <section id="home">
    <div className="header">
      <h1>Welcome to My Portfolio</h1>
      <p>Explore my work and learn more about me.</p>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about">
    <div className="header">
      <h1>About Me</h1>
      <Link to="#">Hire Me</Link>
    </div>
    <div className="card">
      <img src="assets/logo.png" alt="Logo" />
      <div className="info">
        <h1>It's Jay Miller</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptates error in dolorum dolor rerum reiciendis consequuntur tenetur maxime.
        </p>
      </div>
    </div>
  </section>
);

const FeaturesSection = () => (
  <section id="features">
    <div className="header">
      <h1>Features</h1>
      <Link to="#">See More</Link>
    </div>
    <div className="feature-cards">
      <div className="card">
        <div className="info">
          <i className='bx bxs-devices'></i>
          <h1>Responsive Design</h1>
          <p>
            Explore a diverse collection of my creative endeavors, including web design, JavaScript, and mini projects. Each project showcases my creativity, attention to detail, and passion for delivering visually stunning and engaging experiences.
          </p>
        </div>
      </div>
      {/* Add other feature cards */}
    </div>
  </section>
);

const ProjectsSection = () => (
  <section id="projects">
    <div className="header">
      <h1>Projects</h1>
      <Link to="#">View All Projects</Link>
    </div>
    <div className="project-cards">
      {/* Add project cards */}
    </div>
  </section>
);

const Footer = () => (
  <footer>
    <div className="social-links">
      <a href="#"><i className='fa-brands fa-github'></i></a>
      <a href="#"><i className='fa-brands fa-discord'></i></a>
      <a href="#"><i className='fa-brands fa-linkedin-in'></i></a>
      {/* Add other social links */}
    </div>
    <p>&copy; 2024 My Portfolio</p>
  </footer>
);

const App = () => {
  const [currentSection, setCurrentSection] = useState('home');

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className="whole-container">
      <Header handleSectionChange={handleSectionChange} />
      {currentSection === 'home' && <Home />}
      {currentSection === 'about' && <AboutSection />}
      {currentSection === 'features' && <FeaturesSection />}
      {currentSection === 'projects' && <ProjectsSection />}
      {/* Add other sections */}
      <Footer />
    </div>
  );
};

export default App;

