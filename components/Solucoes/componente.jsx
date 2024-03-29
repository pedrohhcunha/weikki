//Componnete para mostrar as soluções que a empresa disponibiliza as seus clientes

//Importando o móduo responsável pela estilização do componente
import styles from './styles.module.scss';

//Importando os componentes necessários
import Button from '../Button/componente.jsx'
import Image from 'next/image'

//Importando as imagens presentes nos cards
import card1 from './images/card1.jpg'
import card2 from './images/card2.jpg'
import card3 from './images/card3.jpg'

//Importando os icones presentes nos cards
import icone1 from './icones/icone1.svg'
import icone2 from './icones/icone2.svg'
import icone3 from './icones/icone3.svg'

//Definindo e exportando o componente
export default function Solucoes (props){

    //Retornando o JSX do componente
    return(
        <section id="solucoes" className={styles.section}>
            <h2>Nossas Soluções</h2>
            <h3>Nossos uniformes e EPI&apos;s são ideais para as necessidades da sua empresa.</h3>
            <div className={styles.areaCards}>
                <div className={styles.cardSolucao}>
                    <div className={styles.topArea}>
                        <div className={styles.areaIcon}>
                            <Image className={styles.icon} src={icone1} />
                        </div>
                        <h4>Uniformes profissionais</h4>
                    </div>
                    <div className={styles.areaImagem}>
                        <Image priority objectFit="cover" src={card1} layout="fill" />
                    </div>
                    <p>
                    Produtos indispensáveis para os setores industrial, alimentício, de saúde e construção civil. <br /> 
                    <strong>Produtos:</strong> calça, camisa, polo, jalecos, coletes, macacões e muito mais.
                    </p>
                    <div className={styles.areaButton}>
                        <Button onClick={props.openModal}>Comprar agora</Button>
                    </div>
                </div>
                <div className={styles.cardSolucao}>
                    <div className={styles.topArea}>
                        <div className={styles.areaIcon}>
                            <Image className={styles.icon} src={icone2} />
                        </div>
                        <h4>Uniformes executivos</h4>
                    </div>
                    <div className={styles.areaImagem}>
                        <Image priority objectFit="cover" src={card2} layout="fill" />
                    </div>
                    <p>
                    Produtos que seguem <strong>tendências em design, segurança e bem-estar.</strong> Ideal para os setores de negócios e de atendimento ao público. <br />
                    <strong>Produtos:</strong> polo, camiseta, camisa, calça social e outros.
                    </p>
                    <div className={styles.areaButton}>
                        <Button onClick={props.openModal}>Comprar agora</Button>
                    </div>
                </div>
                <div className={styles.cardSolucao}>
                    <div className={styles.topArea}>
                        <div className={styles.areaIcon}>
                            <Image className={styles.icon} src={icone3} />
                        </div>
                        <h4>Equipamentos de proteção individual</h4>
                    </div>
                    <div className={styles.areaImagem}>
                        <Image priority objectFit="cover" src={card3} layout="fill" />
                    </div>
                    <p>
                    Oferecemos <strong>Equipamento de Proteção Individual de alta qualidade</strong> para proporcionar a melhor usabilidade com o máximo conforto e proteção. <br />
                    <strong>Produtos:</strong> capacetes, cremes para as mãos, cintos de segurança, abafadores, óculos, calçados de segurança, EPI´s em geral voltados a trabalhos com altura, dentre outros.

                    </p>
                    <div className={styles.areaButton}>
                        <Button onClick={props.openModal}>Comprar agora</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}