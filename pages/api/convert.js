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
    
    let utm_source = req.query.utm_source || 'Weikki'
    let utm_medium = req.query.utm_medium || 'organic'
    let utm_campaign = req.query.utm_campaign || 'none'

    console.log("utm_source: " + utm_source)
    console.log("utm_medium: " + utm_medium)
    console.log("utm_campaign: " + utm_campaign)

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

      let json_send = {
        "event_type": "CONVERSION",
        "event_family":"CDP",
        "payload": {
          "conversion_identifier": tag,
          "job_title": emprego,
          "name": nome,
          "email": email,
          "traffic_source": utm_source,
          "traffic_medium": utm_medium,
          "traffic_medium": utm_campaign,
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
      }

      try{
        axios.post(process.env.RD_API_URL + '/platform/events', json_send, config).
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
