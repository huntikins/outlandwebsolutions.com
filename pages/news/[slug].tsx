import { serialize } from 'next-mdx-remote/serialize'
import { GetStaticProps, GetStaticPaths } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

import Thumbnail from '../../components/news/Thumbnail'
import { IPost } from '../../types/post'
import { getPost, getAllPosts } from '../../utils/mdxUtils'
import { ParsedUrlQuery } from 'querystring'
import Head from 'next/head'
import { useRouter } from 'next/router'

// props type
type Props = {
  source: MDXRemoteSerializeResult
  frontMatter: Omit<IPost, 'slug'>
}

const PostPage: React.FC<Props> = ({ source, frontMatter }: Props) => {

  const router = useRouter()

  const seo = {
    title: frontMatter.title,
    description: frontMatter.description,
    thumbnail: `https://outlandwebsolutions.com${frontMatter.thumbnail}`,
    base_url: 'https://outlandwebsolutions.com',
    twitter: '@weboutland',
  }

  console.log(seo.thumbnail)

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:image" content={seo.thumbnail} />
        <meta property="og:site_name" content={seo.title} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://outlandwebsolutions.com${router.pathname}`}
        />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={seo.twitter} />
        <meta name="twitter:creator" content="@trammellwebdev" />
        <meta
          name="twitter:url"
          content={`https://outlandwebsolutions.com${router.pathname}`}
        />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.thumbnail} />
      </Head>
      <main>
        <article className="mx-auto max-w-5xl">
          <div className="mx-auto w-full lg:w-2/3 lg:py-8">
            <Thumbnail title={frontMatter.title} src={frontMatter.thumbnail} />
          </div>
          <h1 className="animate-fadeIn p-4 text-center font-brand text-xl uppercase text-stone-900 lg:text-2xl">
            {frontMatter.title}
          </h1>
          <div className="ows_article mx-auto max-w-7xl p-4">
            <MDXRemote {...source} />
          </div>
        </article>
      </main>
    </>
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
