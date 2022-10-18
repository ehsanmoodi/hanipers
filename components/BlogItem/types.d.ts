import { StaticImageData } from "next/image";

export interface BlogItemProps {
  image: {
    src: string | StaticImageData;
    alt?: string;
  };
  title: string;
  date: string;
  views: string;
  href: string;
}
