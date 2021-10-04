import styles from './Hero.module.css'
import ContactForm from './forms/Contact'

import Image from 'next/image'

function Hero() {
	return (
		<section
			role="contentinfo"
			aria-label="Hero call to action"
			className={styles.hero}
		>
			<div className="container">
				<div className="row">
					<div className="col-split align-center">
						<div className={styles.heroText}>
							<h1>Web Development &&nbsp;Consulting</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
							</p>
							<button type="button">About Us</button>
						</div>
					</div>
					<div className="col-split align-center">
						<ContactForm />
					</div>
				</div>
			</div>
		</section>
	)
}
export default Hero
