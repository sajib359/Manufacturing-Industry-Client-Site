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
       
        <div>
        <h2 className="text-center text-3xl text-primary my-10 bg-black">My Three Project</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-2">
            <a href="https://phone-db.netlify.app/" target="_blank" rel="noopener noreferrer"><div className="bg-white px-7 py-4 text-center w-full rounded text-5xl font-bold shadow-lg">Computer parts manufacturer</div></a>
            <a href="https://refrigerator-mart.web.app/" target="_blank" rel="noopener noreferrer"><div className="bg-white px-7 py-4 text-center w-full rounded text-5xl font-bold shadow-lg">Refrigerator Mart</div></a>
            <a href="https://gadget-review-ph.netlify.app/" target="_blank" rel="noopener noreferrer"><div className="bg-white px-7 py-4 text-center w-full rounded text-5xl font-bold shadow-lg">GADGET REVIEWER</div></a>
        </div>
      </div>
      <Footer></Footer>
      </div>
    
  );
};

export default Portfolio;
