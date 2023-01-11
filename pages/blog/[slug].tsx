import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { ParsedUrlQuery } from "querystring";
import { Footer, Header, IndexBlog } from "../../components";
import {
  blogItems,
  getRelatedBlogItems,
  getRandomBlogItem,
  emptyBlogItem,
} from "../../content/blog";
import type { BlogItemType } from "../../content/blog";

import singleCloudsPattern from "../../public/images/single-pattern.png";
import readingTime from "reading-time";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Single: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  slug,
  title,
  featureImage,
  views,
  date,
  content,
  tags,
}) => {
  const [randomBlogItem, setRandomBlogItem] =
    useState<BlogItemType>(emptyBlogItem);
  const [relatedBlogItems, setRelatedBlotItems] = useState<BlogItemType[]>([
    emptyBlogItem,
  ]);
  const { t } = useTranslation("common");
  const { locale } = useRouter();

  useEffect(() => {
    setRandomBlogItem(getRandomBlogItem(slug));
    setRelatedBlotItems(getRelatedBlogItems(slug));
  }, []);

  return (
    <>
      <Head>
        <title>Hanipers</title>
        <meta name="description" content="cake with different FILLING" />
      </Head>

      <Header />

      <main className="single">
        <motion.div
          initial={{ x: -8 }}
          animate={{
            x: 8,
            opacity: 1,
            transition: {
              ease: "linear",
              repeat: Infinity,
              duration: 3,
              repeatType: "mirror",
            },
          }}
          exit={{ opacity: 0 }}
          className="blog__pattern"
        >
          <Image
            layout="responsive"
            src={singleCloudsPattern}
            alt="blog clouds pattern"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.4 }}
          className="single__title"
        >
          {title}
        </motion.h1>

        <motion.article
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.4 }}
          className="single__content"
        >
          <div className="single__content__feature">
            <Image src={featureImage} alt={title} />
          </div>

          <div className="single__content__meta">
            <span className="date">{date}</span>
            <span className="views">{views}</span>
            <span className="time">
              {t("read-time")}
              {Math.round(readingTime(content).minutes)}
              {t("min")}
            </span>
          </div>

          <div className="single__content__text">{content}</div>

          <div className="single__content__random">
            <div className="single__content__random__image">
              <Image
                src={randomBlogItem.thumbnail}
                alt={
                  locale === "en"
                    ? randomBlogItem.title.en
                    : randomBlogItem.title.fa
                }
              />
            </div>
            <div className="single__content__random__body">
              <div className="single__content__random__title">
                {locale === "en"
                  ? randomBlogItem.title.en
                  : randomBlogItem.title.fa}
              </div>
              <a
                href={`/blog/${randomBlogItem.slug}`}
                className="single__content__random__link"
              ></a>
            </div>
            <svg
              className="single__content__random__pattern"
              xmlns="http://www.w3.org/2000/svg"
              width="444"
              height="285"
              fill="none"
            >
              <path
                fill="#FFCB05"
                d="m338.075 212.833 30.971 24.011c3.589 2.789 4.317 7.94 1.624 11.516-2.694 3.576-7.777 4.217-11.366 1.428l-30.971-24.012c-3.589-2.789-4.317-7.94-1.623-11.516 2.717-3.535 7.776-4.217 11.365-1.427ZM348.867 56.951l-33.685 19.381c-3.895 2.233-8.979 1.072-11.355-2.59-2.375-3.662-1.14-8.44 2.756-10.673l33.684-19.38c3.896-2.233 8.98-1.072 11.355 2.59 2.328 3.661 1.141 8.44-2.755 10.672Z"
              />
              <path
                fill="#00BBB4"
                d="m213.48 72.525-20.874-33.492c-2.417-3.876-1.301-9.043 2.464-11.531 3.766-2.488 8.787-1.34 11.204 2.536l20.873 33.492c2.417 3.876 1.302 9.043-2.464 11.531-3.812 2.488-8.833 1.34-11.203-2.536ZM255.616 270.463l34.724-18.84c4.02-2.179 5.662-7.231 3.686-11.26-1.975-4.029-6.855-5.513-10.874-3.334l-34.725 18.84c-4.02 2.179-5.662 7.231-3.686 11.26 2.015 4.053 6.895 5.536 10.875 3.334ZM413.207 171.71l-28.665 27.185c-3.319 3.146-3.598 8.45-.647 11.831 2.952 3.381 8.049 3.551 11.368.406l28.665-27.185c3.319-3.146 3.597-8.45.646-11.831-2.995-3.393-8.093-3.563-11.367-.406Z"
              />
              <path
                fill="#FFCB05"
                d="m255.078.985 34.794 18.974c4.024 2.2 5.586 7.335 3.456 11.492-2.13 4.157-7.101 5.77-11.125 3.57l-34.794-18.974c-4.023-2.2-5.586-7.335-3.455-11.492 2.13-4.157 7.1-5.77 11.124-3.57ZM171.481 235.2l26.962 28.226c3.124 3.262 8.42 3.435 11.842.348 3.423-3.088 3.696-8.225.572-11.488l-26.962-28.226c-3.124-3.263-8.42-3.436-11.842-.348-3.423 3.087-3.696 8.225-.572 11.488Z"
              />
              <path
                fill="#00BBB4"
                d="m430.108 104.468-37.146-10.934c-4.318-1.266-6.705-5.776-5.395-10.107a8.195 8.195 0 0 1 10.162-5.499l37.147 10.934c4.318 1.266 6.704 5.776 5.395 10.107-1.31 4.265-5.845 6.764-10.163 5.499Z"
              />
              <path
                fill="#FFCB05"
                d="m91.312 74.714 31.976-22.276c3.677-2.558 8.801-1.648 11.357 2.04 2.557 3.687 1.654 8.82-2.023 11.378l-31.975 22.276c-3.678 2.558-8.801 1.648-11.358-2.039-2.602-3.677-1.689-8.764 2.023-11.379Z"
              />
              <path
                fill="#00BBB4"
                d="M32.878 63.541 9.87 32.086a8.207 8.207 0 0 1 1.789-11.434 8.163 8.163 0 0 1 11.41 1.78l23.007 31.454a8.207 8.207 0 0 1-1.79 11.434c-3.642 2.648-8.77 1.869-11.41-1.779Z"
              />
            </svg>
          </div>

          <div className="single__content__tags">
            <div className="single__content__tags__header">{t("tags")}</div>
            <div className="single__content__tags__items">
              {tags.map((tag: string) => (
                <Link href={`/blog?tag=${tag}`} key={tag}>
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </motion.article>

        <IndexBlog title={t("related-posts")} items={relatedBlogItems} />

        <svg
          className="hidden lg:inline-block absolute -z-10 top-1/4 left-24"
          xmlns="http://www.w3.org/2000/svg"
          width="83"
          height="73"
          fill="none"
        >
          <motion.rect
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
            width="33.05"
            height="68.297"
            fill="#FFD66F"
            rx="16.525"
            transform="rotate(46.21 24.827 58.192) skewX(.154)"
          />
          <rect
            width="31.851"
            height="67.097"
            x="-.017"
            y=".85"
            stroke="#002147"
            stroke-width="1.2"
            rx="15.925"
            transform="rotate(46.21 27.741 71.577) skewX(.154)"
          />
        </svg>

        <svg
          className="hidden lg:inline-block absolute -z-10 top-1/2 right-24"
          xmlns="http://www.w3.org/2000/svg"
          width="105"
          height="101"
          fill="none"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            stroke="#002147"
            stroke-width="1.2"
            d="M104 36.127C76.254 21.313 24.678 47.056 24.678 73.323c0 24.844 26.855 35.196 43.837 18.608C97.564 63.555 72.965-17.449 1 4.828"
          />
        </svg>
      </main>

      <Footer />
    </>
  );
};

export default Single;

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const slugs = blogItems.map((item) => item.slug);

  const paths: (
    | string
    | {
        params: ParsedUrlQuery;
        locale?: string | undefined;
      }
  )[] = [];

  slugs.forEach((slug) => {
    locales?.forEach((locale) => {
      paths.push({
        params: {
          slug,
        },
        locale,
      });
    });
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const slug = params?.slug ? params.slug.toString() : "";
  const data = blogItems.filter((item) => item.slug === slug)[0];

  return {
    props: {
      featureImage: data.featureImage as StaticImageData,
      title: locale === "en" ? data.title.en : data.title.fa,
      slug: slug,
      views: data.views,
      date: locale === "en" ? data.date.en : data.date.fa,
      content: locale === "en" ? data.content.en : data.content.fa,
      tags: data.tags,
      ...(await serverSideTranslations(locale ?? "en", [
        "common",
        "header",
        "footer",
      ])),
    },
  };
};
