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
    <main id="top" className="max-h-screen x-lg:snap-y x-lg:snap-mandatory" style={{ scrollBehavior: 'smooth' }}>
      <Sticky />

      <div className="snap-center text-center bg-white flex-col flex px-5 py-10 pb-20 justify-center">
        <div id="gallery" className="text-center pt-20 mb-4">
          <h1>
            Photo Gallery
          </h1>
        </div>
        <div className="flex justify-center mb-10">
          <div className="flex max-w-[750px] px-5 w-full text-left md:text-center">
            Discover spotless perfection in our photo gallery. See how we transform spaces with expert cleaning. Let the images inspire your home&apos;s next level of cleanliness.
          </div>
        </div>
        <div className="flex flex-row justify-center hover:cursor-pointer gap-3">
          <div className="overflow-hidden md:h-[200px] rounded-xl">
            <Image src="/gallery/gallery_01.jpg" className="hover:scale-[1.05] h-full w-full transition-all duration-500 cursor-pointer grayscale hover:grayscale-0" alt="Gallery 01" height={500} width={500} />
          </div>
          <div className="overflow-hidden md:h-[200px] hidden sm:block rounded-xl">
            <Image src="/gallery/gallery_05.jpg" className="hover:scale-[1.05] h-full w-full transition-all duration-500 cursor-pointer grayscale hover:grayscale-0" alt="Gallery 01" height={200} width={500} />
          </div>
          <div className="overflow-hidden hidden md:block md:h-[200px] rounded-xl">
            <Image src="/gallery/gallery_10.jpg" className="hover:scale-[1.05] h-full w-full transition-all duration-500 cursor-pointer grayscale hover:grayscale-0" alt="Gallery 01" height={200} width={500} />
          </div>
        </div>
        <div className="flex flex-row justify-center hover:cursor-pointer gap-3 mt-3">
          <div className="overflow-hidden md:h-[200px] rounded-xl">
            <Image src="/gallery/gallery_02.jpg" className="hover:scale-[1.05] h-full w-full transition-all duration-500 cursor-pointer grayscale hover:grayscale-0" alt="Gallery 01" height={200} width={500} />
          </div>
          <div className="overflow-hidden h-[200px] hidden sm:block rounded-xl">
            <Image src="/gallery/gallery_04.jpg" className="hover:scale-[1.05] h-full w-full transition-all duration-500 cursor-pointer grayscale hover:grayscale-0" alt="Gallery 01" height={200} width={500} />
          </div>
          <div className="overflow-hidden hidden md:block h-[200px] rounded-xl">
            <Image src="/gallery/gallery_03.jpg" className="hover:scale-[1.05] h-full w-full transition-all duration-500 cursor-pointer grayscale hover:grayscale-0" alt="Gallery 01" height={200} width={500} />
          </div>
          <div className="overflow-hidden hidden md:block h-[200px] rounded-xl">
            <Image src="/gallery/gallery_06.jpg" className="hover:scale-[1.05] h-full w-full transition-all duration-500 cursor-pointer grayscale hover:grayscale-0" alt="Gallery 01" height={200} width={500} />
          </div>
        </div>
      </div>

      <Footer />
    </main >
  );
}
