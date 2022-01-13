import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'

export default function Header(props){
    return(
        <header className={styles.header}>
            <nav>
                <ul>
                    <li><Link href=""><a>A weikki</a></Link></li>
                    <li><Link href=""><a>Soluções</a></Link></li>
                    <li><Link href=""><a>Diferenciais</a></Link></li>
                </ul>
            </nav>
        </header>
    )
}