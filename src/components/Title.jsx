import React from 'react'
import styles from '../../styles/Main.module.css'

export default function Title(props) {
    return (
        <>
            <h1 className={styles.title} style={{ color: props.color || '#4069ab' }}>{props.children}</h1>
            <hr className={styles.hr} style={{ backgroundColor: props.color || '#4069ab' }} />
        </>
    )
}