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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatum quas consequatur repellendus et quibusdam voluptate cupiditate. Ipsam minima labore deserunt iste quisquam accusantium, quam dolorem consequatur, quod, laborum mollitia.</p>
                </div>
                <div className={styles.diferencial}>
                    <div className={styles.areaIcon}>
                        <FontAwesomeIcon className={styles.icon} icon={faAvianex} />
                    </div>
                    <h4>Praticidade e Agilidade</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatum quas consequatur repellendus et quibusdam voluptate cupiditate. Ipsam minima labore deserunt iste quisquam accusantium, quam dolorem consequatur, quod, laborum mollitia.</p>
                </div>
                <div className={styles.diferencial}>
                    <div className={styles.areaIcon}>
                        <FontAwesomeIcon className={styles.icon} icon={faAvianex} />
                    </div>
                    <h4>Praticidade e Agilidade</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatum quas consequatur repellendus et quibusdam voluptate cupiditate. Ipsam minima labore deserunt iste quisquam accusantium, quam dolorem consequatur, quod, laborum mollitia.</p>
                </div>
            </div>
            <div className={styles.areaButton}>
                <Button>Falar com especialista</Button>
            </div>
        </section>
    )
}