import { useEffect, useState } from "react";
import { Instagram, Telegram, Whatsapp } from "../../icons";

import SocialIcon from "../SocialIcon";

import headerLogo from "../../public/images/header/logo.png";
import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "next-i18next";
import Router, { useRouter } from "next/router";

const Header: React.FC = () => {
  const { t } = useTranslation("header");
  const router = useRouter();

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
  ];

  const headerHeight = 75;
  const [scroll, setScroll] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const headerItems = [
    {
      id: "ingredients",
      label: t("about"),
    },
    {
      id: "about",
      label: t("world"),
    },
    {
      id: "blog",
      label: t("explore"),
    },
    {
      id: "footer",
      label: t("contact"),
    },
  ];

  const getDimensions = (element: HTMLElement) => {
    const { height } = element.getBoundingClientRect();
    const { offsetTop } = element;
    const offsetBottom = offsetTop + height;

    return {
      height,
      offsetTop,
      offsetBottom,
    };
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      const { offsetTop } = getDimensions(element);
      window.scrollTo({
        top: offsetTop - headerHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleItemClick = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    // scrollTo(id);

    if (id === "blog") {
      window.scrollTo(0, 0);
      router.push("/blog");
    } else if (id === "footer") {
      scrollTo(id);
    } else if (router.asPath === "/") {
      scrollTo(id);
    } else {
      router.push("/");
    }

    // for mobile/tablet device toggleMenu
    if (window.innerWidth < 1024) {
      toggleMenu();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > headerHeight);
    });
  }, []);

  useEffect(() => {}, [router]);

  return (
    <header
      className={`header ${menuOpen ? "open" : ""} ${scroll ? "scrolled" : ""}`}
    >
      <div className="flex items-center justify-between lg:hidden">
        <button onClick={toggleMenu} className="header__toggle">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="middle1"
              d="M2 13L23.6667 13"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="middle2"
              d="M2 13L23.6667 13"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="top"
              d="M2 9.83008H12.8333"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="bottom"
              d="M13 16H23.8333"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Menu
        </button>

        <span className="header__logo header__logo--mobile">
          <Image src={headerLogo} />
        </span>
      </div>

      <ul className="header__items">
        <span className="header__logo header__logo--desktop">
          <Image src={headerLogo} />
        </span>

        {headerItems.map((item) => (
          <li key={item.id}>
            <a onClick={(e) => handleItemClick(e, item.id)} href="#">
              {item.label}
            </a>
          </li>
        ))}

        <LanguageSwitcher />

        {/*<ul className="footer__contact__socials">*/}
        {/*  {socials.map((item) => (*/}
        {/*    <li key={item.id}>*/}
        {/*      <SocialIcon href={item.href} icon={item.icon} />*/}
        {/*    </li>*/}
        {/*  ))}*/}
        {/*</ul>*/}
      </ul>
    </header>
  );
};

export default Header;
