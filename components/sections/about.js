import Image from "next/image";
import aboutImage1 from "../../public/media/aboutImage1.jpg";
import softlogo2 from "../../public/media/softlogo2.jpg";
import { useTranslations } from "../utils/translations";

export function AboutSection({ aboutRef }) {
  const { t } = useTranslations();

  return (
    <section id="about" ref={aboutRef}>
      <div className="bg-white flex justify-center items-center py-[40px] md:pb-[80px] lg:pb-[100px]">
        <div className="max-w-[1200px] mx-auto px-4 w-full h-full flex md:grid md:grid-cols-2 items-center gap-[48px]">
          <div className="aboutGrid h-full">
            <div className="aboutGrid__Top self-end">
              <div className="w-full md:h-[180px] lg:h-[220px] topDiv relative">
                <Image
                  src={softlogo2}
                  alt="image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="w-[120px] h-[120px] bg-teal rounded-full"></div>
            </div>
            <div>
              <div className="md:h-[240px] lg:h-[300px] bottomDiv relative w-full">
                <Image
                  src={aboutImage1}
                  alt="image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start justify-center space-y-[16px] md:space-y-[24px]">
            <p className="teal title">{t.about}</p>
            <p className="uppercase font-bold text-[22px] leading-[30px] md:text-[32px] md:leading-[38px] lg:text-[44px] lg:leading-[48px] text-center md:text-left">
              {t.aboutTitle}
            </p>
            <p className="opacity-60 text-center md:text-left">{t.aboutDesc}</p>
            <div>
              <button className="buttonBlue">{t.readmore}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
