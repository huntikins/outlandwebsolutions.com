import styles from './Hero.module.scss'
import Image from 'next/image'

function Hero(props) {
	return (
		<section
			role="contentinfo"
			aria-label={props.label}
			className={styles.hero}
		>
			<Image
				src={props.bkg}
				alt={props.imgAlt}
				layout="fill"
				className={styles.hero_img}
			/>
			<div className={styles.hero_content}>
				<div>{props.children}</div>
			</div>
		</section>
	)
}

export default Hero
