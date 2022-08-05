import Image from "next/image";
import tickersPackage from "../../public/images/tickers-package.png";
import tickersLogo from "../../public/images/tickers-logo.png";
import { motion } from "framer-motion";

const IndexHero: React.FC = () => {
  return (
    <section className="index-hero">
      <div className="index-hero__bg"></div>
      <div className="index-hero__container">
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 1.4, type: "spring", duration: 1, bounce: 0.3 }}
          className="index-hero__image"
        >
          <Image src={tickersPackage} placeholder="blur" quality={100} />
        </motion.div>
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 1.4, type: "spring", duration: 1, bounce: 0.3 }}
          className="index-hero__detail"
        >
          <div>
            <div className="index-hero__detail__logo">
              <Image src={tickersLogo} placeholder="blur" quality={100} />
            </div>
            <p className="index-hero__detail__text">
              Crispy thick multi layer wafer with roasted hazelnut.
            </p>
          </div>
        </motion.div>
      </div>

      <motion.span
        initial={{ rotate: 360, x: "100vw" }}
        animate={{ rotate: 0, x: 0 }}
        transition={{ delay: 1.75, duration: 2, type: "spring" }}
        className="hazelnut"
      ></motion.span>
    </section>
  );
};

export default IndexHero;
