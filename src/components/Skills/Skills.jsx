import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiReact } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { motion } from "framer-motion";
import Dots from "../Dots";

function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, 
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div  className="text-white ">
      <div id="skills" className="text-center">
        <Dots />
        <h1  className="skills mb-10 text-4xl font-bold relative z-50 tracking-widest">My Skills</h1>
      </div>

      <motion.div
        className="grid grid-cols-12 gap-6 justify-between"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={containerVariants}
      >
        {[
          { Icon: FaHtml5, label: "HTML" },
          { Icon: FaCss3Alt, label: "CSS" },
          { Icon: IoLogoJavascript, label: "Javascript" },
          { Icon: SiReact, label: "React-js" },
          { Icon: SiRedux, label: "Redux" },
          { Icon: SiNextdotjs, label: "Next-js" },
          { Icon: RiTailwindCssFill, label: "Tailwind CSS" },
          { Icon: FaBootstrap, label: "Bootstrap" },
          { Icon: FaGitAlt, label: "Git" },
          { Icon: IoLogoGithub, label: "Github" },
          { Icon: IoLogoFirebase, label: "Firebase" },
        ].map((skill) => (
          <motion.div
            key={skill.label}
            className=" flex items-center text-sm md:text-xl font-semibold col-span-6 md:col-span-4 p-2 md:p-4 border border-gray-400 hover:bg-black bg-opacity-25 duration-300"
            variants={itemVariants}
            whileInView="visible" 
            initial="hidden" 
          >
            <skill.Icon className="text-3xl" />
            <h2>{skill.label}</h2>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Skills;
