import React, { useState } from 'react'
import styles from '../../../styles/WelcomeContainer.module.css'
import Card from './Card'
import Title from '../Title'

import VisibilityIcon from '@mui/icons-material/Visibility';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import InsightsIcon from '@mui/icons-material/Insights';


export default function WelcomeContainer() {
    const [isReadModeOpen, setIsReadMoreOpen] = useState(false)

    function toggleReadMore() {
        setIsReadMoreOpen(!isReadModeOpen)
    }

    return (
        <div id="aboutus" className={styles.container}>
            <Title>Welcome To Our Website</Title>
            <div className={styles.textcontainer}>
                <p>Lorem ipsum dooor sit ametm contanted Lorem ipsum dooor sit ametm contanted Lorem ipsum dooor sit ametm contanted</p>
            </div>
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
                <Card icon={<InsightsIcon />} subtitle="Our Story"
                    content="Lorem ipsum dooor sit ametm contanted
                    Lorem ipsum dooor sit ametm contanted
                    Lorem ipsum dooor sit ametm contanted"
                />
                <Card icon={<CoPresentIcon />} subtitle="Our Mission"
                    content="Lorem ipsum dooor sit ametm contanted
                    Lorem ipsum dooor sit ametm contanted
                    Lorem ipsum dooor sit ametm contanted" color='#222222'
                />
                <Card icon={<VisibilityIcon />} subtitle="Our Vision"
                    content="Lorem ipsum dooor sit ametm contanted
                    Lorem ipsum dooor sit ametm contanted
                    Lorem ipsum dooor sit ametm contanted"
                />

            </div>
        </div>
    )
}