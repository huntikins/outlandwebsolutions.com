import Image from 'next/image'
import Link from 'next/link'
import graphic from '../../public/assets/news.svg'

function NewsSection() {
  return (
    <section id="news" className="bg-purple-200 p-4 lg:p-8 text-stone-900">
      <div className="mx-auto flex max-w-7xl flex-col lg:p-8 lg:flex-row">
        <div className="flex-1 py-8">
          <Image
            src={graphic}
            alt="Graphic of link icon with two persons next to it"
            width="480"
            height="277"
          />
        </div>
        <div className="flex-1 py-8">
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
            <a className="mt-8 inline-block bg-stone-900 py-3 px-5 text-center text-purple-200">
              Check Out The Latest News
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NewsSection
