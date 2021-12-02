import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <header className="text-green-500">
          Bienvenido a Next JS
        </header>
      </main>
    </>
  )
}
