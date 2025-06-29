import React from 'react'
import Nav from './Componenets/Nav'
import galaxy from './Videos/galaxy.mp4'
import { Suspense } from 'react'




const Intro = React.lazy(()=>import('./Componenets/Intro'));
const About = React.lazy(()=>import('./Componenets/About'));
const MyProjects = React.lazy(()=>import('./Componenets/MyProjects'));
const Skills = React.lazy(()=>import('./Componenets/Skills'));
const Contact = React.lazy(()=>import('./Componenets/Contact'));

function App() {
  return (
    
    <div className="body">
      <video className='body_vid' autoPlay muted loop src={galaxy}></video>
      <div className="overlay"></div>
    <Nav/>
    
    <Suspense fallback={<div className="loader">Loading...</div>}>
    <section id="home"><Intro /></section>
    <section id="about"><About /></section>
    <section id="projects"><MyProjects /></section>
    <section id="skills"><Skills /></section>
    <section id="contact"><Contact /></section>
    </Suspense>
    </div>
  )
}

export default App