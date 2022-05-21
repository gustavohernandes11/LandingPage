import React from 'react'
import styles from '../../../styles/OurServicesContainer.module.css'
import { Grid, Box } from '@mui/material'
import Title from '../Title'
import ServiceCard from './ServiceCard'
import RatingCard from './RatingCard'

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import DoneIcon from '@mui/icons-material/Done';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';


export default function OurServicesContainer() {
    return (
        <div id="ourservices" className={styles.container}>
            <Title>Our Services</Title>
            <p>Lorem ipsum dooor sit ametm contanted</p>
            <Box
                sx={{
                    px: 10
                }}>
                <Grid container spacing={3} rowSpacing={2}>
                    <Grid item xs={12} md={4} sm={6}>
                        <ServiceCard />
                    </Grid>
                    <Grid item xs={12} md={4} sm={6}>
                        <ServiceCard />
                    </Grid>
                    <Grid item xs={12} md={4} sm={6}>
                        <ServiceCard />
                    </Grid>
                    <Grid item xs={12} md={4} sm={6}>
                        <ServiceCard />
                    </Grid>
                    <Grid item xs={12} md={4} sm={6}>
                        <ServiceCard />
                    </Grid>
                    <Grid item xs={12} md={4} sm={6}>
                        <ServiceCard />
                    </Grid>
                    <Grid item xs={12} md={4} sm={6}>
                        <ServiceCard />
                    </Grid>
                    <Grid item xs={12} md={4} sm={6}>
                        <ServiceCard />
                    </Grid>
                    <Grid item xs={12} md={4} sm={6}>
                        <ServiceCard />
                    </Grid>
                </Grid>
            </Box>
            <div className={styles.ratingcontainer}>
                <RatingCard icon={<CalendarMonthIcon />} title="12+" subtitle="Years of experience" />
                <RatingCard icon={<DoneIcon />} title="999+" subtitle="Completed projects" />
                <RatingCard icon={<InsertEmoticonIcon />} title="480+" subtitle="Total Clients" />
                <RatingCard icon={<EmojiEventsIcon />} title="15+" subtitle="Award Won" />
            </div>


        </div>
    )
}