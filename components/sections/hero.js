import Image from "next/image";
import img4 from "../../public/media/img4.jpg";
import img5 from "../../public/media/img5.jpg";
import newImg2 from "../../public/media/newImg2.jpg";
import { useTranslations } from "../utils/translations";

export function HeroSection({ introRef, contactsRef, onRefClick }) {
  const { t } = useTranslations();

  return (
    <section ref={introRef} className="w-full flex flex-col relative hero">
      <div className="flex-auto flex items-center justify-center">
        <div className="max-w-[1200px] mx-auto w-full px-6 grid md:grid-cols-2 items-center gap-[48px] pb-[40px] pt-[90px]">
          <div className="w-full flex flex-col space-y-[16px] md:space-y-[24px] items-center md:items-start">
            <p className="title teal">{t.home}</p>
            <h1 className="uppercase font-bold text-[22px] leading-[30px] md:text-[32px] md:leading-[38px] lg:text-[44px] lg:leading-[48px] text-center md:text-left">
              {t.heroTitle}
              <span className="text-mainBlue"> {t.stomatology}</span>
            </h1>
            <p className="opacity-60 text-center md:text-left">{t.heroDesc}</p>
            <button
              onClick={() => onRefClick(contactsRef)}
              className="buttonBlue"
            >
              {t.register}
            </button>
          </div>
          <div className="w-full h-full gridjon gap-[24px]">
            <div className="w-full gridMin gap-[24px]">
              <div className="h-full gridTop gap-[24px]">
                <div className="w-full hidden lg:flex flex-col justify-end space-y-4 items-end">
                  <div className="border a5 flex self-end w-[60px] h-[60px] md:w-[90px] md:h-[90px] lg:w-[60px] lg:h-[60px]"></div>
                  <div className="border a4 bg-mainBlue h-[80px] md:h-[100px] lg:h-[80px] w-[90%]"></div>
                </div>
                <div className="w-full a3 h-[200px] sm:h-[240px] md:h-[180px] lg:h-[200px] self-end relative">
                  <Image
                    src={img5}
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="a2 h-[200px] sm:h-[240px] md:h-[180px] lg:h-[160px] relative">
                <Image alt="image" src={img4} layout="fill" objectFit="cover" />
              </div>
            </div>
            <div className="w-full a1 relative">
              <Image
                alt="image"
                src={newImg2}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
