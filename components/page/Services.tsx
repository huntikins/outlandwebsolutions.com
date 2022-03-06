import developer from '../../public/assets/developer.svg'
import hosting from '../../public/assets/hosting.svg'
import seo from '../../public/assets/seo.svg'
import Image from 'next/image'
import Link from 'next/link'
import graphic from '../../public/assets/services.svg';

export default function ServicesSection() {
  return (
    <section className="bg-stone-900 p-4 text-purple-200 lg:p-8">
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row lg:p-8">
        <div className="flex-1 py-8" data-aos="fade-left">
          <h2 className="mb-8 font-brand text-4xl lg:text-5xl">
            Full Service Web Development
          </h2>
          <p className='mb-8'>
            At Outland Web Solutions, we can build your 100% unique and
            customizable website. Let us host and maintain your site (whether we
            built it or not) and keep you on everyone’s radar with search engine
            optimization. Check out our services and let us know when you’re
            ready to say “go for launch” on your new site.
          </p>
          <Link href="/services">
            <a
              className="inline bg-purple-200 py-3 px-5 text-stone-900"
              data-aos="fade-in"
              data-aos-delay="500"
            >
              Our services at your disposal
            </a>
          </Link>
        </div>
        <div className="flex-1 py-8 hidden lg:flex" data-aos="fade-right">
          <Image
            src={graphic}
            alt="Graphic of link icon with two persons next to it"
            width="480"
            height="277"
          />
        </div>
      </div>
      <div className="flex flex-col flex-wrap py-8 lg:flex-row">
        <article
          className="flex w-full flex-col justify-between lg:w-1/3 lg:p-8"
          data-aos="fade-right"
        >
          <div className="align-center mx-auto flex h-full w-full justify-center lg:w-1/2">
            <Image
              src={developer}
              alt="Graphic of developer working behind a monitor"
              height="111"
              width="127"
            />
          </div>
          <h3 className="p-8 text-center font-brand text-3xl">
            Custom Web Development
          </h3>
        </article>
        <article
          className="flex w-full flex-col justify-between lg:w-1/3 lg:p-8"
          data-aos="fade-up"
        >
          <div className="align-center mx-auto flex h-full w-full justify-center lg:w-1/2">
            <Image
              src={hosting}
              alt="Graphic of developer working behind a monitor"
              height="111"
              width="127"
            />
          </div>
          <h3 className="p-8 text-center font-brand text-3xl">
            Web Hosting & Maintenance
          </h3>
        </article>
        <article
          className="flex w-full flex-col justify-between lg:w-1/3 lg:p-8"
          data-aos="fade-left"
        >
          <div className="align-center mx-auto flex h-full w-full justify-center lg:w-1/2">
            <Image
              src={seo}
              alt="Graphic of developer working behind a monitor"
              height="111"
              width="127"
            />
          </div>
          <h3 className="p-8 text-center font-brand text-3xl">
            Search Engine Optimization
          </h3>
        </article>
      </div>
    </section>
  )
}
