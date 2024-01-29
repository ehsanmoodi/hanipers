import { Dialog } from "@headlessui/react";
import type { NextPage, GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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

import banner from "../public/images/temp/banner.jpg";

const Home: NextPage = () => {
  const { t } = useTranslation("common");

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsModalOpen(true), 20000);

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
          <Dialog.Panel className="w-full max-w-5xl flex flex-col gap-4">
            <button className="self-end" onClick={() => setIsModalOpen(false)}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="stroke-white stroke-2 w-10 lg:w-11 lg:h-11 h-10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.16998 14.83L14.83 9.17004"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.83 14.83L9.16998 9.17004"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <Image src={banner} alt="banner" />
            <Link href="https://landing.zargroup.ir/?utm_source=hanipersofficial&utm_medium=PopUp&utm_campaign=BigSaleCampaign">
              <a
                target="_blank"
                className="text-white border border-white text-base lg:text-lg py-2 px-10 hover:bg-white hover:text-black transition-all duration-300 rounded-lg mx-auto"
              >
                اطلاعات بیشتر
              </a>
            </Link>
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
