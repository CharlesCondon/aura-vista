import React from 'react'
import styles from './Contact.module.scss';

function Contact() {
	return (
		<div className={styles.contactCont}>
			<div className={styles.contactHead}>
				<h1>Contact Us</h1>
				<p>Feel free to reach out to us anytime - our friendly team is here to assist you with any questions or concerns you may have!</p>
			</div>
			<div className={styles.contactFormCont}>
				<form
					className={styles.contactForm}
					id="contactForm"
					action="https://formspree.io/f/mzbnvyjo"
					method="POST"
				>
					<input
						className={styles.contactInput}
						type="text"
						name="name"
						placeholder="NAME*"
						required
					/>
					<input
						className={styles.contactInput}
						type="email"
						name="_replyto"
						placeholder="EMAIL*"
						required
					/>
					<input className={styles.contactInput} type="text" name="subject" placeholder="SUBJECT" />

					<textarea className={styles.contactInput} name="message" placeholder="MESSAGE"></textarea>

					<input className={styles.contactSubmit} type="submit" value="SEND" />
							
				</form>
			</div>
		</div>
	)
}

export default Contact