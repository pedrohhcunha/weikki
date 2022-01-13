import Head from 'next/head'
import Header from '../components/Header/componente'
export default function Home() {
  return (
    <>
      <Head>
        <title>Weikki - Uniformes e EPIs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
      </main>
    </>
  )
}
