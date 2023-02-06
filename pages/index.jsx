import Head from 'next/head'
import Body from './components/Body'
import Hero from './components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Secure Pro Market</title>
        <meta name="description" content="Created by Wisdom Adele using next js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Body />
    </>
  )
}
