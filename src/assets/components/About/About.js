import React from 'react'
import styles from './About.module.scss';
import travel1 from '../../images/travel1.jpg';
import travel2 from '../../images/travel2.jpg';
import travel3 from '../../images/travel3.jpg';

function About() {
	return (
		<div className={styles.aboutCont}>
			<div className={styles.aboutHead}>
				<h1>About Us</h1>
				<p>At Aura Vista, we harness the power of AI to curate dream vacation spots based on specific images that resonate with our users. Our innovative service is designed to make vacation planning a seamless and personalized experience.</p>
			</div>
			<div className={styles.aboutSect}>
				<div className={styles.aboutText}>
					<h2>Our Mission</h2>
					<p>We are dedicated to revolutionizing the way people discover and plan their vacations by providing tailored recommendations through cutting-edge AI technology. Our aim is to inspire wanderlust and create unforgettable travel experiences.</p>
				</div>
				<div className={styles.aboutDoubleImg}>
					<img src={travel1} alt='' />
					<img src={travel2} alt='' />
				</div>
			</div>
			<div className={styles.aboutSect}>
				<div className={styles.aboutImg}>
					<img src={travel3} alt='' />
				</div>
				<div className={styles.aboutText}>
					<h2>Our Vision</h2>
					<p>Our vision at Aura Vista is to become the go-to platform for individuals seeking unique and customized travel experiences. We strive to continuously enhance our AI capabilities to deliver unparalleled vacation solutions that align perfectly with our users' desires.</p>
				</div>
			</div>
		</div>
	)
}

export default About