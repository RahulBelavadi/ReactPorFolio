import React from 'react'
import heroVideo from '../Videos/heroVideo.mp4'
import { easeIn, motion } from "motion/react"
import { CgScrollV } from "react-icons/cg";


function Intro() {

    const splitText = (text) =>
  text.split('').map((char, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.10, // delay each character
        duration: 2,
        repeat: Infinity,
        ease: 'easeOut',
      }}
      className="inline-block"
    >
      {char}
    </motion.span>
  ));



    return (
        <div className="Intro">
            <div className="left">
                <div className="info">
                    <h1>Providing <span 
                    className='text'                
                    >{splitText("The Best")} </span> <br />Project <span className='text'>Experience</span></h1>
                    <br />
                    <h4> I'm a Full Stack Developer passionate about building responsive web applications using modern technologies like React, Node.js, Express, and MongoDB. I enjoy turning ideas into functional, user-friendly solutions.</h4>
                    <button id='Contact_me'>Contact Me</button>
                </div>
            </div>

            <div className="Right">
                <div className="hero-vid">
                    <motion.video 
                    initial={{scale:0,opacity:0}}
                    animate={{scale:1,opacity:1}}
                    transition={{duration:1.5,ease:"easeOut"}}
                    viewport={{once:true,amount:0.6}}
                    


                    className='herovideo' autoPlay muted playsInline loop src={heroVideo}></motion.video>

                </div>

            </div>
            <div id="scroll">
                <motion.div className='sCdiv'
                    initial={{ y: -50, opacity: 0 }} 
                    animate={{ y: 50, opacity: [0, 1, 0] }} 
                    transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                >
                    <CgScrollV className="scrollbar" />
                </motion.div>
            </div>

        </div>
    )
}

export default Intro