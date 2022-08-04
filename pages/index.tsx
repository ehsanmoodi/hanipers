import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  Footer,
  Header,
  IndexAbout,
  IndexBlog,
  IndexIngredients,
} from "../components";
import IndexHero from "../components/IndexHero";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hanipers</title>
        <meta name="description" content="cake with different FILLING" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Header /> */}

      <main className="">
        {/* <h1 className="text-5xl font-normal">OUR BLOG</h1> */}
        {/* <IndexHero />
        <IndexAbout />
        <IndexIngredients />
        <IndexBlog /> */}
      </main>

      <Footer />
    </>
  );
};

export default Home;
