import {Routes, Route} from 'react-router-dom';
import styles from './App.module.scss';
import Navbar from './assets/components/Navbar/Navbar';
import Footer from './assets/components/Footer/Footer';
import Home from './assets/components/Home/Home';
import Services from './assets/components/Services/Services';
import About from './assets/components/About/About';
import Contact from './assets/components/Contact/Contact';

function App() {
	return (
		<div className={styles.App}>
					<div className={styles.AppCont}>
						<Navbar/>
						<Routes>
							<Route index path='/' element={
									<Home/>
							}/>
							<Route path='/services' element={
									<Services/>
							} />
							<Route path='/about' element={
									<About/>
							} />
							<Route path='/contact' element={
									<Contact/>
							} />
						</Routes>
						<Footer/>
					</div>
				</div>
	);
}

export default App;
