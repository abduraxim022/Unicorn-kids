"use client"
import { useState, useEffect, useRef, JSX, useMemo } from "react";
import { Button } from "@/components/ui/button"; 
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import altimage from '../../public/altimage.png'; 
import React from "react";

type SectionId = 'home' | 'courses' | 'mentors' | 'about' | 'contact';

type ScrollDirection = 'up' | 'down';

export default function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>("up");
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [prevScrollPosition, setPrevScrollPosition] = useState<number>(0);
  const [activeItem, setActiveItem] = useState<SectionId>("home");
  const indicatorRef = useRef<HTMLSpanElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  
  const sections: SectionId[] = useMemo(() => ["home", "courses", "mentors", "about", "contact"], []);
  
  useEffect(() => {
    const handleScroll = (): void => {
      const currentScrollPosition = window.scrollY;
      
      if (currentScrollPosition > prevScrollPosition) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      
      setScrollPosition(currentScrollPosition);
      setPrevScrollPosition(currentScrollPosition);
      
      if (isOpen) {
        setIsOpen(false);
      }
            updateActiveSection();
    };
    
    const updateActiveSection = (): void => {
      const scrollTop = window.scrollY;
      const offset = 100; 
      
      if (scrollTop < 100) {
        if (activeItem !== "home") {
          setActiveItem("home");
          const homeBtn = document.getElementById("home-btn");
          if (homeBtn) {
            positionIndicator(homeBtn);
          }
        }
        return; 
      }
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue; 
        
        const sectionTop = element.offsetTop - offset;
        const sectionBottom = sectionTop + element.offsetHeight;
        
        if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
          if (activeItem !== section) {
            setActiveItem(section);
            
            const btn = document.getElementById(`${section}-btn`);
            if (btn) {
              positionIndicator(btn);
            }
          }
          break; 
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    const timeoutId = setTimeout(updateActiveSection, 100); 
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId); 
    };
  }, [prevScrollPosition, isOpen, activeItem, sections]); 
  
  useEffect(() => {
    if (indicatorRef.current && navRef.current) {
      const homeBtn = document.getElementById("home-btn");
      if (homeBtn) {
        positionIndicator(homeBtn);
      }
    }
  }, []); 
  
  const handleScrollTo = (id: SectionId): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false); 
      setActiveItem(id); 
      
      const btn = document.getElementById(`${id}-btn`);
      if (btn) {
        positionIndicator(btn);
      }
    }
  };
  
  const positionIndicator = (btn: HTMLElement): void => {
    if (!indicatorRef.current || !btn) return;
    
    indicatorRef.current.style.width = `${btn.offsetWidth}px`;
    indicatorRef.current.style.left = `${btn.offsetLeft}px`;
    
    if (navRef.current) {
      const allButtons = navRef.current.querySelectorAll('button');
      allButtons.forEach(button => {
        button.classList.remove('text-blue-500');
        button.classList.add('hover:text-blue-500');
      });
    }
    

    btn.classList.add('text-blue-500');
  };
  
  const handleButtonHover = (btn: HTMLButtonElement): void => {
    if (indicatorRef.current) {
      indicatorRef.current.style.width = `${btn.offsetWidth}px`;
      indicatorRef.current.style.left = `${btn.offsetLeft}px`;
    }
  };
  
  const handleNavMouseLeave = (): void => {
    const activeBtn = document.getElementById(`${activeItem}-btn`);
    if (activeBtn && indicatorRef.current) {
      indicatorRef.current.style.width = `${activeBtn.offsetWidth}px`;
      indicatorRef.current.style.left = `${activeBtn.offsetLeft}px`;
    }
  };
  
  const shouldShowNavbar: boolean = scrollDirection === "up" || scrollPosition < 50;
  
  const navbarClasses: string = `fixed top-0 left-0 w-full z-50 transition-shadow duration-300 ${
    scrollPosition > 0 ? "shadow-md bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 " : ""
  }`;
  
  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: shouldShowNavbar ? 0 : -100 }} 
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={navbarClasses}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center h-20">

        <div className="flex items-center space-x-2">
          <a 
            href="#home" 
            className="scroll-smooth flex items-center"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault(); 
              handleScrollTo("home");
            }}
          >
            <Image width={40} height={40} src={altimage as StaticImageData | string} alt="Unicorn kids logo"/>
            <h1 className="text-2xl font-bold text-slate-800 pl-2">Unicorn Kids</h1>
          </a>
        </div>
        
        <div 
          className="hidden md:flex items-center relative" 
          ref={navRef} 
          onMouseLeave={handleNavMouseLeave} 
        >
          <span 
            ref={indicatorRef} 
            className="absolute bottom-0 h-0.5 bg-blue-500 transition-all duration-300"
            style={{ left: '0px', width: '0px' }} 
          ></span>
          
          <Button
            id="home-btn"
            variant="ghost"
            className={`cursor-pointer hover:bg-transparent text-base font-medium hover:text-blue-500 px-4 py-2 ${activeItem === "home" ? "text-blue-500" : ""}`}
            onClick={() => handleScrollTo("home")}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => handleButtonHover(e.currentTarget)}
          >
            Home
          </Button>
          <Button
            id="courses-btn"
            variant="ghost"
            className={`cursor-pointer hover:bg-transparent text-base font-medium hover:text-blue-500 px-4 py-2 ${activeItem === "courses" ? "text-blue-500" : ""}`}
            onClick={() => handleScrollTo("courses")}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => handleButtonHover(e.currentTarget)}
          >
            Courses
          </Button>
          <Button
            id="mentors-btn"
            variant="ghost"
            className={`cursor-pointer hover:bg-transparent text-base font-medium hover:text-blue-500 px-4 py-2 ${activeItem === "mentors" ? "text-blue-500" : ""}`}
            onClick={() => handleScrollTo("mentors")}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => handleButtonHover(e.currentTarget)}
          >
            Mentors
          </Button>
          <Button
            id="about-btn"
            variant="ghost"
            className={`cursor-pointer hover:bg-transparent text-base font-medium hover:text-blue-500 px-4 py-2 ${activeItem === "about" ? "text-blue-500" : ""}`}
            onClick={() => handleScrollTo("about")}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => handleButtonHover(e.currentTarget)}
          >
            About Us
          </Button>
          <Button
            id="contact-btn"
            variant="ghost" 
            className={`cursor-pointer hover:bg-transparent text-base font-medium hover:text-blue-500 px-4 py-2 ${activeItem === "contact" ? "text-blue-500" : ""}`}
            onClick={() => handleScrollTo("contact")}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => handleButtonHover(e.currentTarget)}
          >
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
              {isOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </>
              )}
            </svg>
          </Button>
        </div>
      </div>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-md"
        >
          <div className="flex flex-col p-2">
            <Button
              variant="ghost"
              className={`justify-start py-3 ${activeItem === "home" ? "text-blue-500" : ""}`}
              onClick={() => handleScrollTo("home")}
            >
              Home
            </Button>
            <Button
              variant="ghost"
              className={`justify-start py-3 ${activeItem === "courses" ? "text-blue-500" : ""}`}
              onClick={() => handleScrollTo("courses")}
            >
              Courses
            </Button>
            <Button
              variant="ghost"
              className={`justify-start py-3 ${activeItem === "mentors" ? "text-blue-500" : ""}`}
              onClick={() => handleScrollTo("mentors")}
            >
              Mentors
            </Button>
            <Button
              variant="ghost"
              className={`justify-start py-3 ${activeItem === "about" ? "text-blue-500" : ""}`}
              onClick={() => handleScrollTo("about")}
            >
              About Us
            </Button>
            <Button
              variant="ghost"
              className={`justify-start py-3 ${activeItem === "contact" ? "text-blue-500" : ""}`}
              onClick={() => handleScrollTo("contact")}
            >
              Contact
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
