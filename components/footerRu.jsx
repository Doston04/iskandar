
export const FooterRu = () => {
  const currentYear = new Date().getFullYear()  

  return (
    <footer className="bg-bgBlue">
      <div className="text-white flex flex-col justify-center items-center py-4 max-w-[1200px] mx-auto px-6">
        <div className="pb-4">Footer Content</div>
        <div className="flex flex-col md:flex-row items-center justify-between w-full border-t border-white pt-4 text-center md:text-left">
          <p className="text-[14px] sm:text-md"><span className="font-sans">&copy;</span> Bсе права защищены {currentYear}.</p>
          <p className="text-[14px] sm:text-md"><span className="font-sans">&copy;</span> Готовил <span className="text-normBlue">Doston Avazov</span>.</p>
        </div>
      </div>
    </footer>
  )  
}