import React from 'react'
import styles from '../../../styles/OurServicesContainer.module.css'

export default function RatingCard(props){
    return (
        <div className={styles.ratingcard}>
            <h2>{props.title}</h2>
            <sub>{props.subtitle}</sub>
        </div>
    )
}