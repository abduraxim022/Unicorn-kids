import React from 'react'
import Navbar from './pages/Navbar'
import HeroSection from './pages/HeroSection'
import Footer from './pages/Footer'
import CoursesSection from './pages/Coursessection'
import FAQ from './pages/Faq'
import MarqueeDemo from '@/components/marquee'
import SkillsMasterySection from './pages/FeaturesSection'
import TeamShowcase from './pages/Teachers'
import SubscriptionBanner from './pages/SubscriptionBanner'
import Unicourse from './pages/Unicourse'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <MarqueeDemo/>
      <Unicourse/>
      <SkillsMasterySection/>
      <CoursesSection/>
      <TeamShowcase/>
      <FAQ/>
      <SubscriptionBanner/>
      <Footer/>
      
    </div>
  )
}

export default Home