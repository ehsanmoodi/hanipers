import { useRouter } from "next/router";

const DesigneddBy: React.FC = () => {
  const { locale } = useRouter();

  return (
    <p className="designed-by">
      {locale === "en" ? "Designed By " : "طراحی توسط "}
      <a href="https://webnagroup.ir" target="_blank">
        {locale === "en"
          ? "Webna Digital Marketing Group"
          : "آژانس دیجیتال مارکتینگ وبنا"}
      </a>
    </p>
  );
};

export default DesigneddBy;
