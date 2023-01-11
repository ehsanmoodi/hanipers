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
        <title>Hanipers</title>
        <meta name="description" content="cake with different FILLING" />
      </Head>

      <Header />

      <main className="blog">
        <motion.div
          initial={{ x: -8 }}
          animate={{
            x: 8,
            transition: {
              ease: "linear",
              repeat: Infinity,
              duration: 3,
              repeatType: "mirror",
            },
          }}
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
