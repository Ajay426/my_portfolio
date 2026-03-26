import React from "react";
import "./Skills.css";
import {motion} from "motion/react"

import html from '../IMAGES/html.png';
import css from '../IMAGES/css.png';
import js from '../IMAGES/javascript.png';
import react from '../IMAGES/react.png';
import node from '../IMAGES/node.png';
import express from "../IMAGES/express.png";
import postgres from '../IMAGES/postgres.png';
import git from '../IMAGES/git.png';

export default function Skills() {
  const skills = [
    { name: "HTML", img: html },
    { name: "CSS", img: css },
    { name: "JavaScript", img: js },
    { name: "React", img: react },
    { name: "Node.js", img: node },
    { name: "Express", img: express },
    { name: "PostgreSQL", img: postgres },
    { name: "Git", img: git },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}s
      exit={{ opacity: 0, x: -80 }}
      transition={{ duration: 0.4 }}
      className="skills">
      <h2 className="skills-title">My Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-img">
              <img src={skill.img} alt={skill.name} />
            </div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}