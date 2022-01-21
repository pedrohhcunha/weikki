import Image from 'next/image'
import styles from './styles.module.scss'
import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'
import img4 from './images/4.jpg'
import img5 from './images/5.jpg'
import img6 from './images/6.jpg'

import { useState, useEffect } from 'react';

export default function Sobre(props) {
    const [photos, setPhotos] = useState([
        {
            src: img1
        },
        {
            src: img2
        },
        {
            src: img3
        },
        {
            src: img4
        },
        {
            src: img5
        },
        {
            src: img6
        }
    ]);

    const [photoAtual, setPhotoAtual] = useState(0);

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    useEffect(async () =>{
            await sleep(5000);
            photoAtual === photos.length - 1 ? setPhotoAtual(0) : setPhotoAtual(photoAtual + 1)
    },[photoAtual])
    return(
        <section id="a-weikki" className={styles.section}>
            <h3>Indústria de Uniformes e EPI&apos;s com alto padrão de qualidade e atendimento consultivo.</h3>
            <h4>Desde 1996, nosso propósito é satisfazer nossos clientes e atender às suas necessidades com ética, confiança e respeito.</h4>
           <div className={styles.areaCarrossel}>
               {photos.length >= 1 ? photos.map((photo, index) => (
                    <Image key={index} priority className={`${styles.photo} ${photoAtual === index ? styles.active : null}`} objectFit="cover" src={photo.src} layout="fill" />
               )) : null}
           </div>
        </section>
    )
}