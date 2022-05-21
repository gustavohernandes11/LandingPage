import React from 'react'
import styles from '../../../styles/OurServicesContainer.module.css'
import ServiceCard from './ServiceCard'
import RatingCard from './RatingCard'

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import DoneIcon from '@mui/icons-material/Done';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';


export default function OurServicesContainer(){
    return (
        <div id="ourservices" className={styles.container}>
            <h1>Our Services</h1>
            <p>Lorem ipsum dooor sit ametm contanted</p>
            <div className={styles.servicecontainer}>
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
  
            </div>
            <div className={styles.ratingcontainer}>
            <RatingCard icon={<CalendarMonthIcon/>} title="12+" subtitle="Years of experience" />
            <RatingCard icon={<DoneIcon/>} title="999+" subtitle="Completed projects" />
            <RatingCard icon={<InsertEmoticonIcon />} title="480+" subtitle="Total Clients" />
            <RatingCard icon={<EmojiEventsIcon />} title="15+" subtitle="Award Won" />
            </div>
            
            
        </div>
    )
}