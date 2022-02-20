import { serialize } from 'next-mdx-remote/serialize'
import { GetStaticProps, GetStaticPaths } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

import Thumbnail from '../../components/news/Thumbnail'
import { IPost } from '../../types/post'
import { getPost, getAllPosts } from '../../utils/mdxUtils'
import { ParsedUrlQuery } from 'querystring'

// props type
type Props = {
  source: MDXRemoteSerializeResult
  frontMatter: Omit<IPost, 'slug'>
}

const PostPage: React.FC<Props> = ({ source, frontMatter }: Props) => {

  return (
    <main className='bg-purple-200'>
      <article className='p-8'>
        <h1 className="animate-fadeIn p-8 text-center font-brand text-3xl uppercase text-stone-900 lg:text-6xl">
          {frontMatter.title}
        </h1>
        <div className="mx-auto w-2/3 py-8">
          <Thumbnail title={frontMatter.title} src={frontMatter.thumbnail} />
        </div>
        <div className="p-8 max-w-7xl mx-auto text-lg">
          <MDXRemote {...source} />
        </div>
      </article>
    </main>
  )
}

export default PostPage

interface Iparams extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Iparams
  // get the slug
  const { content, data } = getPost(slug)
  // serialize the data on the server side
  const mdxSource = await serialize(content, { scope: data })
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  //only get the slug from posts
  const posts = getAllPosts(['slug'])

  // map through to return post paths
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}
