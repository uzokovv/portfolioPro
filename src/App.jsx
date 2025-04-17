import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import 'animate.css';
import AboutMe from './components/AboutMe';
import Skils from './components/skils';
import Aloqa from './components/Aloqa';
import Footer from './components/Footer';
import Exprense from './components/Exprense';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Skils />
      <Exprense />
      <Aloqa />
      <Footer />
    </div>
  )
}

export default App