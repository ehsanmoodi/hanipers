import type { NextPage } from "next";
import Head from "next/head";
import { Footer, Header, IndexBlog, IndexIngredients } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hanipers</title>
        <meta name="description" content="cake with different FILLING" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Header /> */}

      <main>
        {/* <IndexHero /> */}
        {/* <IndexAbout /> */}
        <IndexIngredients />
        <IndexBlog />
      </main>

      <Footer />
    </>
  );
};

export default Home;
