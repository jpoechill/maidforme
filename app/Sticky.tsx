'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';


export default function Sticky() {
  const scrolltoHash = function (element_id: string) {
    const yOffset = -80;
    const element = document.getElementById(element_id)!;
    const y = element?.getBoundingClientRect()?.top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="fixed bg-[#fff5fe] w-full z-10">
      <div className="max-w-[1200px] mx-auto text-black px-5 md:px-10 py-6 top-0 flex flex-row items-center justify-between h-[80px]">
        <div>
          <Image
            onClick={() => scrolltoHash('top')}
            className="cursor-pointer mb-1"
            src="/maidforme.png"
            alt="logo"
            width={220}
            height={60}
          ></Image>
        </div>
        <div className="hidden lg:flex flex-row text-[16px] text-[#C41C94] items-center font-medium gap-10">
          <div>
            <span onClick={() => scrolltoHash('about-us')} className="hover:underline cursor-pointer">
              About
            </span>
          </div>
          <div>
            <span onClick={() => scrolltoHash('services')} className="hover:underline cursor-pointer">
              Services
            </span>
          </div>
          <div>
            <span onClick={() => scrolltoHash('faqs')} className="hover:underline cursor-pointer">
              FAQs
            </span>
          </div>
          <div>
            <span onClick={() => scrolltoHash('testimonials')} className="hover:underline cursor-pointer">
              Testimonials
            </span>
          </div>
          <div>
            <button
              onClick={() => scrolltoHash('contact-us')}
              className="transition-all ease-in-out duration-500 shadow-[0_25px_50px_-12px_rgb(0,0,0,0.0)] hover:shadow-[0_10px_50px_-12px_rgb(0,0,0,1)] css-selector bg-[#C41C94] w-full text-white rounded-2xl p-2 px-6"
            >
              Free Quotes
            </button>
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
        <div className="fixed lg:hidden shadow-2xl pt-[100px] pb-[30px] px-10 z-[2]  w-full  bg-[#fbfefe]">
          <div className="flex flex-col text-[16px] text-[#C41C94] font-medium gap-0 mt-1 lg:mt-2">
            <div onClick={() => { scrolltoHash('about-us'); setShowMenu(false) }} className="w-100 pb-5 border-b-2 hover:underline cursor-pointer">
              About
            </div> <br />
            <div onClick={() => { scrolltoHash('services'); setShowMenu(false) }} className="w-100 pb-5 border-b-2 hover:underline cursor-pointer">
              Services
            </div> <br />
            <div onClick={() => { scrolltoHash('faqs'); setShowMenu(false) }} className="w-100 pb-5 border-b-2 hover:underline cursor-pointer">
              FAQs
            </div> <br />
            <div onClick={() => { scrolltoHash('testimonials'); setShowMenu(false) }} className="w-100 pb-5 border-b-2 hover:underline cursor-pointer">
              Testimonials
            </div>
            <br />
            <button
              onClick={() => { scrolltoHash('contact-us'); setShowMenu(false) }}
              className="mt-6 p-5 transition-all ease-in-out duration-500 shadow-[0_25px_50px_-12px_rgb(0,0,0,0.0)] hover:shadow-[0_10px_50px_-12px_rgb(0,0,0,1)] css-selector bg-[#C41C94] w-full text-white rounded-2xl p-2 px-6"
            >
              Free Quotes
            </button>
          </div>
        </div>
      }
    </div>
  )
}
