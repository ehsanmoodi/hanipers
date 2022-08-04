import Image from "next/image";
import Link from "next/link";
import { forwardRef, Ref } from "react";

import type { BlogItemProps } from "./types";

const BlogItem: React.FC<BlogItemProps> = forwardRef(
  ({ image, title, date, views, href }, ref: Ref<HTMLDivElement>) => {
    return (
      <article ref={ref} className="blog-itm">
        <div className="blog-itm__image">
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            quality={100}
            objectPosition="center"
          />
        </div>
        <div className="blog-itm__detail">
          <Link href={href}>
            <a className="blog-itm__detail__title">{title}</a>
          </Link>
          <div className="blog-itm__detail__meta">
            <span className="date">{date}</span>
            <span className="views">{views} View</span>
          </div>
          <Link href={href}>
            <a className="blog-itm__detail__link">Read The Article</a>
          </Link>
        </div>
      </article>
    );
  }
);

BlogItem.displayName = "BlogItem";

export default BlogItem;
