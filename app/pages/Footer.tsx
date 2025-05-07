"use client";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn,FaTelegram } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#c2e9fb] to-[#fbc2eb] py-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8"
      >
        {/* Logo Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Unicorn Kids  </h2>
          <p className="text-gray-600">Unlock knowledge with expert-led online courses.</p>
          <h3 className="font-semibold mt-4">Stay connected</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="p-3 bg-white shadow-lg rounded-full hover:scale-110 transition">
              <FaTelegram />
            </a>
            <a href="#" className="p-3 bg-white shadow-lg rounded-full hover:scale-110 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-3 bg-white shadow-lg rounded-full hover:scale-110 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="p-3 bg-white shadow-lg rounded-full hover:scale-110 transition">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Pages */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Pages</h3>
          <ul className="space-y-2 text-gray-700">
            <li><a href="#home" className="hover:text-gray-900 transition">Home</a></li>
            <li><a href="#about" className="hover:text-gray-900 transition">About Us</a></li>
            <li><a href="#courses" className="hover:text-gray-900 transition">Courses</a></li>
          </ul>
        </div>

        {/* Others */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Others</h3>
          <ul className="space-y-2 text-gray-700">
            <li><a href="#mentors" className="hover:text-gray-900 transition">Mentors</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Contact Us</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center space-x-2">
              <MdPhone className="text-gray-900" />
              <span>+998 98 113 9559</span>
            </li>
            <li className="flex items-center space-x-2">
              <MdEmail className="text-gray-900" />
              <span>unicorn@gmail.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <MdLocationOn className="text-gray-900" />
              <span>Mirzo Ulug‘bek tumani , Mirzo ulug‘bek ko‘chasi 54/2  </span>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Copyright */}
      <div className="text-center mt-6 text-gray-600">
        © {new Date().getFullYear()} Unicorn. All rights reserved.
      </div>
    </footer>
  );
}
