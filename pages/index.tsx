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

import banner from "../public/images/temp/banner.png";

const Home: NextPage = () => {
  const { t } = useTranslation("common");

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsModalOpen(true), 5000);

    return () => clearTimeout(timer);
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

      <Dialog
        open={isModalOpen}
        as="div"
        className="relative z-10"
        onClose={() => setIsModalOpen(false)}
      >
        <div className="fixed inset-0 bg-black/75" />
        <div className="flex items-center justify-center p-4 fixed inset-0">
          <Dialog.Panel className="w-full max-w-5xl">
            <Image src={banner} alt="banner" />
          </Dialog.Panel>
        </div>
      </Dialog>
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
