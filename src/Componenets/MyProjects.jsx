import React from 'react';
import { motion } from 'motion/react';
import { CiShare1 } from "react-icons/ci";

const projects = [
  {
    image: "/youtube.png",
    title: "YouTube Clone",
    description: "Built a full-featured YouTube clone using MongoDB, Express, React, and Node.js. Implemented video upload, JWT-based authentication, search, likes, comments, and subscription system."
  },
  {
    image: "/api2.webp",
    title: "ShoppyGlobe APIs",
    description: "Created secure and scalable RESTful APIs for the ShoppyGlobe e-commerce platform using Node.js, Express.js, and MongoDB. Implemented JWT-based user authentication, product listings, and shopping cart functionalities."
  },
  {
    image: "/Netflix.png",
    title: "Netflix Clone",
    description: "A simple Netflix homepage clone built using HTML, CSS, and JavaScript. It features a clean layout, responsive design, and interactive elements like hover effects. This project helped me practice front-end web development and UI design."
  }
];

function MyProjects() {
  return (
    <>
      <motion.h1
        id="MyProects"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.6 }}
      >
        My Project 👩🏻‍💻ᝰ.ᐟ
      </motion.h1>

      <div className="Projects">
        {projects.map((project, ind) => (
          <React.Fragment key={ind}>
            <motion.div
              className="Left-project"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <img id="Card" src={project.image} alt={project.title} />
            </motion.div>

            <motion.div
              className="Right-info"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <div className="Card-info">
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <button><CiShare1 className='share' />Website</button>
              </div>
            </motion.div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default MyProjects;
