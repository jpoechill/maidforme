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
        <div id="testimonials-mobile" className="flex flex-col justify-start pt-10 pb-10 w-full lg:max-w-[1200px]">

          <div className="uppercase font-bold pt-0 text-[#C41C94]">
            Join our Team
          </div>
          <div className="text-center mb-6 md:mb-10">
            <h1>
              Help Us Make Homes Shine!
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
            <div className="col-span-3">
              <Image src="/sponge.jpeg" className="rounded-3xl" width={800} height={800} alt="Arrow"></Image>
            </div>
            <div className="col-span-3 text-left">
              Join our team and become part of a company that is dedicated to providing exceptional, eco-friendly cleaning services to homes in our community.
              <br /><br />
              Whether you&apos;re a seasoned cleaning professional or just starting, we value hard work, attention to detail, and a positive attitude.
              {/* We&apos;re looking for cleaning technicians, team leaders, and customer support staff to join our growing team. */}

              <br /><br />

              We believe in a straightforward, easy application process.
              If you&apos;re ready to join a company that values both your skills and work-life balance, apply today and start your journey with us!
              <br /><br />
              Send a resume and email to: <Link href="mailto:hello@maidforme.co">hello@maidforme.co</Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main >
  );
}
