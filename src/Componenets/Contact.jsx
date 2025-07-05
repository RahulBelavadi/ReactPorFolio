import React from 'react'
import { motion } from 'motion/react'
import { FaPhoneVolume } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";



function Contact() {

    

  return (
    <div className="contact">
        <motion.h1
        
        initial={{scale:0,opacity:0}}
        whileInView={{scale:1,opacity:1}}
        transition={{duration:0.7,ease:"easeOut"}}
        viewport={{ once: true, amount: 0.6 }}

        >Contact Me ✆</motion.h1>
        <div className="Contact-info">
            <motion.div className="contactLeft"
            
            initial={{scale:0,opacity:0}}
            whileInView={{scale:1,opacity:1}}
            transition={{duration:0.7,ease:"easeOut"}}
            viewport={{ once: true, amount: 0.6 }}
            >
                <div className="number">
                   <FaPhoneVolume/> <h3>+7406263973</h3>
                </div>
                <div className="email">
                   <MdMarkEmailRead/> <h3>Bboyrahul55.rb@gmail.com</h3>
                </div>
                <div className="linkedin">
                   <FaLinkedin/> <h3>Linked IN</h3>
                </div>
                <div className="social">

                    <a href="https://www.instagram.com/rahul_shots?igsh=OTQzZXBjdXlha21u" target='_blank'><img id='img' src="/instagram.png" alt="" /></a>
                    <a href="https://wa.me/+919901420573" target="_blank"><img id='img' src="/whatsapp.png" alt="" /></a>
                    <a href="https://www.linkedin.com/in/rahul-belavadi-573543340" target='_blank'><img id='img' src="/linkedin.png" alt="" /></a>
                    
                </div>
            </motion.div>

            <motion.div className="contactRight"
            initial={{scale:0,opacity:0}}
            whileInView={{scale:1,opacity:1}}
            transition={{duration:0.7,ease:"easeOut",delay:0.2}}
            viewport={{ once: true, amount: 0.6 }}
            
            >
                <label htmlFor="name">Name</label>
                <input type="text" placeholder='Enter Your Name' />
                <label htmlFor="name">Email</label>
                <input type="email" placeholder='Enter Your email' />
                <label htmlFor="message">Message</label>
                <textarea name="message" id=""></textarea>.
                <button>Submit</button>
            </motion.div>
        </div>

        <footer><h5><p>© 2025 Rahul. All rights reserved.</p></h5></footer>
    </div>
    

  )
}

export default Contact