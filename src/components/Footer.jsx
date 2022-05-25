import React from 'react'
import styles from '../../styles/Main.module.css'
import { Tooltip, IconButton } from '@mui/material'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <nav>
                <IconButton>
                    <FacebookIcon />
                </IconButton>
                <IconButton >
                    <InstagramIcon />
                </IconButton>
                <a href='https://br.freepik.com/fotos-vetores-gratis/geometria'>Geometria vetor criado por freepik - br.freepik.com</a>
            </nav>
            <Tooltip title="Go top!" arrow placement="top">
                <IconButton>
                    <a href="#header"><ArrowCircleUpIcon /></a>
                </IconButton>
            </Tooltip>
        </div>
    )
}