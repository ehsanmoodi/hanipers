import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { English, Farsi } from "../../icons";

const LanguageSwitcher: React.FC = () => {
  const { pathname, query, asPath, locale } = useRouter();

  useEffect(() => {
    let dir = locale == "fa" ? "rtl" : "ltr";
    let lang = locale == "fa" ? "fa" : "en";
    document?.querySelector("html")?.setAttribute("dir", dir);
    document?.querySelector("html")?.setAttribute("lang", lang);
  }, [locale]);

  return (
    <li>
      <Link
        href={{ pathname, query }}
        as={asPath}
        locale={locale === "en" ? "fa" : "en"}
      >
        <a className="language-switcher">{locale === "en" ? "FA" : "EN"}</a>
      </Link>
    </li>
  );
};

export default LanguageSwitcher;
