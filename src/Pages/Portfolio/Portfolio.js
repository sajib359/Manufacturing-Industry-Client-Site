import React from "react";
import Footer from "../Shared/Footer/Footer";
import About from "./About";
import Experience from "./Experience";
import Skill from "./Skill";

const Portfolio = () => {
  return (
    <div>
      <About></About>
        <Skill></Skill>
        <Experience></Experience> 
        <Footer></Footer>
      </div>
    
  );
};

export default Portfolio;
