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

import { useState } from 'react'

export default function Home() {
  const [modalIsActive, setModalIsActive] = useState(true);
  return (
    <>
      <Head>
        <title>Weikki - Uniformes e EPIs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Inicio />
        <Sobre />
        <Solucoes />
        <Diferenciais />
        <Clientes />
        <Final />
        <Footer />

        <Modal isActive={modalIsActive} closeModal={() => setModalIsActive(false)}/>
      </main>
    </>
  )
}
