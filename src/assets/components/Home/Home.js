import React from 'react'
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
import greece from '../../images/greece.webp';
import verify from '../../images/verify.png';

function Home() {
	return (
		<div className={styles.homeCont}>
			<section className={styles.homeSect}>
				<div className={styles.sectText}>
					<h1>Discover Dream Getaways with Aura Vista</h1>
					<p>Discover your dream vacation spot effortlessly with Aura Vista. <br></br>Let AI match your ideal imagery to perfect destinations</p>
					<Link to={'/services'}><button className={styles.homeBtn}>Explore Our Services</button></Link>
					<div className={styles.verify}>
						<img src={verify} alt='' />
						<p>Discover Your Dream Getaway with AI!</p>
					</div>
				</div>
				<div className={styles.sectImg}>
					<img src={greece} alt='Greece'/>
				</div>
			</section>
			<section className={styles.homeSect}>
				<div className={styles.centerText}>
					<h1>Discover your dream vacation with precision</h1>
					<p>Discover your dream vacation with Aura Vista's AI-powered image search</p>
				</div>
			</section>
			<section className={styles.homeSect}>
				<div className={styles.sectPoints}>
					<img src='' alt=''/>
					<h2>Find Your Escape</h2>
					<p>Personalized vacation recommendations based on imagery</p>
				</div>
				<div className={styles.sectPoints}>
					<img src='' alt=''/>
					<h2>AI-Powered Search</h2>
					<p>Utilize cutting-edge technology to discover dream destinations</p>
				</div>
				<div className={styles.sectPoints}>
					<img src='' alt=''/>
					<h2>Let us handle the details for you</h2>
					<p>Location, travel, excursions, and events can all be generated</p>
				</div>
				<div className={styles.sectPoints}>
					<img src='' alt=''/>
					<h2>Explore with Ease</h2>
					<p>Enjoy seamless travel experiences with confidence</p>
				</div>
			</section>
			<section className={styles.homeSect}>

			</section>
			<section className={styles.homeSect}>

			</section>
			<section className={styles.homeSect}>

			</section>
		</div>
	)
}

export default Home