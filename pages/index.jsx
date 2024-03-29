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
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NF4CXJP');
            `}}>
        </script>

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
        
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-10839513675"></script>

        <script dangerouslySetInnerHTML={{__html: `
           window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-10839513675'); 
        `}}></script>

        <script dangerouslySetInnerHTML={{__html: `
          function gtag_report_conversion(url) { var callback = function () { if (typeof(url) != 'undefined') { window.location = url; } }; gtag('event', 'conversion', { 'send_to': 'AW-10839513675/xP0wCNKom5QDEMu017Ao', 'event_callback': callback }); return false; }
        `}}></script>
      
        <script dangerouslySetInnerHTML={{__html: `
          _linkedin_partner_id = "4156833";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          </script><script type="text/javascript">
          (function(l) {
          if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
          window.lintrk.q=[]}
          var s = document.getElementsByTagName("script")[0];
          var b = document.createElement("script");
          b.type = "text/javascript";b.async = true;
          b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
          s.parentNode.insertBefore(b, s);})(window.lintrk);
        `}}></script>

        <noscript>
          <img height="1" width="1" style={{display: 'none'}} alt="" src="https://px.ads.linkedin.com/collect/?pid=4156833&fmt=gif" />
        </noscript>
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
