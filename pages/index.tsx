import type { NextPage, GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import {
  Footer,
  Header,
  IndexBlog,
  Hero,
  Ingredients,
  Slider,
} from "../components";
import { getLatestBlogItems } from "../content/blog";

const Home: NextPage = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>Hanipers</title>
        <meta name="description" content="cake with different FILLING" />
      </Head>

      <Header />

      <main>
        <Hero />
        <Ingredients />
        <Slider />
        <IndexBlog title={t("our-blog")} items={getLatestBlogItems()} />
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
      ])),
    },
  };
};
