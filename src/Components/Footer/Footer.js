import React from 'react'
import LinkedInLogo from '../../Images/LinkedInLogo.png';
import GitHubIcon from '../../Images/GitHubIcon.png';
import './Footer.css'

function Footer() {
  return (
    <main className='footer'>
    <div className="social-media-link">
      <img src={LinkedInLogo} alt="LinkedIn logo" />
      <img src={GitHubIcon} alt="Github Logo" />
    </div>
    </main>
  )
}

export default Footer
