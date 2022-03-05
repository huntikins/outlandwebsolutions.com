import Thumbnail from '../../components/news/Thumbnail'
import type { NextPage, GetStaticProps } from 'next'
import { IPost } from '../../types/post'
import Link from 'next/link'
import { getAllPosts } from '../../utils/mdxUtils'
import Hero from '../../components/page/Hero';

import bkg from '../../public/assets/news.jpg'

// props type
type Props = {
  posts: [IPost]
}

// component render function
const News: NextPage<Props> = ({ posts }: Props) => {
    return (
      <main>
        <Hero label="Outland Web Solutions" bkg={bkg}>
          <div className="bg-stone-900 bg-opacity-80">
            <h1 className="animate-fadeIn rounded-lg p-8 text-center font-brand text-6xl uppercase text-purple-200 lg:text-9xl">
              News
            </h1>
          </div>
        </Hero>

        <div className="flex flex-col flex-wrap bg-purple-200 lg:flex-row">
          {posts.length ? (
            posts.map((post, index) => (
              <article
                key={post.slug}
                className="m-8 bg-stone-900 text-purple-200 lg:w-1/3"
                data-aos="fade-in"
                data-aos-delay={index*500}
              >
                <div className="mb-4">
                  <Thumbnail
                    slug={post.slug}
                    title={post.title}
                    src={post.thumbnail}
                  />
                </div>

                <div className="px-8 pb-8">
                  <h2 className="mb-4 text-2xl font-bold">
                    <Link href={`/news/${post.slug}`}>
                      <a>{post.title}</a>
                    </Link>
                  </h2>

                  <p>
                    {post.description}{' '}
                    <Link href={`/news/${post.slug}`}>
                      <a className="underline">Read More &gt;&gt;</a>
                    </Link>
                  </p>
                </div>
              </article>
            ))
          ) : (
            <div className="w-full p-8 text-center">
              <p>New Posts Coming Soon</p>
            </div>
          )}
        </div>
      </main>
    )
}

export default News

// get posts from serverside at build time
export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts([
    'title',
    'slug',
    'date',
    'description',
    'thumbnail',
  ])

  // retunr the posts props
  return { props: { posts } }
}
