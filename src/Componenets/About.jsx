import React from 'react'
import globe from '../Videos/glob.mp4'
import {motion} from 'motion/react'

function About() {
 return (<>
 <motion.h1

   initial={{ scale: 0, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
  viewport={{ once: true, amount: 0.6 }}


 id='AboutMe'>About Me</motion.h1>
    <div className="grid-container">
      
      <motion.div

         initial={{ scale: 0, opacity: 0 }}
         whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.10, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.6 }}

         className="grid-item item1">
        <img id='rahul' src="/Rahul.jpg" alt="" />
        <h2>Hi there, I'm Rahul</h2>
        <p>
          I'm a Full Stack Developer
        </p>
      </motion.div>

      <motion.div 
          initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.6 }}
      className="grid-item item2">
        <h2>Tech Stack</h2>
        <p>
          I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications, including HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, Git, GitHub, Tailwind CSS, Redux, Postman, and REST APIs..
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
  
        <h2>My Passion for Coding</h2>
        <p>
          I love solving problems and building things through code. Programming isn’t just my profession—it’s my passion.
          I enjoy exploring new technologies and enhancing my skills.
        </p>
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
        <h3>I'm very flexible with time zone communications & locations</h3>
        <p>I'm based in Italy, Bari and open to remote work worldwide.</p>
        <button className="contact-btn">Contact Me</button>
      </motion.div>
    </div>
    </>
  );
}

export default About