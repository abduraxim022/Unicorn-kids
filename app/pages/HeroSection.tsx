"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="pt-32 pb-16 flex flex-col justify-center bg-gradient-to-r from-cyan-100 to-pink-100 px-6"
    >
      <div className="container mx-auto max-w-6xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        ></motion.div>

        {/* Main Content */}
        <div className="text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-slate-800"
          >
            Bolangizning iqtidorini aniqlang
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-800"
          >
            Kelajagiga to‘g‘ri yo‘l tanlang!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-md md:text-lg max-w-2xl mx-auto mb-8 text-gray-600"
          >
            Har bir bola o‘z iste’dodiga ega! 6 ta modul orqali farzandingizning
            eng kuchli jihatlarini aniqlang va to‘g‘ri yo‘naltiring!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-md mx-auto relative mb-16"
          >

          </motion.div>
        </div>

      </div>
    </section>
  );
}
