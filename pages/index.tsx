import type { NextPage, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { Footer, Header, Blog, Hero, Ingredients, Slider } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hanipers</title>
        <meta name="description" content="cake with different FILLING" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Hero />
        <Ingredients />
        <Slider />
        <Blog />
      </main>

      <Footer />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", [
        "common",
        "header",
        "footer",
        "hero",
        "ingredients",
        "slider",
        "blog",
      ])),
    },
  };
};
