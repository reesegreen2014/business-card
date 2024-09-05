import React, { useState } from 'react';
import './CardWithProjects.css';
import About from '../About/About';
import Projects from '../Projects/Projects';
import ContactInfo from '../ContactInfo/ContactInfo';

function CardWithProjects() {
  const [projectsVisible, setProjectsVisible] = useState(false); 

  const handleShowProjects = () => {
    setProjectsVisible(!projectsVisible);
  };

  return (
    <div className="card">
      <div className="card-content">
        <ContactInfo handleShowProjects={handleShowProjects} /> 
        <About />
      </div>
      <div className={`projects-panel ${projectsVisible ? 'visible' : ''}`}>
        <Projects />
        <button onClick={handleShowProjects} className="back-button">Back</button> 
      </div>
    </div>
  );
}

export default CardWithProjects;
