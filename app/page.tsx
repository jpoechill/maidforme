import Image from "next/image";

export default function Home() {
  return (
    // B58EBC
    // f2d7e8
    <main>
      <div className="bg-[#ffd8fc] sticky top-0 z-10 text-black px-10 py-6 flex flex-col lg:flex-row justify-between">
        <div>
          <Image src="/maidforme.svg" alt="logo" width={220} height={60}></Image>
        </div>
        <div className="flex flex-row text-[16px] font-medium gap-10 mt-5 lg:mt-1">
          <div>
            About Us
          </div>
          <div>
            Our Services
          </div>
          <div>
            Contact Us
          </div>
        </div>
      </div>

      <div className="video-container">
        <video autoPlay muted loop>
          <source src="vaccuum.mov" type="video/mp4" />
        </video>
        <div className="caption h-full text-white">
          <div className="h-full bg-black bg-opacity-40 px-8 lg:px-20 flex flex-col justify-center">
            <div className="text-[40px] font-bold">
              Professional Cleaning Solutions
            </div>
            <div>
              Experience top-notch dusting, sanitizing, and vacuuming services with our professional cleaning team.
            </div>
            <div>
              <button className="bg-[#ffd8fc] text-black rounded p-3 mt-4">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-6 my-10 gap-10 py-20 px-10 lg:px-20">
        <div className="col-span-6 lg:col-span-2 justify-center flex">
          <Image src="/thumb-04.png" className="rounded-xl" alt="logo" width={580} height={10}></Image>
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

      <div className="bg-[#ECF8F7] py-[75px] pb-10 lg:py-20 px-10 lg:px-[150px] flex flex-col">
        <div className="text-[40px] text-center font-bold mb-4">
          Our Services
        </div>
        <div className="flex justify-center mb-10">
          <div className="flex max-w-[600px]  text-center">
            We provide top-notch cleaning services tailored to meet the unique needs of businesses in the Cleaning Services industry. Our team of professionals is committed to delivering exceptional results.
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[50px] justify-between w-full lg:mt-10">
          <div className="w-full">
            <Image src="/thumb-05.png" className="rounded-xl" alt="thumb" width="400" height="400" />
            <div className="min-h-[150px] text-[14px]">
              <div className="font-bold text-[16px] my-5">Commercial Cleaning</div>
              Our Commercial Cleaning service ensures a spotless, well-maintained business environment. We use eco-friendly products and advanced cleaning techniques for optimal results.
            </div>
          </div>
          <div className="w-full">
            <Image src="/thumb-02.png" className="rounded-xl" alt="thumb" width="400" height="400" />
            <div className="min-h-[150px] text-[14px]">
              <div className="font-bold text-[16px] my-5">Residential Cleaning</div>
              Our Residential Cleaning service offers thorough, customized cleaning solutions for homes. We prioritize your comfort and satisfaction, ensuring every corner is spotless.
            </div>
          </div>
          <div className="w-full">
            <Image src="/thumb-03.png" className="rounded-xl" alt="thumb" width="400" height="400" />
            <div className="min-h-[150px] text-[14px]">
              <div className="font-bold text-[16px] my-5">Deep Cleaning</div>
              Our Deep Cleaning service goes beyond the surface, targeting hard-to-reach areas for a comprehensive clean. We leave no stone unturned, ensuring your space is pristine.
            </div>
          </div>
        </div>
      </div>
      <div className="text-center flex py-20 justify-center">
        <div className="max-w-[500px] lg:max-w-[900px]">
          <div className="text-[40px] text-center font-bold mb-4">
            Reach Out to Us for <br /> Exceptional Cleaning Services
          </div>
          <div>
            Don&apos;t hesitate to contact us for top-notch cleaning services. <br />
            Our team is ready to provide you with a spotless environment.
          </div>
          <div className="mt-[50px] text-left px-5">
            Name* <br />
            <input type="text" className="border px-3 py-2 border-[#111111] rounded-lg mt-2 w-full lg:min-w-[500px]" /> <br /><br />
            Email* <br />
            <input type="text" className="border px-3 py-2 border-[#111111] rounded-lg mt-2 w-full lg:min-w-[500px]" /> <br /><br />
            Phone Number* <br />
            <input type="text" className="border px-3 py-2 border-[#111111] rounded-lg mt-2 w-full lg:min-w-[500px]" /> <br /><br />
            Message* <br />
            <input type="Subject" className="border px-3 border-[#111111] py-2 rounded-lg mt-2 w-full lg:min-w-[500px]" /> <br /><br />
            <button className="bg-[#ECF8F7] w-full text-black rounded p-3 mt-4">
              Let&apos;s talk!
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#ffd8fc] text-black text-[14px] py-12 lg:py-15 px-5 lg:px-20">
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-6 lg:col-span-3">
            <span className="text-[16px]">
              Sparkling cleanliness at your service, anytime, anywhere!
            </span>
            <div className="flex flex-row gap-5 mt-3">
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path></svg>
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path></svg>
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" /></svg>
            </div>
          </div>
          <div className="mt-5 lg:mt-0 col-span-3 lg:col-span-1">
            <span className="font-bold">
              Menu
            </span>
            <br /><br />
            About Us <br /><br />
            Our Services <br /><br />
            Contact Us
          </div>
          <div className="mt-5 lg:mt-0 col-span-3 lg:col-span-1">
            <span className="font-bold">
              Contact Us
            </span>
            <br /><br />
            hello@maidforme.co
            <br /><br />
            510-555-1234
          </div>
        </div>
        <div className="mt-10 pt-10 text-sm">
          2024 © Maid For Me. All rights reserved.
        </div>
      </div>
    </main>
  );
}
