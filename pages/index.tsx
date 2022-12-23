import Head from "next/head";
import Banner from "../src/components/Banner";
import Header from "../src/components/Header";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon</title>
      </Head>
      <header>
        <Header />
      </header>
      <main className="mx-auto mx-w-screen-2xl">
        <Banner />
      </main>
    </div>
  );
}
