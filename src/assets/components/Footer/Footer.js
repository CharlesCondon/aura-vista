import React from 'react'
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

function Footer() {
	return (
		<div className={styles.footerCont}>
			<img src={logo} alt='' />
			<div className={styles.footerLinks}>
				<Link to={'/'}><button>Home</button></Link>
                <Link to={'/services'}><button>Services</button></Link>
                <Link to={'/about'}><button>About</button></Link>
                <Link to={'/contact'}><button className={styles.navLink}>Contact</button></Link>
			</div>
		</div>
	)
}

export default Footer