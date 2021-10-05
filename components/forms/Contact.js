import styles from './Contact.module.scss'

export default function ContactForm() {
	return (
		<form className={styles.form}>
			<div className={styles.formGroup}>
				<h1>Let&apos;s find your web solution together</h1>
				<label id="email-label" htmlFor="email-input" data-required="true">
					Email<span>*</span>
				</label>
				<input
					id="email-input"
					aria-labelledby="email-label"
					type="email"
					name="email"
					autoComplete="email"
					required
					placeholder=""
					inputMode="email"
					aria-invalid="true"
					aria-required="true"
					data-field-type="email"
				/>
			</div>
			<div className={styles.formGroup}>
				<label
					id="firstname-label"
					htmlFor="firstname-input"
					data-required="true"
				>
					First Name<span>*</span>
				</label>
				<input
					id="firstname-input"
					aria-labelledby="firstname-label"
					type="text"
					name="firstname"
					autoComplete="firstname"
					required
					placeholder=""
					inputMode="firstname"
					aria-invalid="true"
					aria-required="true"
					data-field-type="firstname"
				/>
			</div>
			<div className={styles.formGroup}>
				<label
					id="lastname-label"
					htmlFor="lastname-input"
					data-required="true"
				>
					Last Name<span>*</span>
				</label>
				<input
					id="lastname-input"
					aria-labelledby="lastname-label"
					type="text"
					name="lastname"
					autoComplete="lastname"
					required
					placeholder=""
					inputMode="lastname"
					aria-invalid="true"
					aria-required="true"
					data-field-type="lastname"
				/>
			</div>
			<div className={styles.formGroup}>
				<label id="message-label" htmlFor="message-input" data-required="true">
					Message
				</label>
				<textarea
					id="message-input"
					aria-labelledby="message-label"
					name="message"
				/>
			</div>
			<div className={styles.formGroup}>
				<p className={styles.legalDisclaimer}>
					By clicking submit below, you consent to allow Outland Web Solutions
					to store and process the personal information submitted above to
					provide you the content requested.
				</p>
				<input
					type="submit"
					value="Submit"
					className="btn btn-primary btn-block"
				/>
			</div>
		</form>
	)
}
