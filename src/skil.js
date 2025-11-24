import React, { useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { motion, AnimatePresence } from "framer-motion";
import "./skil.css";

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedType, setSelectedType] = useState("");

  const softSkills = [
  {
    skill: "Communication",
    level: 96,
    desc: "Kemampuan menyampaikan ide dengan jelas, sopan, dan efektif baik secara lisan maupun tulisan."
  },
  {
    skill: "Teamwork",
    level: 94,
    desc: "Mampu bekerja sama secara harmonis dengan tim untuk mencapai tujuan bersama."
  },
  {
    skill: "Problem Solving",
    level: 93,
    desc: "Menghadapi tantangan dengan analisis logis dan solusi kreatif."
  },
  {
    skill: "Creativity",
    level: 90,
    desc: "Menciptakan ide-ide baru yang inovatif dalam pengembangan proyek."
  },
  {
    skill: "Leadership",
    level: 93,
    desc: "Mengarahkan dan memberi motivasi kepada tim agar produktif dan kompak."
  },
  {
    skill: "Adaptability",
    level: 90,
    desc: "Mampu beradaptasi dengan cepat terhadap perubahan situasi dan teknologi baru."
  },
  {
    skill: "Time Management",
    level: 94,
    desc: "Mengatur waktu dan prioritas pekerjaan secara efisien untuk mencapai target."
  }
];

const hardSkills = [
  {
    skill: "React.js",
    level: 92,
    desc: "Membangun antarmuka pengguna yang dinamis dengan komponen modern menggunakan React."
  },
  {
    skill: "Figma",
    level: 92,
    desc: "Merancang desain UI/UX yang intuitif dan profesional."
  },
  {
    skill: "Bootstrap",
    level: 94,
    desc: "Membuat website yang cepat responsif dengan framework CSS modern."
  },
  {
    skill: "HTML/CSS",
    level: 98,
    desc: "Fondasi pembuatan tampilan web yang solid, rapi, dan konsisten."
  },
  {
    skill: "Python",
    level: 82,
    desc: "Menulis program dan automasi dengan bahasa yang sederhana dan efisien."
  },
  {
    skill: "JavaScript",
    level: 91,
    desc: "Bahasa utama untuk membangun logika interaktif pada website dan aplikasi web modern."
  },
  {
    skill: "Git & GitHub",
    level: 90,
    desc: "Mengelola versi kode dengan baik menggunakan sistem kontrol versi yang efisien."
  }
];


  const handleClick = (e, type) => {
    const targetSkill = (type === "soft" ? softSkills : hardSkills).find(
      (d) => d.skill === e.activeLabel
    );
    if (targetSkill) {
      setSelectedSkill(targetSkill);
      setSelectedType(type);
    }
  };

  const handleClose = () => {
    setSelectedSkill(null);
    setSelectedType("");
  };

  return (
    <section id="skills" className="pf-section pf-skill-chart">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="chart-title"
      >
        My Skills Overview
      </motion.h2>

      <p className="pf-section-lead">
        Click on any area on the chart to view skill details.
      </p>
      <br></br>

      <div className="chart-wrapper">
        {/* SOFT SKILLS */}
        <div className="chart-box">
          <h3>Soft Skills</h3>
          <ResponsiveContainer width="100%" height={350}>
            <RadarChart
              data={softSkills}
              onClick={(e) => handleClick(e, "soft")}
              outerRadius="80%"
            >
              <PolarGrid stroke="#333" />
              <PolarAngleAxis dataKey="skill" tick={{ fill: "#aaa", fontSize: 12 }} />
              <Radar
                name="Soft Skills"
                dataKey="level"
                stroke="#00baff"
                fill="#00baff"
                fillOpacity={0.5}
              />
              <Tooltip
                contentStyle={{
                  background: "#1a1c24",
                  border: "none",
                  borderRadius: "8px",
                  color: "#fff",
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* HARD SKILLS */}
        <div className="chart-box">
          <h3>Hard Skills</h3>
          <ResponsiveContainer width="100%" height={350}>
            <RadarChart
              data={hardSkills}
              onClick={(e) => handleClick(e, "hard")}
              outerRadius="80%"
            >
              <PolarGrid stroke="#333" />
              <PolarAngleAxis dataKey="skill" tick={{ fill: "#aaa", fontSize: 12 }} />
              <Radar
                name="Hard Skills"
                dataKey="level"
                stroke="#ff6f00"
                fill="#ff6f00"
                fillOpacity={0.5}
              />
              <Tooltip
                contentStyle={{
                  background: "#1a1c24",
                  border: "none",
                  borderRadius: "8px",
                  color: "#fff",
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* DETAIL CARD */}
<AnimatePresence>
  {selectedSkill && (
    <motion.div
      key={selectedSkill.skill}
      className={`chart-desc ${selectedType}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
    >
      {/* Tombol X di pojok kanan */}
      <button className="close-icon" onClick={() => setSelectedSkill(null)}>
        ✕
      </button>

      <h3>{selectedSkill.skill}</h3>
      <p>{selectedSkill.desc}</p>

      <div className="progress-wrapper">
        <div className="progress-bar">
          <motion.div
            className="progress-fill"
            initial={{ width: 0 }}
            animate={{ width: `${selectedSkill.level}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
        <span>{selectedSkill.level}%</span>
      </div>
    </motion.div>
  )}
</AnimatePresence>

    </section>
  );
}
