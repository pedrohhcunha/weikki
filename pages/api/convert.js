import axios from 'axios';

/** 
Exemplo de body no request:

{
	"nome": "Teste",
	"email": "teste@gmail.com",
	"empresa": "Onfinity",
	"emprego": "Programador"
  "endereco":"Av. Teste",
  "telefone":"(49) 99999-9999",
  "cnpj":"00.000.000/0000-00",
  "produto_interesse":["Camisa", "Capacete", ...],
  "quantidade_funcionarios": "10-50"
}

*/

export default function handler(req, res) {
  if (req.method === 'POST') { 
    let nome = req.body.nome
    let email = req.body.email
    let empresa = req.body.empresa
    let emprego = req.body.emprego
    let cidade = req.body.cidade
    let estado = req.body.estado
    let telefone = req.body.telefone
    let cnpj = req.body.cnpj.replace(/[^\d]+/g, '')
    let produto_interesse = req.body.produto_interesse
    let quantidadeFuncionarios = req.body.quantidade_funcionarios
    let tag =  req.body.tag
    
    
    axios.post(process.env.RD_API_URL + '/auth/token',{  
      "client_id": process.env.RD_CLIENT_ID,
      "client_secret": process.env.RD_CLIENT_SECRET,
      "refresh_token": process.env.RD_REFRESH_TOKEN
    }).then(response => {
      let access_token = response.data.access_token
      let config = {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }

      try{
        axios.post(process.env.RD_API_URL + '/platform/events',{
          "event_type": "CONVERSION",
          "event_family":"CDP",
          "payload": {
            "conversion_identifier": tag,
            "traffic_source": "utm_source",
            "traffic_medium": "Weikki - evento de conversão",
            "traffic_campaign": "utm_campaign",
            "traffic_value ": "utm_term",
            "job_title": emprego,
            "name": nome,
            "email": email,
            "company_name": empresa,
            "state": estado,
            "city": cidade,
            "personal_phone": telefone,
            "cf_cnpj_cpf": cnpj,
            "cf_produtos_de_interesse_lista_weikki": produto_interesse, 
            "cf_quantidade_de_funcionarios": quantidadeFuncionarios,
            "tags": ["weikki", "2022"],
            "available_for_mailing": true
          }
        }, config).
        then(formulario => {
          if(formulario.data.hasOwnProperty('event_uuid')){
            res.json({
              success: true,
              message: "Conversão realizada com sucesso!"
            })
          } else {
            res.json({
              success: false,
              message: "Ocorreu um erro durante a conversão"
            })
          }
        })
      } catch(error){
          console.log("=>", error)
        }
      });
  } 
  
  else {
    res.json({
      success: false,
      message: "Metodo não suportado!"
    })
  }
}
