import styles from '../styles/trabalheConosco.module.scss'
import Vaga from '../components/Vaga/Componente'
import logo from '../public/images/error.png'

export default function TrabalheConosco(props){
    return(
        <main className={styles.main}>
            <h2>Trabalhe Conosco</h2>
            <div className={styles.vagas}>
                <Vaga
                    imagem={logo}
                    title={"sdsdsd"}
                    responsabilidades={"sfsidsidn"}
                    requisitos={"sdsdsdd"}
                    oferecemos={"sdsdsd"}
                    openVaga={() => {
                        console.log('sdsdsds')
                    }}
                />  
            </div>
        </main>
    )
}