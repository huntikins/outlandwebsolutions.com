import styles from './Footer.module.scss'
import Image from 'next/image'
import logo from '../../public/images/logo-text-black.png'
import Link from 'next/link'

function Footer() {
	function getYear() {
		let date = new Date(),
			year = date.getFullYear()
		return year
	}
	const currYear = getYear()
	return (
		<footer className={styles.footer}>
			<nav>
				<ul>
					<li>
						<Link href="/about">About</Link>
					</li>
					<li>
						<Link href="/services">Services</Link>
					</li>
					<li>
						<Link href="/">
							<a>
								<Image
									src={logo}
									width="156"
									height="39"
									alt="Outland Web Solutions"
									placeholder="blur"
								/>
							</a>
						</Link>
					</li>
					<li>
						<Link href="/news">News</Link>
					</li>
					<li>
						<Link href="/contact">Contact</Link>
					</li>
				</ul>
				<div className={styles.footer_copy}>
					<p>
						<small>&copy;{currYear} Outland Web Solutions</small>
					</p>
				</div>
			</nav>
		</footer>
	)
}

export default Footer
