import styles from './styles.module.scss'

export default function Button(props) {
    return (
        <button className={`${styles.button} ${props.large ? styles.large : ''} ${props.white ? styles.white : ''}`}>{props.children}</button>
    )
}