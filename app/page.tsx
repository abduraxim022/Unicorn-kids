import React from 'react'
import Navbar from './pages/Navbar'
import HeroSection from './pages/HeroSection'
import Featuresection from './pages/FeaturesSection'
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
      <FAQ/>
      <Footer/>
      
    </div>
  )
}

export default Home