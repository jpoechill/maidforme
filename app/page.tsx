'use client'

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from 'react';
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
    <main id="top" className="absolute top-0 w-full max-h-screen lg:snap-y lg:snap-mandatory" style={{ scrollBehavior: 'smooth' }}>
      {/* <div className="fixed lg:hidden w-full z-10 shadow-2xl bottom-0">
        <div className="w-full bg-[#fff5fe] p-5">
          <a href="tel:5106037272">
            <button className="transition-all bg-[#C41C94] hover:bg-[#ffade8] hover:shadow-2xl rounded-3xl w-full text-white p-5 px-4">
              Call Now
            </button>
          </a>
        </div>
      </div> */}
      <Sticky />
      <div className="animate-[fade-me-in_.5s_ease-in-out] snap-center video-container min-h-screen mt-00 bg-repeat-custom">
        {/* <video autoPlay muted loop> */}
        <Image src="/cover_03.jpg" className="hidden lg:block w-full h-screen absolute index-0 object-cover bg-cover bg-no-repeat" alt="logo" width={2380} height={10}></Image>
        <Image src="/cover_03_mobile.jpg" className="lg:hidden w-full h-screen absolute index-0 object-cover bg-cover bg-no-repeat" alt="logo" width={2380} height={10}></Image>

        {/* width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  z-index: 0; */}
        {/* <source src="vaccuum.mov" type="video/mp4" /> */}
        {/* </video> */}
        <div className="caption h-full text-white">
          <div className="h-full px-5 md:px-10 lg:px-20 flex flex-col justify-end pb-10">
            <div className="lg:w-fit bg-[#fff5fe] w-full border-[#f0f0f0] border shadow-lg rounded-2xl p-4 px-8 pb-8 text-[#111]">
              <div>
                <h1 className="lg:text-left  text-center text-[30px] leading-[40px] pt-0 lg:pt-2 lg:leading-normal text-[#C41C94] lg:text-[40px]">
                  Sparkling Clean, <br className="lg:hidden" />
                  Every Time! ✨
                </h1>
                {/* <h1 className="text-[30px] leading-[40px] pt-0 lg:pt-2 lg:leading-normal lg:text-[40px]">
                  Professional Cleaning Solutions
                </h1> */}
                {/* <h1 className="t lg:hidden">
                  Professional Cleaning Solutions
                </h1> */}
              </div>
              {/* <div className="pt-2 lg:pt-4 text-lg">
                Experience top-notch dusting, sanitizing, and vacuuming services with our professional cleaning team.
              </div> */}
            </div>

            {/* <div>
              <button className="bg-[#fff5fe] rounded p-3 px-5 mt-4">
                <span onClick={() => scrolltoHash('contact-us')} className="cursor-pointer text-[#C41C94] font-medium">Contact Us</span>
              </button>
            </div> */}
          </div>
        </div>
      </div>


      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/biQQXbZNau4?si=9b9LlZrE8I34tgDp&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
      <div id="about-us" className="flex min-h-[700px] w-full bg-[#f3fafb] justify-center py-[120px] px-5 md:px-10 lg:px-20 items-center">
        <div className="max-w-[1200px] gap-10 w-full flex flex-col lg:flex-row">
          <div id="about-us-mobile" className="pt-5 justify-center">
            <Image src="/thumb-04.png" className="rounded-xl lg:min-w-[500px]" alt="logo" width={580} height={10}></Image>
          </div>
          <div className="col-span-6 lg:col-span-4 flex flex-row text-left items-center">
            <div className="">
              <div className="mb-8 text-left">
                <h1>
                  Spotless Excellence
                </h1>
              </div>
              <div className="text-lg">
                Our cleaning services are designed to meet the highest standards of hygiene and cleanliness. We understand that every space has unique cleaning needs, and we tailor our services to meet those needs.
                <br /><br />
                Our goal is to provide you with a clean, healthy, and comfortable space that you can be proud of. We are committed to delivering exceptional cleaning services that exceed your expectations.
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* 

      <div id="testimonials" className="snap-center text-center flex px-5 md:px-20 py-20 justify-center">
        <div id="testimonials-mobile" className=" pt-5 pb-5 max-w-[500px] lg:max-w-[1200px]">
          <div className="uppercase font-bold pt-20 text-[#C41C94]">
            Testimonials
          </div>
          <div className="text-center mb-10">
            <h1>
              Voices of Satisfied Customers
            </h1>
          </div>

          <div className="flex flex-row relative pb-20 gap-[50px] snap-x snap-mandatory snap-always px-[100px] max-w-full overflow-scroll">
            <div className="snap-center min-w-[350px]">
              <div className="bg-[white] border rounded-xl shadow-xl text-sm p-7 text-left">
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
            </div>
            <div className="snap-center min-w-[350px]">
              <div className="bg-[white] border border-[#f1f1f1] rounded-xl shadow-xl text-sm p-7 text-left">
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
            </div>
            <div className="snap-center min-w-[350px]">
              <div className="bg-[white] border border-[#f1f1f1] rounded-xl shadow-xl text-sm p-7 text-left">
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
            <div className="snap-center min-w-[350px]">
              <div className="bg-[white] border border-[#f1f1f1] rounded-xl shadow-xl text-sm p-7 text-left">
                Maid For Me has been an absolute lifesaver! Their attention to detail and thoroughness in cleaning our home is unmatched. We&apos;ve tried other cleaning services in the past, but Maid For Me truly stands out. Their professionalism and reliability make them our go-to choice every time.
                <div className="flex flex-row items-center mt-7">
                  <Image src="/avatars/female-01.jpeg" alt="" className="rounded-full" width={60} height={60} />
                  <span className="font-sans font-bold text-sm pl-5">
                    Sarah M.
                  </span>
                </div>
              </div>
            </div>
            <div className="snap-center min-w-[350px]">
              <div className="bg-[white] border border-[#f1f1f1] rounded-xl shadow-xl text-sm p-7 text-left">
                For busy professionals like me, this cleaning service is a lifesaver. Trustworthy, reliable, and they always leave my home sparkling clean.
                <div className="flex flex-row items-center mt-7">
                  <Image src="/avatars/male-02.jpeg" alt="" className="rounded-full" width={60} height={60} />
                  <span className="font-sans font-bold text-sm pl-5">
                    John D.
                  </span>
                </div>
              </div>
            </div>
            <div className="snap-center min-w-[350px]">
              <div className="bg-[white] border border-[#f1f1f1] rounded-xl shadow-xl text-sm p-7 text-left">
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
      </div> */}

      <div id="location" className="snap-center bg-repeat-custom text-center flex flex-col md:flex-row py-[120px] justify-center">
        <div className="py-10 w-full flex gap-10 px-10 flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div id="location-mobile" className="rounded-2xl max-w-[600px] overflow-hidden shadow-xl border">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100878.24803177382!2d-122.39450528438896!3d37.80308439911126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f9b5ea6210a07%3A0xa2950f4ff149c910!2sSan%20Francisco%20Bay!5e0!3m2!1sen!2sus!4v1711602621487!5m2!1sen!2sus" width={400} className=" md:max-w-[450px] md:max-h-[450px]" height={450} loading="lazy"></iframe>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center pt-5 md:pt-20 lg:pt-0 p-0 md:p-10 md:justify-left text-left">
            <div className="max-w-[500px] leading-7 text-lg">
              <span>
                <h1>
                  Find Us Here!
                </h1>
              </span>
              <br /><br />
              Elevate your home&apos;s cleanliness with our specialized cleaning services tailored for the vibrant San Francisco Bay Area.
              <br /><br />
              Our experienced team employs eco-friendly products and meticulous techniques to ensure your space shines with pristine perfection.
              <br /><br />
              Let us handle the cleaning, so you can fully embrace the beauty and energy of Bay Area living!</div>
          </div>
        </div>
      </div>

      {/* <div className="text-center m-20 border-2 rounded-md">
        <div className="h-min overflow-hidden rounded-md">
          <img className="hover:scale-[1.05] transition-all duration-500 cursor-pointer" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        </div>
        <h3 className="text-3xl py-4">Our Mission</h3>
        <span className="text-lg text-gray-700"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo earum quos voluptatum tempore quis exercitationem, ad officiis dolorum temporibus veritatis quod itaque repellendus molestiae culpa laboriosam, cupiditate voluptate. Eius, placeat! </span>
      </div> */}

      {/* <div className="snap-center text-center bg-white flex-col flex px-5 pt-10 pb-[120px] justify-center">
        <div id="gallery" className="text-center pt-20 mb-4">
          <h1>
            Photo Gallery
          </h1>
        </div>
        <div className="flex justify-center mb-10">
          <div className="flex max-w-[750px] px-5 w-full text-left md:text-center">
            Discover spotless perfection in our photo gallery. See how we transform spaces with expert cleaning. Let the images inspire your home&apos;s next level of cleanliness.
          </div>
        </div>
        <div className="flex flex-row justify-center hover:cursor-pointer gap-3">
          <div className="overflow-hidden md:h-[200px] rounded-xl">
            <Image src="/gallery/gallery_01.jpg" className="hover:scale-[1.05] h-full w-full transition-all duration-500 cursor-pointer grayscale hover:grayscale-0" alt="Gallery 01" height={500} width={500} />
          </div>
          <div className="overflow-hidden md:h-[200px] hidden sm:block rounded-xl">
            <Image src="/gallery/gallery_05.jpg" className="hover:scale-[1.05] h-full w-full transition-all duration-500 cursor-pointer grayscale hover:grayscale-0" alt="Gallery 01" height={200} width={500} />
          </div>
          <div className="overflow-hidden hidden md:block md:h-[200px] rounded-xl">
            <Image src="/gallery/gallery_10.jpg" className="hover:scale-[1.05] h-full w-full transition-all duration-500 cursor-pointer grayscale hover:grayscale-0" alt="Gallery 01" height={200} width={500} />
          </div>
        </div>
        <div className="flex flex-row justify-center hover:cursor-pointer gap-3 mt-3">
          <div className="overflow-hidden md:h-[200px] rounded-xl">
            <Image src="/gallery/gallery_02.jpg" className="hover:scale-[1.05] h-full w-full transition-all duration-500 cursor-pointer grayscale hover:grayscale-0" alt="Gallery 01" height={200} width={500} />
          </div>
          <div className="overflow-hidden h-[200px] hidden sm:block rounded-xl">
            <Image src="/gallery/gallery_04.jpg" className="hover:scale-[1.05] h-full w-full transition-all duration-500 cursor-pointer grayscale hover:grayscale-0" alt="Gallery 01" height={200} width={500} />
          </div>
          <div className="overflow-hidden hidden md:block h-[200px] rounded-xl">
            <Image src="/gallery/gallery_03.jpg" className="hover:scale-[1.05] h-full w-full transition-all duration-500 cursor-pointer grayscale hover:grayscale-0" alt="Gallery 01" height={200} width={500} />
          </div>
          <div className="overflow-hidden hidden md:block h-[200px] rounded-xl">
            <Image src="/gallery/gallery_06.jpg" className="hover:scale-[1.05] h-full w-full transition-all duration-500 cursor-pointer grayscale hover:grayscale-0" alt="Gallery 01" height={200} width={500} />
          </div>
        </div>
      </div> */}

      <div className="snap-center bg-[#f3fafb] text-center flex md:px-5 pt-20 pb-20 justify-center">
        <div id="contact-us" className="py-5">
          <div className="p-5 md:p-20 md:py-[70px] min-w-full bg-[#fff4fd] shadow-lg md:rounded-2xl w-full max-w-[800px] lg:min-w-[1200px]">
            <div className="text-left p-0 mb-2">
              <h1>
                Reach Out
                <span className="md:hidden">
                  !
                </span>
                <span className="hidden md:inline pl-2">
                  for Exceptional Cleaning Services
                </span>
              </h1>
            </div>
            <div className="text-left text-lg font-light">
              {/* Our team is ready to provide you with a spotless environment.  */}
              {/* <br /><br /> */}
              Don&apos;t hesitate to contact us for top-notch cleaning services.
              {/* For serious inquiries, see our <Link href="/quote">Full Quote</Link> page! */}
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
                <div></div>
                {/* <input type="text" name="user_email" className="px-5 py-3  rounded-full mt-2 w-full lg:min-w-[500px]" /> <br /><br />
              Phone Number<span className="text-[#C41C94]">*</span> <br /> */}
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
                {/* Service Type
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
                </div> */}
                <button type="submit" className="transition-all bg-[#C41C94] hover:bg-[#ffade8] hover:shadow-2xl w-full shadow-md text-white rounded-2xl p-3 mt-0">
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
