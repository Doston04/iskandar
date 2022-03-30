import Link from "next/link"

export const Header = () => {
  return (
    <header className="z-30">
      <div id="headerInner" className="max-w-7xl mx-auto px-6 flex items-center justify-center relative h-10">
        <div id="logo" className="absolute left-6">
          <Link className="text-2xl" href="/">
            <a>The Coffee</a>
          </Link>  
        </div>
        <nav className="flex items-center space-x-8 text-[14px]">
          <Link href="/">
            <a className="hover:text-stone-400 transition duration-200">Главная</a>  
          </Link>
          <Link href="/">
            <a className="hover:text-stone-400 transition duration-200">Меню</a>  
          </Link>
          <Link href="/">
            <a className="hover:text-stone-400 transition duration-200">О нас</a>  
          </Link>  
        </nav>
      </div>  
    </header>  
  )  
}