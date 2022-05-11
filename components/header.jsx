import Link from "next/link"
import React, { useState } from "react"
import { hamburgerIcon, xBtn } from "./icons"
import Image from "next/image"
import logo from "../public/media/logo-black.png"

export const Header = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false)
  
  function mobileMenuOpen() {
    setIsMobileMenu(true)
  }

  return (
    <header>
      <div id="headerInner" className="max-w-[1200px] mx-auto px-4 h-[60px] flex items-center justify-center text-textGray relative">
        <span onClick={mobileMenuOpen} className="absolute left-6 block md:hidden">{hamburgerIcon}</span>
        <Link href="/">
          <a className="z-40 md:absolute md:left-6 h-full py-2">
            <div className="relative w-[200px] h-full md:-ml-[30%]">
              <Image src={logo} alt="Logo" layout="fill" objectFit="contain" />
            </div>
          </a>
        </Link>
        <div className="md:flex items-center space-x-6 hidden">
          <Link href="/">
            <a className="hover:text-mainBlue transition duration-300">Bosh Sahifa</a>
          </Link>
          <Link href="/about">
            <a className="hover:text-mainBlue transition duration-300">Biz Haqimizda</a>
          </Link>
          <Link href="/features">
            <a className="hover:text-mainBlue transition duration-300">Xizmatlar</a>
          </Link>
          <Link href="/contacts">
            <a className="hover:text-mainBlue transition duration-300">Kontaktlar</a>
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
      <span onClick={closeMobileMenu} className="absolute top-[20px] left-6">{xBtn}</span>
      <div className="flex flex-col justify-center items-center space-y-4">
        <Link href="/">
            <a className="hover:text-mainBlue transition duration-300">Bosh Sahifa</a>
          </Link>
          <Link href="/about">
            <a className="hover:text-mainBlue transition duration-300">Biz Haqimizda</a>
          </Link>
          <Link href="/features">
            <a className="hover:text-mainBlue transition duration-300">Xizmatlar</a>
          </Link>
          <Link href="/contacts">
            <a className="hover:text-mainBlue transition duration-300">Kontaktlar</a>
          </Link>
      </div>    
    </div>
  )
}