import Head from "next/head";
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
    </div>
  );
}
