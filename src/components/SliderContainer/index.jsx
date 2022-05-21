import React from 'react'
import styles from '../../../styles/SliderContainer.module.css'
import Slider from './Slider'
export default function SliderContainer(){
    return (
        <div id="home" className={styles.container}>
            <Slider>
            <h1>Game Development</h1>
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
            <a href="#aboutus"><button >GET STARTED</button></a>

            </Slider>
        </div>
    )
}