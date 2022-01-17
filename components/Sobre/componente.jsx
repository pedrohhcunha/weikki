import Image from 'next/image'
import styles from './styles.module.scss'
import img1 from './images/img1.jpg'

export default function Sobre(props) {
    return(
        <section id="a-weikki" className={styles.section}>
            <h3>Indústria de Uniformes e EPI&apos;s com alto padrão de qualidade e atendimento consultivo.</h3>
            <h4>Desde 1996, nosso propósito é satisfazer nossos clientes e atender às suas necessidades com ética, confiança e respeito.</h4>
           <div className={styles.areaCarrossel}>
            <Image priority objectFit="cover" src={img1} layout="fill" />
           </div>
        </section>
    )
}