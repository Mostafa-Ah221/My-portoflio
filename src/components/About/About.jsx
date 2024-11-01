import FileCv from '../../assets/CV-ME.pdf';
import { Dots3 } from '../Dots';
import { motion } from 'framer-motion';  

function About() {
  return (
    <div id='about' className="min-h-screen text-white my-9 md:mr-6">
      <div className="text-center">
        <Dots3 />
        <motion.h1
        id='about' 
          className="skills mb-10 text-4xl font-bold relative z-50 tracking-widest text-white"
          initial={{ opacity: 0, y: -50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          viewport={{ once: false }}
        >
          About ME
        </motion.h1>
      </div>

      <motion.div
        style={{ backgroundColor: "#20262e" }}
        className="max-w-4xl mx-auto bg-transparent rounded-xl shadow-2xl shadow-gray-700 p-2 md:p-7 lg:flex md:items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }} 
      >
        <motion.div
          className="lg:w-1/2 mb-6 md:mb-0 pr-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }} 
          viewport={{ once: false }} 
        >
          <p className="text-sm md:text-xl text-gray-300 mb-4">
            Hello! My name is <span className="text-orange-400">Mostafa</span>, a passionate{" "}
            <span className="font-semibold text-orange-400">Front-End Developer</span> specializing in creating stunning
            and functional web interfaces using the latest technologies. I have good expertise in{" "}
            <span className="font-semibold text-orange-400">React.js</span> and <span className="font-semibold text-orange-400">Next.js</span> to build modern and responsive applications. My goal is to deliver high-quality,
            user-friendly experiences that exceed expectations.
          </p>
          <p className="text-sm md:text-xl text-gray-300">
            When I'm not coding, I love exploring new tools and frameworks to stay updated with the latest trends in web
            development.
          </p>
          <motion.button
            className="p-2 bg-gradient-to-r from-orange-800 via-orange-700 to-orange-600 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 transition-colors duration-500 mt-2 rounded-md"
            initial={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }} 
            transition={{ duration: 0.3 }} 
          >
            <a target="_blank" rel="noopener noreferrer" href={FileCv}>
              Download CV
            </a>
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="lg:w-1/2 flex justify-center md:justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5, delay: 0.4 }} 
          viewport={{ once: false }} 
        >
          <motion.img
            src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
            alt="Web Development Animation"
            className="w-72 h-72 rounded-xl shadow-lg md:w-96 my-3"
            initial={{ scale: 0.9 }} 
            whileHover={{ scale: 1.05 }} 
            transition={{ duration: 0.3 }} 
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
