import React, { useState, useEffect } from 'react';
import Navbars from '../components/Navbars';
import About from '../components/About';
import ImageSlider from '../components/ImageSlider';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact'
import './css/Home.css';

const HomePage = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Show scroll-to-top arrow when scrolling down
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <Navbars />
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <ImageSlider />
      </div>
      <div id="certificates">
        <Education />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div className="Contact">
       <Contact/>
      </div>

      {/* Social Icons */}
      <div className="home-sci">
        <a
          href="https://www.linkedin.com/in/suresh-e-114281291/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my LinkedIn profile"
        >
          <i
                  className="fab fa-linkedin text-success"
                  style={{ fontSize: "40px" }}
                ></i>
        </a>
        <a
          href="https://github.com/Suresh9047?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my GitHub profile"
        >
          <i className="fab fa-github text-success" style={{ fontSize: "40px" }}></i> {/* GitHub icon */}
        </a>
      </div>

      {/* Scroll-to-Top Arrow */}
      {showScroll && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <i className="fas fa-arrow-up"></i>
        </div>
      )}
    </div>
  );
};

export default HomePage;
