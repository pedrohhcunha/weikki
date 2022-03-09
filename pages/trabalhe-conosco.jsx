import styles from '../styles/trabalheConosco.module.scss'
import Vaga from '../components/Vaga/Componente'
import logo from '../public/images/error.png'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function TrabalheConosco(props){

    const [stateModalVaga, setStateModalVaga] = useState(false);

    const [vagasSepti, setVagasSepti] = useState([{
        id: 0,
        imagem_url: "tania.png",
        titulo: "",
        responsabilidades: "",
        requisitos: "",
        beneficios: ""
    }])

    //Bloquendo scroll quando o modal estiver aberto
    useEffect(() => {
        axios.post(`${process.env.NEXT_PUBLIC_INTRANET_API}/vagas_septi`, {
            id: 4
        }).
        then((response) => {
            setVagasSepti(response.data)
        })
        if(stateModalVaga){
            document.querySelector('body').style.overflow = 'hidden'
        } else {
            document.querySelector('body').style.overflow = 'auto'
        }
    }, [stateModalVaga]);

    return(
        <main className={styles.main}>
            <h2>Trabalhe Conosco</h2>
            <div className={styles.vagas}>
                {vagasSepti.length >= 1 ?
                    vagasSepti.map(vaga => (
                        <Vaga
                            imagem={vaga.imagem_url}
                            title={vaga.titulo}
                            responsabilidades={vaga.responsabilidades}
                            requisitos={vaga.requisitos}
                            oferecemos={vaga.beneficios}
                            openVaga={() => {
                                setVagaAtual(vaga.id)
                                setStateModalVaga(true)
                            }}
                        />  
                    ))
                : null}
            </div>
            <aside className={styles.modalVaga}>
                <form className={styles.modal}>
                    <div className={styles.areaInputs}>
                        <div className={styles.areaInput}>
                            <label className={styles.label} htmlFor="nameInput">Nome*</label>
                            <input required className={styles.input} name="nameInput" type="text" />
                        </div>
                        <div className={styles.areaInput}>
                            <label className={styles.label} htmlFor="nameInput">Email*</label>
                            <input required className={styles.input} name="emailInput" type="email" />
                        </div>
                        <div className={styles.areaInput}>
                            <label className={styles.label} htmlFor="nameInput">Sua mensagem</label>
                            <textarea required className={styles.input} style={{padding: '10px', minHeight: '100px', resize: 'none'}}  name="nameInput" type="text" />
                        </div>
                        <div className={styles.areaInput}>
                            <label className={styles.label} htmlFor="nameInput">Seu curriculum</label>
                            <div className={styles.areaDragInDrop}>
                                Solte um arquivo ou busque do seu dispositivo                                
                            </div>
                        </div>
                    </div>
                    <div className={styles.controllersArea}>
                        <button className={styles.button}>Cancelar</button>
                        <button className={styles.button}>Enviar</button>
                    </div>
                </form>
            </aside>
        </main>
    )
}