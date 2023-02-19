import footerBgPattern from "../../public/images/footer-pattern.png";
import {
  Address,
  Aparat,
  Call,
  Email,
  Instagram,
  Telegram,
  Twitter,
  Whatsapp,
} from "../../icons";
import SocialIcon from "../SocialIcon";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { DesignedBy } from "..";

const Footer: React.FC = () => {
  const { t } = useTranslation("footer");

  const socials = [
    // {
    //   id: "telegram",
    //   href: "https://t.me/hanipers",
    //   icon: <Telegram />,
    // },
    // {
    //   id: "whatsapp",
    //   href: "https://wa.me/09901234567",
    //   icon: <Whatsapp />,
    // },
    {
      id: "instagram",
      href: "https://instagram.com/hanipers_official",
      icon: <Instagram />,
    },
    {
      id: "aparat",
      href: "https://www.aparat.com/zarkam.official",
      icon: <Aparat />,
    },
    {
      id: "twitter",
      href: "https://www.twitter.com",
      icon: <Twitter />,
    },
  ];

  return (
    <footer className="footer" id="footer">
      <motion.div
        initial={{ x: -8 }}
        animate={{
          x: 8,
          transition: {
            ease: "linear",
            repeat: Infinity,
            duration: 3,
            repeatType: "mirror",
          },
        }}
        className="footer__bg--pattern"
      >
        <Image src={footerBgPattern} layout="fill" />
      </motion.div>
      <div className="container relative mx-auto flex flex-col gap-5 px-6 lg:px-10 max-w-6xl">
        <div className="footer__contact">
          <span className="footer__contact__item">
            <Address />
            {t("address")}
          </span>
          <a href="mailto:contact@zarkam.com" className="footer__contact__item">
            <Email />
            contact@zarkam.com
          </a>
          <a href="tel:02643212000" className="footer__contact__item">
            <Call />
            02643212000
          </a>

          <ul className="footer__contact__socials">
            {socials.map((item) => (
              <li key={item.id}>
                <SocialIcon href={item.href} icon={item.icon} />
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div className="footer__copy-right">
          <p>© {t("copy-right")}</p>
        </div>
        {/* <DesignedBy /> */}
      </div>
    </footer>
  );
};

export default Footer;
