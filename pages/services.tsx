import { NextPage } from 'next/types'
import Hero from '../components/page/Hero'
import Link from 'next/link'
import Image from 'next/image'
import graphic from '../public/assets/developer.svg'
import hosting from '../public/assets/hosting.svg'
import seo from '../public/assets/seo.svg'

import bkg from '../public/assets/services.jpg'

const Services: NextPage = () => {
  return (
    <main>
      <Hero label="Outland Web Solutions" bkg={bkg}>
        <div className="bg-stone-900 bg-opacity-80">
          <h1 className="animate-fadeIn rounded-lg p-4 text-center font-brand text-5xl uppercase text-purple-200 lg:p-8 lg:text-9xl">
            Services
          </h1>
        </div>
      </Hero>
      <section id="development" className="bg-purple-200 py-10 text-stone-900">
        <div
          className="mx-auto flex max-w-7xl flex-col p-4 lg:flex-row lg:p-8"
          data-aos="fade-right"
        >
          <div className="order-last flex-1 py-8 lg:order-first">
            <h2 className="mb-8 font-brand text-4xl lg:text-5xl">
              Custom Web Development
            </h2>
            <p className="mb-4">
              We pride ourselves on the complete customization of your
              full-service website.Your site will be tailored to you, so you can
              easily integrate personalized branding and the atmosphere you
              need.
            </p>
            <ul className="pl-4">
              <li className="mb-2">
                <span className="font-extrabold underline">Step 1:</span> Attend your Discovery
                Session We’ll meet with you to discuss your needs, wants, and
                the online environment you’d like to create.
              </li>
              <li className="mb-2">
                <span className="font-extrabold underline">Step 2:</span> Choose your support
                tier We offer multiple tiers to get you exactly what you need at
                a price that works for your budget.{' '}
                <Link href="/contact">
                  <a className="font-extrabold underline">Contact us</a>
                </Link>{' '}
                for a breakdown of these details.
              </li>
              <li className="mb-2">
                <span className="font-extrabold underline">Step 3:</span> Develop your design
                We’ll work with you to make sure every detail matches your
                unique vision.
              </li>
            </ul>
            <p className="mt-4">
              Our webpages are designed to be user-friendly, so you can choose
              to make your own edits, or leave it to us…
            </p>
            <Link href="/contact">
              <a className="mt-8 inline-block bg-stone-900 py-3 px-5 text-center text-purple-200">
                Tell us your website needs
              </a>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-center p-8">
            <Image
              src={graphic}
              alt="Graphic of link icon with two persons next to it"
              width="541"
              height="471"
            />
          </div>
        </div>
      </section>
      <section id="hosting" className="bg-stone-900 py-10 text-purple-200">
        <div
          className="mx-auto flex max-w-7xl flex-col p-4 lg:flex-row lg:p-8"
          data-aos="fade-left"
        >
          <div className="flex-1 py-8">
            <Image
              src={hosting}
              alt="Graphic of link icon with two persons next to it"
              width="480"
              height="277"
            />
          </div>
          <div className="flex-1 py-8">
            <h2 className="mb-8 font-brand text-4xl lg:text-5xl">
              Web Hosting & Maintenance
            </h2>
            <p>
              Keeping your website fresh and up to date should be easy and
              painless. Whether we built it or someone else did, we’ll host your
              site and maintain it with the latest security monitoring. It’s our
              mission to make sure your website can keep up with you, so whether
              it’s adding new features, or updating existing content - we’ve got
              you.
            </p>
            <Link href="/contact">
              <a className="mt-8 inline-block bg-purple-200 py-3 px-5 text-center text-stone-900">
                Let us know how we can help
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section id="SEO" className="bg-purple-200 py-10 text-stone-900">
        <div
          className="mx-auto flex max-w-7xl flex-col p-4 lg:flex-row lg:p-8"
          data-aos="fade-right"
        >
          <div className="order-last flex-1 py-8 lg:order-first">
            <h2 className="mb-8 font-brand text-4xl lg:text-5xl">
              Search Engine Optimization
            </h2>
            <p>
              Don’t let your site get left lightyears behind! Let us make sure
              your webpage can be easily found. Your website will be optimized
              from the moment it’s live, and can be readily updated with ongoing
              maintenance.
            </p>
            <Link href="/contact">
              <a className="mt-8 inline-block bg-stone-900 py-3 px-5 text-center text-purple-200">
                Time to get you ranked
              </a>
            </Link>
          </div>
          <div className="flex-1 py-8">
            <Image
              src={seo}
              alt="Graphic of search bar with a few search company logo's"
              width="480"
              height="277"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Services
