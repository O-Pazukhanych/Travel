import React from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

import { Autoplay } from "swiper/modules";
import SlideSm from '../../components/Slides/SlideSm';
import SlideMd from '../../components/Slides/SlideMd';
import SlideMd_1 from '../../components/Slides/SlidesMd_1';
import SlideLr from '../../components/Slides/SlideLr';

import { MainBlock, Slider, Footer } from "../../components";

import styles from './Home.module.scss';

export const Home = () => {
	const [typeOfContacts, setTypeOfContacts] = React.useState('mobile');

	return (
		<div>
			<MainBlock />
			<div className={styles.offers}>
				<div className='_container'>
					<h2 className='block-title block-title--b'>Offers</h2>
					<div className={styles.slider}>
						<Swiper
							spaceBetween={26}
							slidesPerView={window.innerWidth > 768.5 ? 1.5 : 1}
						>
							{
								[...Array(5)].map((item, index) => {
									return (
										<SwiperSlide key={index}>
											{
												<SlideMd />
											}
										</SwiperSlide>
									)
								})
							}
						</Swiper>
					</div>
				</div>
			</div>
			<div className={styles.propertyType}>
				<div className='_container'>
					<h2 className='block-title block-title--b'>Browse by property type</h2>
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
												<Link to={`/property_type/${item}`}>
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
			{
				window.innerWidth > 426 ?
					(<div className={styles.mainSlider}>
						<div className='_container'>
							<Slider
								slide={SlideLr}
								slideCount={1}
								spaceBetween={20}
								loop={true}
								modules={[Autoplay]}
							/>
						</div>
					</div>) : ('')
			}
			<div className={styles.community}>
				<div className='_container'>
					<h2 className='block-title block-title--b'>Connect with other travelers in our community</h2>
					<div className={styles.slider}>
						<Swiper
							spaceBetween={18}
							slidesPerView={window.innerWidth > 1280 ? 3.5 : 3 && window.innerWidth > 1024.5 ? 3 : 2.5 && window.innerWidth > 768.5 ? 2.5 : 2 && window.innerWidth > 426 ? 2 : 1.5 && window.innerWidth > 320.5 ? 1.5 : 1}
						>
							{
								[...Array(5)].map((item, index) => {
									return (
										<SwiperSlide key={index}>
											{
												<Link to={`/community/${item}`}>
													<SlideMd_1 />
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
			<div className={styles.travelApp}>
				<div className={styles.fullScreen}>
					<img src={require(`../../assets/img/travelApp.png`)} alt='travel app' />
				</div>
				<div className='_container'>
					<div className={styles.body}>
						{
							window.innerWidth > 700 ?
								(<div className={styles.iphoneImage}>
									<img src={require(`../../assets/img/iPhone.png`)} alt='iPhone' />
								</div>) : ('')
						}
						<div className={styles.content}>
							<h4>Your all-in-one travel app.</h4>
							<span>Book flights, hotels, trains & rental cars anywhere in the world in just seconds. Get real-time flight updates, travel info, exclusive deals, and 30% more Trip Coins only on the app!</span>
							<div className={styles.linkBlock}>
								<div className={styles.contacts}>
									<form>
										<div className={styles.typeOfContacts}>
											<div className={typeOfContacts === 'mobile' ? styles.active : ''}>
												<input type="radio" name="contacts" value={'mobile'} onChange={(e) => setTypeOfContacts(e.target.value)} />
												<span>Mobile</span>
											</div>
											<div className={typeOfContacts === 'email' ? styles.active : ''}>
												<input type="radio" name="contacts" value={'email'} onChange={(e) => setTypeOfContacts(e.target.value)} />
												<span>Email</span>
											</div>
										</div>
										<span className={styles.text}>Enter your phone number to receive a text with a link to download the app.</span>
										<div className={styles.search}>
											<input type="text" name="contactSearch" placeholder='+91 Mobile number' />
											<button type="submit"><span>Search</span></button>
										</div>
									</form>
								</div>
								<div className={styles.decorate}>
									<span>or</span>
								</div>
								<div className={styles.platforms}>
									<a href='/'>
										<img src={require(`../../assets/img/googlePlay.png`)} alt='google play' />
									</a>
									<a href='/'>
										<img src={require(`../../assets/img/appStore.png`)} alt='app store' />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}