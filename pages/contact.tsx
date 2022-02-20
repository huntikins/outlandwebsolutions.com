import { NextPage } from 'next/types'
import { ContactSection } from '../components/home/Contact'
import Hero from '../components/home/Hero'

import bkg from '../public/assets/contact.jpg'

const Contact: NextPage = () => {
  return (
    <main>
      <Hero label="Outland Web Solutions" bkg={bkg}>
        <h1 className="animate-fadeIn bg-stone-900 p-8 text-center font-brand text-5xl uppercase text-purple-200 lg:text-9xl">
          Contact
        </h1>
      </Hero>
      <ContactSection pageName="Contact" />
    </main>
  )
}

export default Contact
