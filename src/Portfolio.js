// src/Portfolio.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import Project from "./Project";
import Skil from "./skil";
import Aboutme from "./aboutme";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import "./index.css";

export default function Portfolio({ openLogin }) {
  const firebaseConfig = {
    apiKey: "AIzaSyDEzX7K37nFDrUI1F0FE3rCIlptwUK-pJ0",
    authDomain: "website-pesan.firebaseapp.com",
    databaseURL: "https://website-pesan-default-rtdb.firebaseio.com/",
    projectId: "website-pesan",
    storageBucket: "website-pesan.firebasestorage.app",
    messagingSenderId: "520572238576",
    appId: "1:520572238576:web:721f2e6e207b605f376035",
    measurementId: "G-QKPQGR1EBB",
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  function TypeWriter({ text, typingSpeed = 200, deletingSpeed = 200, pause = 1000 }) {
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
      let timer;

      if (!isDeleting && displayedText.length < text.length) {
        timer = setTimeout(() => {
          setDisplayedText(text.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else if (!isDeleting && displayedText.length === text.length) {
        timer = setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(text.slice(0, displayedText.length - 1));
        }, deletingSpeed);
      } else if (isDeleting && displayedText.length === 0) {
        timer = setTimeout(() => setIsDeleting(false), pause);
      }

      return () => clearTimeout(timer);
    }, [displayedText, isDeleting, text, typingSpeed, deletingSpeed, pause]);

    return (
      <span
        className="pf-gradient"
        style={{
          display: "inline-block",
          whiteSpace: "nowrap",
          borderRight: "2px solid #fff",
        }}
      >
        {displayedText}
      </span>
    );
  }

  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  // ⬇ POPUP SUCCESS STATE
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) setShowScroll(true);
      else setShowScroll(false);
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!contact.name || !contact.email || !contact.message) {
      return alert("Tolong lengkapi form.");
    }

    let daftar = JSON.parse(localStorage.getItem("hasilForms")) || [];
    daftar.push(contact);

    if (daftar.length > 5) {
      daftar.shift();
    }

    localStorage.setItem("hasilForms", JSON.stringify(daftar));

    // ⬇ TAMPILKAN POPUP BERHASIL
    setShowPopup(true);

    // popup hilang otomatis 3 detik
    setTimeout(() => setShowPopup(false), 3000);

    // reset input
    setContact({ name: "", email: "", message: "" });
  };

  return (
    <div className="pf-root">
      {/* NAV */}
      <motion.header
        className="pf-nav"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="pf-brand">
          bayusukra<span>Porto</span>
        </div>

        <button
          className="pf-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`pf-links ${menuOpen ? "active" : ""}`}>
          <a href="#aboutme" onClick={() => setMenuOpen(false)}>Aboutme</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </motion.header>

      {/* HERO */}
      <section className="pf-hero" id="home">
        <motion.div
          className="pf-hero-left"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <div className="pf-eyebrow">
            Frontend Developer • Gamer • UI/UX Designer
          </div>

          <h1>
            Hi, I'm <TypeWriter text="Bayu Sukra" speed={150} />
          </h1>

          <p className="pf-lead">
            I design and build simple yet modern web experiences, focusing on performance, accesbility, and smooth user interface.
          </p>

          <div className="pf-cta">
            <a className="btn-primary" href="#projects">View Projects</a>
            <a className="btn-outline" href="#contact">Contact Me</a>
          </div>

          <div className="pf-socials">
            <a href="https://github.com/Bayusukraa"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/bayu-sukra-0a6645353a"><FaLinkedin /></a>
            <a href="https://www.instagram.com/bayuskraa"><FaInstagram /></a>
            <a href="https://wa.me/081998462528"><FaWhatsapp /></a>
          </div>
        </motion.div>

        <motion.div
          className="pf-hero-right"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <div className="pf-avatar-wrap">
            <img className="pf-avatar" src="/hy.jpg" alt="bayusukra" />
            <div className="pf-avatar-glow" />
          </div>

          <div className="pf-skills">
            {["HTML", "CSS", "JavaScript", "React", "Figma", "GitHub"].map((skill, i) => (
              <motion.div
                className="pf-skill-card"
                key={i}
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ABOUT ME */}
      <section id="aboutme"><Aboutme openLogin={openLogin} /></section>
      <br /><br />

      {/* SKILLS */}
      <section id="skills"><Skil /></section>
      <br /><br />

      {/* PROJECTS */}
      <section id="projects"><Project /></section>
      <br /><br />

      {/* CONTACT */}
      <section id="contact" className="pf-section pf-contact-modern">
        <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          Get in Touch
        </motion.h2>

        <motion.p className="pf-section-lead">
          Have a project in mind or want to collaborate?
        </motion.p>

        <div className="pf-contact-wrapper">
          <motion.form
            className="pf-contact-card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="pf-input-group">
              <label>Name</label>
              <input name="name" value={contact.name} onChange={handleChange} />
            </div>

            <div className="pf-input-group">
              <label>Email</label>
              <input name="email" value={contact.email} onChange={handleChange} />
            </div>

            <div className="pf-input-group">
              <label>Message</label>
              <textarea
                name="message"
                rows="5"
                value={contact.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn-modern">Send Message</button>
          </motion.form>

          <motion.div
            className="pf-contact-info-modern"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3>Contact Info</h3>
            <p>Let's connect 🚀</p>

            <div className="pf-info-item">
              <FaEnvelope />{" "}
              <a href="mailto:bayusukra45@email.com">
                bayusukra45@email.com
              </a>
            </div>

            <div className="pf-info-item">
              <FaWhatsapp />{" "}
              <a href="https://wa.me/081998462528" target="_blank" rel="noreferrer">
                WhatsApp Me
              </a>
            </div>

            <div className="pf-info-socials">
              <a href="https://github.com/Bayusukraa"><FaGithub /> GitHub</a>
              <a href="https://www.linkedin.com/in/bayu-sukra-0a6645353a"><FaLinkedin /> LinkedIn</a>
              <a href="https://www.instagram.com/bayuskraa"><FaInstagram /> Instagram</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pf-footer">
        <small>© {new Date().getFullYear()} bayuskraa</small>
      </footer>

      {/* SCROLL TO TOP */}
      {showScroll && (
        <button onClick={scrollToTop} className="scroll-top-btn">
          ↑
        </button>
      )}

      {/* POPUP SUCCESS */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            padding: "15px 20px",
            background: "#00c853",
            color: "white",
            borderRadius: "10px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
            animation: "fadeIn .3s ease",
            zIndex: 9999,
          }}
        >
          ✔ Pesan berhasil terkirim!
        </div>
      )}
    </div>
  );
}
