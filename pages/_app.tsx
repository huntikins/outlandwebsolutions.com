import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '../components/nav/Nav'
import Head from 'next/head'
import Footer from '../components/nav/Footer'
import Script from 'next/script'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as ga from '../utils/ga'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
  
    const handleRouteChange = (url: string) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  const seo = {
    title: 'Outland Web Solutions',
    description: 'Full Service Web Development, Hosting, Maintenance & SEO',
    thumbnail: 'https://outlandwebsolutions.com/assets/ows.png',
    base_url: 'https://outlandwebsolutions.com',
    twitter: '@weboutland'
  }

  return (
    <>
      {/*<!-- End Google Tag Manager -->*/}
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-221009183-1');
`,
        }}
      />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-221009183-1"
      />
      {/*<!-- End Google Tag Manager -->*/}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6990879659890248"
        crossOrigin="anonymous"
      />
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
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
