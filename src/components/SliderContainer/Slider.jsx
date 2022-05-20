import React from 'react'
import styles from '../../../styles/SliderContainer.module.css'

export default function Slider(props){
    return (
        <div className={styles.slidercontainer}>
            {props.children}
        </div>
    )
}