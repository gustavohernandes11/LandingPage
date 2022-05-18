import React, { useState } from 'react'
import styles from '../../../styles/WelcomeContainer.module.css'
import Card from './Card'


export default function WelcomeContainer() {
    const [isReadModeOpen, setIsReadMoreOpen] = useState(false)

    function toggleReadMore() {
        setIsReadMoreOpen(!isReadModeOpen)
    }

    return (
        <div className={styles.container}>
            <h1>Welcome To Our Website</h1>
            <p>Lorem ipsum dooor sit ametm contanted Lorem ipsum dooor sit ametm contanted Lorem ipsum dooor sit ametm contanted</p>
            <div className={styles.textcontainer}>
                {isReadModeOpen ? (
                    <>
                        <p>Lorem ipsum sit ametm contanted Lorem ipsum dooor sit ametm contanted. Lorem ipsum dooor sit ametm contanted Lorem ipsum dooor sit ametm contanted Lorem ipsumLorem ipsum dooor sit ametm contanted Lorem ipsum dooor sit ametm contanted Lorem ipsum
                        Lorem ipsum dooor sit ametm contanted Lorem ipsum dooor sit ametm contanted Lorem ipsumLorem ipsum dooor sit ametm contanted Lorem ipsum dooor sit ametm contanted Lorem ipsum</p>
                        <p>Lorem ipsum dooor sit ametm contanted Lorem ipsum dooor sit ametm contanted Lorem ipsum Lorem ipsum dooor sit ametm contanted Lorem ipsum dooor sit ametm contanted Lorem ipsumLorem ipsum dooor sit ametm contanted Lorem ipsum dooor sit ametm contanted Lorem ipsum
                            Lorem ipsum dooed</p>
                           
                    </>
                   
                ) : ''}
            </div>
            <button onClick={toggleReadMore}>{isReadModeOpen ? 'Close' : 'Read More'}</button>
            <div className={styles.cardarea}>
                <Card icon="icon" subtitle="Our Story"
                    content="Lorem ipsum dooor sit ametm contanted
                    Lorem ipsum dooor sit ametm contanted
                    Lorem ipsum dooor sit ametm contanted"
                />
                <Card icon="icon" subtitle="Our Mission"
                    content="Lorem ipsum dooor sit ametm contanted
                    Lorem ipsum dooor sit ametm contanted
                    Lorem ipsum dooor sit ametm contanted" color='#242424'
                />
                <Card icon="icon" subtitle="Our Vision"
                    content="Lorem ipsum dooor sit ametm contanted
                    Lorem ipsum dooor sit ametm contanted
                    Lorem ipsum dooor sit ametm contanted"
                />

            </div>
        </div>
    )
}