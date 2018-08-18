import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Main from './components/Main';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import SocialLinks from './components/SocialLinks';
import './App.css';
import Footer from './components/Footer';export default Resume;

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <Main />
        <Projects />
        <Resume />
        <Contact />
        <SocialLinks />
        <Footer /> 
      </div>
    );
  }
}


export default App;
