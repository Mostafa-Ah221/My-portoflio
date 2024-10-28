import { FaReact, FaMobileAlt } from "react-icons/fa";
import { FcSmartphoneTablet } from "react-icons/fc";
import Dots from "../Dots";
import { motion } from "framer-motion";

function Services() {
  return (
    <div >
      <div className="text-center">
        <Dots />
        <h1 id='services' className="skills mb-10 text-4xl font-bold relative z-50 tracking-widest text-white">
          Services
        </h1>
      </div>
      <p className="text-gray-400 text-center mb-5">
        Explore the services I offer in front-end and mobile application development.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5">
        <motion.div
          style={{ backgroundColor: "#20262e" }}
          className="my-5 shadow-2xl shadow-gray-700 py-3 px-7 flex flex-col justify-center items-center text-center rounded-xl group"
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.9 }} 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }} 
          viewport={{ once: false, amount: 0.5 }} 
        >
          <FaReact className="text-4xl text-orange-600" />
          <h3 className="text-orange-600">Web Development</h3>
          <p className="text-slate-400 group-hover:text-slate-100 duration-400">
            Creating responsive and interactive web applications using React.js.
          </p>
        </motion.div>

        <motion.div
          style={{ backgroundColor: "#20262e" }}
          className="my-5 shadow-2xl shadow-gray-700 py-3 px-7 flex flex-col justify-center items-center text-center rounded-xl group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }} 
          viewport={{ once: false, amount: 0.5 }}
        >
          <FaMobileAlt className="text-4xl text-orange-600" />
          <h3 className="text-orange-600">Mobile Development</h3>
          <p className="text-slate-400 group-hover:text-slate-100 duration-400">
            Developing mobile applications using React Native for both iOS and Android platforms.
          </p>
        </motion.div>

        <motion.div
          style={{ backgroundColor: "#20262e" }}
          className="my-5 shadow-2xl shadow-gray-700 py-3 px-7 flex flex-col justify-center items-center text-center rounded-xl group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: false, amount: 0.5 }} 
        >
          <FcSmartphoneTablet style={{ fontSize: "3rem" }} className="text-orange-600" />
          <h3 className="text-orange-600">Responsive Web Development</h3>
          <p className="text-slate-400 group-hover:text-slate-100 duration-400">
            Creating websites that adapt seamlessly to any screen size for optimal user experience.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
