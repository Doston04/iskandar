import Link from "next/link"
import React, { useState } from "react"
import { hamburgerIcon, xBtn } from "./icons"
import Image from 'next/image'


export const HeaderRu = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false)
  function mobileMenuOpen() {
    setIsMobileMenu(true)
  }
  return (
    <header>
      <div id="headerInner" className="max-w-[1200px] mx-auto px-6 h-10 flex items-center justify-center text-black relative bg-white">
        <span onClick={mobileMenuOpen} className="absolute left-6 block md:hidden">{hamburgerIcon}</span>
        <Link href="/">
          <a className="md:absolute md:left-6 z-40">Some Logo</a>
        </Link>
        <div className="md:flex items-center space-x-6 hidden">
          <Link href="/">
            <a className="hover:text-mainBlue transition duration-300">Главная</a>
          </Link>
          <Link href="/about">
            <a className="hover:text-mainBlue transition duration-300">О нас</a>
          </Link>
          <Link href="/features">
            <a className="hover:text-mainBlue transition duration-300">Услуги</a>
          </Link>
           <Link href="/blog">
            <a className="hover:text-mainBlue transition duration-300">Блог</a>
          </Link>
          <Link href="/contacts">
            <a className="hover:text-mainBlue transition duration-300">Kонтакты</a>
          </Link>
        </div>
        <div className="md:flex hidden items-center space-x-4 absolute right-6">
          <Link href="/">
            <a className="hover:text-mainBlue">O&apos;z</a>
          </Link>
          <Link href="/ru/">
            <a className="hover:text-mainBlue">Pу</a>
          </Link>
        </div>
      </div>
 
      {isMobileMenu && <MobileMenu setIsMobileMenu={setIsMobileMenu} />}
    </header>
  )  
}

const MobileMenu = ({setIsMobileMenu}) => {
  function closeMobileMenu() {
    setIsMobileMenu(false)
  }
  return (
    <div id="mobileMenu" className="fixed inset-0 bg-white z-30 md:hidden flex justify-center items-center">
      <span onClick={closeMobileMenu} className="absolute top-3 left-6">{xBtn}</span>
      <div className="flex flex-col items-center space-y-4">
        <Link href="/">
            <a className="hover:text-mainBlue transition duration-300">Bosh Sahifa</a>
          </Link>
          <Link href="/about">
            <a className="hover:text-mainBlue transition duration-300">Biz Haqimizda</a>
          </Link>
          <Link href="/features">
            <a className="hover:text-mainBlue transition duration-300">Xizmatlar</a>
          </Link>
           <Link href="/blog">
            <a className="hover:text-mainBlue transition duration-300">Blog</a>
          </Link>
          <Link href="/contacts">
            <a className="hover:text-mainBlue transition duration-300">Kontaktlar</a>
          </Link>
      </div>    
    </div>
  )
}