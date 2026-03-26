import Image from "next/image";
import AnimateIn from "./components/AnimateIn";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-[#0d0a08]/90 backdrop-blur-sm border-b border-[#c9a84c]/20">
        <p
          className="text-sm tracking-[0.2em] uppercase text-[#c9a84c]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          My Color Nails &amp; Spa
        </p>
        <ul className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase text-[#c8b89a]" style={{ fontFamily: "var(--font-jost)" }}>
          <li><a href="#services" className="hover:text-[#c9a84c] transition-colors duration-300">Services</a></li>
          <li><a href="#gallery" className="hover:text-[#c9a84c] transition-colors duration-300">Gallery</a></li>
          <li><a href="#about" className="hover:text-[#c9a84c] transition-colors duration-300">About</a></li>
          <li>
            <a
              href="#booking"
              className="px-5 py-2 border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0d0a08] transition-all duration-300"
            >
              Book Now
            </a>
          </li>
        </ul>
        <button className="md:hidden text-[#c9a84c]" aria-label="Open menu">
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* ── HERO ── */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-linear-to-br from-[#0d0a08] via-[#2a1035] to-[#0d0a08]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_60%,rgba(201,168,76,0.08),transparent)] hero-glow-1" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_50%_50%_at_80%_20%,rgba(92,45,110,0.5),transparent)] hero-glow-2" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_50%_50%_at_20%_80%,rgba(107,58,42,0.25),transparent)] hero-glow-1" />

        <div className="relative z-10 max-w-3xl flex flex-col items-center gap-6">
          {/* Logo with pulse glow */}
          <div className="hero-logo mb-2">
            <Image
              src="/LOGO.PNG"
              alt="My Color Nails and Spa"
              width={220}
              height={220}
              className="object-contain"
              priority
            />
          </div>

          {/* Shimmer divider animates in */}
          <span className="hero-divider gold-divider-shimmer w-40" />

          <p className="hero-tagline text-lg text-[#c8b89a] max-w-xl leading-relaxed" style={{ fontFamily: "var(--font-jost)" }}>
            Handcrafted nail artistry in a space designed for you to feel beautiful,
            relaxed, and completely taken care of.
          </p>

          <div className="hero-btns flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href="#booking"
              className="px-8 py-3.5 bg-[#c9a84c] text-[#0d0a08] font-semibold tracking-widest uppercase text-sm hover:bg-[#e8c97a] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Book Appointment
            </a>
            <a
              href="#services"
              className="px-8 py-3.5 border border-[#c8b89a]/40 text-[#c8b89a] font-light tracking-widest uppercase text-sm hover:border-[#c9a84c] hover:text-[#c9a84c] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator absolute bottom-10 left-1/2 flex flex-col items-center gap-2 text-[#c9a84c]/50">
          <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-jost)" }}>Scroll</span>
          <div className="w-px h-10 bg-linear-to-b from-[#c9a84c]/50 to-transparent" />
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-28 px-6 bg-[#100c09]">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up" className="text-center mb-16">
            <p className="tracking-[0.35em] text-[#c9a84c] text-xs uppercase mb-3" style={{ fontFamily: "var(--font-jost)" }}>What We Offer</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#f0e8d8]" style={{ fontFamily: "var(--font-playfair)" }}>
              Our Services
            </h2>
            <span className="gold-divider-shimmer w-32 mx-auto mt-6 block" />
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "✦", title: "Manicure", desc: "Classic, gel, and spa manicures with meticulous shaping, cuticle care, and a flawless finish.", price: "From $35" },
              { icon: "✦", title: "Pedicure", desc: "Relaxing foot soaks, exfoliation, massage, and polish — a complete luxury treatment.", price: "From $50" },
              { icon: "✦", title: "Nail Art", desc: "Custom designs, hand-painted details, chrome, ombre, and everything in between.", price: "From $20 add-on" },
              { icon: "✦", title: "Acrylic & Extensions", desc: "Full sets, fills, and sculpted extensions for length and strength that lasts.", price: "From $65" },
              { icon: "✦", title: "Gel Polish", desc: "Long-lasting shine with a chip-free gel formula that keeps your nails looking fresh for weeks.", price: "From $45" },
              { icon: "✦", title: "Nail Repair", desc: "Broken nail? We fix, reinforce, and restore so you never have to sacrifice the set.", price: "From $10" },
            ].map((s, i) => (
              <AnimateIn key={s.title} direction="up" delay={i * 80}>
                <div className="group p-8 h-full bg-[#1a1410] border border-[#c9a84c]/10 hover:border-[#c9a84c]/50 hover:bg-[#201810] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(201,168,76,0.08)] transition-all duration-400">
                  <span className="text-[#c9a84c] text-lg group-hover:scale-110 inline-block transition-transform duration-300">{s.icon}</span>
                  <h3 className="text-xl font-semibold text-[#f0e8d8] mt-4 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                    {s.title}
                  </h3>
                  <p className="text-[#c8b89a] text-sm leading-relaxed mb-5">{s.desc}</p>
                  <p className="text-[#c9a84c] text-sm tracking-wider">{s.price}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="gallery" className="py-28 px-6 bg-linear-to-b from-[#100c09] to-[#140d18]">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up" className="text-center mb-16">
            <p className="tracking-[0.35em] text-[#c9a84c] text-xs uppercase mb-3" style={{ fontFamily: "var(--font-jost)" }}>Our Work</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#f0e8d8]" style={{ fontFamily: "var(--font-playfair)" }}>
              Gallery
            </h2>
            <span className="gold-divider-shimmer w-32 mx-auto mt-6 block" />
          </AnimateIn>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "bg-[#3d1e4a]",
              "bg-[#3e1c10]",
              "bg-[#1a1410]",
              "bg-[#5c2d6e]",
              "bg-[#2a1508]",
              "bg-[#3a1d46]",
            ].map((bg, i) => (
              <AnimateIn key={i} direction="fade" delay={i * 100}>
                <div
                  className={`${bg} aspect-square flex items-center justify-center border border-[#c9a84c]/10 hover:border-[#c9a84c]/40 hover:scale-[1.02] hover:shadow-[0_4px_24px_rgba(201,168,76,0.1)] transition-all duration-500 group cursor-pointer`}
                >
                  <span className="text-[#c9a84c]/30 text-xs tracking-widest uppercase group-hover:text-[#c9a84c]/70 transition-colors duration-300" style={{ fontFamily: "var(--font-jost)" }}>
                    Photo {i + 1}
                  </span>
                </div>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn direction="fade" delay={200}>
            <p className="text-center text-[#c8b89a]/40 text-xs mt-6 tracking-widest uppercase" style={{ fontFamily: "var(--font-jost)" }}>
              Photos coming soon — follow us on Instagram
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-28 px-6 bg-[#140d18]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <AnimateIn direction="left">
            <div className="relative">
              <div className="w-full aspect-4/5 bg-[#3d1e4a] border border-[#c9a84c]/20" />
              <div className="absolute -bottom-4 -right-4 w-full aspect-4/5 border border-[#c9a84c]/10" />
              <div className="absolute top-6 left-6 w-12 h-12 border-t border-l border-[#c9a84c]/60" />
              <div className="absolute bottom-6 right-2 w-12 h-12 border-b border-r border-[#c9a84c]/60" />
              <p className="absolute inset-0 flex items-center justify-center text-[#c9a84c]/20 text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-jost)" }}>
                Studio Photo
              </p>
            </div>
          </AnimateIn>
          <AnimateIn direction="right">
            <div className="flex flex-col gap-6">
              <p className="tracking-[0.35em] text-[#c9a84c] text-xs uppercase" style={{ fontFamily: "var(--font-jost)" }}>About Us</p>
              <h2 className="text-4xl font-bold text-[#f0e8d8] leading-snug" style={{ fontFamily: "var(--font-playfair)" }}>
                Crafted with Care,<br />
                <span className="italic text-[#c9a84c]">Every Time</span>
              </h2>
              <span className="gold-divider-shimmer w-16 block" />
              <p className="text-[#c8b89a] leading-relaxed">
                We are a boutique nail studio dedicated to making every client feel seen and celebrated.
                From the moment you sit down, your comfort and satisfaction are our top priority.
              </p>
              <p className="text-[#c8b89a] leading-relaxed">
                Our team of skilled nail artists brings precision, creativity, and a genuine love
                for the craft to every single appointment — whether it&apos;s a clean nude set or an
                elaborate custom design.
              </p>
              <ul className="flex flex-col gap-3 mt-2">
                {["Premium, safe products only", "Strict sanitation standards", "Personalized service every visit"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#c8b89a]" style={{ fontFamily: "var(--font-jost)" }}>
                    <span className="text-[#c9a84c] text-xs">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── BOOKING CTA ── */}
      <section id="booking" className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#5c2d6e] via-[#1a0e10] to-[#3e1c10]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(201,168,76,0.07),transparent)] hero-glow-1" />
        <AnimateIn direction="up" className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
          <p className="tracking-[0.35em] text-[#c9a84c] text-xs uppercase" style={{ fontFamily: "var(--font-jost)" }}>Ready?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f0e8d8]" style={{ fontFamily: "var(--font-playfair)" }}>
            Book Your Appointment
          </h2>
          <span className="gold-divider-shimmer w-32 block" />
          <p className="text-[#c8b89a] max-w-md leading-relaxed">
            Treat yourself to the nail experience you deserve. Spots fill up fast —
            reserve yours today.
          </p>
          <a
            href="tel:+1234567890"
            className="mt-2 px-10 py-4 bg-[#c9a84c] text-[#0d0a08] font-semibold tracking-widest uppercase text-sm hover:bg-[#e8c97a] hover:scale-105 active:scale-95 hover:shadow-[0_4px_24px_rgba(201,168,76,0.3)] transition-all duration-300"
          >
            Call to Book
          </a>
          <p className="text-[#c8b89a]/50 text-xs tracking-wider" style={{ fontFamily: "var(--font-jost)" }}>
            Or DM us on Instagram &nbsp;·&nbsp; Walk-ins welcome when available
          </p>
        </AnimateIn>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0a0806] border-t border-[#c9a84c]/10 py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <Image
            src="/LOGO.PNG"
            alt="My Color Nails and Spa"
            width={90}
            height={40}
            className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
          <ul className="flex gap-8 text-xs tracking-widest uppercase text-[#c8b89a]/60" style={{ fontFamily: "var(--font-jost)" }}>
            <li><a href="#services" className="hover:text-[#c9a84c] transition-colors duration-300">Services</a></li>
            <li><a href="#gallery" className="hover:text-[#c9a84c] transition-colors duration-300">Gallery</a></li>
            <li><a href="#about" className="hover:text-[#c9a84c] transition-colors duration-300">About</a></li>
            <li><a href="#booking" className="hover:text-[#c9a84c] transition-colors duration-300">Book</a></li>
          </ul>
          <p className="text-xs text-[#c8b89a]/30 tracking-wider" style={{ fontFamily: "var(--font-jost)" }}>
            © {new Date().getFullYear()} My Color Nails and Spa. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
