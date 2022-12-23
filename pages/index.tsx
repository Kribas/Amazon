import Head from "next/head";
import Banner from "../src/components/Banner";
import Header from "../src/components/Header";
import ProductFeed from "../src/components/ProductFeed";

type HomeProps = {
  products: any;
};

const Home: React.FC<HomeProps> = ({ products }) => {
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
        <ProductFeed products={products} />
      </main>
    </div>
  );
};

export default Home;

export async function getServerSideProps(context: any) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props: {
      products,
    },
  };
}
