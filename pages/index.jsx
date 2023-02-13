import Head from 'next/head'
import Body from '/components/Body'
import Footer from '/components/Footer'
import Hero from '/components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Secure Pro Market</title>
        <meta name="description" content="Created using next js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/smalllogo.png" />
      </Head>
      <Hero />
      <Body />
      <Footer />
    </>
  );
}
