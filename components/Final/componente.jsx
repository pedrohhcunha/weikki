import styles from './styles.module.scss'
import Button from '../Button/componente.jsx'

export default function Final(props){
    return(
        <section className={styles.section}>
            <div className={styles.areaLogo}></div>
            <div className={styles.areaContent}>
                <h2>+Durabilidade</h2>
                <p>Estamos prontos para atender a sua necessidade com durabilidade, segurança e conforto.
                Nosso time de especialistas está aqui para encontrar <strong>a melhor solução para a sua demanda</strong>.</p>
                <Button white>Falar com especialista</Button>
            </div>
        </section>
    )
}