import React from "react";
import "./about.css";

export default function About({ openLogin }) {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-left">
          <h2>About Me</h2>
          <p>
            Hello, I’m <strong>Bayu Sukra</strong> I am a Front-End Developer and a Computer Systems student, focused on creating modern and responsive web interfaces. I have a strong interest in UI/UX design, web animations, and crafting user experiences that are fast, clean, and interactive. With an IT background, I am accustomed to blending programming logic with creativity to deliver web designs that are both functional and aesthetically pleasing. I continuously learn, explore new technologies, and am committed to enhancing my skills in the field of web development
          </p>
        </div>

     

        <div className="about-right">
          {/* Tombol Download CV */}
          <a
            href="https://drive.google.com/file/d/1q3_VU4uG0qVqtkwTnMNSiGzX9wsZVism/view?usp=drivesdk"
            className="about-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>

          {/* TOMBOL ALBUM → BUKA LOGIN */}
          <button className="about-btn" onClick={openLogin}>
            Album
          </button>

          {/* Tombol Cek Inbox */}
          <a href="/hasil.html" className="about-btn">
            Cek Inbox
          </a>
        </div>
      </div>
    </section>
  );
}
