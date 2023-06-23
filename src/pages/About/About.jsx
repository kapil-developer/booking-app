import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About K library</h2>
            <p className='fs-17'>I'm Kapil GV pursing Mechanical Engineering in KCT college in Coimbatore, TN. Apart from Mechanical Engineering skills, I also pocess technical skills which I'm showcasing here.</p>
            <p className='fs-17'>I have designed this website using React JS and jsx as templating language</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
