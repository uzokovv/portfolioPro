import React from 'react'
import Navbar from './components/navbar'
import Home from './components/Home'
import 'animate.css';
import AboutMe from './components/aboutMe';
import Skils from './components/skils';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Skils />
    </div>
  )
}

export default App