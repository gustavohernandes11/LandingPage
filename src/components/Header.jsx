import React from 'react'
import styles from '../../styles/Main.module.css'

export default function Header(){
    return (
        <nav id="header" className={styles.header}>
            <a href="#home">Home</a>
            <a href="#aboutus">About us</a>
            <a href="#ourservices">Our services</a>
            <a href="#ourportfolio">Our portfolio</a>
            <a href="#contactus">Contact Us</a>
        </nav>
    )
}