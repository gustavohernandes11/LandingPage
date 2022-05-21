import React from 'react'
import Image from 'next/image'
import styles from '../../../styles/OurPortfolioContainer.module.css'
import { ImageList, ImageListItem } from '@mui/material'
import Title from '../Title'


import MaqueteImage from '../../assets/imgs/maquete.webp'
import MaqueteApresentaçãoImage from '../../assets/imgs/maquete-de-apresentacao.webp'
import MaqueteTelaImage from '../../assets/imgs/maquete-de-tela.webp'
import TelaImage from '../../assets/imgs/tela.webp'
import LaptopImage from '../../assets/imgs/laptop.webp'
import ConjuntoImage from '../../assets/imgs/conjunto.webp'

export default function OurPortfolioContainer() {
    return (
        <div id="ourportfolio" className={styles.container}>
            <Title>Our Portfolio</Title>
            <p>
                Lorem ipsum dooor sit ametm contanted Lorem ipsum dooor sit ametm contanted Lorem ipsum dooor sit ametm contanted
            </p>
            <ImageList variant="quilted" cols={2} gap={8} >
                <ImageListItem key={MaqueteApresentaçãoImage}>
                    <Image src={MaqueteApresentaçãoImage} alt="imagem" />
                </ImageListItem>
                <ImageListItem key={MaqueteTelaImage}>
                    <Image src={MaqueteTelaImage} alt="maqueteTela" />
                </ImageListItem>
                <ImageListItem key={TelaImage}>
                    <Image src={TelaImage} alt="tela" />
                </ImageListItem>
                <ImageListItem key={LaptopImage}>
                    <Image src={LaptopImage} alt="laptop" />
                </ImageListItem>
                <ImageListItem key={ConjuntoImage}>
                    <Image src={ConjuntoImage} alt="conjunto" />
                </ImageListItem>
                <ImageListItem key={MaqueteImage}>
                    <Image src={MaqueteImage} alt="maquete" />
                </ImageListItem>
            </ImageList>

        </div>
    )
}