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

      <div id="testimonials" className="animate-[fade-me-in_.5s_ease-in-out] text-center bg-repeat-custom flex px-5 mt-[80px] md:px-20 py-5 pb-7 justify-center">
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
              <Image src="/thumb-08.jpg" className="rounded-xl w-full" alt="Maintenance clean" width="400" height="400" />
              <div className="min-h-[150px] text-left text-lg">
                <div className="font-bold my-5">Maintenance Clean</div>
                For homes that have already had a thorough cleaning and need consistent upkeep.
              </div>
            </div>
            <div className="w-full mb-5 md:mb-0">
              <Image src="/thumb-02.png" className="rounded-xl w-full" alt="Signature clean" width="400" height="400" />
              <div className="min-h-[150px] text-left text-lg">
                <div className="font-bold my-5">Signature Clean</div>
                A more thorough reset for homes that need additional attention.
              </div>
            </div>
            <div className="w-full mb-5 md:mb-0">
              <Image src="/thumb-09.jpg" className="rounded-xl w-full" alt="Deep clean" width="400" height="400" />
              <div className="min-h-[150px] text-left text-lg">
                <div className="font-bold my-5">Deep Clean</div>
                Detailed, top-to-bottom cleaning for buildup, overdue areas, and first-time clients.
              </div>
            </div>
            <div className="w-full mb-5 md:mb-0">
              <Image src="/thumb-06.png" className="rounded-xl w-full" alt="Move-in and move-out cleaning" width="400" height="400" />
              <div className="min-h-[150px] text-left text-lg">
                <div className="font-bold my-5">Move-In / Move-Out</div>
                An empty-home reset designed for moving day.
              </div>
            </div>
          </div>

        </div>
      </div>


      <Footer />
    </main >
  );
}
