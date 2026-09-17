'use client'

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Sticky from '../Sticky';
import Footer from '../Footer';

export default function Home() {
  const scrolltoHash = function (element_id: string) {
    const yOffset = -80;
    const element = document.getElementById(element_id)!;
    const y = element?.getBoundingClientRect()?.top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  // const [showMenu, setShowMenu] = useState(false);

  const [showGeneral, setShowGeneral] = useState(true);
  const [showCleaningReqs, setShowCleaningReqs] = useState(true);
  const [showTiming, setShowTiming] = useState(true);
  const [showSpecialReqs, setShowSpecialReqs] = useState(true);
  const [showAdditional, setShowAdditional] = useState(true);


  const [heightRef1, setHeightRef1] = useState(-1)
  const [heightRef2, setHeightRef2] = useState(-1)
  const [heightRef3, setHeightRef3] = useState(-1)
  const [heightRef4, setHeightRef4] = useState(-1)
  const [heightRef5, setHeightRef5] = useState(-1)
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);
  const ref5 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setShowCleaningReqs(false)
    setShowTiming(false)
    setShowSpecialReqs(false)
    setShowAdditional(false)

    if (ref1.current) {
      setHeightRef1(ref1.current.clientHeight)
    }
    if (ref2.current) {
      setHeightRef2(ref2.current.clientHeight)
    }
    if (ref3.current) {
      setHeightRef3(ref3.current.clientHeight)
    }
    if (ref4.current) {
      setHeightRef4(ref4.current.clientHeight)
    }
    if (ref5.current) {
      setHeightRef5(ref5.current.clientHeight)
    }

  }, [])


  const form = useRef<HTMLFormElement | null>(null)
  const successCardRef = useRef<HTMLDivElement | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current || formStatus === 'loading') return;

    setFormStatus('loading');

    emailjs.sendForm('service_f6v1078', 'template_xqx9ueu', form.current, '9_1cvi1qcNyiNlqSo')
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
    requestAnimationFrame(() => {
      successCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    });
  }, [formStatus]);

  return (
    <main id="top" className="absolute top-0 w-full max-h-screen x-lg:snap-y x-lg:snap-mandatory" style={{ scrollBehavior: 'smooth' }}>
      <Sticky />


      <div className="animate-[fade-me-in_.5s_ease-in-out] snap-center text-center bg-[#e6f6ff] pt-[100px] bg-repeat-custom  flex md:px-5 pb-[50px] justify-center">
        <div id="contact-us" className="py-5 lg:min-w-[1200px]">

          {formStatus === 'success' ? (
            <div
              ref={successCardRef}
              className="mx-auto p-5 md:p-20 md:py-[60px] bg-[#fff4fd] shadow-lg md:rounded-2xl max-w-[800px] lg:max-w-[900px] flex flex-col items-center justify-center text-center animate-[fade-me-in_.4s_ease-in-out]"
              role="status"
              aria-live="polite"
            >
              <p className="uppercase font-bold text-sm tracking-wide text-[#C41C94] mb-3">
                Quote request received
              </p>
              <h1 className="text-[#C41C94]">
                Thank you — we&apos;ll follow up with your quote.
              </h1>
              <p className="mt-4 text-base font-light text-gray-700 max-w-xl leading-relaxed mx-auto">
                We received your questionnaire and will get back to you shortly. Prefer to talk now? Call us at{" "}
                <a href="tel:5106037272" className="font-medium">
                  (510) 603-7272
                </a>
                .
              </p>
              <button
                type="button"
                onClick={() => setFormStatus('idle')}
                className="mt-8 transition-all bg-white border border-[#f0f0f0] hover:border-[#C41C94] text-[#C41C94] rounded-full px-6 py-3 shadow-sm font-medium"
              >
                Submit another request
              </button>
            </div>
          ) : (
          <form ref={form} onSubmit={sendEmail}>
            <div className="p-5 md:p-20 md:py-[40px] bg-[#fff4fd] shadow-lg md:rounded-2xl max-w-[800px] lg:max-w-[1200px]">
              <div className="text-left p-0 mb-2">
                <h1>
                  Request a Quote
                </h1>
              </div>
              <div className="text-left text-base font-light">
                Please share some information about your requirements and preferences. For general rates, check out our <Link href="https://www.maidforme.co/rates">General Rates</Link> page.
                <br /><br />
              </div>
              <div className="text-md font-bold mt-0 pb-0 lg:pb-0 text-left">
                <div className="w-full font-normal text-right text-xs text-gray-400 mb-2">Expand All [+]</div>

                <div onClick={() => { setShowGeneral(!showGeneral) }} className="text-xs items-center flex flex-row justify-between w-full text-center hover:cursor-pointer  text-[#C41C94] bg-[#ffade8] px-6 py-4 mb-4 uppercase rounded-full">
                  <span className="font-bold">
                    I
                  </span>
                  <span className="font-medium tracking-wider">
                    General Information

                    {/* To provide you with an accurate and detailed quote, please share some information about your requirements and preferences. */}
                  </span>
                  <Image src={!showGeneral ? "/chevron.svg" : "/chevron_down.svg"} width={20} height={20} alt="Arrow"></Image>
                </div>
                {/* {
                  showGeneral && */}
                <div ref={ref1} className="font-bold text-base overflow-hidden px-6 transition-all ease-in-out delay-0 duration-500" style={{ "height": !showGeneral ? 0 : heightRef1 }}>
                  <div className="flex flex-col font-bold md:flex-row gap-5 ">
                    <div className="w-full">
                      Name<span className="text-[#C41C94]">*</span> <br />
                      <input type="text" name="full_name" className="px-4 py-3 font-light rounded-full mt-2 w-full" placeholder="Jane Smith" />
                    </div>
                    <div className="w-full">
                      Email/Phone<span className="text-[#C41C94]">*</span> <br />
                      <input type="text" name="email" className="px-5 py-3 font-light rounded-full mt-2 w-full" placeholder="email@gmail.com" /> <br /><br />
                    </div>
                  </div>

                  Can you provide the address (or location) of the property to be cleaned?
                  <input type="text" name="location" className="px-4 py-3 font-light rounded-full mt-2 w-full" placeholder="An address to your location or property..." />
                  <br /><br />


                  <div className="flex flex-col md:flex-row gap-5 mb-5">
                    <div className="w-full">
                      What is the nature of this property?
                      <select name="nature" id="" className="mt-2 p-3 w-full rounded-xl border-r-[15px] border-transparent font-normal px-3">
                        <option value="Residential" selected>Residential</option>
                        <option value="Office">Office</option>
                        <option value="Commercial">Commercial</option>
                      </select>
                    </div>
                    <div className="w-full">
                      How often do you require cleaning services?
                      <select name="interval" id="" className="mt-2 p-3 w-full rounded-xl border-r-[15px] border-transparent font-normal px-3">
                        <option value="Weekly">Weekly</option>
                        <option value="Bi-weekly" selected>Bi-weekly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="One-time">One-time</option>
                      </select>
                    </div>
                  </div>

                  Do you require an additional deep cleaning?
                  <select name="deep_cleaning" id="" className="mt-2 mb-6 p-3 w-full rounded-xl border-r-[15px] border-transparent font-normal px-3">
                    <option value="None"></option>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>

                  <div className="flex flex-col md:flex-row gap-5 mb-6">
                    <div className="w-full">
                      What is the size of the property in square footage? <br />
                      <select name="sq_ft" id="" className="mt-2 p-3 w-full rounded-xl border-r-[15px] border-transparent font-normal px-3">
                        <option value="500">500 sq. ft</option>
                        <option value="1000">1000 sq. ft</option>
                        <option value="1500" selected>1500 sq. ft</option>
                        <option value="2000">2000 sq. ft</option>
                        <option value="3000">3000 sq. ft</option>
                        <option value="4000">4000 sq. ft</option>
                        <option value="5000">5000+ sq. ft</option>
                      </select>
                    </div>
                    <div className="w-full">
                      How many rooms does the property have? <br />
                      <select name="num_rooms" id="" className="mt-2 p-3 w-full rounded-xl border-r-[15px] border-transparent font-normal px-3">
                        <option value="N/A"></option>
                        <option value="Studio">Studio</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="More than 5">More than 5</option>
                      </select></div>
                  </div>

                </div>

                {/* // } */}


                <div onClick={() => { setShowCleaningReqs(!showCleaningReqs) }} className="text-xs items-center flex flex-row justify-between w-full text-center hover:cursor-pointer  text-[#C41C94] bg-[#ffade8] px-6 py-4 mb-4 uppercase rounded-full">
                  <span className="font-bold">
                    II
                  </span>
                  <span className="font-medium tracking-wider">
                    Cleaning Requirements
                  </span>
                  <Image src={!showCleaningReqs ? "/chevron.svg" : "/chevron_down.svg"} width={20} height={20} alt="Arrow"></Image>
                </div>
                {/* {
                  showCleaningReqs && */}
                <div ref={ref2} className="font-bold text-base overflow-hidden px-6 transition-all ease-in-out delay-0 duration-500" style={{ "height": !showCleaningReqs ? 0 : heightRef2 }}>
                  What specific areas need cleaning (e.g., bathrooms, kitchen, living areas, bedrooms, office spaces)?

                  <div className="grid grid-cols-4 p-4 pb-2 gap-y-4">
                    <div>
                      <input type="checkbox" className="mr-3" name="bathrooms" id="bathrooms" />
                      <label htmlFor="bathrooms">Bathrooms</label>
                    </div>

                    <div>
                      <input type="checkbox" className="mr-3" name="kitchen" id="kitchen" />
                      <label htmlFor="kitchen">Kitchen</label>
                    </div>

                    <div>
                      <input type="checkbox" className="mr-3" name="livingarea" id="livingarea" />
                      <label htmlFor="livingarea">Living Area</label>
                    </div>

                    <div>
                      <input type="checkbox" className="mr-3" name="bedrooms" id="bedrooms" />
                      <label htmlFor="bedrooms">Bedrooms</label>
                    </div>

                    <div>
                      <input type="checkbox" className="mr-3" name="officespace" id="officespace" />
                      <label htmlFor="officespace">Office Spaces</label>
                    </div>

                  </div>

                  <input type="text" name="other_areas" className="px-4 py-3 font-light rounded-full mt-2 w-full" placeholder="Other specific areas that may need cleaning..." />
                  <br /><br />

                  Are there any areas or items that require special attention or are off-limits?
                  <input type="text" name="areas_off_limit" className="px-4 py-3 font-light rounded-full mt-2 w-full" placeholder="Areas that require special attention or may be off limits..." />
                  <br /><br />
                </div>
                {/* } */}


                <div onClick={() => { setShowTiming(!showTiming) }} className="text-xs items-center flex flex-row justify-between w-full text-center hover:cursor-pointer  text-[#C41C94] bg-[#ffade8] px-6 py-4 mb-4 uppercase rounded-full">
                  <span className="font-bold">
                    III
                  </span>
                  <span className="font-medium tracking-wider">
                    Timing and Access
                  </span>
                  <Image src={!showTiming ? "/chevron.svg" : "/chevron_down.svg"} width={20} height={20} alt="Arrow"></Image>
                </div>
                {/* {
                  showTiming && */}
                <div ref={ref3} className="font-bold text-base overflow-hidden px-6 transition-all ease-in-out delay-0 duration-500" style={{ "height": !showTiming ? 0 : heightRef3 }}>
                  <div className="flex flex-col md:flex-row gap-5 mb-2">
                    <div className="w-full">
                      What are the preferred days for cleaning?
                      <select name="preferred_days" id="" className="mt-2 p-3 w-full rounded-xl border-r-[15px] border-transparent font-normal px-3">
                        <option value="Weekdays" selected>Weekdays</option>
                        <option value="Weekends">Weekends</option>
                        <option disabled>_________</option>
                        <option value="Mondays">Mondays</option>
                        <option value="Tuesdays">Tuesdays</option>
                        <option value="Wednesdays">Wednesdays</option>
                        <option value="Thursdays">Thursdays</option>
                        <option value="Fridays">Fridays</option>
                        <option value="Saturdays">Saturdays</option>
                        <option disabled>_________</option>
                        <option value="Any">Any</option>
                      </select>
                    </div>
                    <div className="w-full">
                      What are the preferred times for cleaning?
                      <select name="preferred_times" id="" className="mt-2 p-3 w-full rounded-xl border-r-[15px] border-transparent font-normal px-3">
                        <option value="Mornings">Mornings</option>
                        <option value="Afternoons">Afternoons</option>
                        <option value="Evenings">Evenings</option>
                      </select></div>
                  </div>

                  <input type="text" name="user_name" className="px-4 py-3 font-light rounded-full mt-1 mb-4 w-full" placeholder="Any specific days or times not mentioned above..." />

                  Will someone be present during the cleaning, or will you provide keys/access codes?
                  <input type="text" name="access_codes" className="px-4 py-3 font-light rounded-full mt-2 w-full" placeholder="Keys and access codes will be provided..." />
                  <br /><br />

                  {/* Are there any security systems or pets we need to be aware of?
                    <input type="text" name="user_name" className="px-4 py-3 font-light rounded-full mt-2 w-full" placeholder="Preferred cleaning products or methods..." />
                    <br /><br /> */}

                </div>
                {/* } */}


                <div onClick={() => { setShowSpecialReqs(!showSpecialReqs) }} className="z-[4] text-xs items-center flex flex-row justify-between w-full text-center hover:cursor-pointer  text-[#C41C94] bg-[#ffade8] px-6 py-4 mb-4 uppercase rounded-full">
                  <span className="font-bold">
                    IV
                  </span>
                  <span className="font-medium tracking-wider">
                    Special Requests
                  </span>
                  <Image src={!showSpecialReqs ? "/chevron.svg" : "/chevron_down.svg"} width={20} height={20} alt="Arrow"></Image>
                </div>
                {/* {
                  showSpecialReqs && */}
                <div ref={ref4} className="font-nold text-base overflow-hidden px-6 transition-all ease-in-out delay-0 duration-500" style={{ "height": !showSpecialReqs ? 0 : heightRef4 }}>
                  <div>
                    Are there any priority tasks or areas for you?
                  </div>
                  <input type="text" name="priority_tasks" className="px-4 py-3 font-light rounded-full mt-2 w-full" placeholder="Areas that require special attention..." />
                  <br /><br />
                  <div className="">
                    Are there any other additional services required, not previously mentioned?
                  </div>
                  <input type="text" name="other_reqs" className="px-4 py-3 font-light rounded-full mt-2 w-full" placeholder="Any additional services or details..." />
                  <br /><br />

                </div>
                {/* } */}

                <div onClick={() => { setShowAdditional(!showAdditional) }} className="z-[5] text-xs items-center flex flex-row justify-between w-full text-center hover:cursor-pointer  text-[#C41C94] bg-[#ffade8] px-6 py-4 mb-4 uppercase rounded-full">
                  <span className="font-bold">
                    V
                  </span>
                  <span className="font-medium tracking-wider">
                    Additional Considerations
                  </span>
                  <Image src={!showAdditional ? "/chevron.svg" : "/chevron_down.svg"} width={20} height={20} alt="Arrow"></Image>
                </div>
                {/* {
                  showAdditional && */}
                <div ref={ref5} className="font-bold text-base overflow-hidden px-6 transition-all ease-in-out delay-0 duration-500" style={{ "height": !showAdditional ? 0 : heightRef5 }}>
                  {/* <div className="flex flex-col md:flex-row gap-5 ">
                    <div className="w-full">
                      How did you hear about us? <br />
                      <select name="discovery" id="" className="mt-2 p-3 w-full rounded-xl border-r-[15px] border-transparent px-3">
                        <option value="Instagram">Instagram</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Google">Google</option>
                        <option value="Friend">Friend</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <br /> */}

                  <div className="flex flex-col md:flex-row gap-5 mb-2">
                    <div className="w-full">
                      <div className="w-full">
                        How did you hear about us? <br />
                        <select name="referred_by" id="" className="mt-2 p-3 w-full rounded-xl border-r-[15px] border-transparent px-3">
                          <option value="Blank"></option>
                          <option value="Instagram">Instagram</option>
                          <option value="Facebook">Facebook</option>
                          <option value="Google">Google</option>
                          <option value="Friend">Friend</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="w-full">
                      Can we share photos of your space on social media?
                      <select name="permission" id="" className="mt-2 p-3 w-full rounded-xl border-r-[15px] border-transparent px-3">
                        <option value="Blank"></option>
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                      </select>
                    </div>
                  </div>


                </div>
                {/* } */}
                {/* <hr /> */}
                {/* <br /> */}

              </div>

            </div>
            <div className="text-sm font-normal mt-6 text-center w-full">
              The information sent through this online form is NOT secure.
              If you would like to discuss any related matter in private, please contact us directly.
            </div>

            {formStatus === 'error' && (
              <p className="mt-4 text-sm text-center text-red-700" role="alert">
                Something went wrong. Please try again or call us at (510) 603-7272.
              </p>
            )}

            <button
              type="submit"
              disabled={formStatus === 'loading'}
              className="mt-6 py-3 font-medium transition-all ease-in-out duration-200 shadow-md hover:shadow-2xl border-0 bg-[#c41c94] hover:bg-[#ffade8] w-full text-white rounded-full p-2 px-6 disabled:opacity-70 disabled:cursor-wait"
            >
              {formStatus === 'loading' ? 'Sending…' : 'Complete Questionnaire'}
            </button>

          </form>
          )}
        </div>
      </div>

      <Footer />
    </main >
  );
}
