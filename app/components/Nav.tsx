"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => { setOpen(false); }, [pathname]);

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
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 2rem",
          backgroundColor: "rgba(13,10,8,0.95)",
          borderBottom: "1px solid rgba(201,168,76,0.2)",
        }}
      >
        <Link href="/" onClick={() => setOpen(false)}>
          <Image src="/LOGO.PNG" alt="My Color Nails and Spa" width={70} height={32} style={{ objectFit: "contain" }} priority />
        </Link>

        {/* Desktop links — hidden on mobile via Tailwind, no inline display override */}
        <ul
          className="hidden md:flex"
          style={{ listStyle: "none", alignItems: "center", gap: "2rem", margin: 0, padding: 0 }}
        >
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                style={{
                  color: pathname === href ? "#c9a84c" : "#c8b89a",
                  textDecoration: "none",
                  fontSize: "0.8rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/#booking"
              style={{
                padding: "0.5rem 1.25rem",
                border: "1px solid #c9a84c",
                color: "#c9a84c",
                textDecoration: "none",
                fontSize: "0.8rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Book Now
            </Link>
          </li>
        </ul>

        {/* Hamburger — mobile only */}
        <button
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(prev => !prev)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "0.5rem" }}
        >
          <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "#c9a84c", transition: "transform 0.3s", transform: open ? "rotate(45deg) translate(0px, 7px)" : "none" }} />
          <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "#c9a84c", marginTop: "5px", transition: "opacity 0.3s", opacity: open ? 0 : 1 }} />
          <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "#c9a84c", marginTop: "5px", transition: "transform 0.3s", transform: open ? "rotate(-45deg) translate(0px, -7px)" : "none" }} />
        </button>
      </nav>

      {/* Mobile menu overlay — only in DOM when open */}
      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 150,
            backgroundColor: "#0d0a08",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2.5rem",
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: "2.5rem" }}>
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  style={{
                    color: pathname === href ? "#c9a84c" : "#c8b89a",
                    textDecoration: "none",
                    fontSize: "1.2rem",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-jost)",
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/#booking"
            onClick={() => setOpen(false)}
            style={{
              padding: "0.9rem 2.5rem",
              border: "1px solid #c9a84c",
              color: "#c9a84c",
              textDecoration: "none",
              fontSize: "0.85rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontFamily: "var(--font-jost)",
            }}
          >
            Book Now
          </Link>
        </div>
      )}
    </>
  );
}
