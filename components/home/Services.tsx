import developer from '../../public/assets/developer.svg'
import hosting from '../../public/assets/hosting.svg'
import seo from '../../public/assets/seo.svg'
import Image from 'next/image'

export default function ServicesSection() {
  return (
    <section className="bg-purple-200 p-8 text-stone-900">
      <div className="flex w-full flex-col justify-center py-8 lg:order-last">
        <h2 className="mb-8 w-full text-center font-brand text-5xl">
          Out of This World Web Solutions
        </h2>
        <p className="w-full text-center lg:mx-auto lg:w-1/2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
          doloribus optio necessitatibus repellendus molestiae fuga rem ab
          inventore, excepturi officia facilis perspiciatis suscipit hic
          reprehenderit facere modi eligendi dolore cum!
        </p>
      </div>
      <div className="flex flex-col flex-wrap lg:flex-row">
        <article className="flex w-full flex-col justify-between p-8 lg:w-1/3">
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
        <article className="flex w-full flex-col justify-between p-8 lg:w-1/3">
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
        <article className="flex w-full flex-col justify-between p-8 lg:w-1/3">
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
