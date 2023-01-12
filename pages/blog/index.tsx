import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { motion } from "framer-motion";
import { BlogItem, Footer, Header } from "../../components";
import {
  blogItems,
  BlogItemType,
  getBlogItemsWithTag,
} from "../../content/blog";
import { useRouter } from "next/router";
import Image from "next/image";

import blogCloudsPattern from "../../public/images/blog-pattern.png";

const blogItemsVariant = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
  exit: { opacity: 1, scale: 0 },
};

const blogItemVariant = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
  exit: { scale: 0, opacity: 0 },
};

const MotionBlogItem = motion(BlogItem);

const Blog: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ items }) => {
  const { t } = useTranslation("common");
  const { locale } = useRouter();

  return (
    <>
      <Head>
        <title>Hanipers - وبسایت رسمی کیک هانیپرز</title>
        <meta name="description" content="cake with different FILLING" />
      </Head>

      <Header />

      <main className="blog">
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
            src={blogCloudsPattern}
            alt="blog clouds pattern"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.4 }}
          className="blog__title"
        >
          {t("blog-title")}
        </motion.h1>

        <motion.div
          variants={blogItemsVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "0px", amount: "some" }}
          exit="exit"
          className="blog__content"
        >
          {items.map((item: BlogItemType) => (
            <MotionBlogItem
              variants={blogItemVariant}
              key={item.slug}
              image={{
                src: item.thumbnail,
                alt: locale === "en" ? item.title.en : item.title.fa,
              }}
              title={locale === "en" ? item.title.en : item.title.fa}
              date={locale === "en" ? item.date.en : item.date.fa}
              views={item.views}
              href={`/blog/${item.slug}`}
            />
          ))}
        </motion.div>

        {/* Temporary Disable pagination */}
        {/* <motion.ul
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.4 }}
          className="blog__pagination"
        >
          <li>
            <a href="#" className="prev"></a>
          </li>
          <li>
            <a href="#" className="active">
              1
            </a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">4</a>
          </li>
          <li>
            <a href="#" className="next"></a>
          </li>
        </motion.ul> */}

        <svg
          className="absolute -z-10 bottom-14 left-0"
          xmlns="http://www.w3.org/2000/svg"
          width="98"
          height="93"
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
            strokeWidth="1.2"
            d="M97 33.289C70.87 19.67 22.299 43.334 22.299 67.479c0 22.836 25.29 32.351 41.283 17.104C90.939 58.5 67.773-15.957 0 4.52"
          />
        </svg>

        <svg
          className="absolute -z-10 top-1/2 right-10"
          xmlns="http://www.w3.org/2000/svg"
          width="82"
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
            transform="matrix(-.69202 .72188 .72002 .69396 32.825 0)"
          />
          <rect
            width="31.851"
            height="67.097"
            x=".017"
            y=".85"
            stroke="#002147"
            strokeWidth="1.2"
            rx="15.925"
            transform="matrix(-.69202 .72188 .72002 .69396 22.289 1.995)"
          />
        </svg>

        <svg
          className="absolute -z-10 right-1/4 bottom-0"
          width="74"
          height="60"
          viewBox="0 0 74 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.rect
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            x="61.0971"
            y="-6.17532"
            width="36.8"
            height="78.8"
            rx="18.4"
            transform="rotate(58.6175 61.0971 -6.17532)"
            stroke="#00BBB4"
            strokeWidth="1.2"
          />
        </svg>
      </main>

      <Footer />
    </>
  );
};

export default Blog;

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  query,
}) => {
  const items = query.tag
    ? getBlogItemsWithTag(query.tag as string)
    : blogItems;

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", [
        "common",
        "header",
        "footer",
      ])),
      items: items,
    },
  };
};
