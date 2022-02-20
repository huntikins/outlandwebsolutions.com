import type { NextPage } from 'next'
import Hero from '../components/page/Hero'
import Image from 'next/image'

import bkg from '../public/assets/OWS-hero.jpg'
import NewsSection from '../components/page/News'
import ServicesSection from '../components/page/Services'
import { ContactSection } from '../components/page/Contact'

const Home: NextPage = () => {
  return (
    <main>
      <Hero label="Outland Web Solutions" bkg={bkg}>
        <h1 className="animate-fadeIn rounded-lg bg-stone-900 p-8 text-center font-brand text-6xl uppercase text-purple-200 lg:text-9xl">
          Outland
          <span className="block text-3xl lg:text-5xl">Web Solutions</span>
        </h1>
      </Hero>
      <NewsSection />
      <ServicesSection />
      <ContactSection pageName="Home" />
    </main>
  )
}

export default Home
