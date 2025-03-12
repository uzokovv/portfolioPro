import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import 'animate.css';
import AboutMe from './components/aboutMe';
import Skils from './components/skils';
import Contact from './components/contact';
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