import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './styles.module.scss'

export default function Footer (props){
    return(
        <footer className={styles.footer}>
            <div className={styles.contentArea}>
                <div className={styles.areaLogo}></div>
                <div className={styles.areaInfos}>
                    <div className={styles.info}>
                        <span>
                            <strong>Endereço:</strong>  Rua Barão do Rio Branco, 1044 E, <br />
                            Bairro Jardim Itália, Chapecó - SC, CEP: 89.802-101
                        </span>
                    </div>
                    <div className={styles.info}>
                        <span>
                            <strong>Contato:</strong> <br />
                            <div className={styles.align}>
                                <FontAwesomeIcon className={styles.icon} icon={faPhone} />
                                <span>(49) 3322-2593</span>
                            </div>
                        </span>
                    </div>
                    <div className={styles.info}>
                        <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
                        <span>weikki@weikki.com.br</span>
                    </div>
                </div>
                <div className={styles.areaRedes}>
                    <div className={styles.rede}>
                        <FontAwesomeIcon className={styles.icon} icon={faFacebook} />
                    </div>
                    <div className={styles.rede}>
                        <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
                    </div>
                    <div className={styles.rede}>
                        <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
                    </div>
                </div>
            </div>
            <div className={styles.direitosArea}>
                Todos os direitos reservados. WEIKKI 2022
            </div>
        </footer>
    )
}