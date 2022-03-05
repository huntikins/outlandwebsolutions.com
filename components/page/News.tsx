import Image from 'next/image'
import Link from 'next/link'
import graphic from '../../public/assets/news.svg'

function NewsSection() {
  return (
    <section id="news" className="bg-purple-200 p-4 text-stone-900 lg:p-8">
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row lg:p-8">
        <div className="flex-1 py-8" data-aos="fade-right">
          <Image
            src={graphic}
            alt="Graphic of link icon with two persons next to it"
            width="480"
            height="277"
          />
        </div>
        <div className="flex-1 py-8" data-aos="fade-left">
          <h2 className="mb-8 font-brand  text-4xl lg:text-5xl">
            Get Connected
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            numquam dolorum inventore consequatur doloremque fuga perferendis
            molestiae atque quaerat vero, tenetur amet cum natus accusantium
            nesciunt odit! Deleniti, accusamus ipsum.
          </p>
          <Link href="/news">
            <a
              className="mt-8 inline-block bg-stone-900 py-3 px-5 text-center text-purple-200"
              data-aos="fade-in"
              data-aos-delay="500"
            >
              Check Out The Latest News
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NewsSection
