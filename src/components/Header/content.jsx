import { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa"; 
import { SiWhatsapp } from "react-icons/si";
import image from '../../assets/images/mee-removebg.png';
import FileCv from '../../assets/CV-ME.pdf';

const Content = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const wordsArray = ['Front-End', 'React JS', 'React Native'];
  const typingSpeed = 150;
  const pauseDuration = 500;

  useEffect(() => {
    let timeout;

    const type = () => {
      if (isTyping) {
        if (displayText.length < wordsArray[currentWordIndex].length) {
          setDisplayText(prev => prev + wordsArray[currentWordIndex][displayText.length]);
          timeout = setTimeout(type, typingSpeed);
        } else {
          timeout = setTimeout(() => setIsTyping(false), pauseDuration);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(prev => prev.slice(0, -1));
          timeout = setTimeout(type, typingSpeed / 2);
        } else {
          setCurrentWordIndex((prev) => (prev + 1) % wordsArray.length);
          setIsTyping(true);
          timeout = setTimeout(type, typingSpeed);
        }
      }
    };

    timeout = setTimeout(type, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, currentWordIndex, isTyping]);

  return (
    <div className="flex flex-col gap-14 justify-center lg:justify-between items-center my-28 md:flex-row">
      <div className="text text-white ml-7 md:m-0">
        <h4 className="text-3xl">Hi,</h4>
        <h2 className="text-3xl md:text-5xl font-semibold">
          I am 
          <span 
            style={{ color: "#20262e", fontFamily:"Source Code Pro",fontSize:
              "0.8em" }} 
            className='-skew-y-2 inline-block bg-gradient-to-r from-orange-800 via-orange-700 to-orange-600 font-bold ml-2 translate rotate-1'
          >
             Mostafa Ahmed
          </span>
        </h2>
        <div className="h-16 flex items-center">
          <h1 className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-800 font-semibold">
            {displayText}
          </h1>
        </div>
        <div className="flex gap-3 my-4">
          <a target='_blank' href="https://www.linkedin.com/in/mostafa-ahmed-983521259/"><FaLinkedin className="text-2xl cursor-pointer hover:text-orange-600 transition duration-300" /></a>
          
          <a target='_blank' href="https://github.com/settings/profile"><FaGithub className="text-2xl cursor-pointer hover:text-orange-600 transition duration-300" /></a>
      
          <SiWhatsapp
            className="text-2xl cursor-pointer hover:text-orange-600 transition duration-300"
            onClick={() => window.open('https://wa.me/201282185988', '_blank')}
          />
        </div>
        <div className="text-white">
          <a href='#contact' className="cursor-pointer bg-gradient-to-r from-orange-800 via-orange-700 to-orange-600 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 transition-colors duration-500 p-2 mr-3 shadow-lg">Hire Me</a>
          <button className="cursor-pointer p-2 border border-gray-400 shadow-md transition duration-300 "><a  target="_blank" rel="noopener noreferrer" href={FileCv}>Download CV</a></button>
        </div>
      </div>
      <div className="image w-full md:w-1/3 relative">
        <img className="w-full p-0 md:p-5 relative z-10 filter brightness-90 rounded-lg" src={image} alt="Mostafa Ahmed" />
        <div className="w-full h-full rounded-full bg-slate-900 bg-opacity-30 absolute bottom-5"></div>
      </div>
    </div>
  );
};

export default Content;
