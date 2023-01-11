import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { StaticImageData } from "next/image";
import { ParsedUrlQuery } from "querystring";
import { blogItems } from "../../content/blog";

const Single: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  slug,
  title,
  featureImage,
  views,
  date,
  content,
  tags,
}) => {
  return <h1>Single Page</h1>;
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
