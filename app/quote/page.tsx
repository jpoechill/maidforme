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

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs.sendForm('service_f6v1078', 'template_du93o8p', form.current, '9_1cvi1qcNyiNlqSo')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });

      console.log(form.current);
      alert('Message sent successfully!')
      form.current.reset()
      scrolltoHash('top')
    }
  };

  return (
    <main id="top" className="absolute top-0 w-full max-h-screen x-lg:snap-y x-lg:snap-mandatory" style={{ scrollBehavior: 'smooth' }}>
      <Sticky />


      <div className="animate-[fade-me-in_.5s_ease-in-out] snap-center text-center bg-[#e6f6ff] pt-[100px] bg-repeat-custom  flex md:px-5 pb-[50px] justify-center">
        <div id="contact-us" className="py-5 lg:min-w-[1200px]">
          <div className="p-5 md:p-20 md:py-[40px] bg-[#fff4fd] shadow-lg md:rounded-2xl max-w-[800px] lg:max-w-[1200px]">
            <div className="text-left p-0 mb-2">
              <h1>
                Request a Quote
              </h1>
            </div>
            <div className="text-left text-base font-light">
              {/* Allow us to get to know you so we can precisely meet your needs!  */}
              Please share some information about your requirements and preferences. For general rates, check out our <Link href="https://www.maidforme.co/pricing">General Rates</Link> page.
              <br /><br />
              {/* <br></br><br />
              We look forward to assisting you! */}
            </div>
            <form ref={form} onSubmit={sendEmail}>
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
                      <input type="text" name="user_name" className="px-4 py-3 font-light rounded-full mt-2 w-full" placeholder="Jane Smith" />
                    </div>
                    <div className="w-full">
                      Email/Phone<span className="text-[#C41C94]">*</span> <br />
                      <input type="text" name="user_phone" className="px-5 py-3 font-light rounded-full mt-2 w-full" placeholder="email@gmail.com" /> <br /><br />
                    </div>
                  </div>

                  Can you provide the address (or location) of the property to be cleaned?
                  <input type="text" name="user_name" className="px-4 py-3 font-light rounded-full mt-2 w-full" placeholder="An address to your location or property..." />
                  <br /><br />


                  <div className="flex flex-col md:flex-row gap-5 mb-5">
                    <div className="w-full">
                      What is the nature of this property?
                      <select name="discovery" id="" className="mt-2 p-3 w-full rounded-xl border-r-[15px] border-transparent font-normal px-3">
                        <option value="" selected>Residential</option>
                        <option value="">Office</option>
                        <option value="">Commercial</option>
                      </select>
                    </div>
                    <div className="w-full">
                      How often do you require cleaning services?
                      <select name="discovery" id="" className="mt-2 p-3 w-full rounded-xl border-r-[15px] border-transparent font-normal px-3">
                        <option value="">Weekly</option>
                        <option value="" selected>Bi-weekly</option>
                        <option value="">Monthly</option>
                        <option value="">One-time</option>
                      </select>
                    </div>
                  </div>

                  Do you require an additional deep cleaning?
                  <select name="discovery" id="" className="mt-2 mb-6 p-3 w-full rounded-xl border-r-[15px] border-transparent font-normal px-3">
                    <option value=""></option>
                    <option value="">No</option>
                    <option value="">Yes</option>
                  </select>

                  <div className="flex flex-col md:flex-row gap-5 mb-6">
                    <div className="w-full">
                      What is the size of the property in square footage? <br />
                      <select name="discovery" id="" className="mt-2 p-3 w-full rounded-xl border-r-[15px] border-transparent font-normal px-3">
                        <option value="">500 sq. ft</option>
                        <option value="">1000 sq. ft</option>
                        <option value="" selected>1500 sq. ft</option>
                        <option value="">2000 sq. ft</option>
                        <option value="">3000 sq. ft</option>
                        <option value="">4000 sq. ft</option>
                        <option value="">5000+ sq. ft</option>
                      </select>
                    </div>
                    <div className="w-full">
                      How many rooms does the property have? <br />
                      <select name="discovery" id="" className="mt-2 p-3 w-full rounded-xl border-r-[15px] border-transparent font-normal px-3">
                        <option value=""></option>
                        <option value="">Studio</option>
                        <option value="">0</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">More than 5</option>
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
                      <input type="checkbox" className="mr-3" name="" id="kitchen" />
                      <label htmlFor="kitchen">Kitchen</label>
                    </div>

                    <div>
                      <input type="checkbox" className="mr-3" name="" id="livingarea" />
                      <label htmlFor="livingarea">Living Area</label>
                    </div>

                    <div>
                      <input type="checkbox" className="mr-3" name="" id="bedrooms" />
                      <label htmlFor="bedrooms">Bedrooms</label>
                    </div>

                    <div>
                      <input type="checkbox" className="mr-3" name="" id="officespace" />
                      <label htmlFor="officespace">Office Spaces</label>
                    </div>

                  </div>

                  <input type="text" name="user_name" className="px-4 py-3 font-light rounded-full mt-2 w-full" placeholder="Other specific areas that may need cleaning..." />
                  <br /><br />

                  Are there any areas or items that require special attention or are off-limits?
                  <input type="text" name="user_name" className="px-4 py-3 font-light rounded-full mt-2 w-full" placeholder="Areas that require special attention or may be off limits..." />
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
                      <select name="discovery" id="" className="mt-2 p-3 w-full rounded-xl border-r-[15px] border-transparent font-normal px-3">
                        <option value="" selected>Weekdays</option>
                        <option value="">Weekends</option>
                        <option disabled>_________</option>
                        <option value="">Mondays</option>
                        <option value="">Tuesdays</option>
                        <option value="">Wednesdays</option>
                        <option value="">Thursdays</option>
                        <option value="">Fridays</option>
                        <option value="">Saturdays</option>
                        <option disabled>_________</option>
                        <option value="">Any</option>
                      </select>
                    </div>
                    <div className="w-full">
                      What are the preferred times for cleaning?
                      <select name="discovery" id="" className="mt-2 p-3 w-full rounded-xl border-r-[15px] border-transparent font-normal px-3">
                        <option value="">Mornings</option>
                        <option value="">Afternoons</option>
                        <option value="">Evenings</option>
                      </select></div>
                  </div>

                  <input type="text" name="user_name" className="px-4 py-3 font-light rounded-full mt-1 mb-4 w-full" placeholder="Any specific days or times not mentioned above..." />

                  Will someone be present during the cleaning, or will you provide keys/access codes?
                  <input type="text" name="user_name" className="px-4 py-3 font-light rounded-full mt-2 w-full" placeholder="Keys and access codes will be provided..." />
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
                  <input type="text" name="user_name" className="px-4 py-3 font-light rounded-full mt-2 w-full" placeholder="Areas that require special attention..." />
                  <br /><br />
                  <div className="">
                    Are there any other additional services required, not previously mentioned?
                  </div>
                  <input type="text" name="user_name" className="px-4 py-3 font-light rounded-full mt-2 w-full" placeholder="Any additional services or details..." />
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
                        <select name="discovery" id="" className="mt-2 p-3 w-full rounded-xl border-r-[15px] border-transparent px-3">
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
                      <select name="discovery" id="" className="mt-2 p-3 w-full rounded-xl border-r-[15px] border-transparent px-3">
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

            </form>
          </div>
          <div className="text-sm font-normal mt-6 text-center w-full">
            The information sent through this online form is NOT secure.
            If you would like to discuss any related matter in private, please contact us directly.
          </div>


          <button className="mt-6 py-3 font-medium transition-all ease-in-out duration-200 shadow-md hover:shadow-2xl border-0 bg-[#c41c94] hover:bg-[#ffade8] w-full text-white rounded-full p-2 px-6">
            Complete Questionnaire
          </button>
        </div>
      </div>

      <Footer />
    </main >
  );
}
