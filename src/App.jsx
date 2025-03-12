import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import 'animate.css';
import AboutMe from './components/AboutMe';
import Skils from './components/Skils';
import Contact from './components/Contact';
import Projects from './components/Projects';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Skils />
      <Projects />
      <Contact />
    </div>
  )
}

export default App