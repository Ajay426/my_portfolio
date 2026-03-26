import { Typography, Box } from "@mui/material";
import { useState } from "react";
import "./Projects.css";
import { motion } from "framer-motion";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

import calculator from "../IMAGES/calculator.jpg";
import menu from "../IMAGES/menu.jpg";
import portfolio from "../IMAGES/portfolio.jpg";

// ---------------- DATA ----------------
const projectsData = [
  {
    id: 1,
    title: "Dynamic Menu",
    desc: "This is a full-stack dynamic menu card application developed to help restaurant owners manage and update their menu in real time. The system allows admins to securely log in and modify menu items, with changes instantly reflected on the user interface without requiring a page refresh. It was built using React for the frontend, Node.js and Express for the backend, and PostgreSQL for database management. This solution addresses the problem of static menus by providing a flexible, real-time update mechanism.",
    img: menu,
  },
  {
    id: 2,
    title: "Portfolio Website",
    desc: "This is a personal portfolio website developed using React to showcase my projects, skills, and experience. The application features a responsive design with smooth animations and includes a contact functionality for direct communication.",
    img: portfolio,
  },
  {
    id: 3,
    title: "EMI Calculator",
    desc: "A multi-functional calculator built using HTML, CSS, and JavaScript. It includes EMI, SIP, and standard calculator features along with a live clock for real-time interaction.",
    img: calculator,
  },
];

// ---------------- COMPONENT ----------------
export default function Projects() {
  const [expandedId, setExpandedId] = useState(null);

  const handleToggle = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <motion.div
      className="containerP"
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -80 }}
      transition={{ duration: 0.4 }}
    >
      {/* Title */}
      <Box className="projects">
        <Typography sx={{ fontFamily: "cursive" }}>
          My Development <span>PROJECTS</span>
        </Typography>
      </Box>

      {/* Cards */}
      <Box className="cardContainer" sx={{ marginBottom: "30px" }}>
        {projectsData.map((project) => {
          const isExpanded = expandedId === project.id;

          return (
            <motion.div
              key={project.id}
             
              whileHover={{ scale: 1.08, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={project.img}
                  title={project.title}
                />

                <CardContent>
                  <Typography gutterBottom variant="h5">
                    {project.title}
                  </Typography>

                  <motion.div layout>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {isExpanded
                        ? project.desc
                        : project.desc.substring(0, 100) + "..."}
                    </Typography>
                  </motion.div>
                </CardContent>

                <CardActions>
                  <Button size="small">Demo</Button>

                  <Button size="small" onClick={() => handleToggle(project.id)}>
                    {isExpanded ? "Show Less" : "Learn More"}
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          );
        })}
      </Box>
    </motion.div>
  );
}