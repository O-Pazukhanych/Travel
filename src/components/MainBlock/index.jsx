import React from 'react';

import { Header, Search, Categories, VacationDistinations } from "../../components"
import styles from "./MainBlock.module.scss";

export const MainBlock = () => {
	return (
		<div>
			<div className={styles.fullScreen}>
				<div className={styles.header}>
					<Header />
				</div>
				<div className='_container'>
					<h1 className={styles.mainTitle}>The whole world awaits.</h1>
					<div className={styles.search}>
						<Search />
					</div>
					<div className={styles.categories}>
						<Categories />
					</div>
				</div>
			<div className={styles.vacationDistinations}>
				<VacationDistinations />
			</div>
			</div>
		</div>
	)
};
