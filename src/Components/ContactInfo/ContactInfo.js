import React from 'react';
import './ContactInfo.css';

function ContactInfo({ handleShowProjects }) {
  return (
    <div className="contact-info">
      <div className="contact-buttons">
        <a href="tel:+9723229968">
          <button>Phone</button>
        </a>
        <a href="mailto:reesegreen2014@me.com">
          <button>Email</button>
        </a>
      </div>
      <div className="projects-button">
        <button onClick={handleShowProjects}>Projects</button> 
      </div>
    </div>
  );
}

export default ContactInfo;
