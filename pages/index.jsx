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

import { useEffect, useState } from 'react'

export default function Home() {
  const [modalIsActive, setModalIsActive] = useState(true);

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
        <title>Weikki | Sua melhor escolha em uniformes e EPI's</title>
        <link rel="icon" href="/favicon.ico" />
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
      </main>
    </>
  )
}
