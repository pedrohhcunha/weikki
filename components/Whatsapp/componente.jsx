import styles from './styles.module.scss';
import logo from './images/whatsapp.png';
import Image from 'next/image'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import InputMask from "react-input-mask";
import axios from 'axios'
import { cnpj } from 'cpf-cnpj-validator'; 

export default function Whatsapp (props) {

    let states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']


    const [statusModal, setStatusModal] = useState(false);

    const [stepModal, setStepModal] = useState(0);

    const [dataForm, setDataForm] = useState({
        nameInputWhats: "",
        emailInputWhats: "",
        occupationInputWhats: "",
        companyInputWhats: "",
        quantidadeInputWhats: "",
        stateInputWhats: "",
        cityInputWhats: "",
        /*addressInputWhats: "", */
        phoneInputWhats: "",
        cnpjInputWhats: ""
    });

    const handleInput = event => {
        setDataForm({...dataForm, [event.target.name]: event.target.value});
    }

    const submitForm = event => {
        event.preventDefault();
        if(stepModal <= 1) {
            setStepModal(stepModal + 1)
            console.log("Passando de fase")
        } else if(cnpj.isValid(dataForm.cnpjInputWhats.replace('/[^0-9]/', ''))){

            let dataToSend = {
                "nome": dataForm.nameInputWhats,
                "email": dataForm.emailInputWhats,
                "empresa": dataForm.companyInputWhats,
                "emprego": dataForm.occupationInputWhats,
                "estado": dataForm.stateInputWhats,
                "cidade": dataForm.cityInputWhats,
                /* "endereco": dataForm.addressInputWhats, */
                "telefone": dataForm.phoneInputWhats,
                "cnpj": dataForm.cnpjInputWhats,
                "produto_interesse": ["Uniformes profissionais", "Uniformes executivos", "EPIs"],
                "quantidade_funcionarios": dataForm.quantidadeInputWhats,
                "tag": "formulario-de-qualificacao-weikki-whatsapp"
            }

            document.querySelector('#FormConvertWhats').reset()

            
            axios.post('/api/convert', dataToSend).then(response => {
                if(response.data.success){
                    setStatusModal(false)
                }
            })
        } else {
            console.log("erro")
        }
    }


    return(
        <aside className={`${statusModal ? styles.active : ''} ${styles.aside}`}>
            <div className={styles.contentArea}>
                <form id="FormConvertWhats" onSubmit={event => submitForm(event)} className={styles.form}>
                    <header className={styles.headerForm}>
                        <h2 className={styles.title}>Olá! Preencha os campos abaixo para iniciar a conversa no whatsapp.</h2>
                        <FontAwesomeIcon onClick={() => setStatusModal(false)} className={styles.icon} icon={faTimes} />
                    </header>
                    <div className={styles.contentForm}>
                        <div className={styles.inputs}>
                            <div className={`${styles.areaInput} ${stepModal === 0 ? styles.active : ''}`} >
                                <label className={styles.label} htmlFor="nameInputWhats">Nome:</label>
                                <input onChange={event => handleInput(event)} className={styles.input} name="nameInputWhats" type="text" />
                            </div>
                            <div className={`${styles.areaInput} ${stepModal === 0 ? styles.active : ''}`} >
                                <label className={styles.label} htmlFor="emailInputWhats">Email:</label>
                                <input onChange={event => handleInput(event)} className={styles.input} name="emailInputWhats" type="email" />
                            </div>
                            <div className={`${styles.areaInput} ${stepModal === 0 ? styles.active : ''}`} >
                                <label className={styles.label} htmlFor="occupationInputWhats">Cargo:</label>
                                <input onChange={event => handleInput(event)} className={styles.input} name="occupationInputWhats" type="text" />
                            </div>
                            <div className={`${styles.areaInput} ${stepModal === 1 ? styles.active : ''}`} >
                                <label className={styles.label} htmlFor="companyInputWhats">Empresa:</label>
                                <input onChange={event => handleInput(event)} className={styles.input} name="companyInputWhats" type="text" />
                            </div>
                            <div className={`${styles.areaInput} ${stepModal === 1 ? styles.active : ''}`} >
                                <label className={styles.label} htmlFor="quantidadeInputWhats">Funcionários:</label>
                                <select defaultValue="DEFAULT" onChange={event => handleInput(event)} required name="quantidadeInputWhats" id="quantidadeInputWhats" className={`${styles.input} ${styles.select}`}>
                                    <option value="DEFAULT" disabled>Selecione...</option>
                                    <option value="10-50">10-50</option>
                                    <option value="51-200">51-200</option>
                                    <option value="201-500">201-500</option>
                                    <option value="501-1000">501-1000</option>
                                    <option value="1001-5000">1001-5000</option>
                                    <option value="5001-10000">5001-10000</option>
                                    <option value="10001+">10001+</option>
                                </select>
                            </div>
                            {/* <div className={`${styles.areaInput} ${stepModal === 1 ? styles.active : ''}`} >
                                <label className={styles.label} htmlFor="addressInputWhats">Endereço:</label>
                                <input onChange={event => handleInput(event)} className={styles.input} name="addressInputWhats" type="text" />
                            </div> */}
                            <div className={`${styles.groupInput} ${stepModal === 1 ? styles.active : ''}`}>
                                <div className={styles.areaInput} >
                                    <label className={styles.label} htmlFor="cityInputWhats">Cidade:</label>
                                    <input onChange={event => handleInput(event)} className={styles.input} name="cityInputWhats" type="text" />
                                </div>
                                <div className={styles.areaInput} >
                                    <label className={styles.label} htmlFor="stateInputWhats">Estado:</label>
                                    <select defaultValue="DEFAULT" onChange={event => handleInput(event)} required name="stateInputWhats" id="stateInputWhats" className={styles.input}>
                                        <option value="DEFAULT" disabled>Selecione...</option>
                                        {states.map((state, index) => (
                                            <option key={index} value={state}>{state}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className={`${styles.areaInput} ${stepModal === 2 ? styles.active : ''}`} >
                                <label className={styles.label} htmlFor="phoneInputWhats">Telefone:</label>
                                <InputMask onChange={event => handleInput(event)} value={dataForm.phoneInputWhats} mask="99 9 9999 9999" className={styles.input} name="phoneInputWhats" type="text" />
                            </div>
                            <div className={`${styles.areaInput} ${stepModal === 2 ? styles.active : ''}`} >
                                <label className={styles.label} htmlFor="cnpjInputWhats">CNPJ:</label>
                                <InputMask onChange={event => handleInput(event)} value={dataForm.cnpjInputWhats} mask="99.999.999/9999-99" className={styles.input} name="cnpjInputWhats" type="text" />
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            {stepModal >= 1 ?
                                <button onClick={() => { 
                                    setStepModal(stepModal >= 1 ? stepModal - 1 : stepModal)
                                }} className={`${styles.white} ${styles.buttonForm}`} type="button">Voltar</button>   
                            : null}
                            <button className={`${styles.buttonForm}`} type="submit">{stepModal <= 1 ? "Avançar" : "Enviar"}</button>
                        </div>
                    </div>
                </form>
                <button onClick={() => setStatusModal(true)} className={styles.button}>
                    <Image priority src={logo} layout="fill"/>
                </button>
            </div>
        </aside>
    )
}