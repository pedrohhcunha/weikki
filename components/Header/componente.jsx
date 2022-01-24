//Componente para o Header da landing page , mosotranso o logo a barra de navegação telefone e CTA

//Importando módulo para a estilização do componente
import styles from './styles.module.scss'

//Importando componentes necessários
import Link from 'next/link'
import logo from './images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt as faPhone } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button/componente.jsx'
import Image from 'next/image'

//Definindo e exportando o componente
export default function Header(props){

    //Retorando o JSX do componente
    return(
        <header className={styles.header}>
            <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
            <div className={styles.areaImagem}>
                <Image src={logo} layout="responsive" />
            </div>
            <div className={styles.rightArea}>
                <nav className={styles.nav}>
                    <ul className={styles.ul}>
                        <li className={styles.item}><Link href="#a-weikki"><a>A Weikki</a></Link></li>
                        <li className={styles.item}><Link href="#solucoes"><a>Soluções</a></Link></li>
                        <li className={styles.item}><Link href="#diferenciais"><a>Diferenciais</a></Link></li>
                    </ul>
                </nav>
                <div className={styles.buttons}>
                    <Link href="tel:4933222593">
                        <a className={styles.linkTelefone}>
                            <FontAwesomeIcon className={styles.icon} icon={faPhone} />
                            <span className={styles.phoneNumber}>49 3322.2593</span>
                        </a>
                    </Link>
                    <div className={styles.botao}>
                        <Button onClick={props.openModal} large>Comprar agora</Button>
                    </div>
                </div>
            </div>
        </header>
    )
}