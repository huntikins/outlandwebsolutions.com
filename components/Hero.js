import styles from './Hero.module.scss'

function Hero(props) {
	const sectionStye = {
		backgroundImage: `url(${props.bkg.src})`,
		backgroundSize: 'cover',
		backgroundPosition: 'bottom',
	}
	return (
		<section
			role="contentinfo"
			aria-label={props.label}
			className={styles.hero}
			style={sectionStye}
		>
			<div className={styles.hero_content}>
				<div>{props.children}</div>
			</div>
		</section>
	)
}

export default Hero
