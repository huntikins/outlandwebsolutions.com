import type { NextPage } from 'next'
import Hero from '../components/page/Hero'
import Image from 'next/image'

import bkg from '../public/assets/OWS-hero.jpg'
import NewsSection from '../components/page/News'
import ServicesSection from '../components/page/Services'
import { ContactSection } from '../components/page/Contact'
import CallToAction from '../components/page/CallToAction'

const Home: NextPage = () => {
  return (
    <main>
      <CallToAction/>
      <ServicesSection />
      <NewsSection />
      <ContactSection pageName="Home" />
    </main>
  )
}

export default Home
