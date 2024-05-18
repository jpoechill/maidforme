'use client'

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from 'react';


export default function Home() {
  const scrolltoHash = function (element_id: string) {
    const yOffset = -80;
    const element = document.getElementById(element_id)!;
    const y = element?.getBoundingClientRect()?.top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <div className="fixed bg-[#fff5fe] w-full z-10 text-black px-5 md:px-10 py-6 top-0 flex flex-row items-center justify-between h-[80px]">
        <div>
          <Link href="/">
            <Image className="cursor-pointer mb-1" src="/maidforme.png" alt="logo" width={220} height={60}></Image>
          </Link>
        </div>
        <div className="hidden lg:flex flex-row text-[16px] text-[#C41C94] items-center font-medium gap-10">
          <div>
            <Link className="hover:cursor-pointer" href="/">
              About
            </Link>
          </div>
          <div>
            <Link className="hover:cursor-pointer" href="/services">
              Services
            </Link>
          </div>
          <div>
            <Link className="hover:cursor-pointer" href="/faqs">
              FAQs
            </Link>
          </div>
          <div>
            <Link className="hover:cursor-pointer" href="/gallery">
              Gallery
            </Link>
          </div>
          <div>
            <Link className="hover:cursor-pointer" href="/testimonials">
              Testimonials
            </Link>
          </div>
          <div>
            <Link href="/quote">
              <button className="transition-all ease-in-out duration-500 shadow-[0_25px_50px_-12px_rgb(0,0,0,0.0)] hover:shadow-[0_10px_50px_-12px_rgb(0,0,0,1)] css-selector bg-[#C41C94] w-full text-white rounded-2xl p-2 px-6">
                Request a Quote
              </button>
            </Link>
          </div>
        </div>
        <div className="cursor-pointer lg:hidden p-5 pr-0" onClick={() => { setShowMenu(!showMenu) }}>
          {
            showMenu ?
              <Image src="/cross_icon.svg" alt="logo" className="fill-[#FFFFFF]" width={23} height={23}></Image>
              :
              <Image src="/hamburger_icon.svg" className="fill-[#FFFFFF]" alt="logo" width={30} height={30}></Image>
          }
        </div>
      </div>

      {/* Mobile Menu */}
      {
        showMenu &&
        <div className="fixed lg:hidden shadow-2xl pt-[20px] pb-[30px] px-10 z-[2]  w-full  bg-[#fbfefe]">
          <div className="flex flex-col text-[16px] text-[#C41C94] font-medium gap-0 mt-1 lg:mt-2">
            <div onClick={() => { setShowMenu(false) }} className="w-100 pb-5 border-b-2">
              <Link href="/">
                About
              </Link>
            </div> <br />
            <div onClick={() => { setShowMenu(false) }} className="w-100 pb-5 border-b-2">
              <Link href="/services">
                Services
              </Link>
            </div> <br />
            <div onClick={() => { setShowMenu(false) }} className="w-100 pb-5 border-b-2">
              <Link href="/faqs">
                FAQs
              </Link>
            </div> <br />
            <div onClick={() => { setShowMenu(false) }} className="w-100 pb-5 border-b-2">
              <Link href="/gallery">
                Gallery
              </Link>
            </div> <br />
            <div onClick={() => { setShowMenu(false) }} className="w-100 pb-0  hover:underline cursor-pointer">
              <Link href="/testimonials">
                Testimonials
              </Link>
            </div>
            <Link href="/quote">
              <button className="mt-6 p-5 transition-all ease-in-out duration-500 shadow-[0_25px_50px_-12px_rgb(0,0,0,0.0)] hover:shadow-[0_10px_50px_-12px_rgb(0,0,0,1)] css-selector bg-[#C41C94] w-full text-white rounded-2xl p-2 px-6">
                Request a Quote
              </button>
            </Link>
          </div>
        </div>
      }
    </div>
  )
}
