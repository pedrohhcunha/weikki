import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'
import logoPrincipal from './images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button/componente.jsx'

export default function Header(props){
    return(
        <header className={styles.header}>
            <div className={styles.areaImagem}></div>
            <div className={styles.rightArea}>
                <nav className={styles.nav}>
                    <ul className={styles.ul}>
                        <li className={styles.item}><Link href=""><a>A weikki</a></Link></li>
                        <li className={styles.item}><Link href=""><a>Soluções</a></Link></li>
                        <li className={styles.item}><Link href=""><a>Diferenciais</a></Link></li>
                    </ul>
                </nav>
                <div className={styles.buttons}>
                    <Link href="">
                        <a className={styles.linkTelefone}>
                            <FontAwesomeIcon className={styles.icon} icon={faPhone} />
                            <span className={styles.phoneNumber}>49 3322.2593</span>
                        </a>
                    </Link>
                    <Button large>Comprar agora</Button>
                </div>
            </div>
        </header>
    )
}