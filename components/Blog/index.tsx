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
    title: "It’s time to take a bite and get ready for the journey",
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
    title: "Hanipers; The great sense of lightness and pleasuring",
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
    title: "Flying without wings as light as a little piece of cloud",
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

const Blog: React.FC = () => {
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

      <svg
        className="absolute -top-28 left-6 lg:left-32 scale-50 lg:scale-100"
        width="99"
        height="104"
        viewBox="0 0 99 104"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
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
          d="M35.4177 103C20.9022 75.5233 46.1254 24.4484 71.8621 24.4483C96.2043 24.4481 106.347 51.0429 90.0942 67.859C62.2913 96.6265 -17.076 72.2668 4.75059 0.999996"
          stroke="#002147"
          strokeWidth="1.2"
        />
      </svg>

      <svg
        className="absolute -bottom-20 right-20"
        width="59"
        height="67"
        viewBox="0 0 59 67"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
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
          d="M0.828812 33.6848C15.5389 21.0983 49.8629 30.045 53.3042 45.9899C56.5591 61.0707 41.7987 70.8325 29.4351 62.9629C8.2844 49.5004 12.4343 -2.85656 58.5405 1.345"
          stroke="#002147"
          strokeWidth="1.2"
        />
      </svg>

      <svg
        className="absolute right-6 lg:right-32 -top-10"
        width="74"
        height="66"
        viewBox="0 0 74 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
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
          width="28.3884"
          height="58.6694"
          rx="14.1942"
          transform="matrix(0.721858 -0.692041 -0.692041 -0.721858 42.2622 64.2976)"
          fill="#FFD66F"
        />
        <rect
          x="0.0178907"
          y="-0.84834"
          width="27.1884"
          height="57.4694"
          rx="13.5942"
          transform="matrix(0.721858 -0.692041 -0.692041 -0.721858 50.2939 61.7018)"
          stroke="#002147"
          strokeWidth="1.2"
        />
      </svg>
    </motion.section>
  );
};

export default Blog;
