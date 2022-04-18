// import Link from "next/link"

export const Header = () => {
  return (
    <header>
      <div id="headerInner" className="max-w-[1440px] mx-auto px-6 py-2 flex items-center justify-center text-black relative mt-4 bg-white">
        <span className="absolute left-6">Some Logo</span>
        <div className="flex items-center space-x-6">
          <p className="hover:text-mainBlue">Bosh Sahifa</p>
          <p className="hover:text-mainBlue">Biz Haqimizda</p>
          <p className="hover:text-mainBlue">Xizmatlar</p>
          <p className="hover:text-mainBlue">Blog</p>
          <p className="hover:text-mainBlue">Kontaktlar</p>
        </div>
        <div className="flex items-center space-x-4 absolute right-6">
          <p className="hover:text-mainBlue">O&apos;z</p>
          <p className="hover:text-mainBlue">Ru</p>
        </div>
      </div>
    </header>
  )  
}