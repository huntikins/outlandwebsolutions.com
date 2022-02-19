import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '../components/nav/Nav'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Outland Web Solutions</title>
      </Head>
      <Nav />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
