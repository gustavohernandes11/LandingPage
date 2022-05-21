import React from 'react'
import styles from '../../../styles/WelcomeContainer.module.css'

export default function Card(props) {
    return (
        <div className={styles.card} style={{ backgroundColor: props.color }}>
            <div className={styles.icon}>
                {props.icon} </div>
            <h2>{props.subtitle}</h2>
            <p>{props.content}</p>
        </div>
    )
}