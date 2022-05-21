import React from 'react'
import styles from '../../../styles/ContactUsContainer.module.css'
import Title from '../Title'
import { Grid } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';

export default function ContactUsContainer() {
    return (
        <div id="contactus" className={styles.container}>
            <Title color="white">Contact Us</Title>
            <Grid container
                width={400}
                direction="row"
                justifyContent="center"
                alignItems="center" 
                columnSpacing={2}
                padding={2}
                >
                <Grid item ><MailIcon /></Grid>
                <Grid item >Email</Grid>
                <Grid item >Loremipsumdooor@lorem</Grid>
            </Grid>
        

        </div>
    )
}