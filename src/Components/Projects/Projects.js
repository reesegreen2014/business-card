import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="projects">
      <h3>My Projects</h3>
      <ul>
        <li>
          <h4>Dog Info Hub</h4>
          <ul>
            <li>
              <a href="https://github.com/reesegreen2014/dog-info-hub" target="_blank" rel="noopener noreferrer">
                GitHub Repo
              </a>
            </li>
            <li>
              <a href="https://dog-info-hub.vercel.app/" target="_blank" rel="noopener noreferrer">
                Deployed Site
              </a>
            </li>
          </ul>
        </li>
        <li>
          <h4>Rancid Tomatillos</h4>
          <ul>
            <li>
              <a href="https://github.com/reesegreen2014/rancid-tomatillos2" target="_blank" rel="noopener noreferrer">
                GitHub Repo
              </a>
            </li>
            <li>
              <a href="https://rancid-tomatillos-ten-peach.vercel.app/" target="_blank" rel="noopener noreferrer">
                Deployed Site
              </a>
            </li>
          </ul>
        </li>
        <li>
          <h4>TaskPro</h4>
          <ul>
            <li>
              <a href="https://github.com/reesegreen2014/TaskPro" target="_blank" rel="noopener noreferrer">
                GitHub Repo
              </a>
            </li>
            <li>
              <a href="https://task-pro-stretch.vercel.app/" target="_blank" rel="noopener noreferrer">
                Deployed Site
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Projects;
