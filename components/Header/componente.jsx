import Link from 'next/link'
import styles from './styles.module.scss'
import logo from './images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button/componente.jsx'
import Image from 'next/image'

export default function Header(props){
    return(
        <header className={styles.header}>
            <div className={styles.areaImagem}>
                <Image src={logo} layout="responsive" />
            </div>
            <div className={styles.rightArea}>
                <nav className={styles.nav}>
                    <ul className={styles.ul}>
                        <li className={styles.item}><Link href="#a-weikki"><a>A weikki</a></Link></li>
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
                        <Button large>Comprar agora</Button>
                    </div>
                </div>
            </div>
        </header>
    )
}