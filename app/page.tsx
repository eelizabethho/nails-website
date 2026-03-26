import Image from "next/image";
import Link from "next/link";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AnimateIn from "./components/AnimateIn";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      {/* ── HERO ── */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#0d0a08] via-[#2a1035] to-[#0d0a08]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_60%,rgba(201,168,76,0.08),transparent)] hero-glow-1" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_50%_50%_at_80%_20%,rgba(92,45,110,0.5),transparent)] hero-glow-2" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_50%_50%_at_20%_80%,rgba(107,58,42,0.25),transparent)] hero-glow-1" />

        <div className="relative z-10 max-w-3xl flex flex-col items-center gap-6">
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
          <span className="hero-divider gold-divider-shimmer w-40" />
          <p className="hero-tagline text-lg text-[#c8b89a] max-w-xl leading-relaxed" style={{ fontFamily: "var(--font-jost)" }}>
            Handcrafted nail artistry in a space designed for you to feel beautiful,
            relaxed, and completely taken care of.
          </p>
          <div className="hero-btns flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="/#booking"
              className="px-8 py-3.5 bg-[#c9a84c] text-[#0d0a08] font-semibold tracking-widest uppercase text-sm hover:bg-[#e8c97a] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Book Appointment
            </Link>
            <Link
              href="/services"
              className="px-8 py-3.5 border border-[#c8b89a]/40 text-[#c8b89a] font-light tracking-widest uppercase text-sm hover:border-[#c9a84c] hover:text-[#c9a84c] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>

        <div className="scroll-indicator absolute bottom-10 left-1/2 flex flex-col items-center gap-2 text-[#c9a84c]/50">
          <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-jost)" }}>Scroll</span>
          <div className="w-px h-10 bg-linear-to-b from-[#c9a84c]/50 to-transparent" />
        </div>
      </section>

      {/* ── VIDEO GALLERY ── */}
      <section className="py-28 px-6 bg-[#0d0a08]">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up" className="text-center mb-16">
            <p className="tracking-[0.35em] text-[#c9a84c] text-xs uppercase mb-3" style={{ fontFamily: "var(--font-jost)" }}>See the Work</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#f0e8d8]" style={{ fontFamily: "var(--font-playfair)" }}>
              In Motion
            </h2>
            <span className="gold-divider-shimmer w-32 mx-auto mt-6 block" />
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              "v12044gd0000d47r05fog65iquk3vdb0.MP4",
              "v12044gd0000d6sqnjnog65gjefvtnkg.MP4",
              "v12044gd0000d70opevog65tibfatc6g.MP4",
            ].map((src, i) => (
              <AnimateIn key={src} direction="up" delay={i * 120}>
                <div className="group relative overflow-hidden border border-[#c9a84c]/10 hover:border-[#c9a84c]/40 transition-all duration-500">
                  <video
                    src={`/${src}`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full aspect-9/16 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(201,168,76,0.06),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </AnimateIn>
            ))}
          </div>
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

      <Footer />
    </div>
  );
}
