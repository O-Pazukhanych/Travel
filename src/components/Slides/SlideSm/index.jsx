import React from 'react';

import styles from './SlideSm.module.scss';

const SlideSm = () => {
	return (
		<div className={styles.item}>
			<img src={require('../../../assets/img/slideSm/test.png')} alt='slide' />
			<span>Bali, Indonesia</span>
		</div>
	)
}

export default SlideSm;