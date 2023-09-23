import React from 'react';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

import styles from "./Search.module.scss";

export const Search = () => {
	const [rooms, setRooms] = React.useState('');
	const [persons, setPersons] = React.useState('');
	const [filterActive, setFilterActive] = React.useState(false);

	const [checkInActive, setCheckInActive] = React.useState(false);
	const [checkOutActive, setCheckOutActive] = React.useState(false);
	const [checkIn, setCheckIn] = React.useState(new Date());
	const [checkOut, setCheckOut] = React.useState(new Date());

	return (
		<div className={styles.root}>
			<form action="#" className={styles.form}>
				<div className={styles.searchBlock}>
					<div className={styles.search}>
						<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g opacity="0.7">
								<path d="M19.7892 19.8594L15.6507 15.7136L19.7892 19.8594ZM17.9441 10.1729C17.9441 12.2526 17.118 14.2471 15.6474 15.7176C14.1769 17.1882 12.1824 18.0143 10.1027 18.0143C8.023 18.0143 6.0285 17.1882 4.55794 15.7176C3.08738 14.2471 2.26123 12.2526 2.26123 10.1729C2.26123 8.09319 3.08738 6.09869 4.55794 4.62813C6.0285 3.15757 8.023 2.33142 10.1027 2.33142C12.1824 2.33142 14.1769 3.15757 15.6474 4.62813C17.118 6.09869 17.9441 8.09319 17.9441 10.1729V10.1729Z" stroke="white" stroke-width="2.21406" stroke-linecap="round" />
							</g>
						</svg>
						<input type="text" name="search" placeholder='Search destinations, hotels' />
					</div>
				</div>
				<div className={styles.checkDate}>
					<div>
						<div className={styles.box} onClick={() => { setCheckInActive(!checkInActive); setCheckOutActive(false) }}>
							{window.innerWidth > 860 || window.innerWidth <= 620 ? (<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g opacity="0.7" clipPath="url(#clip0_1_3907)">
									<path d="M17.4155 4.17651H6.34525C4.30726 4.17651 2.65515 5.82863 2.65515 7.86661V17.0919C2.65515 19.1298 4.30726 20.7819 6.34525 20.7819H17.4155C19.4535 20.7819 21.1056 19.1298 21.1056 17.0919V7.86661C21.1056 5.82863 19.4535 4.17651 17.4155 4.17651Z" stroke="white" stroke-width="2.21406" stroke-linecap="round" stroke-linejoin="round" />
									<path d="M2.65515 9.71161H21.1056M8.1903 2.33142V6.02152V2.33142ZM15.5705 2.33142V6.02152V2.33142Z" stroke="white" strokeWidth="2.21406" strokeLinecap="round" strokeLinejoin="round" />
								</g>
								<defs>
									<clipPath id="clip0_1_3907">
										<rect width="22.1406" height="22.1406" fill="white" transform="translate(0.81012 0.486389)" />
									</clipPath>
								</defs>
							</svg>) : ('')}
							<span>Check In ( {checkIn.getDate() + '.' + (checkIn.getMonth() + 1)} )</span>
						</div>
						<Calendar className={`${styles.calendar} ${checkInActive === true ? styles.active : ''}`} value={checkIn} onChange={setCheckIn} />
					</div>
					<div>
						<div className={styles.box} onClick={() => { setCheckOutActive(!checkOutActive); setCheckInActive(false) }}>
							{window.innerWidth > 860 || window.innerWidth <= 620 ? (<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g opacity="0.7" clipPath="url(#clip0_1_3907)">
									<path d="M17.4155 4.17651H6.34525C4.30726 4.17651 2.65515 5.82863 2.65515 7.86661V17.0919C2.65515 19.1298 4.30726 20.7819 6.34525 20.7819H17.4155C19.4535 20.7819 21.1056 19.1298 21.1056 17.0919V7.86661C21.1056 5.82863 19.4535 4.17651 17.4155 4.17651Z" stroke="white" stroke-width="2.21406" stroke-linecap="round" stroke-linejoin="round" />
									<path d="M2.65515 9.71161H21.1056M8.1903 2.33142V6.02152V2.33142ZM15.5705 2.33142V6.02152V2.33142Z" stroke="white" strokeWidth="2.21406" strokeLinecap="round" strokeLinejoin="round" />
								</g>
								<defs>
									<clipPath id="clip0_1_3907">
										<rect width="22.1406" height="22.1406" fill="white" transform="translate(0.81012 0.486389)" />
									</clipPath>
								</defs>
							</svg>) : ('')}
							<span>Check Out ( {checkOut.getDate() + '.' + (checkOut.getMonth() + 1)} )</span>
						</div>
						<Calendar className={`${styles.calendar} ${checkOutActive === true ? styles.active : ''} ${styles.out}`} value={checkOut} onChange={setCheckOut} />
					</div>
				</div>
				<div className={styles.submit}>
					<div className={styles.filter}>
						<div onClick={() => setFilterActive(!filterActive)}>
							{window.innerWidth > 860 || window.innerWidth <= 620 ? (<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g opacity="0.7" clipPath="url(#clip0_1_3919)">
									<path d="M14.7826 15.827C14.7255 15.052 14.7095 14.2744 14.7346 13.4977L14.7337 13.5318C15.4279 12.8122 15.8608 11.8806 15.9634 10.886L15.9652 10.8666C16.278 10.8408 16.7715 10.5364 16.9154 9.32971C16.9589 9.12189 16.9425 8.90602 16.8682 8.70714C16.7939 8.50825 16.6647 8.33451 16.4957 8.20607L16.4929 8.20423C17.0022 6.67284 18.0594 1.93475 14.5363 1.44581C14.1737 0.809273 13.2456 0.486389 12.039 0.486389C7.21141 0.574951 6.6293 4.13128 7.68466 8.20423C7.51426 8.33384 7.38428 8.50931 7.30995 8.71009C7.23562 8.91087 7.22 9.12867 7.26491 9.33801L7.26399 9.33063C7.4116 10.5354 7.90146 10.8417 8.21419 10.8676C8.32389 11.8732 8.77063 12.8122 9.48174 13.5318C9.50513 14.3222 9.48727 15.1132 9.42823 15.9018L9.43285 15.827C8.47527 18.3954 2.02867 17.6739 1.73346 22.627H22.4515C22.1545 17.6739 15.7374 18.3954 14.7816 15.827H14.7826Z" fill="white" />
								</g>
								<defs>
									<clipPath id="clip0_1_3919">
										<rect width="22.1406" height="22.1406" fill="white" transform="translate(0.626404 0.486389)" />
									</clipPath>
								</defs>
							</svg>) : ('')}
							<span>{rooms} {rooms === 1 ? 'room' : 'rooms'}, {persons} {persons === 1 ? 'adult' : 'adults'}</span>
						</div>
						<div className={`${styles.select} ${filterActive === true ? styles.active : ''}`}>
							<div>
								<span>Rooms</span>
								<ul>
									<li className={rooms === '1' ? styles.active : ''}><input type="radio" name="rooms" value={1} onChange={(e) => setRooms(e.target.value)} />1</li>
									<li className={rooms === '2' ? styles.active : ''}><input type="radio" name="rooms" value={2} onChange={(e) => setRooms(e.target.value)} />2</li>
									<li className={rooms === '3' ? styles.active : ''}><input type="radio" name="rooms" value={3} onChange={(e) => setRooms(e.target.value)} />3</li>
								</ul>
							</div>
							<div>
								<span>Persons</span>
								<ul>
									<li className={persons === '1' ? styles.active : ''}><input type="radio" name="persons" value={1} onChange={(e) => setPersons(e.target.value)} />1</li>
									<li className={persons === '2' ? styles.active : ''}><input type="radio" name="persons" value={2} onChange={(e) => setPersons(e.target.value)} />2</li>
									<li className={persons === '3' ? styles.active : ''}><input type="radio" name="persons" value={3} onChange={(e) => setPersons(e.target.value)} />3</li>
								</ul>
							</div>
						</div>
					</div>
					<button className={styles.button} type="submit"><span>Search</span></button>
				</div>
			</form>
		</div>
	)
};