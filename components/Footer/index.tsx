import {
  Address,
  Call,
  Email,
  Instagram,
  Telegram,
  Whatsapp,
} from "../../icons";
import SocialIcon from "../SocialIcon";

const Footer: React.FC = () => {
  const socials = [
    {
      id: "telegram",
      href: "https://t.me/tickers",
      icon: <Telegram />,
    },
    {
      id: "whatsapp",
      href: "https://wa.me/09012611501",
      icon: <Whatsapp />,
    },
    {
      id: "instagram",
      href: "https://instagram.com/tickers",
      icon: <Instagram />,
    },
  ];

  return (
    <footer className="footer" id="footer">
      <div className="container mx-auto px-4 xl:px-0 flex flex-col gap-6">
        <div className="footer__contact">
          <span className="footer__contact__item">
            <Address />
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </span>
          <a href="mailto:info@tickers.com" className="footer__contact__item">
            <Email />
            info@Tickers.com
          </a>
          <a href="tel:09012611501" className="footer__contact__item">
            <Call />
            (901)261-1501
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
          <p>© 2022 Tickers. All rights reserved.</p>
          {/* <p>
            Designed & Developed by <a href="#">MoodiStudio</a>
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
