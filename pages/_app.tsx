import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '../components/nav/Nav'
import Head from 'next/head'
import Footer from '../components/nav/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Outland Web Solutions</title>
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
