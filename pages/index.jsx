//Página Inicial da landing page

//Impoortando os componentes necessários
import Head from 'next/head'
import Header from '../components/Header/componente.jsx'
import Inicio from '../components/Inicio/componente.jsx'
import Sobre from '../components/Sobre/componente.jsx'
import Solucoes from '../components/Solucoes/componente.jsx'
import Diferenciais from '../components/Diferenciais/componente.jsx'
import Clientes from '../components/Clientes/componente.jsx'
import Final from '../components/Final/componente.jsx'
import Footer from '../components/Footer/componente.jsx'
import Modal from '../components/Modal/componente.jsx'
import Whatsapp from '../components/Whatsapp/componente.jsx'

//Importando os hooks necessários
import { useEffect, useState } from 'react'

//Definindo e exportando o componente
export default function Home() {

  //Variável para controlar quandfo o modal está aberto(true) ou fechado(false) 
  const [modalIsActive, setModalIsActive] = useState(false);

  //Adicionando efeito para fechar modal utilizando a tecla ESC
  useEffect(() => {
    window.addEventListener('keydown', event => {
      if(event.key === "Escape") {
        setModalIsActive(false)
      }
    })
  }, []);


  //Retornando o JSX do coponente
  return (
    <>
      <Head>
        <title>Weikki | Sua melhor escolha em uniformes e EPI&apos;s</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="facebook-domain-verification" content="2tvzs8l0f00vthterv5hopcb37jyza" />
        <script dangerouslySetInnerHTML={{__html: `
             (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:2791333,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}}>
        </script>
        <script dangerouslySetInnerHTML={{__html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '413311417242185');
          fbq('track', 'PageView');
          `}}>
        </script>
        <noscript><img height="1" width="1" style={{display: 'none'}}
          src="https://www.facebook.com/tr?id=413311417242185&ev=PageView&noscript=1"
        /></noscript>
      </Head>
      
      <main>
        <Header openModal={() => setModalIsActive(true)} />
        <Inicio openModal={() => setModalIsActive(true)} />
        <Sobre />
        <Solucoes openModal={() => setModalIsActive(true)} />
        <Diferenciais openModal={() => setModalIsActive(true)} />
        <Clientes />
        <Final openModal={() => setModalIsActive(true)}/>
        <Footer />
        <Modal isActive={modalIsActive} closeModal={() => setModalIsActive(false)}/>
        <Whatsapp />
      </main>
    </>
  )
}
