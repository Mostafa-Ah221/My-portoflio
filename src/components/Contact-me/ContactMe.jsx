import { useRef } from 'react';
import { CiMail } from "react-icons/ci";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { Dots2 } from '../Dots';
import { motion } from 'framer-motion';

function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ehm75iq', // (Service ID)
      'template_11puu4h', // (Template ID)
      form.current,
      '73h6dUpbL2BtxYKYT' // (User ID)
    ).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          title: 'Success!',
          text: 'Your message has been sent successfully!',
          icon: 'success',
          showConfirmButton: false,
          timer: 5000,
          timerProgressBar: true,
          background: '#343541',
          color: '#fff',
          customClass: {
            popup: 'custom-alert'
          }
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          title: 'Error!',
          text: 'There was an error sending your message. Please try again.',
          icon: 'error',
          showConfirmButton: false,
          timer: 5000,
          timerProgressBar: true,
          background: '#343541',
          color: '#fff',
          customClass: {
            popup: 'custom-alert'
          }
        });
      }
    );

    e.target.reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      className="my-10"
      
    >
      <div className="text-center">
        <Dots2 />
        <h1 id='contact' className="skills mb-7 text-4xl font-bold relative z-50 tracking-widest text-white">Contact Me</h1>
      </div>
      <p className="text-center text-gray-200">
        <CiMail className="inline-block" /> mostafaahmed1101997@gmail.com
      </p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-white p-6 rounded-md shadow-2xl border-1"
      >
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-6">
              <input
                style={{ backgroundColor: "#343541" }}
                type="text"
                id="from_name"
                name="from_name"
                placeholder="Your Name"
                required
                className="mt-1 block w-full p-3 outline-none rounded-md"
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <input
                style={{ backgroundColor: "#343541" }}
                type="email"
                id="from_email"
                name="from_email"
                placeholder="Your E-mail"
                required
                className="mt-1 block w-full p-3 outline-none rounded-md"
              />
            </div>
          </div>
          <div className="mb-4">
            <textarea
              style={{ backgroundColor: "#343541" }}
              id="message"
              name="message"
              placeholder="Your Message"
              required
              rows="7"
              className="mt-1 block w-full p-3 outline-none rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-orange-800 via-orange-700 to-orange-600 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 transition-colors duration-500 text-white font-semibold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default ContactMe;
