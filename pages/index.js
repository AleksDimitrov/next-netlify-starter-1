import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app! Test1" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
          Test
        </p>
      </main>

      <Footer />
    </div>
  )
}
