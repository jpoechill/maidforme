'use client'

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';


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
      alert('Message sent successfully!')
      form.current.reset()
      scrolltoHash('top')
    }
  };

  return (
    <main id="top">
      <div className="fixed bg-[#fff5fe] w-full z-10 text-black px-5 md:px-10 py-6 top-0 flex flex-row items-center justify-between h-[80px]">
        <div>
          <Image onClick={() => scrolltoHash('top')} className="cursor-pointer hidden lg:block" src="/maidforme.png" alt="logo" width={220} height={60}></Image>
          <Image onClick={() => scrolltoHash('top')} className="cursor-pointer inline lg:hidden" src="/maidforme_logo_sml.png" alt="logo" width={50} height={50}></Image>
        </div>
        <div className="hidden md:flex flex-row text-[16px] text-[#C41C94] items-center font-medium gap-10">
          <div>
            <span onClick={() => scrolltoHash('about-us')} className="hover:underline cursor-pointer">About Us</span>
          </div>
          <div>
            <span onClick={() => scrolltoHash('our-services')} className="hover:underline cursor-pointer">Our Services</span>
          </div>
          <div>
            <span onClick={() => scrolltoHash('testimonials')} className="hover:underline cursor-pointer">Testimonials</span>
          </div>
          <div>
            <span onClick={() => scrolltoHash('gallery')} className="hover:underline cursor-pointer">Gallery</span>
          </div>
          <div>
            <span onClick={() => scrolltoHash('contact-us')} className="hover:underline cursor-pointer">Contact Us</span>
          </div>
          <a href="tel:5106037272">
            <button className="bg-[#C41C94] w-full text-white rounded p-3 px-4">
              Call Now
            </button>
          </a>
        </div>
        <div className="cursor-pointer md:hidden" onClick={() => { setShowMenu(!showMenu) }}>
          <Image src="/hamburger_icon.svg" className="fill-[#FFFFFF]" alt="logo" width={30} height={30}></Image>
        </div>
      </div>

      {/* Mobile Menu */}
      {
        showMenu &&
        <div className="fixed md:hidden shadow-sm pt-[100px] pb-[30px] px-10 z-[2]  w-full  bg-[#fbfefe]">
          <div className="flex flex-col text-[16px] text-[#C41C94] font-medium gap-0 mt-1 lg:mt-2">
            <div onClick={() => { scrolltoHash('about-us-mobile'); setShowMenu(false) }} className="w-100 pb-5 border-b-2 hover:underline cursor-pointer">
              <span>About Us</span>
            </div> <br />
            <div onClick={() => { scrolltoHash('our-services-mobile'); setShowMenu(false) }} className="w-100 pb-5 border-b-2 hover:underline cursor-pointer">
              <span>Our Services</span>
            </div> <br />
            <div onClick={() => { scrolltoHash('testimonials'); setShowMenu(false) }} className="w-100 pb-5 border-b-2 hover:underline cursor-pointer">
              <span>Testimonials</span>
            </div> <br />
            <div onClick={() => { scrolltoHash('gallery'); setShowMenu(false) }} className="w-100 pb-5 border-b-2 hover:underline cursor-pointer">
              <span>Gallery</span>
            </div> <br />
            <div onClick={() => { scrolltoHash('contact-us'); setShowMenu(false) }} className="w-100 pb-0  hover:underline cursor-pointer">
              <span>Contact Us</span>
            </div> <br />
            <div onClick={() => { setShowMenu(false) }} className="w-full bg-[#C41C94] text-white text-center p-5 rounded-2xl hover:underline cursor-pointer">
              <span>Call Now</span>
            </div>
          </div>
        </div>
      }

      <div className="video-container mt-10">
        <video autoPlay muted loop>
          <source src="vaccuum.mov" type="video/mp4" />
        </video>
        <div className="caption h-full text-white">
          <div className="h-full bg-black bg-opacity-40 px-5 md:px-10 lg:px-20 flex flex-col justify-center">
            <div className="text-[40px] font-bold">
              Professional Cleaning Solutions
            </div>
            <div>
              Experience top-notch dusting, sanitizing, and vacuuming services with our professional cleaning team.
            </div>
            <div>
              <button className="bg-[#fff5fe] rounded p-3 px-5 mt-4">
                <span onClick={() => scrolltoHash('contact-us')} className="cursor-pointer text-[#C41C94] font-medium">Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="about-us" className="grid grid-cols-6 my-20 gap-10 py-[50px] px-5 md:px-10 lg:px-20">
        <div id="about-us-mobile" className="col-span-6 pt-5 lg:col-span-2 justify-center flex">
          <Image src="/thumb-04.png" className="rounded-xl w-full" alt="logo" width={580} height={10}></Image>
        </div>
        <div className="col-span-6 lg:col-span-4">
          <div className="text-[40px] font-bold mb-8">
            Spotless Excellence
          </div>
          <div>
            Our cleaning services are designed to meet the highest standards of hygiene and cleanliness. We understand that every space has unique cleaning needs, and we tailor our services to meet those needs.
            {/* <br /><br />
            Our team of professional cleaners is trained to handle a variety of cleaning tasks, from basic dusting and vacuuming to deep cleaning and sanitization. */}
            <br /><br />
            Our goal is to provide you with a clean, healthy, and comfortable space that you can be proud of. We are committed to delivering exceptional cleaning services that exceed your expectations.
          </div>
        </div>
      </div>

      <div id="our-services" className="bg-[#fff5fe] py-[75px] pb-10 lg:pt-10 lg:pb-20 px-5 md:px-10 lg:px-[150px] flex flex-col">
        <div id="our-services-mobile" className="text-[40px] text-center pt-10 font-bold mb-4">
          Our Services
        </div>
        <div className="flex justify-center mb-10">
          <div className="flex max-w-[600px]  text-center">
            We provide top-notch cleaning services tailored to meet the unique needs of businesses in the Cleaning Services industry. Our team of professionals is committed to delivering exceptional results.
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[50px] justify-between w-full lg:mt-10">
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
        </div>
      </div>


      <div id="testimonials" className="text-center flex px-5 md:px-20 py-20 justify-center">
        <div id="testimonials-mobile" className=" pt-5 pb-10 max-w-[500px] lg:max-w-[1200px]">
          <div className="uppercase font-bold text-[#C41C94]">
            Testimonials
          </div>
          <div className="text-[40px] text-center font-bold mb-10">
            Voices of Satisfied Customers
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="bg-[#F9FAFB] rounded-xl text-sm p-7 text-left">
                Maid For Me has been an absolute lifesaver! Their attention to detail and thoroughness in cleaning our home is unmatched. We&apos;ve tried other cleaning services in the past, but Maid For Me truly stands out. Their professionalism and reliability make them our go-to choice every time.
                <div className="flex flex-row items-center mt-7">
                  <Image src="/avatars/female-01.jpeg" alt="" className="rounded-full" width={60} height={60} />
                  <span className="font-sans font-bold text-sm pl-5">
                    Sarah M.
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-[#F9FAFB] rounded-xl text-sm p-7 text-left">
                For busy professionals like me, this cleaning service is a lifesaver. Trustworthy, reliable, and they always leave my home sparkling clean.
                <div className="flex flex-row items-center mt-7">
                  <Image src="/avatars/male-02.jpeg" alt="" className="rounded-full" width={60} height={60} />
                  <span className="font-sans font-bold text-sm pl-5">
                    John D.
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-[#F9FAFB] rounded-xl text-sm p-7 text-left">
                I&apos;ve been a loyal customer of Maid For Me for over a year now, and I couldn&apos;t be happier with their service. Whether it&apos;s a routine cleaning or a deep clean before hosting guests, they consistently deliver exceptional results. I appreciate their flexibility and dedication to making my home shine!
                <div className="flex flex-row items-center mt-7">
                  <Image src="/avatars/female-03.jpeg" alt="" className="rounded-full" width={60} height={60} />
                  <span className="font-sans font-bold text-sm pl-5">
                    Emily R.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="location" className="text-center bg-[#fff5fe] gap-20 flex flex-col md:flex-row py-[120px] justify-center">
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div id="location-mobile" className="rounded-2xl max-w-[600px] overflow-hidden shadow-xl border">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100878.24803177382!2d-122.39450528438896!3d37.80308439911126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f9b5ea6210a07%3A0xa2950f4ff149c910!2sSan%20Francisco%20Bay!5e0!3m2!1sen!2sus!4v1711602621487!5m2!1sen!2sus" width={450} height={450} loading="lazy"></iframe>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center pt-0 p-10 md:p-0 md:justify-left text-left">
          <div className="max-w-[500px] leading-7">
            <span className="text-4xl font-bold">Find Us Here! </span>
            <br /><br />
            Elevate your home&apos;s cleanliness with our specialized cleaning services tailored for the vibrant San Francisco Bay Area. Our experienced team employs eco-friendly products and meticulous techniques to ensure your space shines with pristine perfection. Let us handle the cleaning, so you can fully embrace the beauty and energy of Bay Area living!</div>
        </div>
      </div>

      {/* <div className="text-center m-20 border-2 rounded-md">
        <div className="h-min overflow-hidden rounded-md">
          <img className="hover:scale-[1.05] transition-all duration-500 cursor-pointer" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        </div>
        <h3 className="text-3xl py-4">Our Mission</h3>
        <span className="text-lg text-gray-700"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo earum quos voluptatum tempore quis exercitationem, ad officiis dolorum temporibus veritatis quod itaque repellendus molestiae culpa laboriosam, cupiditate voluptate. Eius, placeat! </span>
      </div> */}

      <div className="text-center bg-white flex-col flex mb-10 px-5 pt-10 pb-20 justify-center">
        <div id="gallery" className="text-[40px] text-center pt-10 font-bold mb-4">
          Photo Gallery
        </div>
        <div className="flex justify-center mb-10">
          <div className="flex max-w-[750px] px-10 text-center">
            Discover spotless perfection in our photo gallery. See how we transform spaces with expert cleaning. Let the images inspire your home&apos;s next level of cleanliness.
          </div>
        </div>
        <div className="flex flex-row justify-center hover:cursor-pointer gap-3">
          <div className="overflow-hidden h-[200px] rounded-xl">
            <Image src="/gallery/gallery_01.jpg" className="hover:scale-[1.05] h-full w-full transition-all duration-500 cursor-pointer grayscale hover:grayscale-0" alt="Gallery 01" height={500} width={500} />
          </div>
          <div className="overflow-hidden h-[200px] rounded-xl">
            <Image src="/gallery/gallery_05.jpg" className="hover:scale-[1.05] h-full w-full transition-all duration-500 cursor-pointer grayscale hover:grayscale-0" alt="Gallery 01" height={200} width={500} />
          </div>
          <div className="overflow-hidden hidden md:block h-[200px] rounded-xl">
            <Image src="/gallery/gallery_10.jpg" className="hover:scale-[1.05] h-full w-full transition-all duration-500 cursor-pointer grayscale hover:grayscale-0" alt="Gallery 01" height={200} width={500} />
          </div>
        </div>
        <div className="flex flex-row justify-center hover:cursor-pointer gap-3 mt-3">
          <div className="overflow-hidden h-[200px] rounded-xl">
            <Image src="/gallery/gallery_02.jpg" className="hover:scale-[1.05] h-full w-full transition-all duration-500 cursor-pointer grayscale hover:grayscale-0" alt="Gallery 01" height={200} width={500} />
          </div>
          <div className="overflow-hidden h-[200px] rounded-xl">
            <Image src="/gallery/gallery_04.jpg" className="hover:scale-[1.05] h-full w-full transition-all duration-500 cursor-pointer grayscale hover:grayscale-0" alt="Gallery 01" height={200} width={500} />
          </div>
          <div className="overflow-hidden hidden md:block h-[200px] rounded-xl">
            <Image src="/gallery/gallery_03.jpg" className="hover:scale-[1.05] h-full w-full transition-all duration-500 cursor-pointer grayscale hover:grayscale-0" alt="Gallery 01" height={200} width={500} />
          </div>
          <div className="overflow-hidden hidden md:block h-[200px] rounded-xl">
            <Image src="/gallery/gallery_06.jpg" className="hover:scale-[1.05] h-full w-full transition-all duration-500 cursor-pointer grayscale hover:grayscale-0" alt="Gallery 01" height={200} width={500} />
          </div>
        </div>
        {/* <div className="flex flex-row justify-center hover:cursor-pointer gap-3 mt-3">
          <div className="overflow-hidden h-[200px] rounded-xl">
            <Image src="/gallery/gallery_05.jpg" className="hover:scale-[1.05] h-full w-full transition-all duration-500 cursor-pointer grayscale hover:grayscale-0" alt="Gallery 01" height={500} width={500} />
          </div>
          <div className="overflow-hidden h-[200px] rounded-xl">
            <Image src="/gallery/gallery_06.jpg" className="hover:scale-[1.05] h-full w-full transition-all duration-500 cursor-pointer grayscale hover:grayscale-0" alt="Gallery 01" height={200} width={500} />
          </div>
          <div className="overflow-hidden h-[200px] rounded-xl">
            <Image src="/gallery/gallery_07.jpg" className="hover:scale-[1.05] h-full w-full transition-all duration-500 cursor-pointer grayscale hover:grayscale-0" alt="Gallery 01" height={200} width={500} />
          </div>
          <div className="overflow-hidden h-[200px] rounded-xl">
            <Image src="/gallery/gallery_08.jpg" className="hover:scale-[1.05] h-full w-full transition-all duration-500 cursor-pointer grayscale hover:grayscale-0" alt="Gallery 01" height={200} width={500} />
          </div>
        </div> */}
      </div>

      <div className="text-center bg-[#F9FAFB] flex pt-20 pb-20 justify-center">
        <div id="contact-us" className="pt-10 pb-10 max-w-[500px] lg:max-w-[900px]">
          <div className="text-[40px] text-center font-bold mb-4">
            Reach Out to Us for <br className="hidden md:block" /> Exceptional Cleaning Services
          </div>
          <div className="px-5">
            Don&apos;t hesitate to contact us for top-notch cleaning services. <br className="hidden md:block" />
            Our team is ready to provide you with a spotless environment.
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="text-sm font-bold mt-[50px] text-left px-5">
              Name<span className="text-[#C41C94]">*</span> <br />
              <input type="text" name="user_name" className="border px-3 py-2 border-[#111111] rounded-lg mt-2 w-full lg:min-w-[500px]" /> <br /><br />
              Email<span className="text-[#C41C94]">*</span> <br />
              <input type="text" name="user_email" className="border px-3 py-2 border-[#111111] rounded-lg mt-2 w-full lg:min-w-[500px]" /> <br /><br />
              Phone Number<span className="text-[#C41C94]">*</span> <br />
              <input type="text" name="user_phone" className="border px-3 py-2 border-[#111111] rounded-lg mt-2 w-full lg:min-w-[500px]" /> <br /><br />
              Message<span className="text-[#C41C94]">*</span> <br />
              <textarea name="user_message" className="border px-3 w-full border-[#111111] py-2 rounded-lg mt-2 w-full lg:min-w-[500px]" /> <br /><br />
              Service Type
              <div className="flex font-normal flex-row justify-start gap-3 md:gap-5 mt-2">
                <div>
                  <input type="checkbox" id="service_type" name="service_type" value="commercial" />
                  <label htmlFor="service_type"> Commercial Cleaning</label>
                </div>
                <div>
                  <input type="checkbox" id="service_type" name="service_type" value="residential" />
                  <label htmlFor="service_type"> Residential Cleaning</label>
                </div>
                <div>
                  <input type="checkbox" id="service_type" name="service_type" value="deep cleaning" />
                  <label htmlFor="service_type"> Deep Cleaning</label>
                </div>
              </div>
              <button className="bg-[#fff5fe] w-full shadow-md text-[#C41C94] rounded p-3 mt-6">
                Let&apos;s talk!
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="bg-[#fff5fe] text-black text-[14px] py-12 lg:py-15 px-5 md:px-10">
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-6 lg:col-span-3 mb-5">

            <Image onClick={() => scrolltoHash('top')} className="cursor-pointer mb-3" src="/maidforme.png" alt="logo" width={220} height={60}></Image>
            <span className="text-[16px] text-[#C41C94]">
              Sparkling cleanliness at your service, anytime, anywhere!
            </span>
            <div className="flex flex-row gap-5 mt-3">
              {/* <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path></svg> */}
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path></svg>
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" /></svg>
            </div>
          </div>
          <div className="mt-5 lg:mt-0 col-span-3 lg:col-span-1">
            <span className="font-bold">
              Menu
            </span>
            <br /><br />

            <span onClick={() => scrolltoHash('about-us')} className="hover:underline cursor-pointer text-[#C41C94]">About Us</span><br /><br />
            <span onClick={() => scrolltoHash('our-services')} className="hover:underline cursor-pointer text-[#C41C94]">Our Services</span><br /><br />
            <span onClick={() => scrolltoHash('contact-us')} className="hover:underline cursor-pointer text-[#C41C94]">Contact Us</span>
          </div>
          <div className="mt-5 lg:mt-0 col-span-3 lg:col-span-1">
            <span className="font-bold">
              Contact Us
            </span>
            <br /><br />
            <span className="text-[#C41C94]">hello@maidforme.co</span>
            <br /><br />
            <a href="tel:5106037272">
              <span className="text-[#C41C94]">510-603-7272</span>
            </a>
          </div>
        </div>
        <div className="mt-10 pt-10 text-sm">
          2024 © Maid For Me. All rights reserved.
        </div>
      </div>
    </main>
  );
}
