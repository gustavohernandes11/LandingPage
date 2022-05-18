import React from 'react'
import styles from '../../styles/Main.module.css'

export default function Header(){
    return (
        <nav className={styles.header}>
            <a href="">Home</a>
            <a href="">About us</a>
            <a href="">Our services</a>
            <a href="">Our portfolio</a>
            <a href="">Contact Us</a>
        </nav>
    )
}