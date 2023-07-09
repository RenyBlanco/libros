import React from 'react';
import DragonsPic from '../assets/dragons.jpg';
import styles from './loadingScreen.module.css';

const LoadingScreen = () => {
    return (
        <div className={styles.loadingScreen}>
            <img className={styles.loadingScreenIcon} src={DragonsPic} alt="dragones" />
        </div>
    );
};

export default LoadingScreen;