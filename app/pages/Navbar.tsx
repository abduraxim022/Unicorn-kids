"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Logo from "../../public/altimage.png";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Navbar scroll event
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false); // Pastga scroll qilganda yashirinadi
      } else {
        setShowNavbar(true); // Tepaga scroll qilganda ko'rinadi
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Scroll to Section
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-gradient-to-r from-teal-50 to-purple-50 z-50 shadow-md"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image src={Logo} alt="Unicorn Logo" width={40} height={40} />
          <h1 className="text-2xl font-bold text-slate-800">Unicorn</h1>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="ghost"
            className="cursor-pointer hover:bg-transparent hover:text-emerald-600"
            onClick={() => handleScrollTo("home")} 
          >
            Home
          </Button>
          <Button
            variant="ghost"
            className="cursor-pointer hover:bg-transparent hover:text-emerald-600"
            onClick={() => handleScrollTo("courses")}
          >
            Courses
          </Button>
          <Button variant="ghost" className="cursor-pointer hover:bg-transparent hover:text-emerald-600">
            Mentors
          </Button>
          <Button variant="ghost" className="cursor-pointer hover:bg-transparent hover:text-emerald-600">
            Blog
          </Button>
          <Button variant="ghost" className="cursor-pointer hover:bg-transparent hover:text-emerald-600">
            About Us
          </Button>
          <Button variant="ghost" className="cursor-pointer hover:bg-transparent hover:text-emerald-600">
            Contact
          </Button>
        </div>

        <div className="md:hidden">
          <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-white shadow-md"
        >
          <div className="flex flex-col">
            <Button
              variant="ghost"
              className="justify-start"
              onClick={() => handleScrollTo("home")}
            >
              Home
            </Button>
            <Button
              variant="ghost"
              className="justify-start"
              onClick={() => handleScrollTo("courses")}
            >
              Courses
            </Button>
            <Button variant="ghost" className="justify-start">
              Mentors
            </Button>
            <Button variant="ghost" className="justify-start">
              Blog
            </Button>
            <Button variant="ghost" className="justify-start">
              About Us
            </Button>
            <Button variant="ghost" className="justify-start">
              Contact
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
