import Link from "next/link";
import Image from "next/image";
import graphic from '../../public/assets/home-hero.svg'

export default function CallToAction() {
    
    return (
      <section className="bg-purple-200 text-stone-900">
        <div className="pt-4">
          <h1
            className="rounded-lg p-4 text-center font-brand text-6xl uppercase lg:p-8 lg:text-9xl"
            data-aos="fade-down"
          >
            Outland
            <span className="block text-3xl lg:text-5xl">Web Solutions</span>
          </h1>
        </div>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center p-4 lg:flex-row lg:p-8">
          <div
            className="order-last flex-1 lg:order-first lg:py-8"
            data-aos="fade-right"
          >
            <h2 className="mb-8 font-brand text-4xl lg:text-5xl">
              Out of This World Web Solutions
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              numquam dolorum inventore consequatur doloremque fuga perferendis
              molestiae atque quaerat vero, tenetur amet cum natus accusantium
              nesciunt odit! Deleniti, accusamus ipsum.
            </p>
            <Link href="/contact">
              <a
                className="mt-8 inline-block bg-stone-900 py-3 px-5 text-center text-purple-200"
                data-aos="fade-in"
                data-aos-delay="500"
              >
                Let us know how we can help
              </a>
            </Link>
          </div>
          <div className="flex-1 py-8" data-aos="fade-up">
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