import Button from '../Button/componente.jsx'

export default function Solucoes (props){
    return(
        <section>
            <h2>Nossas Soluções</h2>
            <h3>Nossos uniformes e EPI's são ideais para as necessidades da sua empresa.</h3>
            <div className="areaCards">
                <div className="cardSolucao">
                    <div className="topArea">
                        <div className="areaIcon"></div>
                        <h4>Uniformes profissionais</h4>
                    </div>
                    <div className="areaImagem">

                    </div>
                    <p>lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet lorem ipsum dolor</p>
                    <Button>Comprar agora</Button>
                </div>
                <div className="cardSolucao">
                    <div className="topArea">
                        <div className="areaIcon"></div>
                        <h4>Uniformes profissionais</h4>
                    </div>
                    <div className="areaImagem">

                    </div>
                    <p>lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet lorem ipsum dolor</p>
                    <Button>Comprar agora</Button>
                </div>
                <div className="cardSolucao">
                    <div className="topArea">
                        <div className="areaIcon"></div>
                        <h4>Uniformes profissionais</h4>
                    </div>
                    <div className="areaImagem">

                    </div>
                    <p>lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet lorem ipsum dolor</p>
                    <Button>Comprar agora</Button>
                </div>
            </div>
        </section>
    )
}