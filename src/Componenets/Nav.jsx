import React, { useState } from 'react'
import { motion } from "motion/react"
import { FiMenu } from "react-icons/fi";
// import { useNavigate } from 'react-router-dom';



function Nav() {

  const [toggle, settoggle] = useState(false)
  

  function togleNav(){
    settoggle(!toggle)
  }


  const pages = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];



  return (
    <nav>
      <motion.div className="logo"
        initial={{ translateX: "-80px" }}
        animate={{ translateX: "0px" }}
        transition={{ duration: 2, ease: "easeOut" }}


      ><img id='R-logo' src="/R-logo.svg" alt="" /></motion.div>
      <div className="NavDiv">


        {pages.map((val, ind) => {
          return <motion.a
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, delay: ind * 0.2 }}
            id="Nav_buttons"
            key={ind}
            href={val.href}
          >
            {val.name}
          </motion.a>
        })}
      </div>
      
      <div className="links">

        <a href="https://www.instagram.com/rahul_shots?igsh=OTQzZXBjdXlha21u" target='_blank'><img id='img' src="/instagram.png" alt="" /></a>
        <a href="https://wa.me/+919901420573" target="_blank"><img id='img' src="/whatsapp.png" alt="" /></a>
        <a href="https://www.linkedin.com/in/rahul-belavadi-573543340" target='_blank'><img id='img' src="/linkedin.png" alt="" /></a>
      </div>
     
     <FiMenu id='menu' onClick={togleNav}/>

     {

      toggle && <div className='ToggleMenu'  >

           {pages.map((val, ind) => {
          return <motion.a
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2, delay: ind * 0.2 }}
            id="Nav_buttons"
            key={ind}
            href={val.href}
          >
            {val.name}
          </motion.a>
        })}

      </div>

     }

    </nav>
  )
}

export default Nav