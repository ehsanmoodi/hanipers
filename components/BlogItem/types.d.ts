export interface BlogItemProps {
  image: {
    src: string;
    alt?: string;
  };
  title: string;
  date: string;
  views: number;
  href: string;
}
