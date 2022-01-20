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

import { useEffect, useState } from 'react'

export default function Home() {
  const [modalIsActive, setModalIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener('keydown', event => {
      if(event.key === "Escape") {
        setModalIsActive(false)
      }
    })
  }, []);


  return (
    <>
      <Head>
        <title>Weikki | Sua melhor escolha em uniformes e EPI&apos;s</title>
        <link rel="icon" href="/favicon.ico" />
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
