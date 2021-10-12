import styles from './Nav.module.scss'
import Image from 'next/image'
import logo from '../../public/images/logo-text-black.png'
import Link from 'next/link'

function Nav() {
	return (
		<header className={styles.nav}>
			<nav className={styles.nav_bar}>
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
				<ul>
					<li>
						<Link href="/about">About</Link>
					</li>
					<li>
						<Link href="/services">Services</Link>
					</li>
					<li>
						<Link href="/news">News</Link>
					</li>
					<li>
						<Link href="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Nav
