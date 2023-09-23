import React from 'react';

import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

import styles from "./Categories.module.scss";

export const Categories = () => {
	const categoriesList = [
		'Beaches', 'Deserts', 'Mountains', 'Iconic Cities', 'Houseboats',
		'Countryside', 'Camping', 'Castles', 'Skiing', 'Tropical'
	];

	return (
		<div className={styles.root}>
			<h2 className='block-title'>Top categories</h2>
			<div className={styles.categories}>
				<Swiper
					spaceBetween={0}
					slidesPerView={window.innerWidth > 768.5 ? 10 : 6 && window.innerWidth > 426 ? 6 : 4 && window.innerWidth > 320.5 ? 4 : 3}
				>
					{
						categoriesList.map((item, index) => {
							return (
								<SwiperSlide key={index}>
									{
										<Link to={`/categories/${item}`}>
											<img src={require(`../../assets/img/categories/${item}.svg`)} alt='icon' />
											<span>{item}</span>
										</Link>
									}
								</SwiperSlide>
							)
						})
					}
				</Swiper>
			</div>
		</div >
	)
};