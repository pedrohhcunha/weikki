import Button from '../Button/componente.jsx'
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAvianex } from '@fortawesome/free-brands-svg-icons';

export default function Diferenciais(props){
    return(
        <section id="diferenciais" className={styles.section}>
            <h2>Nossos Diferenciais</h2>
            <h3>Conheça alguns dos nossos diferenciais.</h3>
            <div className={styles.cardsArea}>
                <div className={styles.diferencial}>
                    <div className={styles.areaIcon}>
                        <FontAwesomeIcon className={styles.icon} icon={faAvianex} />
                    </div>
                    <h4>Praticidade e Agilidade</h4>
                    <p>Com uma equipe preparada para atender da melhor forma todos os tipos de setores, você garante praticidade e agilidade na hora de comprar Uniformes e EPI&apos;s.</p>
                </div>
                <div className={styles.diferencial}>
                    <div className={styles.areaIcon}>
                        <FontAwesomeIcon className={styles.icon} icon={faAvianex} />
                    </div>
                    <h4>Alta durabilidade, Segurança e Conforto</h4>
                    <p>Investimos em matérias-primas de alta qualidade, desenvolvendo produtos com design diferenciado e durabilidade que proporcionam conforto, praticidade e bem-estar.</p>
                </div>
                <div className={styles.diferencial}>
                    <div className={styles.areaIcon}>
                        <FontAwesomeIcon className={styles.icon} icon={faAvianex} />
                    </div>
                    <h4>Experiência e Inovação</h4>
                    <p>Com mais de 26 anos de experiência, estamos sempre nos adaptando ao mercado e inovando com a necessidade do consumidor. Buscamos a melhor experiência para cada negócio.</p>
                </div>
            </div>
            <div className={styles.areaButton}>
                <Button onClick={props.openModal}>Falar com especialista</Button>
            </div>
        </section>
    )
}