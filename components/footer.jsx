import { emailLogo, facebookLogo, instaLogo, phoneSVG, telegramLogo } from "./icons"

export const Footer = () => {
  const currentYear = new Date().getFullYear() 
  
  function toIntro() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  } 

  return (
    <footer className="bg-bgBlue">
      <div className="text-white flex flex-col justify-center items-center max-w-[1200px] mx-auto px-6 relative">
        <div className="py-4 flex flex-col space-y-4 md:space-y-0 items-center justify-center">
          <div onClick={toIntro} className="md:absolute md:left-6 cursor-pointer">Some Logo</div>
          <div className="cursor-pointer flex items-center space-x-6">
            <div className="hover:text-normBlue transition duration-300">{telegramLogo}</div>
            <div className="hover:text-normBlue transition duration-300">{instaLogo}</div>
            <div className="hover:text-normBlue transition duration-300">{facebookLogo}</div>
            <div className="hover:text-normBlue transition duration-300">{emailLogo}</div>
          </div>
          <div className="hover:text-normBlue transition duration-300 md:absolute md:right-6"><a className="flex items-center" href="tel:+998991212821"><span className="mr-2">{phoneSVG}</span> +998 99 121 28 21</a></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between w-full border-t border-white py-4 text-center md:text-left">
          <p className="text-[14px] sm:text-md"><span className="font-sans">&copy;</span> Barcha huquqlar himoyalangan {currentYear}.</p>
          <p className="text-[14px] sm:text-md"><span className="font-sans">&copy;</span> <span className="text-normBlue hover:text-white transition duration-300 cursor-pointer">Doston Avazov</span> tayyorladi.</p>
        </div>
      </div>
    </footer>
  )  
}