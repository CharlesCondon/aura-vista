import React from 'react'
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className={styles.navCont}>
            <h1>Aura Vista</h1>
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