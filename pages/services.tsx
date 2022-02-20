import { NextPage } from "next/types";
import Hero from "../components/page/Hero";
import Link from 'next/link'
import Image from 'next/image'
import graphic from '../public/assets/developer.svg'
import hosting from '../public/assets/hosting.svg'
import seo from '../public/assets/seo.svg'

import bkg from "../public/assets/services.jpg";

const Services: NextPage = () => {
    return (
      <main>
        <Hero label="Outland Web Solutions" bkg={bkg}>
          <h1 className="animate-fadeIn rounded-lg bg-stone-900 p-8 text-center font-brand text-5xl uppercase text-purple-200 lg:text-9xl">
            Services
          </h1>
        </Hero>
        <section
          id="development"
          className="bg-purple-200 py-10 text-stone-900"
        >
          <div className="mx-auto flex max-w-7xl flex-col p-8 lg:flex-row">
            <div className="order-last flex-1 py-8 lg:order-first">
              <h2 className="mb-8 font-brand text-5xl">
                Custom Web Development
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                numquam dolorum inventore consequatur doloremque fuga
                perferendis molestiae atque quaerat vero, tenetur amet cum natus
                accusantium nesciunt odit! Deleniti, accusamus ipsum.
              </p>
              <Link href="/contact">
                <a className="mt-8 inline-block bg-stone-900 py-3 px-5 text-center text-purple-200">
                  Tell us your website needs
                </a>
              </Link>
            </div>
            <div className="flex-1 py-8">
              <Image
                src={graphic}
                alt="Graphic of link icon with two persons next to it"
                width="480"
                height="277"
              />
            </div>
          </div>
        </section>
        <section id="hosting" className="bg-stone-900 py-10 text-purple-200">
          <div className="mx-auto flex max-w-7xl flex-col p-8 lg:flex-row">
            <div className="flex-1 py-8">
              <Image
                src={hosting}
                alt="Graphic of link icon with two persons next to it"
                width="480"
                height="277"
              />
            </div>
            <div className="flex-1 py-8">
              <h2 className="mb-8 font-brand text-5xl">
                Web Hosting & Maintenance
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                numquam dolorum inventore consequatur doloremque fuga
                perferendis molestiae atque quaerat vero, tenetur amet cum natus
                accusantium nesciunt odit! Deleniti, accusamus ipsum.
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
          <div className="mx-auto flex max-w-7xl flex-col p-8 lg:flex-row">
            <div className="order-last flex-1 py-8 lg:order-first">
              <h2 className="mb-8 font-brand text-5xl">
                Search Engine Optimization
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                numquam dolorum inventore consequatur doloremque fuga
                perferendis molestiae atque quaerat vero, tenetur amet cum natus
                accusantium nesciunt odit! Deleniti, accusamus ipsum.
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

export default Services;