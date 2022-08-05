import airplaneImg from "../../public/images/hero/airplane.png";
import hanipersImg from "../../public/images/hero/hanipers.png";
import lightBadgeImg from "../../public/images/hero/light.png";
import cloudsImg from "../../public/images/hero/clouds.png";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="index-hero">
      <Image
        src={cloudsImg}
        layout="fill"
        objectFit="cover"
        objectPosition="center center"
      />

      <div className="index-hero__container">
        <motion.div
          initial={{ scale: 0, x: "-100%" }}
          animate={{ scale: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 4, ease: "linear" }}
          className="index-hero__img"
        >
          <Image src={airplaneImg} />
        </motion.div>
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="index-hero__info"
        >
          <span className="index-hero__info__first-txt">
            TRAVEL TO THE WORLD OF
          </span>
          <span className="index-hero__info__logo">
            <Image src={hanipersImg} />
          </span>
          <span className="index-hero__info___badge">
            <Image src={lightBadgeImg} />
          </span>
          <span className="index-hero__info__second-txt">
            CAKE WITH DIFFERENT FILLING
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
