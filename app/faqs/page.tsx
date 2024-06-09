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
    <main id="top" className="absolute top-0 w-full  max-h-screen x-lg:snap-y x-lg:snap-mandatory" style={{ scrollBehavior: 'smooth' }}>
      <Sticky />

      <div id="testimonials" className="text-center flex px-5 mt-[80px] md:px-20 pb-7 justify-center">
        <div id="testimonials-mobile" className=" pt-5 pb-10 max-w-[500px] lg:max-w-[1200px]">
          <div className="uppercase font-bold pt-5 text-[#C41C94]">
            FAQs
          </div>
          <div className="text-center mb-10 pb-5">
            <h1>
              Helpful Answers to Your Questions
            </h1>
          </div>

          {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, repellendus. */}

          <div className="text-left w-full max-w-[900px]">
            <div className="border-b-2 border-[#ffade8] pt-0 py-[50px]">
              <div id="question1" className="pb-6 font-serif text-2xl font-bold">
                What cleaning services do you offer?
              </div>
              <div id="answer1" className="text-lg">
                We offer a wide range of cleaning services for homes, including regular maintenance cleaning, deep cleaning, move-in/move-out cleaning, post-construction cleaning, and specialized services like carpet cleaning and window washing.
              </div>
            </div>

            <div className="border-b-2 border-[#ffade8] py-[50px]">
              <div id="question2" className="pb-6 font-serif text-2xl font-bold">
                Are your cleaners background-checked and insured?
              </div>
              <div id="answer2" className="text-lg">
                Yes, all our cleaners undergo thorough background checks and are fully insured for your peace of mind.
              </div>
            </div>

            <div className="border-b-2 border-[#ffade8] py-[50px]">
              <div id="question3" className="pb-6 font-serif text-2xl font-bold">
                How much does your cleaning service cost?
              </div>
              <div id="answer3" className="text-lg">
                Our pricing depends on the size of your home, the type of cleaning service required, and any additional requests. We offer customized quotes tailored to your specific needs.
                <br /><br />
                A general pricing guide can be found here: <Link href="https://www.maidforme.co/pricing">Pricing Guide</Link>

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

            <div className="border-b-2 border-[#ffade8] py-[50px]">
              <div id="question5" className="pb-6 font-serif text-2xl font-bold">
                How long will it take to clean my home?
              </div>
              <div id="answer5" className="text-lg">
                The time required depends on the size of your home and the scope of the cleaning service. We can provide an estimated duration based on your specific requirements.
              </div>
            </div>

            <div className="border-b-2 border-[#ffade8] py-[50px]">
              <div id="question6" className="pb-6 font-serif text-2xl font-bold">
                Do I need to be present during the cleaning?
              </div>
              <div id="answer6" className="text-lg">
                It&apos;s entirely up to you. Many of our clients prefer to be away while we clean, but if you prefer to be present, we&apos;re happy to accommodate your schedule.
              </div>
            </div>

            <div className="border-b-2 border-[#ffade8] py-[50px]">
              <div id="question7" className="pb-6 font-serif text-2xl font-bold">
                What areas do you service?
              </div>
              <div id="answer7" className="text-lg">
                We currently provide cleaning services in the general San Francisco Bay Area. If you&apos;re unsure whether we cover your location, please feel free to contact us for clarification.
              </div>
            </div>

            <div className="border-b-2 border-[#ffade8] py-[50px]">
              <div id="question8" className="pb-6 font-serif text-2xl font-bold">
                Do you offer eco-friendly cleaning options?
              </div>
              <div id="answer8" className="text-lg">
                Yes, we offer eco-friendly cleaning solutions upon request. Just let us know your preferences, and we&apos;ll ensure that environmentally friendly products are used in your home.
              </div>
            </div>

            <div className="border-b-2 border-[#ffade8] py-[50px]">
              <div id="question9" className="pb-6 font-serif text-2xl font-bold">
                How far in advance do I need to book a cleaning appointment?
              </div>
              <div id="answer9" className="text-lg">
                We recommend booking your cleaning appointment at least 1 week in advance to ensure availability. However, we do our best to accommodate last-minute requests whenever possible.
              </div>
            </div>

            <div className="py-10">
              <div id="question10" className="pb-6 font-serif text-2xl font-bold">
                What if I&apos;m not satisfied with the cleaning service?
              </div>
              <div id="answer10" className="text-lg">
                Your satisfaction is our top priority. If you&apos;re not completely satisfied with our service, please let us know within 24 hours, and we&apos;ll address any concerns and make it right. We strive to ensure every customer is happy with the results.
              </div>
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </main >
  );
}
