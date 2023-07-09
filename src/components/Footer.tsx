import React from 'react';
import { Link } from 'react-router-dom';
import Iniciopic from '../assets/inicio.jpg';
import Librospic from '../assets/libros.jpg';
import Reinospic from '../assets/reinos.jpg';
import Formpic from '../assets/formulario.jpg';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link className={styles.footerLink} to="/">
                <img className={ styles.footerIcon}  src={Iniciopic} alt="inicio" />
            </Link>
            <Link className={styles.footerLink} to="/libros">
                <img className={ styles.footerIcon} src={Librospic} alt="libros" />
            </Link>
            <Link className={styles.footerLink} to="/reinos">
                <img className={ styles.footerIcon} src={Reinospic} alt="reinos" />
            </Link>
            <Link className={styles.footerLink} to="/registro">
                <img className={ styles.footerIcon} src={Formpic} alt="formulario" />
            </Link>
        </footer>
    );
};

export default Footer;