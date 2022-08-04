import blogImage1 from "../../public/images/blog/blog-image-1.png";
import blogImage2 from "../../public/images/blog/blog-image-2.png";
import blogImage3 from "../../public/images/blog/blog-image-3.png";

import BlogItem from "../BlogItem";
import H2 from "../H2";
import { motion, useAnimationControls, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const blogItems = [
  {
    id: 1,
    image: {
      src: blogImage1,
      alt: "",
    },
    title: "Lorem ipsum dolor sit consectetur adipiscing",
    date: "20 oct 2021",
    views: 14,
    href: "#",
  },
  {
    id: 2,
    image: {
      src: blogImage2,
      alt: "",
    },
    title: "Lorem ipsum dolor sit consectetur adipiscing",
    date: "20 oct 2021",
    views: 14,
    href: "#",
  },
  {
    id: 3,
    image: {
      src: blogImage3,
      alt: "",
    },
    title: "Lorem ipsum dolor sit consectetur adipiscing",
    date: "20 oct 2021",
    views: 14,
    href: "#",
  },
];

const blogContainerVariant = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
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
};

const MotionBlogItem = motion(BlogItem);

const IndexBlog: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animation = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
  }, [animation, isInView]);

  return (
    <motion.section
      variants={blogContainerVariant}
      initial="hidden"
      animate={animation}
      className="index-blog"
      id="blog"
      ref={ref}
    >
      <H2>OUR BLOG</H2>
      <div className="index-blog__container">
        {blogItems.map((item) => (
          <MotionBlogItem
            variants={blogItemVariant}
            key={item.id}
            image={item.image}
            title={item.title}
            date={item.date}
            views={item.views}
            href={item.href}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default IndexBlog;
