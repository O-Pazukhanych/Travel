import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./Header.module.scss";

export const Header = () => {
	const [burger, setBurger] = React.useState(false);

	React.useEffect(() => {
		if (burger === true) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [burger]);

	return (
		<div className={styles.root}>
			<div className={styles.inner}>
				<Link className='_logo' to='/'>trxvl.</Link>
				<div className={`${styles.icon} ${burger === true ? styles.active : ''}`} onClick={() => setBurger(!burger)}>
					<span></span>
				</div>
				<nav className={`${styles.menu} ${burger === true ? styles.active : ''}`}>
					<ul className={styles.list}>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/stays'>Stays</Link>
						</li>
						<li>
							<Link to='/flights'>Flights</Link>
						</li>
						<li>
							<Link to='/packages'>Packages</Link>
						</li>
						<li className={styles.register}>
							<Link to='/registration'>Sign Up</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
};