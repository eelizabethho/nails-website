import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0806] border-t border-[#c9a84c]/10 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <Link href="/">
          <Image
            src="/LOGO.PNG"
            alt="My Color Nails and Spa"
            width={90}
            height={40}
            className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </Link>
        <ul className="flex gap-8 text-xs tracking-widest uppercase text-[#c8b89a]/60" style={{ fontFamily: "var(--font-jost)" }}>
          <li><Link href="/services" className="hover:text-[#c9a84c] transition-colors duration-300">Services</Link></li>
          <li><Link href="/gallery" className="hover:text-[#c9a84c] transition-colors duration-300">Gallery</Link></li>
          <li><Link href="/about" className="hover:text-[#c9a84c] transition-colors duration-300">About</Link></li>
          <li><Link href="/#booking" className="hover:text-[#c9a84c] transition-colors duration-300">Book</Link></li>
        </ul>
        <div className="flex flex-col items-center md:items-end gap-1">
          <a href="tel:+17033303103" className="text-xs text-[#c8b89a]/50 hover:text-[#c9a84c] transition-colors duration-300" style={{ fontFamily: "var(--font-jost)" }}>
            (703) 330-3103
          </a>
          <p className="text-xs text-[#c8b89a]/30 tracking-wider text-center md:text-right" style={{ fontFamily: "var(--font-jost)" }}>
            © {new Date().getFullYear()} My Color Nails and Spa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
