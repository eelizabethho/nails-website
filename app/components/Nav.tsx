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
      {/* Nav bar — always on top (z-50) */}
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

        {/* Hamburger — z-index is fine here since nav is z-50 and menu is z-40 */}
        <button
          className="md:hidden text-[#c9a84c] p-2"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(prev => !prev)}
        >
          <span
            className="block w-5 bg-current transition-all duration-300"
            style={{
              height: "1px",
              transform: open ? "rotate(45deg) translate(0px, 6px)" : "none",
            }}
          />
          <span
            className="block w-5 bg-current mt-1.5 transition-all duration-300"
            style={{
              height: "1px",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block w-5 bg-current mt-1.5 transition-all duration-300"
            style={{
              height: "1px",
              transform: open ? "rotate(-45deg) translate(0px, -6px)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile menu — z-40 so the nav (z-50) with hamburger stays on top */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-[#0d0a08] transition-all duration-300 md:hidden ${
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
