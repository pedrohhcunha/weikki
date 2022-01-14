import Button from '../Button/componente.jsx'
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAvianex } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image'
import card1 from './images/card1.jpeg'
import card2 from './images/card2.jpeg'
import card3 from './images/card3.jpeg'

export default function Solucoes (props){
    return(
        <section id="solucoes" className={styles.section}>
            <h2>Nossas Soluções</h2>
            <h3>Nossos uniformes e EPI's são ideais para as necessidades da sua empresa.</h3>
            <div className={styles.areaCards}>
                <div className={styles.cardSolucao}>
                    <div className={styles.topArea}>
                        <div className={styles.areaIcon}>
                            <FontAwesomeIcon className={styles.icon} icon={faAvianex} />
                        </div>
                        <h4>Uniformes profissionais</h4>
                    </div>
                    <div className={styles.areaImagem}>
                        <Image objectFit="cover" src={card1} layout="fill" />
                    </div>
                    <p>
                    Produtos indispensáveis para os setores industrial, alimentício, de saúde e construção civil. <br /> 
                    <strong>Produtos:</strong> calça, camisa, polo, jalecos, coletes, macacões e muito mais.
                    </p>
                    <div className={styles.areaButton}>
                        <Button>Comprar agora</Button>
                    </div>
                </div>
                <div className={styles.cardSolucao}>
                    <div className={styles.topArea}>
                        <div className={styles.areaIcon}>
                            <FontAwesomeIcon className={styles.icon} icon={faAvianex} />
                        </div>
                        <h4>Uniformes profissionais</h4>
                    </div>
                    <div className={styles.areaImagem}>
                        <Image objectFit="cover" src={card2} layout="fill" />
                    </div>
                    <p>
                    Produtos indispensáveis para os setores industrial, alimentício, de saúde e construção civil. <br /> 
                    <strong>Produtos:</strong> calça, camisa, polo, jalecos, coletes, macacões e muito mais.
                    </p>
                    <div className={styles.areaButton}>
                        <Button>Comprar agora</Button>
                    </div>
                </div>
                <div className={styles.cardSolucao}>
                    <div className={styles.topArea}>
                        <div className={styles.areaIcon}>
                            <FontAwesomeIcon className={styles.icon} icon={faAvianex} />
                        </div>
                        <h4>Uniformes profissionais</h4>
                    </div>
                    <div className={styles.areaImagem}>
                        <Image objectFit="cover" src={card3} layout="fill" />
                    </div>
                    <p>
                    Produtos indispensáveis para os setores industrial, alimentício, de saúde e construção civil. <br /> 
                    <strong>Produtos:</strong> calça, camisa, polo, jalecos, coletes, macacões e muito mais.
                    </p>
                    <div className={styles.areaButton}>
                        <Button>Comprar agora</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}