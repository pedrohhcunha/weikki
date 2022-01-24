//Componente de botão para ser usado em qualquer um dos outros componentes
// white BOOLEAN - Define se o botão será com o fundo branco ou não
// large BOOLEAN - Define se o botão será maior que os demais ou não

//Importando módulo para a estilização do componente
import styles from './styles.module.scss'

//Definindo e exportando o componente
export default function Button(props) {
    //Retorando o JSX do componente
    return (
        <button onClick={props.onClick} className={`${styles.button} ${props.large ? styles.large : ''} ${props.white ? styles.white : ''}`}>{props.children}</button>
    )
}