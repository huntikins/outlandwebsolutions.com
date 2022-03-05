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
      <div className="bg-purple-200 pt-4">
        <h1 className="animate-fadeIn rounded-lg p-4 lg:p-8 text-center font-brand text-6xl uppercase text-stone-900 lg:text-9xl">
          Outland
          <span className="block text-3xl lg:text-5xl">Web Solutions</span>
        </h1>
      </div>
      <CallToAction/>
      <ServicesSection />
      <NewsSection />
      <ContactSection pageName="Home" />
    </main>
  )
}

export default Home
