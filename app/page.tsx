import React from 'react'
import Navbar from './pages/Navbar'
import HeroSection from './pages/HeroSection'
import Featuresection from './pages/FeaturesSection'
import Testimonialsection from './pages/TestimonialsSection'
import Contactsection from './pages/ContactSection '
import Footer from './pages/Footer'
import CoursesSection from './pages/Coursessection'
import FAQ from './pages/Faq'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Featuresection/>
      <CoursesSection/>
      {/* <Testimonialsection/> */}
      <FAQ/>
      {/* <Contactsection/> */}
      <Footer/>
      
    </div>
  )
}

export default Home