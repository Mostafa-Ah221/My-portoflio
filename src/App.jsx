
import './App.css'
import About from './components/About/About'
import Headers from './components/Header/Headers'
import Animation from './components/ParticlesBackground/ParticlesBackground'
import Services from './components/services/Services'
import Skills from './components/Skills/Skills'
import Navbar from './components/Header/Navbar'
import Portfolio from './components/portfolio/Portfolio'
import ContactMe from './components/Contact-me/ContactMe'
import Footer from './components/footer/Footer'
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { useEffect, useState } from 'react'

function App() {

    const [isScrolled, setIsScrolled] = useState(false);
    const toTop=()=> {
      window.scrollTo({ top: 0, behavior:'smooth' });
    }
    
  const handleScroll = () => {
    if (window.scrollY > 700) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
   useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div >
    <div className='relative container px-10 mx-auto'  >
      <Animation />
      <button onClick={toTop} className={` p-1 bg-orange-600 rounded-md fixed bottom-3 right-1 md:bottom-7 md:right-4  ${!isScrolled ? 'hidden' :'block'}`}>
      <MdKeyboardDoubleArrowUp className='text-white text-2xl md:text-3xl'/>
      </button>
      <div className='relative z-30'>
      <Navbar/>
        <Headers />
        <Services />
        <About />
        <Skills/>
        <Portfolio/>
        <ContactMe />
        <Footer />
      </div>
    </div>
    </div>
  );
}

export default App
