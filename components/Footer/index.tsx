import footerBgPattern from "../../public/images/footer-pattern.png";
import {
  Address,
  Call,
  Email,
  Instagram,
  Telegram,
  Whatsapp,
} from "../../icons";
import SocialIcon from "../SocialIcon";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer: React.FC = () => {
  const socials = [
    {
      id: "telegram",
      href: "https://t.me/hanipers",
      icon: <Telegram />,
    },
    {
      id: "whatsapp",
      href: "https://wa.me/09901234567",
      icon: <Whatsapp />,
    },
    {
      id: "instagram",
      href: "https://instagram.com/hanipers",
      icon: <Instagram />,
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
      <div className="container relative mx-auto px-4 flex flex-col gap-5">
        <div className="footer__contact">
          <span className="footer__contact__item">
            <Address />
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </span>
          <a href="mailto:info@tickers.com" className="footer__contact__item">
            <Email />
            info@Tickers.com
          </a>
          <a href="tel:09901234567" className="footer__contact__item">
            <Call />
            (990)123-4567
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
          <p>© {new Date().getFullYear()} Hanipers. All rights reserved.</p>
          {/* <p>
            Designed & Developed by <a href="https://instagram.com/moodistudio">MoodiStudio</a>
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
