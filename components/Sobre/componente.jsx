//Componente para apresentar um pouco sobre a empresa, contém dois textos e um carrossel automático de fotos

//Importando o módulo responsável pela estilização
import styles from './styles.module.scss'

//Importando os compoonentes necessários
import Image from 'next/image'

//Importando as imagens que irão no carrossel
import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'
import img4 from './images/4.jpg'
import img5 from './images/5.jpg'
import img6 from './images/6.jpg'

//Importando os hooks necessários
import { useState, useEffect } from 'react';

//Definindo e exportando o componente
export default function Sobre(props) {

    //Criando estado para armazenar a ordem das imagens a serem reproduzidas no componente
    const [photos, setPhotos] = useState([img1, img2, img3, img4, img5, img6]);

    //Defiinfo variável para controlar a foto atual no carrossel
    const [photoAtual, setPhotoAtual] = useState(0);

    //Criando função de sleep para dar tempo de execução de troca de imagem no carrossel
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    //Criando efeito para alterar a foto atual no carrossel a cada 5 segundos
    useEffect(async () =>{
            await sleep(5000);
            photoAtual === photos.length - 1 ? setPhotoAtual(0) : setPhotoAtual(photoAtual + 1)
    },[photoAtual])

    //Retorando o JSX do componente
    return(
        <section id="a-weikki" className={styles.section}>
            <h3>Indústria de Uniformes e EPI&apos;s com alto padrão de qualidade e atendimento consultivo.</h3>
            <h4>Desde 1996, nosso propósito é satisfazer nossos clientes e atender às suas necessidades com ética, confiança e respeito.</h4>
           <div className={styles.areaCarrossel}>
               {photos.length >= 1 ? photos.map((photo, index) => (
                    <Image key={index} priority className={`${styles.photo} ${photoAtual === index ? styles.active : null}`} objectFit="cover" src={photo} layout="fill" />
               )) : null}
           </div>
        </section>
    )
}