import React from "react";
import home1 from "../img/home1.png";
//import styles
import { About, Description, Image, Hide } from "../styles";
//animations
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animations";
import { Link } from "react-router-dom";
//components
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>Meet to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact for any web or mobile application ideas that you may have. I'm
          a MERN professional with amazing skills.
        </motion.p>
        <Link to="/contact">
          <motion.button variants={fade}>Contact Us</motion.button>
        </Link>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="About Us" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
