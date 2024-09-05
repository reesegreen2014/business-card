import React from 'react'
import LinkedInLogo from '../../Images/LinkedInLogo.png';
import GitHubIcon from '../../Images/GitHubIcon.png';
import './Footer.css'

function Footer() {
  return (
    <main className='footer'>
      <div className="social-media-link">
        <a href="https://www.linkedin.com/in/reese-green/" target="_blank" rel="noopener noreferrer">
          <img src={LinkedInLogo} alt="LinkedIn logo" />
        </a>
        <a href="https://github.com/reesegreen2014" target="_blank" rel="noopener noreferrer">
          <img src={GitHubIcon} alt="Github logo" />
        </a>
      </div>
    </main>
  );
}
export default Footer
