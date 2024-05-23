import React from 'react'
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

function Navbar() {
    return (
        <div className={styles.navCont}>
            <img src={logo} alt='' />
            <div className={styles.navBtns}>
                <Link to={'/'}><button>Home</button></Link>
                <Link to={'/services'}><button>Services</button></Link>
                <Link to={'/about'}><button>About</button></Link>
                <Link to={'/contact'}><button className={styles.navLink}>Contact Now</button></Link>
            </div>
        </div>
    )
}

export default Navbar