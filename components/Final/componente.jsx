import styles from './styles.module.scss'
import Button from '../Button/componente.jsx'
import logo from './images/logo_vazado.png'
import Image from 'next/image'
import Typewriter from "typewriter-effect";

export default function Final(props){
    return(
        <section className={styles.section}>
            <div className={styles.areaLogo}>
                <Image src={logo} className={styles.logo} layout='responsive' />
            </div>
            <div className={styles.areaContent}>
                <h2><Typewriter options={{loop: true}} onInit={typewriter => {
                    
                    typewriter
                    .typeString("+Qualidade")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("+Praticidade")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("+Bem-estar")
                    .pauseFor(1000)
                    .start()
                }}/></h2>
                <p>Estamos prontos para atender a sua necessidade com durabilidade, segurança e conforto. <br />
                Nosso time de especialistas está aqui para encontrar <strong>a melhor solução para a sua demanda</strong>.</p>
                <Button white>Falar com especialista</Button>
            </div>
        </section>
    )
}