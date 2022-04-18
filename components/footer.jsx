
export const Footer = () => {
  const currentYear = new Date().getFullYear()  

  return (
    <footer className="bg-bgBlue">
      <div className="text-white flex flex-col justify-center items-center py-4 max-w-[1440px] mx-auto px-6">
        <div className="pb-4">Footer Content</div>
        <div className="flex items-center justify-between w-full border-t border-white pt-4">
          <p>&copy; Barcha huquqlar himoyalangan {currentYear}.</p>
          <p>&copy; <span className="text-normBlue">Doston Avazov</span> tayyorladi.</p>
        </div>
      </div>
    </footer>
  )  
}