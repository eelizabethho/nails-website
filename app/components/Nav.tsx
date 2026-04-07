"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const links = [
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-[#0d0a08]/90 backdrop-blur-sm border-b border-[#c9a84c]/20">
        <Link href="/" onClick={() => setOpen(false)}>
          <Image src="/LOGO.PNG" alt="My Color Nails and Spa" width={70} height={32} className="object-contain" priority />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase text-[#c8b89a]" style={{ fontFamily: "var(--font-jost)" }}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={`hover:text-[#c9a84c] transition-colors duration-300 ${pathname === href ? "text-[#c9a84c]" : ""}`}>
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/#booking" className="px-5 py-2 border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0d0a08] transition-all duration-300">
              Book Now
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden text-[#c9a84c] relative z-60 p-2"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(prev => !prev)}
        >
          <span className={`block w-5 h-px bg-current transition-all duration-300 ${open ? "rotate-45 translate-y-1.25" : ""}`} />
          <span className={`block w-5 h-px bg-current mt-1 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-current mt-1 transition-all duration-300 ${open ? "-rotate-45 -translate-y-2.25" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu — always in DOM, shown/hidden via CSS */}
      <div
        className={`fixed inset-0 z-55 flex flex-col items-center justify-center gap-10 bg-[#0d0a08] transition-all duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-8 text-xl tracking-widest uppercase text-[#c8b89a]" style={{ fontFamily: "var(--font-jost)" }}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className={`hover:text-[#c9a84c] transition-colors duration-300 ${pathname === href ? "text-[#c9a84c]" : ""}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/#booking"
          onClick={() => setOpen(false)}
          className="px-12 py-4 border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0d0a08] transition-all duration-300 text-sm tracking-widest uppercase"
          style={{ fontFamily: "var(--font-jost)" }}
        >
          Book Now
        </Link>
      </div>
    </>
  );
}
