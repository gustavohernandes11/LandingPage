import React from 'react'
import styles from '../../../styles/OurServicesContainer.module.css'
import ComputerIcon from '@mui/icons-material/Computer';

export default function ServiceCard(props){
    return (
        <div className={styles.servicecard}>
            <div className={styles.iconservice}>{props.icon ? props.icon : <ComputerIcon /> }</div>
            <p>{props.content ? props.content : 'lorem ipsum'}</p>
        </div>
    )
}