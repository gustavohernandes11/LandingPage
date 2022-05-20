import React from 'react'
import styles from '../../../styles/SliderContainer.module.css'
import Slider from './Slider'
export default function SliderContainer(){
    return (
        <div className={styles.container}>
            <Slider>
            <h1>Game Development</h1>
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
            <button >GET STARTED</button>
            </Slider>
        </div>
    )
}