import React from 'react'

import styles from "./SlideMd_1.module.scss";

const SlideMd_1 = () => {
	return (
		<div className={styles.item}>
			<div className={styles.body}>
				<div className={styles.image}>
					<img src={require('../../../assets/img/slideMd_1/test.png')} alt='slide image' />
				</div>
				<div className={styles.content}>
					<h5>India</h5>
					<p>Travel community</p>
					<p>155,073 travelers</p>
				</div>
			</div>
		</div>
	)
}

export default SlideMd_1;