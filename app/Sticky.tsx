'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "About", hash: "about-us" },
  { label: "Services", hash: "services" },
  { label: "FAQs", hash: "faqs" },
  { label: "Testimonials", hash: "testimonials" },
] as const;

const QUOTE_HASH = "contact-us";

export default function Sticky() {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);
  const isHome = pathname === "/";

  const scrollToId = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (!element) return false;

    const yOffset = -80;
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    return true;
  };

  // Landing on homepage with a hash from another page → scroll to that section
  useEffect(() => {
    if (!isHome) return;

    const scrollFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash || hash === "top") {
        if (hash === "top") scrollToId("top");
        return;
      }

      // Retry briefly while the homepage sections mount
      let attempts = 0;
      const tryScroll = () => {
        attempts += 1;
        if (scrollToId(hash) || attempts >= 20) return;
        window.setTimeout(tryScroll, 50);
      };
      tryScroll();
    };

    scrollFromHash();
    window.addEventListener("hashchange", scrollFromHash);
    return () => window.removeEventListener("hashchange", scrollFromHash);
  }, [isHome, pathname]);

  const goToSection = (hash: string) => {
    setShowMenu(false);

    if (isHome) {
      scrollToId(hash);
      window.history.replaceState(null, "", `/#${hash}`);
      return;
    }

    // Full navigation so hashes work reliably from pages like /rates
    window.location.assign(`/#${hash}`);
  };

  return (
    <div className="fixed bg-[#fff5fe] w-full z-10">
      <div className="max-w-[1200px] mx-auto text-black px-5 md:px-10 py-6 top-0 flex flex-row items-center justify-between h-[80px]">
        <div>
          <Link
            href="/"
            aria-label="Maid For Me home"
            onClick={(e) => {
              if (isHome) {
                e.preventDefault();
                scrollToId("top");
                window.history.replaceState(null, "", "/");
              }
            }}
          >
            <Image
              className="cursor-pointer mb-1"
              src="/maidforme.png"
              alt="Maid For Me"
              width={220}
              height={60}
            />
          </Link>
        </div>

        <div className="hidden lg:flex flex-row text-[16px] text-[#C41C94] items-center font-medium gap-10">
          {NAV_LINKS.map((link) => (
            <button
              key={link.hash}
              type="button"
              onClick={() => goToSection(link.hash)}
              className="hover:underline cursor-pointer bg-transparent border-0 p-0 text-[16px] font-medium text-[#C41C94]"
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => goToSection(QUOTE_HASH)}
            className="transition-all ease-in-out duration-500 shadow-[0_25px_50px_-12px_rgb(0,0,0,0.0)] hover:shadow-[0_10px_50px_-12px_rgb(0,0,0,1)] css-selector bg-[#C41C94] text-white rounded-2xl p-2 px-6"
          >
            Get a Personal Quote
          </button>
        </div>

        <div
          className="cursor-pointer lg:hidden p-5 pr-0"
          onClick={() => setShowMenu(!showMenu)}
          role="button"
          tabIndex={0}
          aria-expanded={showMenu}
          aria-label={showMenu ? "Close menu" : "Open menu"}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setShowMenu(!showMenu);
            }
          }}
        >
          {showMenu ? (
            <Image src="/cross_icon.svg" alt="" width={23} height={23} />
          ) : (
            <Image src="/hamburger_icon.svg" alt="" width={30} height={30} />
          )}
        </div>
      </div>

      {showMenu && (
        <div className="fixed lg:hidden shadow-2xl pt-[100px] pb-[30px] px-10 z-[2] w-full bg-[#fbfefe]">
          <div className="flex flex-col text-[16px] text-[#C41C94] font-medium gap-0 mt-1 lg:mt-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.hash}
                type="button"
                onClick={() => goToSection(link.hash)}
                className="w-full pb-5 border-b-2 hover:underline cursor-pointer text-left bg-transparent border-x-0 border-t-0 text-[16px] font-medium text-[#C41C94]"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => goToSection(QUOTE_HASH)}
              className="mt-6 p-5 transition-all ease-in-out duration-500 shadow-[0_25px_50px_-12px_rgb(0,0,0,0.0)] hover:shadow-[0_10px_50px_-12px_rgb(0,0,0,1)] css-selector bg-[#C41C94] w-full text-white rounded-2xl text-center"
            >
              Get a Personal Quote
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
