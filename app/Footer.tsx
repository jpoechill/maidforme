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

  return (

    <div className="snap-center bg-[#fff5fe] text-black text-[16px] py-12 lg:py-15 px-5 md:px-10">
      <div className="grid grid-cols-6 gap-4 max-w-[1200px] mx-auto">
        <div className="col-span-6 lg:col-span-3 mb-5">

            <Image onClick={() => scrolltoHash('top')} className="cursor-pointer mb-3" src="/maidforme.png" alt="Maid For Me" width={220} height={60}></Image>
          <span className="text-[16px] text-[#C41C94]">
            Sparkling cleanliness at your service, anytime, anywhere!
          </span>
          <div className="flex flex-row gap-5 mt-5">
            <Link href="https://www.facebook.com/profile.php?id=61559035648699">
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path></svg>
            </Link>
            <Link href="https://www.instagram.com/maidforme.co">
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path></svg>
            </Link>
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" /></svg>
          </div>
          <div className="flex flex-row gap-5 mt-3">
            <Image className="cursor-pointer mt-3" src="/payment_logos.png" alt="Accepted payment methods" width={350} height={60}></Image>
          </div>
        </div>
        <div className="lg:mt-0 col-span-6 w-full  lg:col-span-3 pr-10">
          <div className="mt-5 ">
            <span className="font-bold">
              Menu
            </span>
            <div className="mt-6 w-full grid grid-cols-2 gap-y-5 justify-between">
              <Link href="/#about-us">
                About
              </Link>
              <Link href="/#services">
                Services
              </Link>
              <Link href="/#faqs">
                FAQs
              </Link>
              <Link href="/gallery">
                Gallery
              </Link>
              <Link href="/#testimonials">
                Testimonials
              </Link>
              <Link href="/#contact-us">
                Request a Quote
              </Link>
            </div>
          </div>
          <div className="mt-8">
            <span className="font-bold">
              Contact
            </span>
            <div className="mt-6 w-full grid grid-cols-2 gap-y-5 justify-between">
              <a href="mailto:hello@maidforme.co" className="text-[#C41C94]">
                hello@maidforme.co
              </a>
              <Link href="tel:5106037272">
                <span className="text-[#C41C94]">510-603-7272</span>
              </Link>
            </div>
            <p className="mt-4 text-sm text-[#C41C94]/opacity-90">
              Serving Oakland, Piedmont, San Francisco &amp; nearby Bay Area cities
            </p>
          </div>
        </div>
        {/* <div className="mt-5 lg:mt-0 col-span-3 lg:col-span-1">
          <span className="font-bold">
            Contact Us
          </span>
          <br /><br />
          <span className="text-[#C41C94]">hello@maidforme.co</span>
          <br /><br />
          <Link href="tel:5106037272">
            <span className="text-[#C41C94]">510-603-7272</span>
          </Link>
          <br /><br />

          <div className="text-[#C41C94]">Request a Quote</div>

        </div> */}

      </div >
      <div className="mt-10 pt-10 max-w-[1200px] mx-auto md:mb-20 flex-col gap-5 md:flex-row font-light lg:mb-0 text-sm flex justify-between">
        <div className="font-light">
          2026 © Maid For Me. All rights reserved.
        </div>
      </div>
    </div >
  )
}
