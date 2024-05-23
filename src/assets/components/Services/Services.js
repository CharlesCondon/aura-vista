import React from 'react'
import styles from './Services.module.scss';
import { Link } from 'react-router-dom';
import service1 from '../../images/service1.jpg';
import service2 from '../../images/service2.jpg';
import service3 from '../../images/service3.jpg';
import service4 from '../../images/service4.jpg';

function Services() {
	return (
		<div className={styles.serviceCont}>
			<div className={styles.serviceHead}>
				<h1>Our Services</h1>
				<p>Discover your dream vacation through tailored imagery selection</p>
			</div>
			<div className={styles.serviceSect}>
				<div className={styles.serviceImg}>
					<img src={service1} alt='' />
				</div>
				<div className={styles.serviceText}>
					<h2>Personalized Vacation Recommendations</h2>
					<p>Our AI-driven service analyzes your preferred imagery to suggest tailored vacation 
						destinations that match your vision perfectly. Say goodbye to generic travel 
						suggestions and experience vacations that truly speak to your soul. Let us create 
						a dream itinerary just for you.</p>
					<Link to={'/contact'}><button className={styles.homeBtn}>Lets Talk</button></Link>
				</div>
			</div>
			<div className={styles.serviceSect}>
				<div className={styles.serviceText}>
					<h2>Personalized Vacation Recommendations</h2>
					<p>With our team of image interpretation specialists, we ensure that every aspect of 
						your desired visuals is translated into real-world travel options. We understand 
						the nuances of imagery and use cutting-edge technology to recommend destinations 
						that align with your unique aesthetic preferences.</p>
					<Link to={'/contact'}><button className={styles.homeBtn}>Lets Talk</button></Link>
				</div>
				<div className={styles.serviceImg}>
					<img src={service2} alt='' />
				</div>
			</div>
			<div className={styles.serviceSect}>
				<div className={styles.serviceImg}>
					<img src={service3} alt='' />
				</div>
				<div className={styles.serviceText}>
					<h2>Personalized Vacation Recommendations</h2>
					<p>Beyond just recommendations, we offer a seamless booking experience to turn your 
						dream vacation into a reality. From flights to accommodation, we handle all the 
						logistics so you can focus on creating unforgettable memories at your chosen 
						destination.</p>
					<Link to={'/contact'}><button className={styles.homeBtn}>Lets Talk</button></Link>
				</div>
			</div>
			<div className={styles.serviceSect}>
				<div className={styles.serviceText}>
					<h2>Personalized Vacation Recommendations</h2>
					<p>Delve into the world of travel with our AI-powered destination insights. Gain a 
						deeper understanding of the locations suggested to you, including local attractions, 
						off-the-beaten-path gems, and insider tips to make the most of your vacation experience. 
						Let Aura Vista be your guide to a truly immersive travel journy.</p>
					<Link to={'/contact'}><button className={styles.homeBtn}>Lets Talk</button></Link>
				</div>
				<div className={styles.serviceImg}>
					<img src={service4} alt='' />
				</div>
			</div>
		</div>
	)
}

export default Services