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

      <div id="our-services" className="snap-center bg-[#fff5fe] bg-repeat-custom py-[75px] pb-10 lg:pt-10 lg:pb-20 px-5 md:px-10 lg:px-[150px] flex flex-col">
        <div id="our-services-mobile" className="text-center pt-20 mb-4">
          <h1>
            Our Services
          </h1>
        </div>
        <div className="flex justify-center mb-0">
          <div className="flex max-w-[600px] pb-8 md:text-center">
            We provide top-notch cleaning services tailored to meet the unique needs of businesses in the Cleaning Services industry. Our team of professionals is committed to delivering exceptional results.
          </div>
        </div>
        <div className="grid grid-cols-2 lg:flex-row gap-[20px] max-w-[1000px] mx-auto lg:gap-[50px] w-full lg:mt-10">
          <div className="w-full mb-5 md:mb-0">
            <Image src="/thumb-05.png" className="rounded-xl w-full" alt="thumb" width="400" height="400" />
            <div className="min-h-[150px]">
              <div className="font-bold my-5">Commercial Cleaning</div>
              Our Commercial Cleaning service ensures a spotless, well-maintained business environment. We use eco-friendly products and advanced cleaning techniques for optimal results.
            </div>
          </div>
          <div className="w-full mb-5 md:mb-0">
            <Image src="/thumb-02.png" className="rounded-xl w-full" alt="thumb" width="400" height="400" />
            <div className="min-h-[150px]">
              <div className="font-bold my-5">Residential Cleaning</div>
              Our Residential Cleaning service offers thorough, customized cleaning solutions for homes. We prioritize your comfort and satisfaction, ensuring every corner is spotless.
            </div>
          </div>
          <div className="w-full mb-5 md:mb-0">
            <Image src="/thumb-03.png" className="rounded-xl w-full" alt="thumb" width="400" height="400" />
            <div className="min-h-[150px]">
              <div className="font-bold my-5">Deep Cleaning</div>
              Our Deep Cleaning service goes beyond the surface, targeting hard-to-reach areas for a comprehensive clean. We leave no stone unturned, ensuring your space is pristine.
            </div>
          </div>
          <div className="w-full mb-5 md:mb-0">
            <Image src="/thumb-06.png" className="rounded-xl w-full" alt="thumb" width="400" height="400" />
            <div className="min-h-[150px]">
              <div className="font-bold my-5">Moving (In/Out) Cleaning</div>
              Our Moving Cleaning service specializes in meticulous move in/out cleanings, ensuring your former residence is left spotless and ready for its next occupants.
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main >
  );
}
