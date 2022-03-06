import type { NextPage } from 'next'
import Hero from '../components/page/Hero'

import bkg from '../public/assets/OWS-hero.jpg'
import NewsSection from '../components/page/News'
import ServicesSection from '../components/page/Services'
import { ContactSection } from '../components/page/Contact'
import CallToAction from '../components/page/CallToAction'

const Home: NextPage = () => {
  return (
    <main>
      <Hero label="Outland Web Solutions" bkg={bkg}>
        <div className="bg-stone-900 bg-opacity-80">
          <h1 className="animate-fadeIn rounded-lg p-8 text-center font-brand text-5xl uppercase text-purple-200 lg:text-9xl">
            Outland
            <span className="block text-2xl lg:text-5xl">Web Solutions</span>
          </h1>
        </div>
      </Hero>
      <CallToAction />
      <ServicesSection />
      <NewsSection />
      <ContactSection pageName="Home" />
    </main>
  )
}

export default Home
