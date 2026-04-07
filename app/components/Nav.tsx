"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Prevent body scroll when menu is open
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
        <Link href="/">
          <Image
            src="/LOGO.PNG"
            alt="My Color Nails and Spa"
            width={70}
            height={32}
            className="object-contain"
            priority
          />
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase text-[#c8b89a]" style={{ fontFamily: "var(--font-jost)" }}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`hover:text-[#c9a84c] transition-colors duration-300 ${pathname === href ? "text-[#c9a84c]" : ""}`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/#booking"
              className="px-5 py-2 border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0d0a08] transition-all duration-300"
            >
              Book Now
            </Link>
          </li>
        </ul>
        <button
          className="md:hidden text-[#c9a84c] z-50"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            </svg>
          ) : (
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-[#0d0a08]/95 backdrop-blur-md flex flex-col items-center justify-center gap-10 md:hidden">
          <ul className="flex flex-col items-center gap-8 text-lg tracking-widest uppercase text-[#c8b89a]" style={{ fontFamily: "var(--font-jost)" }}>
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`hover:text-[#c9a84c] transition-colors duration-300 ${pathname === href ? "text-[#c9a84c]" : ""}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/#booking"
            className="px-10 py-3 border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0d0a08] transition-all duration-300 text-sm tracking-widest uppercase"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            Book Now
          </Link>
        </div>
      )}
    </>
  );
}
