'use client'

import Image from "next/image";
import Link from "next/link";
import Sticky from '../Sticky';
import Footer from '../Footer';

export default function Home() {
  const scrolltoHash = function (element_id: string) {
    const yOffset = -80;
    const element = document.getElementById(element_id)!;
    const y = element?.getBoundingClientRect()?.top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  return (
    <main id="top" className="absolute top-0 w-full max-h-screen x-lg:snap-y x-lg:snap-mandatory" style={{ scrollBehavior: 'smooth' }}>
      <Sticky />

      <div id="testimonials" className="animate-[fade-me-in_.5s_ease-in-out] text-center flex px-5 mt-[80px] md:px-20 pb-7 justify-center">
        <div id="testimonials-mobile" className="flex flex-col justify-center text-xs pt-10 pb-10 w-full lg:max-w-[1200px]">
          {/* <div className="uppercase font-bold pt-5 text-[#C41C94]">
            FAQs
          </div>
          <div className="text-center mb-10">
            <h1>
              Pricing Guide
            </h1>
          </div> */}

          {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, repellendus. */}
          <Image src="/pricing_mobile.svg" className="md:hidden pt-0 shadow-xl w-full mx-auto max-w-[800px] mb-2" alt="Pricing" width={1800} height={200}></Image>

          <Image src="/pricing_desktop.svg" className="hidden md:block pt-0 shadow-xl w-full mx-auto max-w-[800px] mb-2" alt="Pricing" width={1800} height={200}></Image>
          <br />
          Prices subject to change.
        </div>
      </div>

      <Footer />
    </main >
  );
}
