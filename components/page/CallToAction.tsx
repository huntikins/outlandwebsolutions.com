import Link from "next/link";
import Image from "next/image";
import graphic from '../../public/assets/home-hero.svg'

export default function CallToAction() {
    
    return (
      <section className="bg-purple-200 text-stone-900">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center p-4 lg:flex-row lg:p-8">
          <div
            className="order-last flex-1 lg:order-first lg:py-8"
          >
            <h2 className="mb-8 font-brand text-4xl lg:text-5xl">
              Out of This World Web Solutions
            </h2>
            <p>
              Welcome to the Outlands! If you are looking for a new site or need some help with an existing one we are here to help every step of the way.
            </p>
            <Link href="/contact">
              <a
                className="mt-8 inline-block bg-stone-900 py-3 px-5 text-center text-purple-200"
              >
                Let us know how we can help
              </a>
            </Link>
          </div>
          <div className="flex-1 py-8">
            <Image
              src={graphic}
              alt="Graphic of link icon with two persons next to it"
              width="651"
              height="586"
            />
          </div>
        </div>
      </section>
    )
}