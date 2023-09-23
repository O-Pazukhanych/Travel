import React from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

import SlideSm from '../Slides/SlideSm';

import styles from "./VacationDistinations.module.scss";

export const VacationDistinations = () => {
	return (
		<div className={styles.root}>
			<div className='_container'>
				<h2 className='block-title'>Top Vacation Destinations</h2>
				<div className={styles.slider}>
					<Swiper
						spaceBetween={24}
						slidesPerView={window.innerWidth > 1024.5 ? 3.5 : 2.5 && window.innerWidth > 768.5 ? 2.5 : 2 && window.innerWidth > 426 ? 2 : 1.5 && window.innerWidth > 320.5 ? 1.5 : 1}
					>
						{
							[...Array(5)].map((item, index) => {
								return (
									<SwiperSlide key={index}>
										{
											<Link to={`/destinations/${item}`}>
												<SlideSm />
											</Link>
										}
									</SwiperSlide>
								)
							})
						}
					</Swiper>
				</div>
			</div>
		</div>
	)
};