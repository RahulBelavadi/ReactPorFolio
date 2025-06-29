import React from 'react';
import {motion} from 'motion/react'

function Skills() {

    const skills = ['/2.png','10.png','11.png','13.png','14.png',,'11.png','13.png','14.png',,'11.png','13.png','14.png']
              

  return (
    <>
    
      <motion.h1 id='My-Skills'
      
         initial={{ scale: 0, opacity: 0 }}
     whileInView={{ scale: 1, opacity: 1 }}
     transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.6 }}

      >My Skills</motion.h1>
      <div className="Skills">
        
        <motion.div className="designer"
        
                initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7,delay:0.3, ease: 'easeOut' }}
viewport={{ once: true, amount: 0.6 }}

        >
          <div className="left-S">
            <h1>Designer</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, consectetur.</p>
          </div>
        </motion.div>

        <motion.div className="center"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7,delay:0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.6 }}
        
        >
          <img src="/brain.png" alt="" />
        </motion.div>

        <motion.div className="right-S"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7,delay:0.4, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.6 }}
        >
          <div className="skilBox">
            <h1>Designer</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, consectetur.</p>
          </div>
        </motion.div>

        <motion.div className="bottom"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4,delay:0.2, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.6 }}
        >

            {
                skills.map((val,ind)=>{
                    return <motion.div 
                    key={ind}
                    animate={{ x: [0, -100, 0] }} 
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    
                    className="translate">
                      <img id='Skills-img'  src={val} alt="" />
                    </motion.div>
                })
            }
        </motion.div>
      </div>

    </>
  );
}

export default Skills;
