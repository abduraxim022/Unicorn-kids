
"use client";
import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Sparkles, Check } from "lucide-react";
import { motion } from "framer-motion";

const SubscriptionBanner: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2
      }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone) return;

    setIsSubmitting(true);
    // Simulate API call
    try {
      // Replace with your actual API endpoint
      // await fetch('/api/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ name, phone }),
      // });

      // Simulate success
      setTimeout(() => {
        setSubmitted(true);
        setIsSubmitting(false);
      }, 1000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const formVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, delay: 0.4 }
    }
  };

  const particles = Array.from({ length: 8 }).map((_, i) => (
    <motion.div
      key={i}
      className="absolute rounded-full bg-gradient-to-r from-blue-400 to-green-400 opacity-20"
      initial={{
        x: Math.random() * 100 - 50 + "%",
        y: Math.random() * 100 - 50 + "%",
        scale: Math.random() * 0.5 + 0.5,
        opacity: 0.2
      }}
      animate={{
        x: [
          Math.random() * 100 - 50 + "%",
          Math.random() * 100 - 50 + "%",
          Math.random() * 100 - 50 + "%"
        ],
        y: [
          Math.random() * 100 - 50 + "%",
          Math.random() * 100 - 50 + "%",
          Math.random() * 100 - 50 + "%"
        ],
        opacity: [0.2, 0.5, 0.2]
      }}
      transition={{
        duration: 15 + Math.random() * 15,
        repeat: Infinity,
        repeatType: "reverse"
      }}
      style={{
        width: 100 + Math.random() * 150 + "px",
        height: 100 + Math.random() * 150 + "px",
        filter: "blur(40px)"
      }}
    />
  ));

  return (
    <motion.div
      id="contact"
      ref={bannerRef}
      className="w-full max-w-6xl mx-auto my-12 px-4"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div 
        className="rounded-3xl overflow-hidden bg-gradient-to-r from-cyan-100 via-white to-pink-100 shadow-lg relative"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.6 }}
        whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
      >
        <div className="absolute inset-0 overflow-hidden">
          {isVisible && particles}
        </div>

        <div className="px-8 py-16 md:px-16 text-center relative z-10">
          <motion.div 
            className="absolute top-4 right-4"
            initial={{ scale: 0 }}
            animate={isVisible ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <Sparkles className="text-yellow-400 w-8 h-8" />
          </motion.div>

          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4"
            variants={itemVariants}
          >
            Brinchi Bepul Darsni boshlash uchun
            <br />
            <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-500"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              bizga ma’lumotlaringizni qoldring
            </motion.span>
          </motion.h2>

          <motion.p 
            className="text-slate-600 mb-10 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Bolangiz dasturlash, dizayn, robototexnika yoki 3D modellashtirishga
            qiziqyaptimi? Unda Unicorn Kidsda bepul sinov darsida qatnashib,
            kursimiz bilan tanishishingiz mumkin!
          </motion.p>

          {!submitted ? (
            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto"
              variants={formVariants}
            >
              <motion.input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ismingizni kiriting"
                className="flex-1 px-6 py-4 rounded-full border-0 bg-white shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              />

              <motion.input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Telefon raqamingizni kiriting"
                className="flex-1 px-6 py-4 rounded-full border-0 bg-white shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              />

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="bg-green-500 hover:bg-green-600 text-white font-medium px-8 py-4 rounded-full transition-colors duration-200 flex items-center justify-center gap-2 md:whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>Joining...</span>
                  </>
                ) : (
                  <>
                    <span>Join With Us</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    >
                      <ArrowRight size={20} />
                    </motion.div>
                  </>
                )}
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              className="bg-green-50 text-green-700 p-6 rounded-xl max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isVisible ? { scale: 1 } : { scale: 0 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
                className="w-12 h-12 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center"
              >
                <Check className="text-green-600 w-6 h-6" />
              </motion.div>
              <h3 className="font-bold text-xl mb-2">Thank you for joining!</h3>
              <p>
                We’ll be in touch soon with more information about your journey
                ahead.
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SubscriptionBanner;