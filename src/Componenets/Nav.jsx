import React from 'react'
import { motion } from "motion/react"

function Nav() {

  const pages = ["Home", "About", "Skills", "Projects", "Contact"]
  return (
    <nav>
      <motion.div className="logo"
      initial={{translateX:"-80px"}}
      animate={{ translateX: "0px" }}
       transition={{ duration: 2, ease: "easeOut" }}
    
      
      ><img id='R-logo' src="/R-logo.svg" alt="" /></motion.div>
      <div className="NavDiv">
        {pages.map((val, ind) => {
          return <motion.a initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, delay: ind * 0.2 }}  id='Nav_buttons' key={ind} href="">{val}</motion.a>
        })}
      </div>
      <div className="links">
       <img id='Social-media' src="/instagram.png" alt="" />
       <img id='Social-media' src="/whatsapp.png" alt="" />
       <img id='Social-media' src="/linkedin.png" alt="" />
      </div>

    </nav>
  )
}

export default Nav