import { Dialog } from "@headlessui/react";
import type { NextPage, GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Footer,
  Header,
  IndexBlog,
  Hero,
  Ingredients,
  Slider,
} from "../components";
import { getLatestBlogItems } from "../content/blog";
import { Close } from "../icons";
import modalFeatureImage from "../public/images/modal/modal-feature.png";

const Home: NextPage = () => {
  const { t } = useTranslation("common");

  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const timeOut = setTimeout(() => setIsOpen(true), 5000);

    return () => clearTimeout(timeOut);
  }, []);

  return (
    <>
      <Head>
        <title>Hanipers - وبسایت رسمی کیک هانیپرز</title>
        <meta name="description" content="cake with different FILLING" />
        <meta
          name="google-site-verification"
          content="sjQ2TDEQXAW3409E5BoB2P-ak-clJo1UWVv59mmQue4"
        />
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
