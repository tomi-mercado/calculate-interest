import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Starter NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1 className="text-3xl text-red-700">Starter NextJS</h1>
      </div>
    </>
  );
}
