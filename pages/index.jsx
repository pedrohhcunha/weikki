import Head from 'next/head'
import Header from '../components/Header/componente.jsx'
import Inicio from '../components/Inicio/componente.jsx'
import Sobre from '../components/Sobre/componente.jsx'
import Solucoes from '../components/Solucoes/componente.jsx'
import Diferenciais from '../components/Diferenciais/componente.jsx'
import Clientes from '../components/Clientes/componente.jsx'
import Final from '../components/Final/componente.jsx'

export default function Home() {
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
      </main>
    </>
  )
}
