"use client"
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function HeroSection() {
  return (
    <section id="home"  className="pt-32 pb-16  flex flex-col justify-center bg-gradient-to-r from-teal-50 to-purple-50 px-6">
      <div className="container mx-auto max-w-6xl relative">
        {/* Small label at top */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="bg-white rounded-full px-4 py-1 flex items-center gap-2 shadow-sm">
            <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Learn From The Top Experts</span>
          </div>
        </motion.div>
        
        {/* Main Content */}
        <div className="text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-slate-800"
          >
            Building Futures Together
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-800"
          >
            By Empowering Minds
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-md md:text-lg max-w-2xl mx-auto mb-8 text-gray-600"
          >
            Join us in shaping a brighter future by nurturing potential, empowering minds,
            and fostering growth through education and collaboration.
          </motion.p>
          
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-md mx-auto relative mb-16"
          >
            <input 
              type="text" 
              placeholder="e.g. UX Design" 
              className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <Button className="absolute right-1 top-1 bg-white hover:bg-gray-100 text-gray-600 rounded-full w-8 h-8 p-1 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </Button>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute left-10 top-24 hidden md:block"
        >
          <div className="relative w-16 h-16">
            <div className="absolute w-10 h-10 bg-amber-100 rounded-lg rotate-12"></div>
            <div className="absolute w-8 h-12 bg-amber-200 rounded-lg -rotate-12 top-2 left-6"></div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute right-10 top-24 hidden md:block"
        >
          <div className="flex gap-2">
            <div className="w-8 h-8 bg-emerald-400 rounded-full"></div>
            <div className="w-6 h-6 bg-amber-400 rounded-full"></div>
            <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
          </div>
        </motion.div>
        
        {/* Profile Pictures */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-wrap justify-center gap-4 mt-4"
        >
          {[
            {bg: "bg-amber-50"},
            {bg: "bg-pink-100"},
            {bg: "bg-emerald-100"},
            {bg: "bg-amber-100"},
            {bg: "bg-orange-100"},
            {bg: "bg-red-100"}
          ].map((profile, index) => (
            <div 
              key={index} 
              className={`w-16 h-16 md:w-24 md:h-24 rounded-full ${profile.bg} overflow-hidden flex items-center justify-center`}
            >
              <div className="w-12 h-12 md:w-20 md:h-20 bg-gray-300 rounded-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}