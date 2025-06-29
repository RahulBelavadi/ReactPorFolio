import React from 'react';
import {motion} from 'motion/react'
import { CiShare1 } from "react-icons/ci";

const projects = ["/youtube.png", "/shoppyfy.png","/test.webp"];


function MyProjects() {


  return (
    <>
      <motion.h1 id='MyProects'
      
      initial={{ scale: 0, opacity: 0 }}
         whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.6 }}

      >My Projects</motion.h1>
      <div className="Projects">
        {projects.map((val, ind) => {
          return (
            <React.Fragment key={ind}>
              <motion.div className="Left-project"
              
              initial={{ scale: 0, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.6 }}
              >
                <img id='Card' src={val} alt="" />
              </motion.div>

              <motion.div className="Right-info"
              
               initial={{ scale: 0, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.6 }}
              
              >
                <div className="Card-info">
                  <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima autem ab facere id et pariatur vitae corporis minus ratione accusamus.</h2>
                  <button><CiShare1 className='share'/>Website</button>
                </div>
              </motion.div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}

export default MyProjects;
