import React from 'react';

import styles from './SlideLr.module.scss';

const SlideLr = () => {
	return (
		<div className={styles.item}>
			<div className={styles.body}>
				<img src={require('../../../assets/img/slideLr/test.png')} alt='slide' />
				<div className={styles.content}>
					<h5>Plan your trip with travel expert</h5>
					{
						window.innerWidth > 426 ?
						(<span>Our professional advisors can craft your perfect itinerary</span>) : ('')
					}
				</div>
			</div>
		</div>
	)
}

export default SlideLr;