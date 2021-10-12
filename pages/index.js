import Hero from '../components/Hero'
import Image from 'next/image'

import logo from '../public/images/logo-full-white.png'
import bkg from '../public/images/OWS-hero.jpg'
import develop from '../public/images/undraw_Code_thinking_re_gka2.svg'

function Home() {
	return (
		<main>
			<Hero
				label="Outland Web Solutions"
				imgAlt="Sublime purple night sky; Photo by Vincentiu Solomon on Unsplash"
				bkg={bkg}
			>
				<Image
					src={logo}
					width="500"
					height="195"
					alt="Outland Web Solutions"
					placeholder="blur"
					quality="100"
				/>
			</Hero>
			<section className="bg-dark">
				<div className="container">
					<div className="row">
						<div className="col-split">
							<Image
								src={develop}
								width="1019"
								height="436"
								alt="SVG Illusatation from UnDraw depicting a developer sitting next to a laptop"
							/>
						</div>
						<div className="col-split text-white">
							<h1>Hello World</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

export default Home
