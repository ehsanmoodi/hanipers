import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { forwardRef, Ref } from "react";

import type { BlogItemProps } from "./types";

const BlogItem: React.FC<BlogItemProps> = forwardRef(
  ({ image, title, date, views, href }, ref: Ref<HTMLDivElement>) => {
    const { t } = useTranslation("common");

    return (
      <article ref={ref} className="blog-itm">
        <div className="blog-itm__image__container">
          <div className="blog-itm__image__container__curve"></div>
          <div className="blog-itm__image">
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              quality={100}
            />
          </div>
        </div>
        <div className="blog-itm__detail">
          <Link href={href}>
            <a className="blog-itm__detail__title">{title}</a>
          </Link>
          <div className="blog-itm__detail__meta">
            {/*<span className="date">{date}</span>*/}
            <span className="views">
              {views} {t("view")}
            </span>
          </div>
        </div>
      </article>
    );
  }
);

BlogItem.displayName = "BlogItem";

export default BlogItem;
