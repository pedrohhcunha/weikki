//Componente para formulário de compra

//Importando módulo para a estilização do componente
import styles from './styles.module.scss'

//Importando os componentes necessários
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import InputMask from "react-input-mask";
import axios from 'axios'
import { cnpj } from 'cpf-cnpj-validator'; 

//Importando hooks necessários
import { useState } from 'react'

//Definindo e exportando o componente
export default function Modal(props) {

    //Criando variável auxiliar paa armazenar a sigla de todos os estados brasileiros
    let states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']

    //Definindo varia´vel para acumular as mensagens de erro
    const [errorMensage, setErrorMensage] = useState("");
    
    //Defininfo variável para controle dos produtos de interese do cliente 
    const [listInteresse, setListInteresse] = useState([false, false, false]);

    //Definindo estado para armazzenar os dados do formulário
    const [dataForm, setDataForm] = useState({
        nameInput: "",
        emailInput: "",
        occupationInput: "",
        companyInput: "",
        quantidadeInput: "",
        addressInput: "",
        phoneInput: "",
        cnpjInput: "",
        cityInput: "",
        stateInput: ""
    });

    //Criando função para atualizar os dados do formuário semporew que o valor do input for alterado
    const handleInput = event => {
        setDataForm({...dataForm, [event.target.name]: event.target.value})
    }

    //Definindo função a ser executada para enviar os dados a backend
    const submitForm = event => {

        event.preventDefault()

        //Validando se o CNPJ é válido
        if(cnpj.isValid(dataForm.cnpjInput.replace('/[^0-9]/', ''))){

            //Criando auxiliar para setar os produtos de interesse do cliente
            let products = ["Uniformes profissionais", "Uniformes executivos", "EPIs"]

            //Padronizando os dados a serem enviados para o backend
            let dataToSend = {
                "nome": dataForm.nameInput,
                "email": dataForm.emailInput,
                "empresa": dataForm.companyInput,
                "emprego": dataForm.occupationInput,
                "estado": dataForm.stateInput,
                "cidade": dataForm.cityInput,
                /* "endereco": dataForm.addressInput, */
                "telefone": dataForm.phoneInput,
                "cnpj": dataForm.cnpjInput,
                "produto_interesse": products.map((item, index) => listInteresse[index] ? item : null).filter(item => item!== null),
                "quantidade_funcionarios": dataForm.quantidadeInput,
                "tag": "formulario-de-qualificacao-weikki"
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

            //Executando post para o backend
            console.log("Dest url:", url_dest)
            axios.post(url_dest, dataToSend).then(response => {
                if(response.data.success){

                    //Zerando os campos do formuláro e fechando o modal
                    document.querySelector('#FormConvert').reset()
                    props.closeModal()
                    window.location.href = '/obrigado'
                } else {
                    setErrorMensage(response.message)
                }
            })
        } else {
            setErrorMensage("CNPJ inválido!")
        }
    }


    //Retorando o JSX do componente
    return(
        <aside className={`${styles.aside} ${props.isActive ? styles.active : ''}`}>
            <div onClick={props.closeModal} className={styles.closeModal}>
                <FontAwesomeIcon className={styles.icon} icon={faTimes} />
            </div>
            <form id="FormConvert" onSubmit={event => submitForm(event)} className={styles.areaModal}>
                <h2 className={styles.title}>Entre em contato</h2>
                <div className={styles.inputsGroup}>
                    <div className={styles.areaInput}>
                        <label className={styles.label} htmlFor="nameInput">Nome*</label>
                        <input onChange={event => handleInput(event)} required className={styles.input} name="nameInput" type="text" />
                    </div>
                    <div className={styles.groupInput}>
                        <div className={styles.areaInput}>
                            <label className={styles.label} htmlFor="emailInput">Email*</label>
                            <input onChange={event => handleInput(event)} required className={styles.input} name="emailInput" type="email" />
                        </div>
                        <div className={styles.areaInput}>
                            <label className={styles.label} htmlFor="occupationInput">Cargo*</label>
                            <input onChange={event => handleInput(event)} required className={styles.input} name="occupationInput" type="text" />
                        </div>
                    </div>
                    <div className={styles.groupInput}>
                        <div className={styles.areaInput}>
                            <label className={styles.label} htmlFor="companyInput">Empresa*</label>
                            <input onChange={event => handleInput(event)} required className={styles.input} name="companyInput" type="text" />
                        </div>
                        <div className={styles.areaInput}>
                            <label className={styles.label} htmlFor="quantidadeInput">Quantidade de funcionários*</label>
                            <select onChange={event => handleInput(event)} required name="quantidadeInput" id="quantidadeInput" className={styles.input}>
                                <option value="" selected disabled>Selecione...</option>
                                <option value="10-50">10-50</option>
                                <option value="51-200">51-200</option>
                                <option value="201-500">201-500</option>
                                <option value="501-1000">501-1000</option>
                                <option value="1001-5000">1001-5000</option>
                                <option value="5001-10000">5001-10000</option>
                                <option value="10001+">10001+</option>
                            </select>
                        </div>
                    </div>
                    {/*<div className={styles.areaInput}>
                        <label className={styles.label} htmlFor="addressInput">Endereço*</label>
                        <input onChange={event => handleInput(event)} required className={styles.input} name="addressInput" type="text" />
                    </div> */}
                    <div className={styles.groupInput}>
                        <div className={styles.areaInput}>
                            <label className={styles.label} htmlFor="stateInput">Estado*</label>
                            <select onChange={event => handleInput(event)} required name="stateInput" id="stateInput" className={styles.input}>
                                <option value="" selected disabled>Selecione...</option>
                                {states.map((state, index) => (
                                    <option key={index} value={state}>{state}</option>
                                ))}
                            </select>
                        </div>
                        <div className={styles.areaInput}>
                            <label className={styles.label} htmlFor="cityInput">Cidade*</label>
                            <input onChange={event => handleInput(event)} required className={styles.input} name="cityInput" type="text" />
                        </div>
                    </div>
                    <div className={styles.groupInput}>
                        <div className={styles.areaInput}>
                            <label className={styles.label} htmlFor="phoneInput">Telefone*</label>
                            <InputMask value={dataForm.phoneInput} mask="99 9 9999 9999" onChange={event => handleInput(event)} required className={styles.input} name="phoneInput" type="text" />
                        </div>
                        <div className={styles.areaInput}>
                            <label className={styles.label} htmlFor="cnpjInput">CNPJ*</label>
                            <InputMask value={dataForm.cnpjInput} mask="99.999.999/9999-99" onChange={event => handleInput(event)} required className={styles.input} name="cnpjInput" type="text" />
                        </div>
                    </div>
                    <fieldset className={styles.fieldset}>
                        <legend className={styles.legend}>Selecione os produtos de interesse</legend>
                        <div onClick={() => setListInteresse(listInteresse.map((item, index) => index === 0 ? !item : item))} className={`${styles.checkbox} ${listInteresse[0] ? styles.active : ''}`}>Uniformes profissionais</div>
                        <div onClick={() => setListInteresse(listInteresse.map((item, index) => index === 1 ? !item : item))} className={`${styles.checkbox} ${listInteresse[1] ? styles.active : ''}`}>Uniforme Executivos</div>
                        <div onClick={() => setListInteresse(listInteresse.map((item, index) => index === 2 ? !item : item))} className={`${styles.checkbox} ${listInteresse[2] ? styles.active : ''}`}>EPI&apos;s</div>
                    </fieldset>
                </div>
                {errorMensage !== "" ? <div className={styles.span}>{errorMensage}</div> : null}
                <button className={styles.button} type="submit">Enviar</button>
            </form>
        </aside>
    )
}