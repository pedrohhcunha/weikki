import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.scss'
import { useState } from 'react'
import axios from 'axios'
import InputMask from "react-input-mask";

export default function Modal(props) {
    const [listInteresse, setListInteresse] = useState([false, false, false]);

    const [dataForm, setDataForm] = useState({
        nameInput: "",
        emailInput: "",
        occupationInput: "",
        companyInput: "",
        quantidadeInput: "",
        addressInput: "",
        phoneInput: "",
        cnpjInput: ""
    });

    const handleInput = event => {
        setDataForm({...dataForm, [event.target.name]: event.target.value})
    }

    const submitForm = event => {
        event.preventDefault()
        let products = ['Uniformes profissionais', 'Uniformes Executivos', "EPI's"]

        let dataToSend = {
            "nome": dataForm.nameInput,
            "email": dataForm.emailInput,
            "empresa": dataForm.companyInput,
            "emprego": dataForm.occupationInput,
            "endereco": dataForm.addressInput,
            "telefone": dataForm.phoneInput,
            "cnpj": dataForm.cnpjInput,
            "produto_interesse": products.map((item, index) => listInteresse[index] ? item : null).filter(item => item!== null),
            "quantidade_funcionarios": dataForm.quantidadeInput
        }

        console.log("Enviando dados:", dataToSend)


        axios.post('/api/convert', dataToSend).then(response => {
            console.log(response)
            props.closeModal()
        })
    }

    return(
        <aside className={`${styles.aside} ${props.isActive ? styles.active : ''}`}>
            <div onClick={props.closeModal} className={styles.closeModal}>
                <FontAwesomeIcon className={styles.icon} icon={faTimes} />
            </div>
            <form onSubmit={event => submitForm(event)} className={styles.areaModal}>
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
                    <div className={styles.areaInput}>
                        <label className={styles.label} htmlFor="addressInput">Endereço*</label>
                        <input onChange={event => handleInput(event)} required className={styles.input} name="addressInput" type="text" />
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
                        <legend className={styles.legend}>Produtos de interesse</legend>
                        <div onClick={() => setListInteresse(listInteresse.map((item, index) => index === 0 ? !item : item))} className={`${styles.checkbox} ${listInteresse[0] ? styles.active : ''}`}>Uniformes profissionais</div>
                        <div onClick={() => setListInteresse(listInteresse.map((item, index) => index === 1 ? !item : item))} className={`${styles.checkbox} ${listInteresse[1] ? styles.active : ''}`}>Uniforme Executivos</div>
                        <div onClick={() => setListInteresse(listInteresse.map((item, index) => index === 2 ? !item : item))} className={`${styles.checkbox} ${listInteresse[2] ? styles.active : ''}`}>EPI&apos;s</div>
                    </fieldset>
                </div>
                <button className={styles.button} type="submit">Enviar</button>
            </form>
        </aside>
    )
}