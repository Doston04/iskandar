import { emailLogo, instaLogo, phoneSVG, telegramLogo } from "../utils/icons";
import logo from "../../public/media/logo-black.png";
import Image from "next/image";
import { useTranslations } from "../utils/translations";
import info from "../utils/info";

export const Footer = () => {
  const { t } = useTranslations();

  return (
    <footer className="bg-mainGray md:pt-[40px]">
      <div className="flex flex-col justify-center items-center max-w-[1200px] mx-auto px-6 relative">
        <div className="flex flex-col space-y-4 md:space-y-0 items-center justify-center my-4">
          <div className="hidden md:block md:absolute md:left-6 w-[200px] h-[50px]">
            <div className="relative w-[200px] h-full md:-ml-[48px]">
              <Image src={logo} alt="Logo" layout="fill" objectFit="contain" />
            </div>
          </div>
          <div className="cursor-pointer flex items-center space-x-6">
            <a
              href={info.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-mainBlue transition duration-300"
            >
              {telegramLogo}
            </a>
            <a
              href={info.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-mainBlue transition duration-300"
            >
              {instaLogo}
            </a>
            <a
              href={`mailto: ${info.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-mainBlue transition duration-300"
            >
              {emailLogo}
            </a>
          </div>
          <div className="hover:text-mainBlue transition duration-300 md:absolute md:right-6">
            <a
              className="flex items-center googleFont"
              href={`tel: ${info.number}`}
            >
              <span className="mr-2">{phoneSVG}</span> {info.number}
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center pb-4">
          <p className="text-[14px] sm:text-[16px] opacity-60 googleFont">
            <span className="font-sans">&copy;</span>{" "}
            <span className="googleFont">{new Date().getFullYear()}. </span>
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
