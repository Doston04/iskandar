import { phone } from "./icons"

export const Footer = () => {
  const currentYear = new Date().getFullYear()  

  return (
    <footer className="z-30">
      <div className="max-w-7xl mx-auto px-6 text-[14px] relative flex items-center justify-center h-10">
        <p className="absolute left-6">&copy; The Coffee <span>{currentYear}</span></p>
        <div className="flex items-center space-x-8">
          <a href="#">Instagram</a>  
          <a href="#">Telegram</a>  
        </div>
        <div className="flex items-center absolute right-6 space-x-1 hover:text-stone-400 transition duration-200">
          <span>{phone}</span>  
          <a href="tel:+998991212821">+998 99 121-28-21</a>
        </div>
      </div>  
    </footer>   
  )  
}