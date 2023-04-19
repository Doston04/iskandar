import Link from "next/link";
import { useState } from "react";
import { hamburgerIcon, xBtn } from "../utils/icons";
import Image from "next/image";
import logo from "../../public/media/logo-black.png";
import { useRouter } from "next/router";
import { useTranslations } from "../utils/translations";

export const Header = ({
  introRef,
  aboutRef,
  featuresRef,
  contactsRef,
  onRefClick,
}) => {
  const { t } = useTranslations();

  const { locale, locales, asPath } = useRouter();
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  return (
    <header>
      <div
        id="headerInner"
        className="max-w-[1200px] mx-auto px-4 md:py-[24px] flex items-center justify-center text-textGray relative"
      >
        <span
          onClick={() => setIsMobileMenu(true)}
          className="absolute left-6 block md:hidden z-30"
        >
          {hamburgerIcon}
        </span>
        <Link href="/">
          <a className="z-50 md:absolute md:left-6 h-full py-2 logo">
            <div className="relative w-[200px] h-[50px] md:-ml-[30%]">
              <Image src={logo} alt="Logo" layout="fill" objectFit="contain" />
            </div>
          </a>
        </Link>
        <div className="md:flex items-center space-x-6 hidden">
          <button
            onClick={() => onRefClick(introRef)}
            className="hover:text-mainBlue transition duration-300"
          >
            {t.home}
          </button>
          <button
            onClick={() => onRefClick(aboutRef)}
            className="hover:text-mainBlue transition duration-300"
          >
            {t.about}
          </button>
          <button
            onClick={() => onRefClick(featuresRef)}
            className="hover:text-mainBlue transition duration-300"
          >
            {t.services}
          </button>
          <button
            onClick={() => onRefClick(contactsRef)}
            className="hover:text-mainBlue transition duration-300"
          >
            {t.contacts}
          </button>
        </div>
        <div className="md:flex hidden items-center space-x-4 absolute right-6">
          {locales?.map((sl) => {
            return (
              <Link key={sl} href={asPath} locale={sl}>
                <a
                  className={
                    sl === locale
                      ? "locale active hover:text-mainBlue"
                      : "locale hover:text-mainBlue"
                  }
                >
                  {sl.toUpperCase()}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
      {isMobileMenu ? <MobileMenu setIsMobileMenu={setIsMobileMenu} /> : null}
    </header>
  );
};

const MobileMenu = ({ setIsMobileMenu }) => {
  const { locale, locales, asPath } = useRouter();

  return (
    <div
      id="mobileMenu"
      className="fixed inset-0 bg-white z-40 md:hidden flex justify-center items-center"
    >
      <span
        onClick={() => setIsMobileMenu(false)}
        className="absolute top-[20px] left-6"
      >
        {xBtn}
      </span>
      <div className="flex flex-col justify-center items-center space-y-4">
        <div className="absolute bottom-4 flex items-center gap-[16px]">
          {locales?.map((sl) => {
            return (
              <Link key={sl} href={asPath} locale={sl}>
                <a
                  className={
                    sl === locale
                      ? "locale active hover:text-mainBlue"
                      : "locale hover:text-mainBlue"
                  }
                >
                  {sl.toUpperCase()}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
