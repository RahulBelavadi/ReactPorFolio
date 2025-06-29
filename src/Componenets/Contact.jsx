import React from 'react'
import { motion } from 'motion/react'

function Contact() {


  //  initial={{ scale: 0, opacity: 0 }}
    //  whileInView={{ scale: 1, opacity: 1 }}
    //  transition={{ duration: 0.7, ease: 'easeOut' }}

  return (
    <div className="contact">
        <motion.h1
        
        initial={{scale:0,opacity:0}}
        whileInView={{scale:1,opacity:1}}
        transition={{duration:0.7,ease:"easeOut"}}
        viewport={{ once: true, amount: 0.6 }}

        >Contact Me</motion.h1>
        <div className="Contact-info">
            <motion.div className="contactLeft"
            
            initial={{scale:0,opacity:0}}
            whileInView={{scale:1,opacity:1}}
            transition={{duration:0.7,ease:"easeOut"}}
            viewport={{ once: true, amount: 0.6 }}
            >
                <div className="number">
                    <h3>+7406263973</h3>
                </div>
                <div className="email">
                    <h3>Bboyrahul55.rb@gmail.com</h3>
                </div>
                <div className="linkedin">
                    <h3>Linked IN</h3>
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
    </div>
    

  )
}

export default Contact