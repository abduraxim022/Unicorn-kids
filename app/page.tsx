import React from 'react'
import Navbar from './pages/Navbar'
import HeroSection from './pages/HeroSection'
import Footer from './pages/Footer'
import CoursesSection from './pages/Coursessection'
import FAQ from './pages/Faq'
import MarqueeDemo from '@/components/marquee'
import SkillsMasterySection from './pages/FeaturesSection'
import TeamShowcase from './pages/Teachers'
import TestimonialSection from './pages/Teachercomment'
import SubscriptionBanner from './pages/SubscriptionBanner'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <MarqueeDemo/>
      <SkillsMasterySection/>
      <CoursesSection/>
      <TeamShowcase/>
      <TestimonialSection/>
      <FAQ/>
      <SubscriptionBanner/>
      <Footer/>
      
    </div>
  )
}

export default Home