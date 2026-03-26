import profile from '../IMAGES/profile.png'
import { Box, Grid, Typography, Button, Link } from "@mui/material";
import '../Components/Home.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { motion } from "motion/react"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from 'react-router-dom'


const MotionButton = motion.create(Button);

export default function Home() {

   // for the hire me button
   const navigate = useNavigate();

   return (
      <>
         <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.4 }}
            className="home">
            <StarBorderIcon className='star' />
            {/* left side */}
            <div className="left">

               <h3>Hi... I'm <span> AJAY :)</span></h3>
               <h4>a <span><Typewriter
                  words={[
                     "Full stack",
                     "Backend",
                     "Web App"
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={120}
                  deleteSpeed={90}
                  delaySpeed={1500}
               />
               </span> developer!</h4>
               <p>Hi, I'm Ajay, a Full-Stack Developer from India.
                  I create high-quality, user-friendly applications and provide efficient and scalable backend systems.</p>

               <Box className="bottons" sx={{
                  mt: 2,
                  display: "flex",
                  justifyContent: {
                     xs: "center",   // mobile
                     sm: "center",   // tablet
                     md: "flex-start" // laptop+
                  },
                  gap: 2
               }}  >
                  <MotionButton
                     whileHover={{ scale: 1.07, y: -2 }}
                     whileTap={{ scale: 0.9, y: 1 }}
                     transition={{ type: "spring", stiffness: 300, damping: 7 }} variant="outlined" sx={{ marginRight: "15px", backgroundColor: "rgb(3,57,108)", color: "rgb(255, 255, 255)" }} onClick={() => navigate("/contact")} >Hire me</MotionButton>
                  <a href='/AjayMahatoResume.pdf' download> <MotionButton
                     whileHover={{ scale: 1.07, y: -2 }}
                     whileTap={{ scale: 0.9, y: 1 }}
                     transition={{ type: "spring", stiffness: 300, damping: 7 }} variant="outlined">Download CV <ArrowDownwardIcon /></MotionButton></a>
               </Box>



            </div>
            {/* right side  */}

            <div className="right">
               <StarBorderIcon />
               <img src={profile} className="profile" />

            </div>
         </motion.div>
      </>
   )
}