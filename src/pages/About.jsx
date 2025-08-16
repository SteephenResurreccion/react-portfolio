import React from "react";
import Dogg from "../Dogg.png";

export default function About() {
  return (
    <section className="py-5 bg-autumn-soft section-fill">
      <div className="container" style={{ maxWidth: 980 }}>
        {/* Heading */}
        <header className="mb-5 text-center">
          <h1 className="fw-bold text-autumn-900 mb-2">About Me</h1>
          <p className="lead text-autumn-700">
            Hi! I’m <strong>Steephen L. Resurreccion</strong> — a web-developer who enjoys
            creating websites with neat ui, and ux designs.
          </p>
        </header>

        {/* Intro */}
        <div className="row align-items-center g-4 mb-5">
          <div className="col-md-4 d-flex justify-content-center">
            <img src={Dogg} 
            alt="Steephen avatar" 
            className="about-avatar" 
            style={{ width: "100%", height: "auto" }}/>
          </div>
          <div className="col-md-8">
            <h3 className="h5 text-autumn-900 mb-3">What do I build?</h3>
            <p className="mb-3">
              I build frontend UIs with React and care a lot about performance,
              accessibility, and clean DX. I like shipping small improvements
              quickly, measuring impact, and iterating.
            </p>
            <ul className="about-bullets">
              <li>Comfortable with React, React Router, Bootstrap</li>
              <li>Practical UI/UX: readable typography, strong contrast, motion sensibly</li>
              <li>Enjoys automation, component systems, and tidy repos</li>
            </ul>
          </div>
        </div>

        {/* Skills & Tools */}
<div className="row g-4 mb-5">
  <div className="col-md-6">
    <div className="card shadow-sm border-0">
      <div className="card-body">
        <h4 className="h6 text-autumn-900 mb-3">Skills</h4>
        <div className="about-tags d-flex flex-wrap gap-3 align-items-center">
          {[
            { name: "React", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
            { name: "JavaScript", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
            { name: "HTML5", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
            { name: "CSS3", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
            { name: "Bootstrap", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg" },
          ].map(skill => (
            <img
              key={skill.name}
              src={skill.logo}
              alt={skill.name}
              title={skill.name}
              style={{ width: 40, height: 40 }}
            />
          ))}
        </div>
      </div>
    </div>
  </div>

  <div className="col-md-6">
    <div className="card shadow-sm border-0">
      <div className="card-body">
        <h4 className="h6 text-autumn-900 mb-3">Tools</h4>
        <div className="about-tags d-flex flex-wrap gap-3 align-items-center">
          {[
            { name: "Git & GitHub", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" },
            { name: "VS Code", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" },
            { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
            { name: "Figma", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg" },
          ].map(tool => (
            <img
              key={tool.name}
              src={tool.logo}
              alt={tool.name}
              title={tool.name}
              style={{ width: 40, height: 40 }}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
</div>


        {/* Timeline */}
        <div className="card shadow-sm border-0 mb-5">
          <div className="card-body">
            <h4 className="h6 text-autumn-900 mb-3">Highlights</h4>
            <ul className="timeline">
              <li>
                <span className="timeline-dot" />
                <div>
                  <strong>Portfolio redesign</strong> — migrated a static site to React with routing, animated transitions, and a custom image modal.
                </div>
              </li>
              <li>
                <span className="timeline-dot" />
                <div>
                  <strong>IoT CCTV project</strong> — boundary detection alerts powered by YOLOv5n + OpenCV.
                </div>
              </li>
              <li>
                <span className="timeline-dot" />
                <div>
                  <strong>Song recommender (WiP)</strong> — explored Spotipy + simple fuzzy matching for fun.
                </div>
              </li>
              <li>
                <span className="timeline-dot" />
                <div>
                  <strong>A simple script hub (WiP)</strong> — developed a simple ui which compiled a massive library of executable scripts.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="/contact" className="btn btn-autumn btn-lg me-3">Contact Me</a>
          <a
            href="#"
            className="btn btn-outline-secondary btn-lg"
            onClick={(e) => { e.preventDefault(); alert("Resume download coming soon!"); }}
          >
            Download Résumé
          </a>
        </div>
      </div>
    </section>
  );
}
