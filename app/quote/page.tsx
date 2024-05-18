'use client'

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from 'react';
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

  const [showMenu, setShowMenu] = useState(false);

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


      <div className="snap-center text-center bg-[#e6f6ff] pt-[100px] bg-repeat-custom flex md:px-5 pb-[50px] justify-center">
        <div id="contact-us" className="py-5">
          <div className="p-5 md:p-20 md:py-[40px] bg-[#fff4fd] shadow-lg md:rounded-2xl max-w-[800px] lg:max-w-[1200px]">
            <div className="text-left p-0 mb-2">
              <h1>
                Direct Quote!
              </h1>
            </div>
            <div className="text-left text-md font-light">
              Don&apos;t hesitate to contact us for top-notch cleaning services.
              Our team is ready to provide you with a spotless environment.
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <div className="text-md font-bold mt-[30px] md:mt-[50px] pb-5 lg:pb-0 text-left">
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
                <div></div>
                {/* <input type="text" name="user_email" className="px-5 py-3  rounded-full mt-2 w-full lg:min-w-[500px]" /> <br /><br />
              Phone Number<span className="text-[#C41C94]">*</span> <br /> */}
                Message<span className="text-[#C41C94]">*</span> <br />
                <textarea name="user_message" className="p-5 w-full font-light rounded-3xl mt-2 lg:min-w-[500px]" placeholder="Hello, I am looking for your services!" /> <br /><br />
                Service Type
                <div className="flex font-normal flex-col md:flex-row justify-start gap-3 md:gap-5 mt-2">
                  <div>
                    <input className="cursor-pointer" type="checkbox" id="commercial" name="service_type" value="commercial" />
                    <label className="cursor-pointer" htmlFor="commercial"> Commercial Cleaning</label>
                  </div>
                  <div>
                    <input className="cursor-pointer" type="checkbox" id="residential" name="service_type" value="residential" />
                    <label className="cursor-pointer" htmlFor="residential"> Residential Cleaning</label>
                  </div>
                  <div>
                    <input className="cursor-pointer" type="checkbox" id="deep_cleaning" name="service_type" value="deep cleaning" />
                    <label className="cursor-pointer" htmlFor="deep_cleaning"> Deep Cleaning</label>
                  </div>
                </div>
                <button className="transition-all bg-[#C41C94] hover:bg-[#ffade8] hover:shadow-2xl w-full shadow-md text-white rounded-2xl p-3 mt-6">
                  Let&apos;s talk!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </main >
  );
}
