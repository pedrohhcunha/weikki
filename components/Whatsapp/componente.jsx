//Componente que representar o botão do whatsapp + formulário de cadastro

//Importando o módulo para estilização
import styles from './styles.module.scss';

//Importando imagem do whatsapp
import logo from './images/whatsapp.png';

//Importando componenentes necessários
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { cnpj } from 'cpf-cnpj-validator'; 
import axios from 'axios'
import InputMask from "react-input-mask";
import { faTimes } from '@fortawesome/free-solid-svg-icons'

//Importando hooks necessários
import { useState } from 'react';

//Definindo e exportando o componente
export default function Whatsapp (props) {

    //Utilizando variável para controlar mensagem de erro no formulário
    const [error, setError] = useState("");

    //Definindo variável auxiliar para geral select com todos os estados
    let states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']

    //Defininfo variável para armazenar o estado do modal
    const [statusModal, setStatusModal] = useState(false);

    //Usando estado para armazenar a fase de resposta atual do formulário
    const [stepModal, setStepModal] = useState(0);

    //Criando objeto para armazenar os dados coletados no formulário
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

    //Criando função para atualizar os dados do formulário sempre que o valor de input ou select for modificados
    const handleInput = event => {
        setDataForm({...dataForm, [event.target.name]: event.target.value});
    }


    //Definindo a função a ser executado quando for clicado no botão "Avançar" ou "Enviar"
    const submitForm = event => {
        event.preventDefault();

        if(stepModal === 0){

            //Verifica se os campos da fase atual foram respondidos
            if(dataForm.nameInputWhats === "" || dataForm.emailInputWhats === "" || dataForm.cargoInputWhats === ""){
                setError("Por favor, preencha todos os campos!")
            } else {
                setError("")
                setStepModal(stepModal + 1)
            }
        } else if(stepModal === 1){
            //Verifica se os campos da fase atual foram respondidos
            if(dataForm.companyInputWhats === "" || dataForm.quantidadeInputWhats === "" || dataForm.cityInputWhats === "" || dataForm.stateInputWhats === ""){
                setError("Por favor, preencha todos os campos!")
            } else {
                setError("")
                setStepModal(stepModal + 1)
            }
        } else if(stepModal === 2){
            //Verifica se os campos da fase atual foram respondidos
            if(dataForm.phoneInputWhats !== "" && dataForm.cnpjInputWhats !== ""){

                //Verifica se o CNPJ digitado é um CNPJ válido
                if(cnpj.isValid(dataForm.cnpjInputWhats.replace('/[^0-9]/', ''))){

                    //Padroniza os dados a serem enviados via API
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

                    let url_dest = '/api/convert'

                    if(window.location.href.indexOf("utm_source") != -1) {
                        let utm_source = window.location.href.split('utm_source')[1].split('&')[0].split('=')[1]
                        let utm_medium = window.location.href.split('utm_medium')[1].split('&')[0].split('=')[1]
                        let utm_campaign = window.location.href.split('utm_campaign')[1].split('&')[0].split('=')[1]
        
                        url_dest += '?utm_source=' + (utm_source ? utm_source : 'utm_source') + 
                                    '&utm_medium=' + (utm_medium ? utm_medium : 'Weikki - evento de conversão') + 
                                    '&utm_campaign=' + (utm_campaign ? utm_campaign : 'utm_campaign')
                    }
        
                    if(window.location.href.indexOf("gclid") != -1) {
                        url_dest += '?utm_medium=cpc&utm_campaign=gclid&utm_source=Google'
                    }
                    
                    //Envia os dados para o servidor via POST
                    console.log("Desto url:", url_dest)
                    axios.post(url_dest, dataToSend).then(response => {
                        if(response.data.success){

                            //Reseta os campos do formulário e a fase atual
                            setStatusModal(false)
                            setError("")
                            document.querySelector('#FormConvertWhats').reset()
                            setStepModal(0)
                            gtag_report_conversion('https://wa.me/554999019665')
                            window.location.href = 'https://wa.me/554999019665'
                        } else {
                            setError(response.data.message)
                        }
                    })
                } else {
                    setError("CNPJ inválido!")
                }
            }
        } else {
            setError("Por favor, preencha todos os campos!")
        }
    }


    //Retorana o JSX do componente
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
                        {error !== "" ? 
                            <div className={styles.error}>
                                {error}
                            </div>
                        : null}
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