import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-[#0a0a1a] transition-colors duration-500 pt-32 md:pt-40 px-4 pb-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">
            Get In <span className="text-[#f1a92a]">Touch</span>
          </h1>
          <div className="w-20 h-1 bg-teal-500 mx-auto mt-2 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          {/* Left Side: Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl">
              <h2 className="text-2xl font-bold text-teal-500 mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                  <div className="p-3 bg-[#f1a92a]/10 text-[#f1a92a] rounded-full"><FaPhoneAlt /></div>
                  <span className="font-semibold">01821323330</span>
                </div>
                <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                  <div className="p-3 bg-teal-500/10 text-teal-500 rounded-full"><FaEnvelope /></div>
                  <span className="font-semibold">maniksir.english@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                  <div className="p-3 bg-blue-500/10 text-blue-500 rounded-full"><FaMapMarkerAlt /></div>
                  <span className="font-semibold">Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>

            {/* Google Map Placeholder */}
            <div className="w-full h-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
              <iframe 
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.8318788335!2d90.337288!3d23.7808875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                className="w-full h-full grayscale dark:invert-[0.9] dark:hue-rotate-180"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-[#0a0a1a] dark:bg-gray-900 p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-gray-800"
          >
            <form className="space-y-5">
              <div className="flex gap-4">
                <input type="text" placeholder="First Name" className="w-1/2 bg-gray-800/50 text-white border border-gray-700 rounded-xl px-4 py-3 focus:border-[#f1a92a] outline-none transition-all" />
                <input type="text" placeholder="Last Name" className="w-1/2 bg-gray-800/50 text-white border border-gray-700 rounded-xl px-4 py-3 focus:border-[#f1a92a] outline-none transition-all" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full bg-gray-800/50 text-white border border-gray-700 rounded-xl px-4 py-3 focus:border-[#f1a92a] outline-none transition-all" />
              <textarea placeholder="Write Your Message" rows="4" className="w-full bg-gray-800/50 text-white border border-gray-700 rounded-xl px-4 py-3 focus:border-[#f1a92a] outline-none transition-all resize-none"></textarea>
              <button className="w-full bg-[#f1a92a] hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg transition-all transform active:scale-95 uppercase tracking-widest">
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;