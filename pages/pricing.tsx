import { NextPage } from 'next/types'
import Hero from '../components/page/Hero'
import Calculator from '../components/pricing/Calculator'

import bkg from '../public/assets/pricing.jpg'

const Pricing: NextPage = () => {
  return (
    <main>
      <Hero label="Outland Web Solutions" bkg={bkg}>
        <div className="bg-stone-900 bg-opacity-80">
          <h1 className="animate-fadeIn rounded-lg p-8 text-center font-brand text-5xl uppercase text-purple-200 lg:text-9xl">
            Pricing
          </h1>
        </div>
      </Hero>
      <Calculator />
    </main>
  )
}

export default Pricing
