import ingredientFeatureImage from "../../public/images/ingredients-feature.png";
import vanilaFlavorThumb from "../../public/images/falvors-thumbs/vanila.png";
import almondFlavorThumb from "../../public/images/falvors-thumbs/almonds.png";
import choclateFlavorThumb from "../../public/images/falvors-thumbs/choclate.png";

import Image from "next/image";
import H2 from "../H2";

import { motion } from "framer-motion";

const arrowVariant = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const arrowPathVariant = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(0, 33, 71, 0)",
  },

  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(0, 33, 71, 1)",
    transition: {
      default: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
      fill: {
        duration: 3,
        ease: [1, 0, 0.8, 1],
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  },
};

const thumbsVariant = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 1,
    },
  },
};

const thumbsImgVariant = {
  hidden: { scale: 0.75 },
  visible: {
    scale: 1,
    transition: {
      default: {
        duration: 1,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  },
};

const Ingredients: React.FC = () => {
  return (
    <section id="ingredients" className="ingredients">
      <div className="ingredients__info">
        <H2>ABOUT HANIPERS</H2>
        <p className="ingredients__info__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
        <ul className="ingredients__info__list">
          <li>
            <span>
              <i>1</i>
            </span>
            Deliciously Sweet Creamy Filling
          </li>
          <li>
            <span>
              <i>2</i>
            </span>
            A Delightful On-The-Go Snack
          </li>
          <li>
            <span>
              <i>3</i>
            </span>
            Perfect For Any Time Of Day
          </li>
          <li>
            <span>
              <i>4</i>
            </span>
            Soft Golden Sponge Cake
          </li>
        </ul>
      </div>
      <div className="ingredients__img">
        <Image src={ingredientFeatureImage} />
        <motion.svg
          className="ingredients__img__svg"
          width="167"
          height="138"
          viewBox="0 0 167 138"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          variants={arrowVariant}
          initial="hidden"
          animate="visible"
        >
          <motion.path
            d="M144.133 7.43875C126.095 5.68333 107.041 14.1034 94.0714 25.9597C81.6125 37.2896 69.3437 57.0195 77.2434 75.5315C80.1412 82.2957 86.7162 87.4692 93.2378 83.2134C99.2978 79.3223 100.016 71.0523 95.7228 64.8378C84.2662 48.2146 60.4651 59.4398 49.8767 69.4638C43.1543 75.77 38.0377 83.8419 34.9175 92.8548C32.066 101.213 30.2014 111.642 32.8376 120.541C33.1847 121.827 35.2941 121.586 35.3107 120.258C35.346 113.314 34.9196 106.735 36.3843 99.9388C37.959 92.8964 40.8651 86.3253 44.8591 80.5655C52.7134 69.139 66.8184 58.4003 81.4157 59.9259C89.0957 60.762 99.9244 69.5033 94.0061 78.1348C91.6557 81.601 87.1311 82.9769 83.6269 79.9471C80.3885 77.1988 78.8292 72.3867 78.1278 68.3342C75.4201 51.8009 86.2574 36.2119 97.4142 26.5127C103.673 21.0393 110.922 16.7002 118.603 13.7152C126.915 10.5021 135.291 9.62085 144.14 8.91952C145.048 9.04943 145.041 7.56867 144.133 7.43875Z"
            stroke="#002147"
            variants={arrowPathVariant}
          />
          <motion.path
            d="M149.134 7.70622C129.794 0.947642 109.076 7.3014 95.2315 21.2178C88.5646 27.9126 83.384 36.076 79.4865 44.8727C75.5518 53.9078 71.8054 64.6381 72.8012 74.9032C73.468 82.0844 78.8256 93.2544 87.3941 90.7119C94.8947 88.4478 100.325 78.0708 99.0066 70.0278C97.5457 61.0646 88.664 55.8391 80.6991 55.5811C71.1094 55.3532 61.8408 60.5513 54.583 66.2993C38.6697 78.8139 28.8528 99.1362 28.7561 120.53C28.7735 122.557 31.7422 123.075 31.7976 121.04C31.9955 105.565 37.1255 90.8527 46.2826 79.1902C50.9948 73.2656 56.7228 68.1611 63.1737 64.3785C70.5723 60.0191 80.1272 56.1929 88.6719 60.6766C98.1002 65.6054 97.7472 76.7273 91.8065 83.8072C88.3006 87.9547 83.4927 89.9103 79.2908 84.7729C75.8372 80.6424 75.2028 74.628 75.5351 69.5955C76.7178 53.3059 85.1172 36.2676 95.5827 24.9235C108.774 10.6137 128.95 3.15139 148.315 9.59491C149.648 10.0666 150.393 8.18624 149.134 7.70622Z"
            stroke="#002147"
            variants={arrowPathVariant}
          />
          <motion.path
            d="M40.8407 105.769C38.1388 108.795 35.8702 112.236 33.4212 115.465C32.2573 116.995 31.0935 118.525 30.0021 120.047C29.4445 120.731 27.1375 124.876 26.2325 124.746C25.7858 124.72 24.1472 119.862 23.8233 119.2C23.0203 117.352 22.2172 115.503 21.4142 113.655C19.8924 110.025 18.6634 105.431 15.9925 102.477C15.0904 101.416 13.4947 102.064 13.6352 103.445C13.8926 106.054 15.225 108.463 16.3401 110.897C17.575 113.628 18.7493 116.443 19.9842 119.173C21.1229 121.76 22.5516 128.116 25.882 128.667C29.0557 129.158 31.3434 123.464 32.7868 121.359C36.1216 116.709 39.8425 112.17 42.6834 107.189C43.5204 105.929 41.8463 104.645 40.8407 105.769Z"
            stroke="#002147"
            variants={arrowPathVariant}
          />
          <motion.path
            d="M39.6867 105.241C37.4807 108.964 36.207 113.506 34.4195 117.567C32.3543 122.199 30.1452 126.848 27.4457 131.168C28.4163 131.288 29.3987 131.484 30.4412 131.596C28.3463 127.054 26.5392 122.479 24.8643 117.812C23.2848 113.288 22.6071 107.967 20.3316 103.677C19.7003 102.438 17.483 102.307 17.4534 104.007C17.4264 108.56 19.5918 113.557 21.0641 117.861C22.8094 122.983 24.9028 127.988 27.284 132.96C28.0224 134.418 29.8447 134.364 30.4484 133.061C32.5973 128.496 34.8416 124.074 36.8348 119.45C38.5989 115.238 40.7477 110.673 41.2784 106.062C41.4253 105.12 40.1567 104.493 39.6867 105.241Z"
            stroke="#002147"
            variants={arrowPathVariant}
          />
          <motion.path
            d="M39.5772 101.372C35.186 111.934 30.867 122.488 26.3195 132.991C27.3547 133.027 28.4621 133.055 29.4973 133.092C26.7559 128.22 24.0146 123.348 21.6109 118.283C19.4225 113.658 17.8505 108.265 14.9868 104.027C14.1123 102.656 12.1349 103.656 12.3591 105.101C13.1731 110.347 16.2743 115.642 18.5467 120.336C20.999 125.241 23.5959 130.129 26.5305 134.824C27.3091 136.051 29.08 135.616 29.4929 134.486C33.4874 123.737 37.6501 113.123 41.7287 102.442C42.3716 100.898 40.1596 99.9126 39.5772 101.372Z"
            stroke="#002147"
            variants={arrowPathVariant}
          />
        </motion.svg>
        <div className="ingredients__img__flavors">
          <span className="ingredients__img__flavors__title">
            LIGHT CAKE <span>WITH</span> LIGHT CREAM
          </span>
          <motion.div
            variants={thumbsVariant}
            initial="hidden"
            animate="visible"
            className="ingredients__img__flavors__imgs"
          >
            <motion.div variants={thumbsImgVariant}>
              <Image src={vanilaFlavorThumb} />
            </motion.div>
            <motion.div variants={thumbsImgVariant}>
              <Image src={almondFlavorThumb} />
            </motion.div>
            <motion.div variants={thumbsImgVariant}>
              <Image src={choclateFlavorThumb} />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <svg
        className="absolute -top-20 right-20"
        width="92"
        height="77"
        viewBox="0 0 92 77"
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
          d="M63.9695 75.6452C42.4462 61.2073 40.6823 13.7289 59.5365 3.55308C77.3691 -6.07136 95.3391 9.44794 90.0975 28.2223C81.1307 60.3398 13.3334 73.8317 1.07872 12.8687"
          stroke="#002147"
          strokeWidth="1.2"
        />
      </svg>

      <svg
        className="absolute -bottom-32 left-6 lg:left-1/4"
        width="93"
        height="77"
        viewBox="0 0 93 77"
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
          d="M33.6488 0.868692C54.1879 17.2731 51.3054 65.3557 31.0624 74.0273C11.9163 82.229 -4.89029 65.0347 2.30995 46.5259C14.6275 14.8628 85.1406 7.00093 91.6332 69.5883"
          stroke="#002147"
          strokeWidth="1.2"
        />
      </svg>

      <svg
        className="absolute -top-24 left-1/4"
        width="78"
        height="71"
        viewBox="0 0 78 71"
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
          x="49.8794"
          y="5.03833"
          width="28.3884"
          height="58.6694"
          rx="14.1942"
          transform="rotate(52.9739 49.8794 5.03833)"
          fill="#FFD66F"
        />
        <rect
          x="58.0815"
          y="8.38598"
          width="27.1884"
          height="57.4694"
          rx="13.5942"
          transform="rotate(52.9739 58.0815 8.38598)"
          stroke="#002147"
          strokeWidth="1.2"
        />
      </svg>

      <svg
        className="absolute -bottom-20 right-6 lg:right-1/4"
        width="53"
        height="54"
        viewBox="0 0 53 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="-5.15201"
          y="14.4715"
          width="28.8"
          height="60.8"
          rx="14.4"
          transform="rotate(-42.9509 -5.15201 14.4715)"
          stroke="#00BBB4"
          strokeWidth="1.2"
        />
      </svg>
    </section>
  );
};

export default Ingredients;
