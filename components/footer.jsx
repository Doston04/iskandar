import { emailLogo, facebookLogo, instaLogo, phoneSVG, telegramLogo } from "./icons"
import logo from "../public/media/logo-black.png"
import Image from "next/dist/client/image"

export const Footer = () => {
  const currentYear = new Date().getFullYear() 

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
            <div className="hover:text-mainBlue transition duration-300">{telegramLogo}</div>
            <div className="hover:text-mainBlue transition duration-300">{instaLogo}</div>
            <div className="hover:text-mainBlue transition duration-300">{facebookLogo}</div>
            <div className="hover:text-mainBlue transition duration-300">{emailLogo}</div>
          </div>
          <div className="hover:text-mainBlue transition duration-300 md:absolute md:right-6"><a className="flex items-center" href="tel:+998991212821"><span className="mr-2">{phoneSVG}</span> +998 99 121 28 21</a></div>
        </div>
        <div className="flex items-center justify-center pb-4">
          <p className="text-[14px] sm:text-[16px] opacity-60"><span className="font-sans">&copy;</span> {currentYear}. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  )  
}