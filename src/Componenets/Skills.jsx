import React from 'react';
import { motion } from 'motion/react'
import { IoIosArrowDown } from "react-icons/io";

function Skills() {

  const skills = ['react.png', 'html.png', 'js.png', 'css.png', 'redux.png', 'node.png', 'mongodb.png', 'github.png']




  return (
    <>

      <motion.h1 id='My-Skills'

        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.6 }}

      >My Skills🖥️</motion.h1>
      <div className="Skills">

        <motion.div className="designer"

          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.6 }}

        >
          <div className="left-S">
            <h1>Front-End</h1>

            <label htmlFor="html">Html</label>
            <motion.h5 id='html-star'
            initial={{marginLeft:0}}
            animate={{marginLeft:"90%"}}
            transition={{duration:2,delay:1.5}}

            >90%</motion.h5>
            <div className="main">
              <motion.div className="html"
              initial={{ width: 0 }}
              whileInView={{ width: "90%" }}
              transition={{ duration: 2, delay: 1.5 }}
              viewport={{ once: true, amount: 0.6 }}
            ></motion.div>
            </div>

            
            <label htmlFor="html">CSS</label>
             <motion.h5 id='html-star'
            initial={{marginLeft:0}}
            animate={{marginLeft:"70%"}}
            transition={{duration:2,delay:1.5}}

            >80%</motion.h5>
           <div className="main">
             <motion.div className="css"
              initial={{ width: 0 }}
              whileInView={{ width: "80%" }}
              transition={{ duration: 2, delay: 1.5 }}
              viewport={{ once: true, amount: 0.6 }}
            ></motion.div>
           </div>

            <label htmlFor="html">JS</label>
              <motion.h5 id='html-star'
            initial={{marginLeft:0}}
            animate={{marginLeft:"80%"}}
            transition={{duration:2,delay:1.5}}

            >80%</motion.h5>
            <div className="main">
              <motion.div className="js"
              initial={{ width: 0 }}
              whileInView={{ width: "80%" }}
              transition={{ duration: 2, delay: 1.5 }}
              viewport={{ once: true, amount: 0.6 }}
            ></motion.div>
            </div>


            <label htmlFor="html">React</label>
              <motion.h5 id='html-star'
            initial={{marginLeft:0}}
            animate={{marginLeft:"80%"}}
            transition={{duration:2,delay:1.5}}

            >80%</motion.h5>
           <div className="main">
             <motion.div className="React"
              initial={{ width: 0 }}
              whileInView={{ width: "80%" }}
              transition={{ duration: 2, delay: 1.5 }}
              viewport={{ once: true, amount: 0.6 }}
            ></motion.div>
           </div>

            <label htmlFor="html">Redux</label>
              <motion.h5 id='html-star'
            initial={{marginLeft:0}}
            animate={{marginLeft:"80%"}}
            transition={{duration:2,delay:1.5}}

            >80%</motion.h5>
            <div className="main">
              <motion.div className="Redux"
              initial={{ width: 0 }}
              whileInView={{ width: "80%" }}
              transition={{ duration: 2, delay: 1.5 }}
              viewport={{ once: true, amount: 0.6 }}
            ></motion.div>
            </div>

            <label htmlFor="html">Tailwind </label>
              <motion.h5 id='html-star'
            initial={{marginLeft:0}}
            animate={{marginLeft:"80%"}}
            transition={{duration:2,delay:1.5}}

            >80%</motion.h5>
           <div className="main">
             <motion.div className="Tailwind "
              initial={{ width: 0 }}
              whileInView={{ width: "80%" }}
              transition={{ duration: 2, delay: 1.5 }}
              viewport={{ once: true, amount: 0.6 }}
            ></motion.div>
           </div>




          </div>
        </motion.div>

        <motion.div className="center"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.6 }}

        >
          <img src="/brain.png" alt="" />
        </motion.div>

    <motion.div className="right-S"
  initial={{ scale: 0, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
  viewport={{ once: true, amount: 0.6 }}
>
  <div className="skilBox">
    <h1>Back-End</h1>

    <label htmlFor="Node">Node.js</label>
    <motion.h5 id='html-star'
      initial={{ marginLeft: 0 }}
      animate={{ marginLeft: "80%" }}
      transition={{ duration: 2, delay: 1.6 }}
    >80%</motion.h5>
    <div className="main">
      <motion.div className="Node_js"
        initial={{ width: 0 }}
        whileInView={{ width: "80%" }}
        transition={{ duration: 2, delay: 1.6 }}
        viewport={{ once: true, amount: 0.6 }}
      ></motion.div>
    </div>

    <label htmlFor="Express">Express.js</label>
    <motion.h5 id='html-star'
      initial={{ marginLeft: 0 }}
      animate={{ marginLeft: "80%" }}
      transition={{ duration: 2, delay: 1.5 }}
    >80%</motion.h5>
    <div className="main">
      <motion.div className="Express"
        initial={{ width: 0 }}
        whileInView={{ width: "80%" }}
        transition={{ duration: 2, delay: 1.5 }}
        viewport={{ once: true, amount: 0.6 }}
      ></motion.div>
    </div>

    <label htmlFor="MongoDB">MongoDB</label>
    <motion.h5 id='html-star'
      initial={{ marginLeft: 0 }}
      animate={{ marginLeft: "80%" }}
      transition={{ duration: 2, delay: 1.7 }}
    >80%</motion.h5>
    <div className="main">
      <motion.div className="MongoDB"
        initial={{ width: 0 }}
        whileInView={{ width: "80%" }}
        transition={{ duration: 2, delay: 1.7 }}
        viewport={{ once: true, amount: 0.6 }}
      ></motion.div>
    </div>

    <label htmlFor="Mongoose">Mongoose</label>
    <motion.h5 id='html-star'
      initial={{ marginLeft: 0 }}
      animate={{ marginLeft: "80%" }}
      transition={{ duration: 2, delay: 1.8 }}
    >80%</motion.h5>
    <div className="main">
      <motion.div className="Mongoose"
        initial={{ width: 0 }}
        whileInView={{ width: "80%" }}
        transition={{ duration: 2, delay: 1.8 }}
        viewport={{ once: true, amount: 0.6 }}
      ></motion.div>
    </div>

    <label htmlFor="JWT">JWT (Auth)</label>
    <motion.h5 id='html-star'
      initial={{ marginLeft: 0 }}
      animate={{ marginLeft: "80%" }}
      transition={{ duration: 2, delay: 1.9 }}
    >80%</motion.h5>
    <div className="main">
      <motion.div className="JWT"
        initial={{ width: 0 }}
        whileInView={{ width: "80%" }}
        transition={{ duration: 2, delay: 1.9 }}
        viewport={{ once: true, amount: 0.6 }}
      ></motion.div>
    </div>

    <label htmlFor="Bcrypt">Bcrypt.js</label>
    <motion.h5 id='html-star'
      initial={{ marginLeft: 0 }}
      animate={{ marginLeft: "80%" }}
      transition={{ duration: 2, delay: 2.0 }}
    >80%</motion.h5>
    <div className="main">
      <motion.div className="Bcrypt"
        initial={{ width: 0 }}
        whileInView={{ width: "80%" }}
        transition={{ duration: 2, delay: 2.0 }}
        viewport={{ once: true, amount: 0.6 }}
      ></motion.div>
    </div>

    <label htmlFor="REST">REST API</label>
    <motion.h5 id='html-star'
      initial={{ marginLeft: 0 }}
      animate={{ marginLeft: "80%" }}
      transition={{ duration: 2, delay: 2.1 }}
    >80%</motion.h5>
    <div className="main">
      <motion.div className="REST"
        initial={{ width: 0 }}
        whileInView={{ width: "80%" }}
        transition={{ duration: 2, delay: 2.1 }}
        viewport={{ once: true, amount: 0.6 }}
      ></motion.div>
    </div>

  </div>
</motion.div>



        <motion.div className="bottom"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.6 }}

        >

          {
            skills.map((val, ind) => {
              return <motion.div
                key={ind}

                whileInView={{ x: [0, -100, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'linear',

                }}

                className="translate">
                <img id='Skills-img' src={val} alt="" />
              </motion.div>
            })
          }
        </motion.div>
      </div>

    </>
  );
}

export default Skills;
