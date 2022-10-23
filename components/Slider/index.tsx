import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper";
import Image from "next/image";

import vanilaCakeImage from "../../public/images/slider/vanila.png";
import vanilaCakeBgPattern from "../../public/images/slider/vanila-bg-pattern.png";

import peanutCakeImage from "../../public/images/slider/peanut.png";
import peanutCakeBgPattern from "../../public/images/slider/peanut-bg-pattern.png";

import choclateCakeImage from "../../public/images/slider/choclate.png";
import choclateCakeBgPattern from "../../public/images/slider/choclate-bg-pattern.png";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const Slider: React.FC = () => {
  const { locale } = useRouter();
  const { t } = useTranslation("slider");

  return (
    <>
      <Swiper
        id="about"
        observer={true}
        observeParents={true}
        modules={[Pagination, Autoplay, EffectFade]}
        effect={"fade"}
        grabCursor={true}
        className="slider"
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <section className="slide vanila">
            <div className="slide__bg"></div>
            <div className="slide__container">
              <Image
                className="slide__container__bg"
                src={vanilaCakeBgPattern}
                layout="fill"
                objectFit="contain"
                objectPosition="center right"
              />

              <div className="slide__content">
                <div className="slide__img">
                  <Image src={vanilaCakeImage} />
                </div>
                <div className="slide__info">
                  <h3 className="slide__info__title">Hanipers</h3>
                  <p className="slide__info__txt">{t("description")}</p>
                  {locale === "en" && (
                    <span className="slide__info__flavor">
                      <span>CAKE WITH</span> <br /> VANILLA CREAM{" "}
                      <span className="invisible">CREAM</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="slide peanut">
            <div className="slide__bg"></div>
            <div className="slide__container">
              <Image
                className="slide__container__bg"
                src={peanutCakeBgPattern}
                layout="fill"
                objectFit="contain"
                objectPosition="center right"
              />

              <div className="slide__content">
                <div className="slide__img">
                  <Image src={peanutCakeImage} />
                </div>
                <div className="slide__info">
                  <h3 className="slide__info__title">Hanipers</h3>
                  <p className="slide__info__txt">{t("description")}</p>
                  {locale === "en" && (
                    <span className="slide__info__flavor">
                      <span>CAKE WITH</span> <br /> PEANUT BUTTER CREAM
                    </span>
                  )}
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="slide choclate">
            <div className="slide__bg"></div>
            <div className="slide__container">
              <Image
                className="slide__container__bg"
                src={choclateCakeBgPattern}
                layout="fill"
                objectFit="contain"
                objectPosition="center right"
              />

              <div className="slide__content">
                <div className="slide__img">
                  <Image src={choclateCakeImage} />
                </div>
                <div className="slide__info">
                  <h3 className="slide__info__title">Hanipers</h3>
                  <p className="slide__info__txt">{t("description")}</p>
                  {locale === "en" && (
                    <span className="slide__info__flavor">
                      <span>CAKE WITH</span> <br /> MILK CHOCOLATE CREAM
                    </span>
                  )}
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
