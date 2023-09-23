import React from 'react';

import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

export const Slider = ({ array = null, arrayType = '', slide, slideCount, spaceBetween = 0, speed = 4000, loop = false, autoplay = { delay: 3000, disableOnInteraction: false }, modules }) => {
	return (
		<Swiper
			spaceBetween={spaceBetween}
			slidesPerView={slideCount}
			loop={loop}
			autoplay={autoplay}
			modules={modules}
			speed={speed}
			autoCapitalize={true}
		>
			{
				array === null ?
					([...Array(5)].map((item, index) => {
						return (
							<SwiperSlide key={index}>
								{slide}
							</SwiperSlide>
						)
					})) :
					(array.map((item, index) => {
						return (
							<SwiperSlide key={index}>
								{
									<Link to={`/${arrayType + '/' + item}`}>
										{slide}
									</Link>
								}
							</SwiperSlide>
						)
					}))
			}
		</Swiper>
	)
};