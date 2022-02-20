import type { NextPage } from 'next'
import Hero from '../components/page/Hero'
import Image from 'next/image'

import bkg from '../public/assets/OWS-hero.jpg'
import NewsSection from '../components/page/News'
import ServicesSection from '../components/page/Services'
import { ContactSection } from '../components/page/Contact'
import { useEffect, useRef } from 'react';

const Home: NextPage = () => {

  return (
    <main>
      <Hero label="Outland Web Solutions" bkg={bkg}>
        <h1 className="animate-fadeIn text-center font-brand text-6xl uppercase text-purple-200 lg:text-9xl">
          Outland
          <span className="block text-3xl lg:text-5xl">Web Solutions</span>
        </h1>
        <a
          aria-hidden="true"
          href="#news"
          className="block flex w-full animate-fadeIn items-center justify-center "
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            className="mt-24 h-12 animate-bounce text-purple-200 lg:h-14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.8285 12.0259L16.2427 13.4402L12 17.6828L7.7574 13.4402L9.17161 12.0259L11 13.8544V6.31724H13V13.8544L14.8285 12.0259Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.7782 19.7782C15.4824 24.0739 8.51759 24.0739 4.22183 19.7782C-0.0739417 15.4824 -0.0739417 8.51759 4.22183 4.22183C8.51759 -0.0739419 15.4824 -0.0739419 19.7782 4.22183C24.0739 8.51759 24.0739 15.4824 19.7782 19.7782ZM18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364C2.12132 14.8492 2.12132 9.15076 5.63604 5.63604C9.15076 2.12132 14.8492 2.12132 18.364 5.63604C21.8787 9.15076 21.8787 14.8492 18.364 18.364Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </Hero>
      <NewsSection />
      <ServicesSection />
      <ContactSection pageName='Home'/>
    </main>
  )
}

export default Home
