import styles from '../styles/trabalheConosco.module.scss'
import Vaga from '../components/Vaga/Componente'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer/componente'
import Header from '../components/Header/componente'
import Head from 'next/head'

export default function TrabalheConosco(props){

    const [stateModalVaga, setStateModalVaga] = useState(0);

    const [vagasSepti, setVagasSepti] = useState([])

    const [vagaAtual, setVagaAtual] = useState(0);

    const [newVaga, setNewVaga] = useState({
        name: '',
        email: '',
        message: '',
    });

    const sendForm = event => {
        event.preventDefault()
        
        var finalData = new FormData();
        var imagefile = document.querySelector('#curriculum');
        
        finalData.append("image", imagefile.files[0]);
        finalData.append("nome", newVaga.name)
        finalData.append("email", newVaga.email)
        finalData.append("mensagem", newVaga.message)
        finalData.append("vaga", vagaAtual)

        axios({
            method: 'post',
            url: `${process.env.NEXT_PUBLIC_INTRANET_API}/receive_curriculo`,
            data: finalData
        },{headers: { 'Content-Type': 'multipart/form-data' }}).then(response => {
            document.querySelector('#FormVaga').reset()
            
            setNewVaga({
                nome: "",
                email: "",
                mensagem: "",
                file: {},
                vaga: props.vagaId
            })

            setStateModalVaga(false)
        })
    }
    
    //Bloquendo scroll quando o modal estiver aberto
    useEffect(() => {
        axios.post(`${process.env.NEXT_PUBLIC_INTRANET_API}/vagas_company`, {
            id: 4
        }).
        then((response) => {
            setVagasSepti(response.data)
        })
    }, []);

    useEffect(() => {
        if(stateModalVaga){
            document.querySelector('body').style.overflow = 'hidden'
        } else {
            document.querySelector('body').style.overflow = 'auto'
        }
    }, [stateModalVaga]);

    return(
        <>
        <Head>
            <title>Trabalhe Conosco - Weikki</title>
        </Head>
        <Header />
            <main className={styles.main}>
                <h2>Trabalhe Conosco</h2>
                <div className={styles.vagas}>
                    {vagasSepti.length >= 1 ?
                        vagasSepti.map((vaga, index) => (
                            <Vaga
                                key={index}
                                imagem={vaga?.imagem_url}
                                title={vaga?.titulo}
                                responsabilidades={vaga?.responsabilidades}
                                requisitos={vaga?.requisitos}
                                oferecemos={vaga?.beneficios}
                                openVaga={() => {
                                    setVagaAtual(vaga?.id)
                                    setStateModalVaga(true)
                                }}
                            />  
                        ))
                    : null
                    }
                </div>
                {vagasSepti.length >= 1 ?
                    <aside className={`${styles.modalVaga} ${stateModalVaga ? styles.active : null}`}>
                        <form id="FormVaga" onSubmit={sendForm} className={styles.modal}>
                            <div className={styles.topArea}>
                                <h2 className={styles.titleArea}>{vagasSepti.find(vaga => vaga.id === vagaAtual)?.titulo}</h2>
                                <FontAwesomeIcon icon={faTimes} className={styles.iconClose} onClick={() => setStateModalVaga(false)}/>
                            </div>
                            <div className={styles.areaInputs}>
                                <div className={styles.areaInput}>
                                    <label className={styles.label} htmlFor="nameInput">Nome*</label>
                                    <input value={newVaga.name} onChange={event => setNewVaga({...newVaga, ['name']: event.target.value})} required className={styles.input} name="nameInput" type="text" />
                                </div>
                                <div className={styles.areaInput}>
                                    <label className={styles.label} htmlFor="nameInput">Email*</label>
                                    <input value={newVaga.email} onChange={event => setNewVaga({...newVaga, ['email']: event.target.value})} required className={styles.input} name="emailInputx" type="email" />
                                </div>
                                <div className={styles.areaInput}>
                                    <label className={styles.label} htmlFor="nameInput">Sua mensagem</label>
                                    <textarea valeu={newVaga.message} onChange={event => setNewVaga({...newVaga, ['message']: event.target.value})} required className={styles.input} style={{padding: '10px', minHeight: '100px', resize: 'none'}}  name="nameInput" type="text" />
                                </div>
                                <div className={styles.areaInput}>
                                    <label className={styles.label} htmlFor="nameInput">Seu curriculum</label>
                                    <label htmlFor='curriculum' className={`${styles.areaDragInDrop} ${newVaga.file ? styles.active : ''}`}>
                                        {newVaga.file ? newVaga.file.name : 'Busque o curriculum no seu dispositivo  '}
                                    </label>
                                    <input onChange={event => {
                                        console.log("Adicionou aquele arquivo:", event.target.files[0])
                                        setNewVaga({...newVaga, ['file']: event.target.files[0]})
                                    }} style={{display: 'none'}} type="file" id="curriculum" name="curriculum" />
                                </div>
                            </div>
                            <div className={styles.controllersArea}>
                                <button onClick={() => setStateModalVaga(false)} className={styles.button}>Cancelar</button>
                                <button type="submit" className={styles.button}>Enviar</button>
                            </div>
                        </form>
                    </aside>
                : null}
            </main>
            <Footer />
        </>
    )
}