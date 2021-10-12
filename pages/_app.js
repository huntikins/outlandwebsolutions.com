import '../styles/globals.scss'
import { Fragment } from 'react'
import Head from 'next/head'
import Nav from '../components/global/Nav'
import Footer from '../components/global/Footer'

function MyApp({ Component, pageProps }) {
	return (
		<Fragment>
			<Head>
				<title>Outland Web Solutions</title>
				<meta name="description" content="Web Development and Consulting" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Nav />
			<Component {...pageProps} />
			<Footer />
		</Fragment>
	)
}

export default MyApp
