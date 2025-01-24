import React from "react";
import styles from "../styles/Spinner.module.css";

const LoadingBar = () => {
	return (
		<div className={styles.spinner}>
			<div className={styles.rect1}></div>
			<div className={styles.rect2}></div>
			<div className={styles.rect3}></div>
			<div className={styles.rect4}></div>
			<div className={styles.rect5}></div>
			<p className="mt-5 text-xl text-blue-600">Loading...</p>
		</div>
	);
};

export default LoadingBar;
