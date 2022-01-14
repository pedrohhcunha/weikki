import Button from '../Button/componente.jsx'
import styles from './styles.module.scss';

export default function Solucoes (props){
    return(
        <section className={styles.section}>
            <h2>Nossas Soluções</h2>
            <h3>Nossos uniformes e EPI's são ideais para as necessidades da sua empresa.</h3>
            <div className={styles.areaCards}>
                <div className={styles.cardSolucao}>
                    <div className={styles.topArea}>
                        <div className={styles.areaIcon}></div>
                        <h4>Uniformes profissionais</h4>
                    </div>
                    <div className={styles.areaImagem}>

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
                        <div className={styles.areaIcon}></div>
                        <h4>Uniformes profissionais</h4>
                    </div>
                    <div className={styles.areaImagem}>

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
                        <div className={styles.areaIcon}></div>
                        <h4>Uniformes profissionais</h4>
                    </div>
                    <div className={styles.areaImagem}>

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