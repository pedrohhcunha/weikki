import styles from '../styles/error.module.scss'
import Button from '../components/Button/componente.jsx'

export default function Custom404() {
    return(
        <main className={styles.main}>
            <div className={styles.content}>
                <h1>404</h1>
                <h2>Oops! Parece que você procurou por uma página que não existe!</h2>
                <Button onClick={() => window.location.href="/"} white>Ir para página inicial</Button>
            </div>
        </main>
    )
}