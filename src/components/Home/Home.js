import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './home.module.scss';
import Logo from '../Animation/Logo.js';
import Bottom from '../Animation/Bottom.js';
import Sky from '../Animation/Sky.js';
// import { useMousePosition } from "../Animation/useMousePosition"

export default function Home() {

    
	const location = useLocation();
	console.log(location);

	return (
		<div className={styles.bgColor}>
                <div className={styles.skyWrapper}>
				    <Sky />
			    </div>
		
			<div className={styles.flexWrapper}>
				<div className={styles.absolute}>
					<Logo />
				</div>
			</div>

			<div className={styles.test}>
				<Bottom />
			</div>
		</div>
	);
}
