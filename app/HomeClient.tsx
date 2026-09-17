'use client'

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Sticky from './Sticky';
import Footer from './Footer';

export default function Home() {
  const scrolltoHash = function (element_id: string) {
    const yOffset = -80;
    const element = document.getElementById(element_id)!;
    const y = element?.getBoundingClientRect()?.top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  const [showMenu, setShowMenu] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const successCardRef = useRef<HTMLDivElement | null>(null);

  const form = useRef<HTMLFormElement | null>(null)
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current || formStatus === 'loading') return;

    setFormStatus('loading');

    emailjs.sendForm('service_f6v1078', 'template_du93o8p', form.current, '9_1cvi1qcNyiNlqSo')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    form.current.reset();
    setFormStatus('success');
  };

  useEffect(() => {
    if (formStatus !== 'success') return;
    // Wait a frame so the success card is in the DOM, then center it in view
    requestAnimationFrame(() => {
      successCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    });
  }, [formStatus]);

  return (
    <main id="top" className="absolute top-0 w-full max-h-screen lg:snap-y lg:snap-mandatory" style={{ scrollBehavior: 'smooth' }}>
      <Sticky />

      {/* HERO */}
      <div className="animate-[fade-me-in_.5s_ease-in-out] snap-center video-container min-h-screen mt-00 bg-repeat-custom">
        <Image
          src="/cover_03.jpg"
          alt="Clean, professionally maintained home interior"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          style={{ zIndex: 0 }}
        />

        <div className="caption h-full text-white relative z-30">
          <div className="h-full px-5 md:px-10 lg:px-20 flex flex-col items-center justify-center pb-0 mt-8">
            <div className="lg:max-w-[55%] bg-[#fff5fe] text-center border-[#f0f0f0] border shadow-lg rounded-2xl p-5 px-8 pb-8 text-[#111]">

              <h1 className="lg:text-center w-full text-center mb-3 text-[30px] leading-[40px] pt-0 lg:pt-2 lg:leading-normal text-[#C41C94] lg:text-[44px] font-bold">
                Serving Oakland and the Bay Area
              </h1>

              <p className="text-lg leading-7">
                Maid for Me is proudly Oakland-based, delivering reliable, high-quality cleaning with care and consistency. Residential, commercial, deep cleans, and move-in/move-out.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <a href="tel:5106037272" className="block w-full">
                  <button className="w-full bg-[#C41C94] hover:bg-[#ffade8] transition-all text-white rounded-2xl p-5 text-lg md:text-xl font-bold shadow-lg">
                    Call Us at (510) 603-7272
                  </button>
                </a>

                <div className="mt-4 text-sm text-gray-700">
                  <ul className="flex flex-col items-center gap-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6">
                    <li className="flex items-center justify-center gap-2 text-center">
                      <span>✔️</span>
                      <span>Fast quotes & flexible scheduling</span>
                    </li>
                    <li className="flex items-center justify-center gap-2 text-center">
                      <span>✔️</span>
                      <span>Eco-friendly options</span>
                    </li>
                    <li className="flex items-center justify-center gap-2 text-center">
                      <span>✔️</span>
                      <span>Trusted local team</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div id="about-us" className="flex min-h-[700px] w-full bg-[#f3fafb] justify-center py-[160px] px-5 md:px-10 lg:px-20 items-center">
        <div className="max-w-[1200px] gap-10 w-full flex flex-col lg:flex-row">
          <div id="about-us-mobile" className="pt-5 justify-center">
            <Image src="/thumb-07.jpg" className="rounded-xl lg:min-w-[700px]" alt="Clean living room after Maid For Me home cleaning" width={580} height={10}></Image>
          </div>
          <div className="col-span-6 lg:col-span-4 flex flex-row text-left items-center">
            <div className="">
              <div className="mb-8 text-left">
                <h2 className="text-[40px] font-bold">
                  Spotless Excellence
                </h2>
              </div>
              <div className="text-lg">
                We focus on reliable, high-quality cleaning that fits the way you actually live and work. Every home and business is different, so we take the time to understand your space and clean it properly.
                <br /><br />
                Our goal is to provide you with a clean, healthy, and comfortable space that you can be proud of. We are committed to delivering exceptional cleaning services that exceed your expectations.
              </div>
            </div>

          </div>
        </div>

      </div>

      <div
        id="services"
        className="snap-center text-center bg-repeat-custom flex px-5 pt-[60px] md:pt-[80px] md:px-20 pb-12 justify-center"
      >
        <div
          id="services-mobile"
          className="pt-5 pb-10 w-full max-w-[1200px]"
        >
          <div className="uppercase font-bold text-sm tracking-wide text-[#C41C94]">
            Services
          </div>

          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">
              Tailored Solutions for Your Needs
            </h2>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-10 max-w-[1100px] mx-auto w-full">

            <div className="w-full">
              <Image
                src="/thumb-08.jpg"
                className="rounded-xl w-full aspect-square object-cover"
                alt="Maintenance clean"
                width={400}
                height={400}
              />
              <div className="text-left text-base md:text-lg mt-4">
                <div className="font-bold mb-2">
                  Maintenance Clean
                </div>
                For homes that have already had a thorough cleaning and need consistent upkeep.
              </div>
            </div>

            <div className="w-full">
              <Image
                src="/thumb-02.png"
                className="rounded-xl w-full aspect-square object-cover"
                alt="Signature clean"
                width={400}
                height={400}
              />
              <div className="text-left text-base md:text-lg mt-4">
                <div className="font-bold mb-2">
                  Signature Clean
                </div>
                A more thorough reset for homes that need additional attention.
              </div>
            </div>

            <div className="w-full">
              <Image
                src="/thumb-09.jpg"
                className="rounded-xl w-full aspect-square object-cover"
                alt="Deep clean"
                width={400}
                height={400}
              />
              <div className="text-left text-base md:text-lg mt-4">
                <div className="font-bold mb-2">
                  Deep Clean
                </div>
                Detailed, top-to-bottom cleaning for buildup, overdue areas, and first-time clients.
              </div>
            </div>

            <div className="w-full">
              <Image
                src="/thumb-06.png"
                className="rounded-xl w-full aspect-square object-cover"
                alt="Move-in and move-out cleaning"
                width={400}
                height={400}
              />
              <div className="text-left text-base md:text-lg mt-4">
                <div className="font-bold mb-2">
                  Move-In / Move-Out
                </div>
                An empty-home reset designed for moving day.
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* TESTIMONIALS */}
      <div id="testimonials" className="snap-center text-center flex px-5 pt-[80px] md:px-20 py-5 pb-7 justify-center bg-[#f3fafb]">
        <div id="testimonials-mobile" className="pt-5 pb-10 max-w-[500px] lg:max-w-[1200px]">
          <div className="uppercase font-bold pt-0 text-[#C41C94]">
            Testimonials
          </div>
          <div className="text-center mb-10">
            <h2 className="text-[40px] font-bold">
              Voices of Satisfied Customers
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="grid auto-rows-min gap-6 justify-start">
              <div className="min-w-full bg-[white] border rounded-xl transition-all ease-in-out duration-500 shadow-[0_25px_50px_-12px_rgb(0,0,0,0.0)] hover:shadow-[0_10px_50px_-12px_rgb(0,0,0,.15)] text-base p-7 text-left">
                Maid For Me has been an absolute lifesaver! Their attention to detail and thoroughness in cleaning our home is unmatched. We&apos;ve tried other cleaning services in the past, but Maid For Me truly stands out. Their professionalism and reliability make them our go-to choice every time.
                <div className="flex flex-row items-center mt-7">
                  <Image src="/avatars/female-01.jpeg" alt="Jessica M." className="rounded-full" width={60} height={60} />
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-base pl-5">
                      Jessica M.
                    </span>
                    <div className="font-sans font-extralight text-xs pl-5">
                      Oakland, CA
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-[white] border border-[#f1f1f1] rounded-xl transition-all ease-in-out duration-500 shadow-[0_25px_50px_-12px_rgb(0,0,0,0.0)] hover:shadow-[0_10px_50px_-12px_rgb(0,0,0,.15)] text-base p-7 text-left">
                You&apos;re just amazing and I gotta tell people all the time you&apos;re like and it&apos;s not a downplay the service as you do for me. It&apos;s like I tell you, but like she&apos;s not even a luxury like you are a bill and when I say that you&apos;re a necessity like you&apos;re not a optional like you were literally a factored in cost in my monthly expenses and that&apos;s I just wanna let you know like how much I rely on you. I appreciate you and just to come home to see my home. In tiptop shape it&apos;s just fucking amazing girl. I love you. Thank you so much.
                <div className="flex flex-row items-center mt-7">
                  <Image src="/avatars/male-02.jpeg" alt="John D." className="rounded-full" width={60} height={60} />
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-base pl-5">
                      John D.
                    </span>
                    <div className="font-sans font-extralight text-xs pl-5">
                      Piedmont, CA
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="w-full bg-[white] border border-[#f1f1f1] rounded-xl transition-all ease-in-out duration-500 shadow-[0_25px_50px_-12px_rgb(0,0,0,0.0)] hover:shadow-[0_10px_50px_-12px_rgb(0,0,0,.15)] text-base p-7 text-left">
                I&apos;ve been a loyal customer of Maid For Me for over a year now, and I couldn&apos;t be happier with their service. Whether it&apos;s a routine cleaning or a deep clean before hosting guests, they consistently deliver exceptional results. I appreciate their flexibility and dedication to making my home shine!
                <div className="flex flex-row items-center mt-7">
                  <Image src="/avatars/female-03.jpeg" alt="" className="rounded-full" width={60} height={60} />
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-base pl-5">
                      Emily R.
                    </span>
                    <div className="font-sans font-extralight text-xs pl-5">
                      San Francisco, CA
                    </div>
                  </div>
                </div>
              </div> */}
            </div>

            <div className="grid auto-rows-min gap-6">
              <div className="min-w-full bg-[white] border rounded-xl transition-all ease-in-out duration-500 shadow-[0_25px_50px_-12px_rgb(0,0,0,0.0)] hover:shadow-[0_10px_50px_-12px_rgb(0,0,0,.15)] text-base p-7 text-left">
                I&apos;ve hired Poleen for a deep cleaning of my home for quite sometime and I couldn&apos;t be happier with the results. From the moment she arrived, she was professional, courteous, and efficient. She paid close attention to detail and left my home sparkling clean.
                <br /><br />
                Poleen went above and beyond to ensure that every corner of my house was thoroughly cleaned, from the baseboards to the ceiling fans. She used eco-friendly products that left my home smelling fresh and clean.
                <br /><br />
                I was impressed with Poleen&apos;s work ethic and dedication to providing top-notch service. I will definitely be hiring her again for future cleanings and would highly recommend her to anyone in need of a reliable and thorough cleaner. Thank you, Poleen, for a job well done!
                <div className="flex flex-row items-center mt-7">
                  <Image src="/avatars/male-04.png" alt="José P." className="rounded-full" width={60} height={60} />
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-base pl-5">
                      José P.
                    </span>
                    <div className="font-sans font-extralight text-xs pl-5">
                      Oakland, CA
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="w-full bg-[white] border border-[#f1f1f1] rounded-xl transition-all ease-in-out duration-500 shadow-[0_25px_50px_-12px_rgb(0,0,0,0.0)] hover:shadow-[0_10px_50px_-12px_rgb(0,0,0,.15)] text-base p-7 text-left">
                Maid for Me, led by Polene, left my home spotless. They&apos;re efficient and lovely to work with. Highly recommend them for a thorough clean!
                <div className="flex flex-row items-center mt-7">
                  <Image src="/avatars/male-07.png" alt="" className="rounded-full" width={60} height={60} />
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-base pl-5">
                      Arthur O.
                    </span>
                    <div className="font-sans font-extralight text-xs pl-5">
                      Piedmont, CA
                    </div>
                  </div>
                </div>
              </div> */}
            </div>

            <div className="grid auto-rows-min gap-6">
              <div className="min-w-full bg-[white] border rounded-xl transition-all ease-in-out duration-500 shadow-[0_25px_50px_-12px_rgb(0,0,0,0.0)] hover:shadow-[0_10px_50px_-12px_rgb(0,0,0,.15)] text-base p-7 text-left">
                I was amazed by the work Polene and Maid for Me did in my place in Oakland. They&apos;re efficient and thorough. Don&apos;t hesitate to call them for a sparkling clean!
                <div className="flex flex-row items-center mt-7">
                  <Image src="/avatars/male-06.png" alt="Alicia A." className="rounded-full" width={60} height={60} />
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-base pl-5">
                      Alicia A.
                    </span>
                    <div className="font-sans font-extralight text-xs pl-5">
                      Oakland, CA
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-[white] border border-[#f1f1f1] rounded-xl transition-all ease-in-out duration-500 shadow-[0_25px_50px_-12px_rgb(0,0,0,0.0)] hover:shadow-[0_10px_50px_-12px_rgb(0,0,0,.15)] text-base p-7 text-left">
                Maid for Me is a real gem! Polene and her team worked wonders in my Piedmont home. If you want top-notch cleaning with a smile, Maid for Me is the way to go.
                <div className="flex flex-row items-center mt-7">
                  <Image src="/avatars/female-05.png" alt="Jennifer B." className="rounded-full" width={60} height={60} />
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-base pl-5">
                      Jennifer B.
                    </span>
                    <div className="font-sans font-extralight text-xs pl-5">
                      Piedmont, CA
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="w-full bg-[white] border border-[#f1f1f1] rounded-xl transition-all ease-in-out duration-500 shadow-[0_25px_50px_-12px_rgb(0,0,0,0.0)] hover:shadow-[0_10px_50px_-12px_rgb(0,0,0,.15)] text-base p-7 text-left">
                Polene and the crew at Maid for Me are the real MVPs of house cleaning in the Bay Area! No joke, they tackled our deep cleaning like pros, leaving no dust bunny untouched. If you want your place to shine brighter than the Golden Gate Bridge, Maid for Me is the only way to go!
                <div className="flex flex-row items-center mt-7">
                  <Image src="/avatars/male-08.png" alt="" className="rounded-full" width={60} height={60} />
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-base pl-5">
                      Michael X.
                    </span>
                    <div className="font-sans font-extralight text-xs pl-5">
                      San Francisco, CA
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* LOCATION */}
      <div
        id="location"
        className="snap-center bg-repeat-custom py-[120px] flex justify-center"
      >
        {/* CONTENT WRAPPER */}
        <div className="w-full max-w-[1200px] px-6 md:px-10">
          <div className="flex flex-col md:flex-row gap-10 items-stretch">

            {/* MAP — FULL 50% */}
            <div className="w-full md:w-2/3">
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100878.24803177382!2d-122.39450528438896!3d37.80308439911126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f9b5ea6210a07%3A0xa2950f4ff149c910!2sSan%20Francisco%20Bay!5e0!3m2!1sen!2sus!4v1711602621487!5m2!1sen!2sus"
                  className="w-full h-[450px] md:h-full"
                  loading="lazy"
                  title="Maid For Me service area map — Oakland and the San Francisco Bay Area"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* TEXT — FULL 50% */}
            <div className="w-full md:w-1/2 flex items-center">
              <div className="w-full text-left text-lg leading-7">
                <div className="uppercase font-bold text-sm tracking-wide text-[#C41C94] mb-2">
                  Service Area
                </div>
                <h2 className="text-2xl font-semibold mb-4">
                  Where we clean
                </h2>

                <p>
                  Maid For Me is Oakland-based and serves homes across the San Francisco Bay Area.
                </p>

                <p className="mt-4 font-semibold text-[#111]">
                  Areas we regularly serve:
                </p>
                <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-base">
                  <li className="flex items-center gap-2">
                    <span className="text-[#C41C94]">•</span> Oakland
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#C41C94]">•</span> Piedmont
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#C41C94]">•</span> San Francisco
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#C41C94]">•</span> Nearby East Bay &amp; Bay Area cities
                  </li>
                </ul>

                <p className="mt-5 text-base text-gray-700">
                  Not sure if we cover your ZIP? Call us at{" "}
                  <a href="tel:5106037272" className="font-medium">
                    (510) 603-7272
                  </a>{" "}
                  or request a quote and we&apos;ll confirm.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* FAQs (MOVED DOWN HERE — LAST SECTION BEFORE CONTACT) */}
      <div id="faqs" className="snap-center text-center flex px-5 pt-[80px] md:px-20 pb-7 justify-center bg-[#f3fafb]">
        <div id="faqs-mobile" className="pt-5 pb-10 max-w-[500px] lg:max-w-[1200px]">
          <div className="uppercase font-bold pt-5 text-[#C41C94]">
            FAQs
          </div>
          <div className="text-center mb-10 pb-5">
            <h2 className="text-[40px] font-bold">
              Helpful Answers to Your Questions
            </h2>
          </div>

          <div className="text-left w-full max-w-[900px]">
            <div className="border-b-2 border-[#ffade8] pt-0 py-[50px]">
              <div id="question1" className="pb-6 font-serif text-2xl font-bold">
                What cleaning services do you offer?
              </div>
              <div id="answer1" className="text-lg">
                We offer a wide range of cleaning services for homes, including regular maintenance cleaning, deep cleaning, move-in/move-out cleaning, post-construction cleaning, and specialized services like carpet cleaning and window washing.
              </div>
            </div>

            {/* <div className="border-b-2 border-[#ffade8] py-[50px]">
              <div id="question2" className="pb-6 font-serif text-2xl font-bold">
                Are your cleaners background-checked and insured?
              </div>
              <div id="answer2" className="text-lg">
                Yes, all our cleaners undergo thorough background checks and are fully insured for your peace of mind.
              </div>
            </div> */}

            <div className="border-b-2 border-[#ffade8] py-[50px]">
              <div id="question3" className="pb-6 font-serif text-2xl font-bold">
                How much does your cleaning service cost?
              </div>
              <div id="answer3" className="text-lg">
                Our pricing depends on the size of your home, the type of cleaning service required, and any additional requests. We offer customized quotes tailored to your specific needs.
                <br /><br />
                A general pricing guide can be found here: <Link href="https://www.maidforme.co/rates">Pricing Guide</Link>
              </div>
            </div>

            <div className="border-b-2 border-[#ffade8] py-[50px]">
              <div id="question4" className="pb-6 font-serif text-2xl font-bold">
                Do I need to provide cleaning supplies and equipment?
              </div>
              <div id="answer4" className="text-lg">
                No, we bring our own high-quality cleaning supplies and equipment to ensure the job is done efficiently and effectively.
              </div>
            </div>

            {/* <div className="border-b-2 border-[#ffade8] py-[50px]">
              <div id="question5" className="pb-6 font-serif text-2xl font-bold">
                How long will it take to clean my home?
              </div>
              <div id="answer5" className="text-lg">
                The time required depends on the size of your home and the scope of the cleaning service. We can provide an estimated duration based on your specific requirements.
              </div>
            </div> */}
            {/* 
            <div className="border-b-2 border-[#ffade8] py-[50px]">
              <div id="question6" className="pb-6 font-serif text-2xl font-bold">
                Do I need to be present during the cleaning?
              </div>
              <div id="answer6" className="text-lg">
                It&apos;s entirely up to you. Many of our clients prefer to be away while we clean, but if you prefer to be present, we&apos;re happy to accommodate your schedule.
              </div>
            </div> */}

            <div className="border-b-2 border-[#ffade8] py-[50px]">
              <div id="question7-live" className="pb-6 font-serif text-2xl font-bold">
                What areas do you service?
              </div>
              <div id="answer7-live" className="text-lg">
                We are Oakland-based and regularly serve Oakland, Piedmont, San Francisco, and nearby East Bay and Bay Area cities. If you&apos;re unsure whether we cover your ZIP, call us at (510) 603-7272 or request a quote and we&apos;ll confirm.
              </div>
            </div>

            <div className="border-[#ffade8] py-[50px]">
              <div id="question8" className="pb-6 font-serif text-2xl font-bold">
                Do you offer eco-friendly cleaning options?
              </div>
              <div id="answer8" className="text-lg">
                Yes, we offer eco-friendly cleaning solutions upon request. Just let us know your preferences, and we&apos;ll ensure that environmentally friendly products are used in your home.
              </div>
            </div>

            {/* <div className="border-b-2 border-[#ffade8] py-[50px]">
              <div id="question9" className="pb-6 font-serif text-2xl font-bold">
                How far in advance do I need to book a cleaning appointment?
              </div>
              <div id="answer9" className="text-lg">
                We recommend booking your cleaning appointment at least 1 week in advance to ensure availability. However, we do our best to accommodate last-minute requests whenever possible.
              </div>
            </div> */}

            {/* <div className="py-10">
              <div id="question10" className="pb-6 font-serif text-2xl font-bold">
                What if I&apos;m not satisfied with the cleaning service?
              </div>
              <div id="answer10" className="text-lg">
                Your satisfaction is our top priority. If you&apos;re not completely satisfied with our service, please let us know within 24 hours, and we&apos;ll address any concerns and make it right. We strive to ensure every customer is happy with the results.
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div className="snap-center bg-repeat-custom text-center flex md:px-5 pt-20 pb-20 justify-center">
        <div id="contact-us" className="py-5">
          <div className="p-5 md:p-20 md:py-[70px] min-w-full bg-[#fff4fd] shadow-lg md:rounded-2xl w-full max-w-[800px] lg:min-w-[1200px]">
            {formStatus === 'success' ? (
              <div
                ref={successCardRef}
                className="flex flex-col items-center justify-center text-center py-10 md:py-16 animate-[fade-me-in_.4s_ease-in-out]"
                role="status"
                aria-live="polite"
              >
                <p className="uppercase font-bold text-sm tracking-wide text-[#C41C94] mb-3">
                  Message sent
                </p>
                <h2 className="text-[40px] font-bold text-[#C41C94]">
                  Thank you — we&apos;ll be in touch soon.
                </h2>
                <p className="mt-4 text-lg font-light text-gray-700 max-w-xl leading-relaxed mx-auto">
                  We received your note and will follow up shortly. Prefer to talk now? Call us at{" "}
                  <a href="tel:5106037272" className="font-medium">
                    (510) 603-7272
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setFormStatus('idle')}
                  className="mt-8 transition-all bg-white border border-[#f0f0f0] hover:border-[#C41C94] text-[#C41C94] rounded-2xl px-6 py-3 shadow-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div className="text-left p-0 mb-2">
                  <h2 className="text-[40px] font-bold">
                    Reach Out
                    <span className="md:hidden">
                      !
                    </span>
                    <span className="hidden md:inline pl-2">
                      for Exceptional Cleaning Services
                    </span>
                  </h2>
                </div>
                <div className="text-left text-lg font-light">
                  Don&apos;t hesitate to contact us for top-notch cleaning services.
                </div>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="text-md font-bold mt-[30px] md:mt-[30px] pb-5 lg:pb-0 text-left">
                    <div className="flex flex-col md:flex-row gap-5 ">
                      <div className="w-full">
                        Name<span className="text-[#C41C94]">*</span> <br />
                        <input type="text" name="user_name" className="px-4 py-3 font-light rounded-full mt-2 w-full" placeholder="Jane Smith" />
                      </div>
                      <div className="w-full">
                        Email/Phone<span className="text-[#C41C94]">*</span> <br />
                        <input type="text" name="user_phone" className="px-5 py-3 font-light rounded-full mt-2 w-full" placeholder="email@gmail.com" /> <br /><br />
                      </div>
                    </div>

                    Message<span className="text-[#C41C94]">*</span> <br />
                    <textarea name="user_message" className="p-5 w-full font-light rounded-3xl mt-2 lg:min-w-[500px]" placeholder="Hello, I am looking for your services!" /> <br /><br />

                    How did you hear about us? <br />
                    <select name="discovery" id="" className="mb-8 mt-2 p-3 w-full font-normal rounded-xl border-r-[15px] border-transparent px-3">
                      <option value="Blank"></option>
                      <option value="Instagram">Instagram</option>
                      <option value="Facebook">Facebook</option>
                      <option value="Google">Google</option>
                      <option value="Friend">Friend</option>
                      <option value="Other">Other</option>
                    </select>

                    {formStatus === 'error' && (
                      <p className="mb-4 text-sm font-normal text-red-700" role="alert">
                        Something went wrong. Please try again or call us at (510) 603-7272.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={formStatus === 'loading'}
                      className="transition-all bg-[#C41C94] hover:bg-[#ffade8] hover:shadow-2xl w-full shadow-md text-white rounded-2xl p-3 mt-0 disabled:opacity-70 disabled:cursor-wait"
                    >
                      {formStatus === 'loading' ? 'Sending…' : "Let's talk!"}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
