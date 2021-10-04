import styles from './Contact.module.css'

export default function ContactForm() {
	return (
		<form className={styles.form}>
			<h2>CTA goes here</h2>
			<div className={styles.formGroup}>
				<label id="email-label" for="email-input" data-required="true">
					Email
				</label>
				<input
					id="email-input"
					aria-labelledby="email-label"
					type="email"
					name="email"
					autocomplete="email"
					required
					placeholder=""
					inputmode="email"
					aria-invalid="true"
					aria-required="true"
					data-field-type="email"
				/>
			</div>
			<div className={styles.formGroup}>
				<label id="firstname-label" for="firstname-input" data-required="true">
					First Name
				</label>
				<input
					id="firstname-input"
					aria-labelledby="firstname-label"
					type="text"
					name="firstname"
					autocomplete="firstname"
					required
					placeholder=""
					inputmode="firstname"
					aria-invalid="true"
					aria-required="true"
					data-field-type="firstname"
				/>
			</div>
			<div className={styles.formGroup}>
				<label id="lastname-label" for="lastname-input" data-required="true">
					Last Name
				</label>
				<input
					id="lastname-input"
					aria-labelledby="lastname-label"
					type="text"
					name="lastname"
					autocomplete="lastname"
					required
					placeholder=""
					inputmode="lastname"
					aria-invalid="true"
					aria-required="true"
					data-field-type="lastname"
				/>
			</div>
			<div className={styles.formGroup}>
				<label id="message-label" for="message-input" data-required="true">
					Message
				</label>
				<textarea
					id="message-input"
					aria-labelledby="message-label"
					name="message"
					autocomplete="message"
					required
					placeholder=""
					inputmode="message"
					aria-invalid="true"
					aria-required="true"
					data-field-type="message"
				/>
			</div>
			<div className={styles.formGroup}>
				<p className={styles.legalDisclaimer}>
					By clicking submit below, you consent to allow Outland Web Solutions
					to store and process the personal information submitted above to
					provide you the content requested.
				</p>
				<input type="submit" value="Submit" className={styles.submit} />
			</div>
		</form>
	)
}
