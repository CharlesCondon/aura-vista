import React from 'react'
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
import greece from '../../images/greece.webp';
import verify from '../../images/verify.png';
import sparkle from '../../images/shine.png';
import star from '../../images/star.png';
import flash from '../../images/flash.png';
import diamond from '../../images/diamond.png';
import desert from '../../images/desert.jpg';
import lake from '../../images/lake.jpg';
import mountain from '../../images/mountain.jpg';
import road from '../../images/longRoad.jpg';
import ally from '../../images/allyway.jpg';
import water from '../../images/water.jpg';

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
					<img src={flash} alt=''/>
					<h2>Find Your Escape</h2>
					<p>Personalized vacation recommendations based on imagery</p>
				</div>
				<div className={styles.sectPoints}>
					<img src={sparkle} alt=''/>
					<h2>AI-Powered Search</h2>
					<p>Utilize cutting-edge technology to discover dream destinations</p>
				</div>
				<div className={styles.sectPoints}>
					<img src={diamond} alt=''/>
					<h2>Let us handle the details for you</h2>
					<p>Location, travel, excursions, and events can all be generated</p>
				</div>
				<div className={styles.sectPoints}>
					<img src={star} alt=''/>
					<h2>Explore with Ease</h2>
					<p>Enjoy seamless travel experiences with confidence</p>
				</div>
			</section>
			<section className={`${styles.homeSect} ${styles.altSect}`}>
				<h1>Discover Your Paradise</h1>
				<p>Discover Your Dream Getaway with Aura Vista AI</p>
				<div className={styles.altImgCont}>
					<img className={styles.altSectImg} src={lake} alt='' />
					<img className={styles.altSectImg} src={desert} alt='' />
					<img className={styles.altSectImg} src={mountain} alt='' />
				</div>
				<Link to={'/contact'}><button className={styles.homeBtn}>Contact Us</button></Link>
				<p>Discover Your Dream Getaway with Precision</p>
			</section>
			<section className={styles.homeSect}>
				<div className={styles.sectText}>
					<h1>Discover your dream vacation through AI magic</h1>
					<p>Immerse yourself in customized vacation spots with Aura Vista's AI-driven solutions. Find your dream getaway today!</p>
				</div>
				<div className={styles.imgBufferCont}>
					<div>
						<img src={road} alt='' />
						<div className={styles.imgBuffer}></div>
					</div>
					<div>
						<div className={styles.imgBuffer}></div>
						<img src={ally} alt='' />
					</div>
				</div>
			</section>
			<section className={styles.homeSect}>
				<img className={styles.reviewImg} src={water} alt='' />
				<div className={styles.reviewText}>
					<p>WHAT OUR CLIENTS ARE SAYING</p>
					<h3>Found my dream beach getaway matching my sunset photo! Aura Vista naild it</h3>
					<h4>Judy Alvarez</h4>
					<p>Travel Blogger</p>
				</div>
			</section>
		</div>
	)
}

export default Home