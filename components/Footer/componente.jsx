//Componente para o footer da landing page com logo, informações de contato e redes sociais

//Importando o módulo para a estilização do componente
import styles from './styles.module.scss'

//importando componentes necessários
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhoneAlt as faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import logo from './images/logo.png'
import Image from 'next/image'

//Definindo e exportando o componente
export default function Footer (props){

    //Retorando o JSX do componente
    return(
        <footer className={styles.footer}>
            <div className={styles.contentArea}>
                <div className={styles.areaLogo}>
                    <Image src={logo} layout="responsive" />
                </div>
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
                    <button onClick={() => {
                        window.location.href = 'https://www.weikki.com.br/trabalhe-conosco'
                    }}>Trabalhe conosco</button>
                </div>
                <div className={styles.areaRedes}>
                    <Link href="https://www.facebook.com/weikki/" target="_blank">
                        <a target="_blank" className={styles.rede}>
                            <FontAwesomeIcon className={styles.icon} icon={faFacebook} />
                        </a>
                    </Link>
                    <Link href="https://www.instagram.com/weikkiuniformes" target="_blank">
                        <a target="_blank" className={styles.rede}>
                            <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
                        </a>
                    </Link>
                    <Link href="https://www.linkedin.com/company/weikki/about/" target="_blank">
                        <a target="_blank" className={styles.rede}>
                            <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
                        </a>
                    </Link>
                </div>
            </div>
            <div className={styles.direitosArea}>
                Todos os direitos reservados. WEIKKI&copy; 2022
            </div>
        </footer>
    )
}
