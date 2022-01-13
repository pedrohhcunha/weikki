export default function Footer (props){
    return(
        <footer>
            <div className="contentArea">
                <div className="areaLogo"></div>
                <div className="areaInfos">
                    <div className="info">
                        <strong>Endereço:</strong>  Rua Barão do Rio Branco, 1044 E, <br />
                        Bairro Jardim Itália, Chapecó - SC, CEP: 89.802-101
                    </div>
                    <div className="info">
                        <strong>Contato:</strong> <br />
                        (49) 3322-2593
                    </div>
                    <div className="info">
                        <span>weikki@weikki.com.br</span>
                    </div>
                </div>
            </div>
            <div className="direitosArea">
                Todos os direitos reservados. WEIKKI 2022
            </div>
        </footer>
    )
}