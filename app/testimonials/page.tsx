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

      <div id="testimonials" className="text-center flex px-5 mt-[80px] md:px-20 py-5 pb-7 justify-center">
        <div id="testimonials-mobile" className=" pt-5 pb-10 max-w-[500px] lg:max-w-[1200px]">
          <div className="uppercase font-bold pt-0 text-[#C41C94]">
            Testimonials
          </div>
          <div className="text-center mb-10">
            <h1>
              Voices of Satisfied Customers
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            <div className="grid auto-rows-min gap-6 justify-start">
              <div className="min-w-full bg-[white] border rounded-xl transition-all ease-in-out duration-500 shadow-[0_25px_50px_-12px_rgb(0,0,0,0.0)] hover:shadow-[0_10px_50px_-12px_rgb(0,0,0,.15)]  text-sm p-7 text-left">
                Maid For Me has been an absolute lifesaver! Their attention to detail and thoroughness in cleaning our home is unmatched. We&apos;ve tried other cleaning services in the past, but Maid For Me truly stands out. Their professionalism and reliability make them our go-to choice every time.
                <div className="flex flex-row items-center mt-7">
                  <Image src="/avatars/female-01.jpeg" alt="" className="rounded-full" width={60} height={60} />
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-sm pl-5">
                      Sarah M.
                    </span>
                    <div className="font-sans font-extralight text-xs pl-5">
                      Oakland, CA
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-[white] border border-[#f1f1f1] rounded-xl transition-all ease-in-out duration-500 shadow-[0_25px_50px_-12px_rgb(0,0,0,0.0)] hover:shadow-[0_10px_50px_-12px_rgb(0,0,0,.15)]  text-sm p-7 text-left">
                For busy professionals like me, this cleaning service is a lifesaver. Trustworthy, reliable, and they always leave my home sparkling clean.
                <div className="flex flex-row items-center mt-7">
                  <Image src="/avatars/male-02.jpeg" alt="" className="rounded-full" width={60} height={60} />
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-sm pl-5">
                      John D.
                    </span>
                    <div className="font-sans font-extralight text-xs pl-5">
                      Piedmont, CA
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-[white] border border-[#f1f1f1] rounded-xl transition-all ease-in-out duration-500 shadow-[0_25px_50px_-12px_rgb(0,0,0,0.0)] hover:shadow-[0_10px_50px_-12px_rgb(0,0,0,.15)]  text-sm p-7 text-left">
                I&apos;ve been a loyal customer of Maid For Me for over a year now, and I couldn&apos;t be happier with their service. Whether it&apos;s a routine cleaning or a deep clean before hosting guests, they consistently deliver exceptional results. I appreciate their flexibility and dedication to making my home shine!
                <div className="flex flex-row items-center mt-7">
                  <Image src="/avatars/female-03.jpeg" alt="" className="rounded-full" width={60} height={60} />
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-sm pl-5">
                      Emily R.
                    </span>
                    <div className="font-sans font-extralight text-xs pl-5">
                      San Francisco, CA
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="grid auto-rows-min gap-6">
              <div className="min-w-full bg-[white] border rounded-xl transition-all ease-in-out duration-500 shadow-[0_25px_50px_-12px_rgb(0,0,0,0.0)] hover:shadow-[0_10px_50px_-12px_rgb(0,0,0,.15)]  text-sm p-7 text-left">
                I&apos;ve hired Poleen for a deep cleaning of my home for quite sometime and I couldn&apos;t be happier with the results. From the moment she arrived, she was professional, courteous, and efficient. She paid close attention to detail and left my home sparkling clean.
                <br /><br />
                Poleen went above and beyond to ensure that every corner of my house was thoroughly cleaned, from the baseboards to the ceiling fans. She used eco-friendly products that left my home smelling fresh and clean.
                <br /><br />
                I was impressed with Poleen&apos;s work ethic and dedication to providing top-notch service. I will definitely be hiring her again for future cleanings and would highly recommend her to anyone in need of a reliable and thorough cleaner. Thank you, Poleen, for a job well done!
                <div className="flex flex-row items-center mt-7">
                  <Image src="/avatars/male-04.png" alt="" className="rounded-full" width={60} height={60} />
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-sm pl-5">
                      José P.
                    </span>
                    <div className="font-sans font-extralight text-xs pl-5">
                      Oakland, CA
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-[white] border border-[#f1f1f1] rounded-xl transition-all ease-in-out duration-500 shadow-[0_25px_50px_-12px_rgb(0,0,0,0.0)] hover:shadow-[0_10px_50px_-12px_rgb(0,0,0,.15)]  text-sm p-7 text-left">
                Maid for Me, led by Polene, left my home spotless. They&apos;re efficient and lovely to work with. Highly recommend them for a thorough clean!
                <div className="flex flex-row items-center mt-7">
                  <Image src="/avatars/male-07.png" alt="" className="rounded-full" width={60} height={60} />
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-sm pl-5">
                      Arthur O.
                    </span>
                    <div className="font-sans font-extralight text-xs pl-5">
                      Piedmont, CA
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid auto-rows-min gap-6">
              <div className="min-w-full bg-[white] border rounded-xl transition-all ease-in-out duration-500 shadow-[0_25px_50px_-12px_rgb(0,0,0,0.0)] hover:shadow-[0_10px_50px_-12px_rgb(0,0,0,.15)]  text-sm p-7 text-left">
                I was amazed by the work Polene and Maid for Me did in my place in Oakland. They&apos;re efficient and thorough. Don&apos;t hesitate to call them for a sparkling clean!
                <div className="flex flex-row items-center mt-7">
                  <Image src="/avatars/male-06.png" alt="" className="rounded-full" width={60} height={60} />
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-sm pl-5">
                      Alicia A.
                    </span>
                    <div className="font-sans font-extralight text-xs pl-5">
                      Oakland, CA
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-[white] border border-[#f1f1f1] rounded-xl transition-all ease-in-out duration-500 shadow-[0_25px_50px_-12px_rgb(0,0,0,0.0)] hover:shadow-[0_10px_50px_-12px_rgb(0,0,0,.15)]  text-sm p-7 text-left">
                Maid for Me is a real gem! Polene and her team worked wonders in my Piedmont home. If you want top-notch cleaning with a smile, Maid for Me is the way to go.
                <div className="flex flex-row items-center mt-7">
                  <Image src="/avatars/female-05.png" alt="" className="rounded-full" width={60} height={60} />
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-sm pl-5">
                      Jennifer B.
                    </span>
                    <div className="font-sans font-extralight text-xs pl-5">
                      Piedmont, CA
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-[white] border border-[#f1f1f1] rounded-xl transition-all ease-in-out duration-500 shadow-[0_25px_50px_-12px_rgb(0,0,0,0.0)] hover:shadow-[0_10px_50px_-12px_rgb(0,0,0,.15)]  text-sm p-7 text-left">
                Polene and the crew at Maid for Me are the real MVPs of house cleaning in the Bay Area! No joke, they tackled our deep cleaning like pros, leaving no dust bunny untouched. If you want your place to shine brighter than the Golden Gate Bridge, Maid for Me is the only way to go!
                <div className="flex flex-row items-center mt-7">
                  <Image src="/avatars/male-08.png" alt="" className="rounded-full" width={60} height={60} />
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-sm pl-5">
                      Michael X.
                    </span>
                    <div className="font-sans font-extralight text-xs pl-5">
                      San Francisco, CA
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main >
  );
}
