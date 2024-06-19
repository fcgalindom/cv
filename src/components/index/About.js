import React from "react";
import AboutMe from "./AboutMe";
import Counts from "./Counts";
import Skills from "./Skills";
import Interests from "./Interest";
import Testimonials from "./Testimonial";

const About = () => {
  return (
    <div
      className="about"
      style={{ backgroundColor: " rgba(0, 0, 0, 0.8)", zIndex: 2 }}
    >
      <AboutMe />
      <Counts />_
      <Skills />
       {/*
         <Interests />
      <Testimonials />
      */}
     
    </div>
  );
};

export default About;
