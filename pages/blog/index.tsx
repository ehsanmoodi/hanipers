import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { blogItems, getBlogItemsWithTag } from "../../content/blog";

const Blog: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ items }) => {
  return <h1>blog</h1>;
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
