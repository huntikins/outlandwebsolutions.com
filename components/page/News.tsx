import Image from 'next/image'
import Link from 'next/link'
import graphic from '../../public/assets/news.svg'

function NewsSection() {
  return (
    <section id="news" className="py-10 bg-stone-900 text-purple-200">
      <div className="mx-auto flex max-w-7xl p-8 lg:flex-row flex-col">
        <div className="flex-1 lg:order-first order-last py-8">
          <h2 className="text-5xl mb-8 font-brand">Get Connected</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            numquam dolorum inventore consequatur doloremque fuga perferendis
            molestiae atque quaerat vero, tenetur amet cum natus accusantium
            nesciunt odit! Deleniti, accusamus ipsum.
          </p>
          <Link href="/news">
            <a className="inline-block bg-purple-200 text-stone-800 mt-8 py-3 px-5 text-center">Check Out The Latest News</a>
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
  )
}

export default NewsSection
