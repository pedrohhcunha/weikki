import Typewriter from "typewriter-effect";
import styles from './styles.module.scss'
import Button from "../Button/componente.jsx"

export default function Inicio(props){
    return(
        <section className={styles.section}>
            <h4>
                <Typewriter options={{loop: true}} onInit={typewriter => {
                
                    typewriter
                    .typeString("+Qualidade")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("+Praticidade")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("+Bem-estar")
                    .pauseFor(1000)
                    .start()
                }}/>
            </h4>
            <h1>
                Uniformes e EPI&apos;s com <strong>inovação e alto padrão em <strong>design</strong></strong>,
                que proporcionam maior <strong className={styles.strongWhite}>conforto, durabilidade
                e segurança</strong>, com a <strong>experiência de quem está há mais
                de <strong>26 anos no mercado.</strong></strong></h1>
            <Button large onClick={props.openModal}>Solicitar Orçamento</Button>
        </section>
    )
}