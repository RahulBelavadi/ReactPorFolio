import React from 'react'
import globe from '../Videos/glob.mp4'
import {motion} from 'motion/react'

function About() {
 return (
 <>
 <motion.h1

   initial={{ scale: 0, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
  viewport={{ once: true, amount: 0.6 }}


 id='AboutMe'>About Me</motion.h1>
    <div className="grid-container">
      
      <motion.div

         initial={{ scale: 0, opacity: 0 }}
         whileInView={{ scale: 1, opacity: 1, }}
          transition={{ duration: 0.10, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.6 }}

         className="grid-item item1">
        <img id='rahul' src="/Rahul.jpg" alt="" />
       <h2>Hi there, I'm Rahul 👋</h2>
<p>
  I'm a passionate Full Stack Developer who loves turning ideas into real-world, responsive web applications.
</p>
<p>
  Skilled in the MERN stack (MongoDB, Express.js, React.js, Node.js), I focus on building scalable, efficient, and user-friendly solutions.
</p>


      </motion.div>

      <motion.div 
          initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.6 }}
      className="grid-item item2">
    <h2 id="tech-heading">🚀 Tech Stack</h2>

<p id="tech-intro">
  I build scalable web apps using the MERN stack — MongoDB, Express.js, React.js, and Node.js — along with tools like Git, GitHub, Tailwind CSS, Redux, and Postman.
</p>

<p id="tech-summary">
  From clean UI to robust APIs, I turn ideas into fast, full-featured products.
</p>



        {/* Replace icons below with actual icons if needed */}
        <div className="tech-icons">🔧 ⚛️ 🖥️ 📦 🔣</div>
      </motion.div>

      <motion.div
      
      initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.6 }}
      
      className="grid-item item3">
  
        <h1>Trainings & Certifications</h1>
      <ul>
  <li>Build Your Own Capstone Project <span class="aqua">(Internshala, May–Jun 2025)</span></li>
  <li>Mastering Node.js, Express.js And MongoDB <span class="aqua">(Internshala, Apr–May 2025)</span></li>
  <li>Building Modern Web Applications Using React <span class="aqua">(Internshala, Mar–Apr 2025)</span></li>
  <li>Cracking The Code: DSA In JavaScript I & II <span class="aqua">(Internshala, Jan–Mar 2025)</span></li>
  <li>Developing Interactive Websites With JavaScript <span class="aqua">(Internshala, Dec 2024–Jan 2025)</span></li>
  <li>Git And GitHub: Mastering Version Control <span class="aqua">(Internshala, Dec 2024)</span></li>
  <li>Full Stack Development: Let's Begin <span class="aqua">(Internshala, Dec 2024)</span></li>
  <li>Designing Web Pages Using HTML And CSS <span class="aqua">(Internshala, Dec 2024)</span></li>
  {/* <li>C For Everyone: Programming Fundamentals <span class="aqua">(UCSC Coursera, Jan–Feb 2024)</span></li> */}
</ul>


      </motion.div>

      <motion.div className="grid-item item4"
      
      initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.6 }}
      
      >
        <div className="earth-image">
          <video id='Earth-vid' loop autoPlay playsInline muted src={globe}></video>
        </div>
          <h1>My Developer Journey</h1>
        <div className="class">
        
       <ul>
        <li>
          <h3>2021 – Started Learning Web Development</h3>
          <p>Began self-learning through YouTube tutorials and built my first portfolio using HTML, CSS, and JavaScript.</p>
        </li>
        <li>
          <h3>2025 – Built Full Stack Projects</h3>
          <p>Developed and deployed MERN stack applications on Netlify and Vercel with real-world features.</p>
        </li>
        </ul>


        
        </div>
        

        <button className="contact-btn">Contact Me</button>
      </motion.div>
    </div>
    </>
  );
}

export default About