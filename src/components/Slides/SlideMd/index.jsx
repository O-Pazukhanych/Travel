import React from 'react';

import styles from './SlideMd.module.scss';

const SlideMd = () => {
	return (
		<div className={styles.item}>
			<div className={styles.body}>
				{
					window.innerWidth > 320.5 ?
						(<div className={styles.image}>
							<img src={require('../../../assets/img/slideMd/test.png')} alt='slide' />
						</div>) : ('')
				}
				<div className={styles.content}>
					<span className={styles.title}>Domestic Flights</span>
					<h5>Huge savings on flight with trxvl.</h5>
					<span className={styles.text}>Book domestic flights starting @ just ₹1459</span>
					<a className={styles.button} href="/"><span>Book Now</span></a>
				</div>
			</div>
		</div>
	)
}

export default SlideMd;