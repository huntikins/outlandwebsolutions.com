import Thumbnail from '../../components/news/Thumbnail'
import type { NextPage, GetStaticProps } from 'next'
import { IPost } from '../../types/post'
import Link from 'next/link'
import { getAllPosts } from '../../utils/mdxUtils'

// props type
type Props = {
  posts: [IPost]
}

// component render function
const News: NextPage<Props> = ({ posts }: Props) => {
    return (
      <main className="p-8">
        <h1 className="mb-8 font-brand text-4xl font-bold text-center">Latest News</h1>

        <div className="flex flex-col flex-wrap lg:flex-row">
          {posts.length ? posts.map((post) => (
            <article key={post.slug} className="w-full p-8 lg:w-1/3">
              <div className="mb-4">
                <Thumbnail
                  slug={post.slug}
                  title={post.title}
                  src={post.thumbnail}
                />
              </div>

              <h2 className="mb-4 text-2xl font-bold">
                <Link href={`/news/${post.slug}`}>
                  <a>{post.title}</a>
                </Link>
              </h2>

              <p>
                {post.description}{' '}
                <Link href={`/news/${post.slug}`}>
                  <a className="underline">
                    Read More &gt;&gt;
                  </a>
                </Link>
              </p>
            </article>
          )) : (
              <p className='text-center w-full'>No Posts Yet</p>
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
