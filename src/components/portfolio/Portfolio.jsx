import { motion } from 'framer-motion';
import img1 from '../../assets/images/img-1.PNG';
import img2 from '../../assets/images/img-2.PNG';
import img3 from '../../assets/images/img-3.PNG';
import img4 from '../../assets/images/img-4.PNG';
import img5 from '../../assets/images/img-5.PNG';
import img6 from '../../assets/images/img-6.PNG';
import img7 from '../../assets/images/E-com.PNG';
import img8 from '../../assets/images/img-8.PNG';
import img9 from '../../assets/images/img-9.PNG';
import img10 from '../../assets/images/img-10.PNG';
import img11 from '../../assets/images/img-11.PNG';
import img12 from '../../assets/images/img-7.PNG';
import { FaEye } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import Dots from '../Dots';

function Portfolio() {
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.1 }
  };

  // إعدادات الحركة للنصوص والعناوين
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
     
      className='my-10 text-white'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div  id='portfolio' className="text-center">
        <Dots />
        <motion.h1
          className="skills mb-10 text-4xl font-bold relative z-50 tracking-widest"
          variants={textVariants}
        >
          Projects
        </motion.h1>
      </div>

      <div  className="projects grid grid-cols-12 gap-7 my-14">
        {/* بطاقة المشروع */}
        {[{
          title: "Simple Profile",
          demoLink: "https://mostafa-ah221.github.io/profile-2/",
          codeLink: "https://github.com/Mostafa-Ah221/profile-2",
          imgSrc: img2,
        }, {
          title: "Crreative.Ag",
          demoLink: "https://mostafa-ah221.github.io/Spacial-Design/",
          codeLink: "https://github.com/Mostafa-Ah221/Spacial-Design",
          imgSrc: img3,
        }, {
          title: "Alix Smith",
          demoLink: "https://mostafa-ah221.github.io/fokir/",
          codeLink: "https://github.com/Mostafa-Ah221/fokir",
          imgSrc: img4,
        }, {
          title: "Devfolio",
          demoLink: "https://mostafa-ah221.github.io/DevFolio/",
          codeLink: "https://github.com/Mostafa-Ah221/DevFolio",
          imgSrc: img5,
        }, {
          title: "M.A",
          demoLink: "https://mostafa-ah221.github.io/M.A/",
          codeLink: "https://github.com/Mostafa-Ah221/M.A",
          imgSrc: img1,
        }, {
          title: "Weather Site",
          demoLink: "https://mostafa-ah221.github.io/weather-app/",
          codeLink: "https://github.com/Mostafa-Ah221/weather-app",
          imgSrc: img6,
        }, {
          title: "Fresh Cart",
          demoLink: "#",
          codeLink: "#",
          imgSrc: img7,
        }, {
          title: "Profile",
          demoLink: "https://mostafa-ah221.github.io/daniels/",
          codeLink: "https://github.com/Mostafa-Ah221/daniels",
          imgSrc: img8,
        }, {
          title: "Meals Site",
          demoLink: "https://mostafa-ah221.github.io/meals-page/",
          codeLink: "https://github.com/Mostafa-Ah221/meals-page",
          imgSrc: img9,
        }, {
          title: "Start React",
          demoLink: "https://mostafa-ah221.github.io/react-1/",
          codeLink: "https://github.com/Mostafa-Ah221/react-1",
          imgSrc: img10,
        }, {
          title: "Games Site",
          demoLink: "https://mostafa-ah221.github.io/games.page/",
          codeLink: "https://github.com/Mostafa-Ah221/games.page",
          imgSrc: img11,
        }, {
          title: "Cruds",
          demoLink: "https://mostafa-ah221.github.io/Cruds/",
          codeLink: "https://github.com/Mostafa-Ah221/Cruds",
          imgSrc: img12,
        }].map((project, index) => (
          <motion.div
            key={index}
            className='col-span-12 md:col-span-6 lg:col-span-4 relative group rounded-md overflow-hidden'
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            variants={imageVariants}
          >
            <div className='absolute top-0 right-0 w-full h-full bg-slate-900 bg-opacity-70 group-hover:opacity-100 opacity-0 transition-opacity duration-300 flex justify-center items-center flex-col'>
              <h2 className='text-3xl'>{project.title}</h2>
              <div className='flex gap-5 mt-2'>
                <a href={project.demoLink} target="_blank" className='hover:outline hover:outline-orange-600 p-1 rounded-sm hover:outline-2'>
                  <FaEye className='inline-block' /> Demo
                </a>
                <a href={project.codeLink} target='_blank' className='hover:outline hover:outline-orange-600 p-1 rounded-sm hover:outline-2'>
                  <IoLogoGithub className='inline-block' /> Code
                </a>
              </div>
            </div>
            <img src={project.imgSrc} alt={project.title} className='h-52 w-full object-cover' />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Portfolio;
