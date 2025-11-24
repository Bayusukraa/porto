// src/ProjectPage.jsx
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./project.css";


const projectList = [
  {
    title: "Automatic Parking Gate",
    desc: "Arduino-based automatic parking barrier with ultrasonic detection, servo automation, and real-time LCD display.",
    tech: ["Arduino", "C++"],
    img: "micro.jpg",
    demo: "#",
    repo: "#",
  },
  {
    title: "TOS App UI Design",
    desc: "Responsive ticket booking app interface designed in Figma with minimal modern UI/UX and smooth flow.",
    tech: ["Figma", "UI/UX"],
    img: "tos.png",
    demo: "#",
    repo: "#",
  },
  {
    title: "Portfolio Website",
    desc: "Modern dark-themed personal portfolio built using React with smooth animated transitions.",
    tech: ["React", "CSS", "JavaScript"],
    img: "porto.png",
    demo: "#",
    repo: "#",
  },
  {
    title: "Web Ekstrakurikuler Esport",
    desc: "IoT lamp controlled via NodeMCU using a mobile app with real-time status monitoring.",
    tech: ["IoT", "NodeMCU"],
    img: "ESP.png",
    demo: "#",
    repo: "#",
  },
  {
    title: "Website Undangan Online",
    desc: "Designed homepage for school website with clean layout, hero section, and responsive structure.",
    tech: ["Figma", "Design"],
    img: "kawin.png",
    demo: "#",
    repo: "#",
  },
  {
    title: "Perancangan sistem akademik",
    desc: "This System Design Project aims to create a software solution capable of effectively addressing user needs. The design process includes requirements analysis, identification of key features, development of workflow models (such as flowcharts, DFDs, or UML diagrams), construction of the database structure, and creation of UI/UX prototypes to visualize the system as a whole.The final outcome is a complete and well-structured system design that can be used as a solid foundation for application development.",
    tech: ["Pdf", "word"],
    img: "aps.jpg",
    demo: "#",
    repo: "#",
  },
];

export default function ProjectPage() {
  return (
    <div className="project-page">
      <h1 className="proj-title">My Projects</h1>
      <p className="proj-subtitle">Collection of featured works and concepts</p>

      <div className="project-grid">
        {projectList.map((p, i) => (
          <div className="project-card" key={i}>
            <div className="project-image">
              <img src={p.img} alt={p.title} />
            </div>

            <div className="project-body">
              <h2>{p.title}</h2>
              <p>{p.desc}</p>

              <div className="project-tech">
                {p.tech.map((t, idx) => (
                  <span key={idx}>{t}</span>
                ))}
              </div>

              <div className="project-actions">
                <a href={p.demo} target="_blank">
                  Demo <FaExternalLinkAlt />
                </a>
                <a href={p.repo} target="_blank">Repository</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

