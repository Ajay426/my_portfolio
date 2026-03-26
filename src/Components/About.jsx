import React from "react";
import "./About.css";
import profile from "../IMAGES/hero_img.png";
import { motion } from "motion/react"
export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -80 }}
      transition={{ duration: 0.4 }}
      className="about">

      {/* floating shapes */}
      <div className="shape shape1"></div>
      <div className="shape shape2"></div>

      <h2 className="about-title">
        About <span>Me</span>
      </h2>

      <div className="about-container">

        {/* LEFT */}
        <div className="about-left">
          <div className="about-img-wrapper">
            <img src={profile} alt="Ajay" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="about-right">

          <h3>AJAY MAHATO</h3>

          <p>
            I'm Ajay, a passionate Full-Stack Developer focused on building
            scalable backend systems and clean, user-friendly interfaces.
            I enjoy solving real-world problems and continuously improving
            my development skills.
          </p>

          {/* SKILLS */}
          <div className="skills">

            <div className="skill">
              <div className="skill-header">
                <span>Frontend</span>
               
              </div>
              <div className="bar">
                <div className="fill frontend"></div>
              </div>
            </div>

            <div className="skill">
              <div className="skill-header">
                <span>Backend</span>
               
              </div>
              <div className="bar">
                <div className="fill backend"></div>
              </div>
            </div>

            <div className="skill">
              <div className="skill-header">
                <span>Database</span>
          
              </div>
              <div className="bar">
                <div className="fill database"></div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </motion.section>
  );
}