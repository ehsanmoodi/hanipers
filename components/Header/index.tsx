import { useEffect, useState } from "react";

const Header: React.FC = () => {
  const headerHeight = 60;
  const [scroll, setScroll] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const headerItems = [
    {
      id: "about",
      label: "About",
    },
    {
      id: "ingredients",
      label: "Ingredients",
    },
    {
      id: "blog",
      label: "Blog",
    },
    {
      id: "footer",
      label: "Contact Us",
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
    scrollTo(id);

    // for mobile/tablet device toggleMenu
    if (window.screen.width < 1024) {
      toggleMenu();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > headerHeight);
    });
  }, []);

  return (
    <header
      className={`header ${menuOpen ? "open" : ""} ${scroll ? "scrolled" : ""}`}
    >
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
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="middle2"
            d="M2 13L23.6667 13"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="top"
            d="M2 9.83008H12.8333"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="bottom"
            d="M13 16H23.8333"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Menu
      </button>

      <ul className="header__items">
        {headerItems.map((item) => (
          <li key={item.id}>
            <a onClick={(e) => handleItemClick(e, item.id)} href="#">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
