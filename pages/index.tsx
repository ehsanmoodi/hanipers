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

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="bg-black/70 fixed inset-0 z-10 p-4 flex items-center justify-center"
      >
        <Dialog.Panel className="md:max-w-md gap-4 bg-[url('../public/images/modal/modal-bg.png')] bg-center lg:max-w-2xl relative w-full bg-white rounded-2xl px-6 py-5 flex flex-col justify-between items-center lg:flex-row">
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 lg:w-10 lg:h-10 bg-RobinEggBlue rounded-full flex items-center justify-center outline-none absolute -top-4 -right-2 lg:-right-4"
          >
            <Close />
          </button>
          <div className="text-center flex flex-col grow gap-2">
            <h4 className="text-base md:text-lg lg:text-xl font-black">
              تا یه کشف رویایی چیزی نمونده!
            </h4>
            <span className="text-lg md:text-xl lg:text-2xl text-RobinEggBlue font-extrabold">
              از ۲۷ شهریور
            </span>
            <p className="text-sm lg:text-base font-semibold !leading-8">
              خرید کن!
              <br />
              اسکن کن!
              <br />
              تو قرعه کشی شرکت کن!
              <br />
              جایزه رو مال خودت کن!
              <br />
            </p>
          </div>
          <Image
            src={modalFeatureImage}
            alt="triperz packaging"
            className="grow"
          />
        </Dialog.Panel>
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
