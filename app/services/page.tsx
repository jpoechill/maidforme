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
    <main id="top" className="absolute top-0 max-h-screen x-lg:snap-y x-lg:snap-mandatory" style={{ scrollBehavior: 'smooth' }}>
      <Sticky />

      <div id="testimonials" className="text-center bg-repeat-custom flex px-5 mt-[80px] md:px-20 py-5 pb-7 justify-center">
        <div id="testimonials-mobile" className=" pt-5 pb-10 max-w-[500px] lg:max-w-[1200px]">
          <div className="uppercase font-bold pt-0 text-[#C41C94]">
            Services
          </div>
          <div className="text-center mb-10">
            <h1>
              Tailored Solutions for Your Needs
            </h1>
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
      </div>


      <Footer />
    </main >
  );
}
