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
            <Image src={logoPrincipal} />
            <div className="leftArea">
                <nav>
                    <ul>
                        <li><Link href=""><a>A weikki</a></Link></li>
                        <li><Link href=""><a>Soluções</a></Link></li>
                        <li><Link href=""><a>Diferenciais</a></Link></li>
                    </ul>
                </nav>
                <div className="buttons">
                    <Link href="">
                        <a className={styles.linkTelefone}>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>49 33222593</span>
                        </a>
                    </Link>
                    <Button large>Comprar agora</Button>
                </div>
            </div>
        </header>
    )
}