import React from 'react';

import { Link } from 'react-router-dom';

import styles from "./Footer.module.scss";

export const Footer = () => {
	return (
		<div className={styles.root}>
			<div className='_container'>
				<div className={styles.body}>
					<Link className='_logo' to={'/'}>Trxvl.</Link>
					<div className={styles.content}>
						<div className={styles.links}>
							<div className={styles.column}>
								<ul className={styles.list}>
									<li>
										<Link to={'/'}>Seslendirme ve Alt Jazz</Link>
									</li>
									<li>
										<Link to={'/'}>Media Market</Link>
									</li>
									<li>
										<Link to={'/'}>Gillie</Link>
									</li>
									<li>
										<Link to={'/'}>Size Last</Link>
									</li>
								</ul>
							</div>
							<div className={styles.column}>
								<ul className={styles.list}>
									<li>
										<Link to={'/'}>Self Betimes</Link>
									</li>
									<li>
										<Link to={'/'}>Yatirimci İlişkileri</Link>
									</li>
									<li>
										<Link to={'/'}>Basal Himmler</Link>
									</li>
								</ul>
							</div>
							<div className={styles.column}>
								<ul className={styles.list}>
									<li>
										<Link to={'/'}>Yard Market</Link>
									</li>
									<li>
										<Link to={'/'}>Is İmkanları</Link>
									</li>
									<li>
										<Link to={'/'}>Car Tercihleri</Link>
									</li>
								</ul>
							</div>
							<div className={styles.column}>
								<ul className={styles.list}>
									<li>
										<Link to={'/'}>Hedge Karla</Link>
									</li>
									<li>
										<Link to={'/'}>Mullein Koşulları</Link>
									</li>
									<li>
										<Link to={'/'}>Autumnal Bulgier</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className={styles.social}>
							<Link to={'/'}>
								<div className={styles.helmetKOD}>
									<span>Helmet KOD</span>
								</div>
							</Link>
							<div className={styles.socialLinks}>
								<a href='#'><img src={require(`../../assets/img/social/facebook.svg`).default} alt='facebook' /></a>
								<a href='#'><img src={require(`../../assets/img/social/instagram.svg`).default} alt='facebook' /></a>
								<a href='#'><img src={require(`../../assets/img/social/twitter.svg`).default} alt='facebook' /></a>
								<a href='#'><img src={require(`../../assets/img/social/youtube.svg`).default} alt='facebook' /></a>
							</div>
						</div>
						<p>{'© 1997-2021 Netflix, Inc.  {i-062d573a0ee099242}'}</p>
					</div>
				</div>
			</div>
		</div>
	)
};