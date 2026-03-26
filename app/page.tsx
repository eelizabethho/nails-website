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

      {/* ── WHY CHOOSE US ── */}
      <section className="py-28 px-6 bg-[#100c09]">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up" className="text-center mb-16">
            <p className="tracking-[0.35em] text-[#c9a84c] text-xs uppercase mb-3" style={{ fontFamily: "var(--font-jost)" }}>The Difference</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#f0e8d8]" style={{ fontFamily: "var(--font-playfair)" }}>
              Why My Color
            </h2>
            <span className="gold-divider-shimmer w-32 mx-auto mt-6 block" />
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "✦", title: "Premium Products", desc: "We use only top-tier, skin-safe products that protect your nails and last." },
              { icon: "✦", title: "Strict Sanitation", desc: "Every tool is sterilized between every client. Your safety is non-negotiable." },
              { icon: "✦", title: "Expert Artists", desc: "Our team brings skill, creativity, and care to every single set." },
              { icon: "✦", title: "Your Comfort First", desc: "A calm, welcoming space where you can fully relax and be taken care of." },
            ].map((item, i) => (
              <AnimateIn key={item.title} direction="up" delay={i * 80}>
                <div className="flex flex-col gap-4 p-6 border border-[#c9a84c]/10 hover:border-[#c9a84c]/30 hover:bg-[#1a1410] transition-all duration-300">
                  <span className="text-[#c9a84c] text-xl">{item.icon}</span>
                  <h3 className="text-lg font-semibold text-[#f0e8d8]" style={{ fontFamily: "var(--font-playfair)" }}>{item.title}</h3>
                  <p className="text-[#c8b89a]/70 text-sm leading-relaxed" style={{ fontFamily: "var(--font-jost)" }}>{item.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED SERVICES ── */}
      <section className="py-28 px-6 bg-[#0d0a08]">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up" className="text-center mb-16">
            <p className="tracking-[0.35em] text-[#c9a84c] text-xs uppercase mb-3" style={{ fontFamily: "var(--font-jost)" }}>Most Loved</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#f0e8d8]" style={{ fontFamily: "var(--font-playfair)" }}>
              Fan Favorites
            </h2>
            <span className="gold-divider-shimmer w-32 mx-auto mt-6 block" />
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                tag: "Head Spa",
                name: "Signature Bliss\nHead Spa + Facial",
                desc: "Our ultimate all-in experience — candle oil scalp massage, Dermalogica facial, ASMR relaxation & herbal drink.",
                time: "80 min",
                price: "$150",
                bg: "from-[#3d1e4a] to-[#1a0e1a]",
              },
              {
                tag: "Pedicure",
                name: "My Color\nSignature Bliss",
                desc: "20-min candle massage, hot stones, paraffin, essential oil soak, and a warm eye comfort warmer.",
                time: "60 min",
                price: "$79",
                bg: "from-[#3e1c10] to-[#0d0a08]",
              },
              {
                tag: "Manicure",
                name: "Liquid Gel\nFull Set",
                desc: "Durable, glossy, and long-lasting. Liquid gel gives your nails strength and a flawless mirror finish.",
                time: "60 min",
                price: "$60+",
                bg: "from-[#2d1b3d] to-[#0d0a08]",
              },
            ].map((s, i) => (
              <AnimateIn key={s.name} direction="up" delay={i * 100}>
                <div className={`group relative flex flex-col justify-between p-8 h-full min-h-72 bg-linear-to-br ${s.bg} border border-[#c9a84c]/10 hover:border-[#c9a84c]/40 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(201,168,76,0.1)] transition-all duration-400 overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(201,168,76,0.05),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 flex flex-col gap-4">
                    <span className="text-xs tracking-[0.3em] uppercase text-[#c9a84c]/70" style={{ fontFamily: "var(--font-jost)" }}>{s.tag}</span>
                    <h3 className="text-2xl font-bold text-[#f0e8d8] leading-snug whitespace-pre-line" style={{ fontFamily: "var(--font-playfair)" }}>{s.name}</h3>
                    <p className="text-[#c8b89a]/70 text-sm leading-relaxed" style={{ fontFamily: "var(--font-jost)" }}>{s.desc}</p>
                  </div>
                  <div className="relative z-10 flex items-center justify-between mt-6 pt-4 border-t border-[#c9a84c]/10">
                    <span className="text-[#c8b89a]/50 text-xs" style={{ fontFamily: "var(--font-jost)" }}>{s.time}</span>
                    <span className="text-[#c9a84c] text-lg font-semibold" style={{ fontFamily: "var(--font-jost)" }}>{s.price}</span>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn direction="fade" delay={300} className="text-center mt-10">
            <Link
              href="/services"
              className="inline-block px-8 py-3 border border-[#c9a84c]/40 text-[#c9a84c] text-sm tracking-widest uppercase hover:bg-[#c9a84c] hover:text-[#0d0a08] transition-all duration-300"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              View All Services
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ── GALLERY CTA ── */}
      <section className="relative py-24 px-6 overflow-hidden bg-[#0d0a08]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(92,45,110,0.15),transparent)]" />
        <AnimateIn direction="up" className="relative z-10 max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-3 text-center md:text-left">
            <p className="tracking-[0.35em] text-[#c9a84c] text-xs uppercase" style={{ fontFamily: "var(--font-jost)" }}>Our Work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#f0e8d8]" style={{ fontFamily: "var(--font-playfair)" }}>
              See What We&apos;ve Been Creating
            </h2>
            <p className="text-[#c8b89a]/70 text-sm leading-relaxed max-w-md" style={{ fontFamily: "var(--font-jost)" }}>
              From intricate nail art to deeply relaxing head spas — browse our gallery to get inspired for your next visit.
            </p>
          </div>
          <Link
            href="/gallery"
            className="shrink-0 px-10 py-4 bg-[#c9a84c] text-[#0d0a08] font-semibold tracking-widest uppercase text-sm hover:bg-[#e8c97a] hover:scale-105 transition-all duration-300"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            View Gallery
          </Link>
        </AnimateIn>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-28 px-6 bg-linear-to-b from-[#100c09] to-[#0d0a08]">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up" className="text-center mb-16">
            <p className="tracking-[0.35em] text-[#c9a84c] text-xs uppercase mb-3" style={{ fontFamily: "var(--font-jost)" }}>Kind Words</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#f0e8d8]" style={{ fontFamily: "var(--font-playfair)" }}>
              What Clients Say
            </h2>
            <span className="gold-divider-shimmer w-32 mx-auto mt-6 block" />
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Elizabeth Ho",
                text: "Came in last Tuesday and this is literally the BEST nail salon I've ever been to. I got a Gel X manicure with Tee and she does the BEST nails plus she's such a kind and sweet person. I also tried their head spa — they use high quality essential oils and dermatological grade products and it honestly felt like a real spa treatment. 10/10 experience!",
              },
              {
                name: "Abby Palmer",
                text: "I found this salon 5 months ago & it's honestly the best one I've ever been to. Tee always does such an amazing job bringing my ideas to life. She's the absolute best! From the atmosphere to the services to the staff, it's always a very good time when I book an appointment & something I look forward to each month.",
              },
              {
                name: "Madeleine Houser",
                text: "I got my nails done here recently and they turned out so good!! Tee did an amazing job, and I could tell she was really taking her time to do well and making sure it matched what I wanted! Everyone there was so friendly and kind! I overheard multiple people talking about how they had the best foot massage and head massage there!",
              },
            ].map((r, i) => (
              <AnimateIn key={r.name} direction="up" delay={i * 100}>
                <div className="flex flex-col gap-5 p-8 h-full bg-[#1a1410] border border-[#c9a84c]/10 hover:border-[#c9a84c]/25 transition-all duration-300">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <span key={si} className="text-[#c9a84c] text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-[#c8b89a] text-sm leading-relaxed italic flex-1" style={{ fontFamily: "var(--font-jost)" }}>
                    &ldquo;{r.text}&rdquo;
                  </p>
                  <p className="text-[#f0e8d8]/60 text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-jost)" }}>
                    — {r.name}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn direction="fade" delay={300} className="text-center mt-10">
            <a
              href="https://www.google.com/search?q=my+color+nails+spa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs tracking-widest uppercase text-[#c9a84c]/60 hover:text-[#c9a84c] transition-colors duration-300 border-b border-[#c9a84c]/20 pb-0.5"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Read more on Google ↗
            </a>
          </AnimateIn>
        </div>
      </section>

      {/* ── LOCATION & HOURS ── */}
      <section className="py-28 px-6 bg-[#100c09]">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up" className="text-center mb-16">
            <p className="tracking-[0.35em] text-[#c9a84c] text-xs uppercase mb-3" style={{ fontFamily: "var(--font-jost)" }}>Find Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#f0e8d8]" style={{ fontFamily: "var(--font-playfair)" }}>
              Visit Us
            </h2>
            <span className="gold-divider-shimmer w-32 mx-auto mt-6 block" />
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Info */}
            <AnimateIn direction="left">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <p className="text-[#c9a84c]/60 text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-jost)" }}>Location</p>
                  <p className="text-[#f0e8d8] text-lg font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>Sudley Manor Square</p>
                  <p className="text-[#c8b89a]" style={{ fontFamily: "var(--font-jost)" }}>7827 Sudley Rd, Manassas, VA 20109</p>
                  <a
                    href="https://maps.google.com/?q=7827+Sudley+Rd+Manassas+VA+20109"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c9a84c]/60 text-xs tracking-widest uppercase hover:text-[#c9a84c] transition-colors duration-300 border-b border-[#c9a84c]/20 pb-0.5 w-fit"
                    style={{ fontFamily: "var(--font-jost)" }}
                  >
                    Get Directions ↗
                  </a>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[#c9a84c]/60 text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-jost)" }}>Phone</p>
                  <a href="tel:+17033303103" className="text-[#f0e8d8] text-lg hover:text-[#c9a84c] transition-colors duration-300" style={{ fontFamily: "var(--font-playfair)" }}>
                    (703) 330-3103
                  </a>
                </div>
              </div>
            </AnimateIn>

            {/* Hours */}
            <AnimateIn direction="right">
              <div className="flex flex-col gap-4">
                <p className="text-[#c9a84c]/60 text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-jost)" }}>Hours</p>
                <div className="flex flex-col divide-y divide-[#c9a84c]/08">
                  {[
                    { day: "Monday", hours: "10:00 AM – 7:30 PM" },
                    { day: "Tuesday", hours: "10:00 AM – 7:30 PM" },
                    { day: "Wednesday", hours: "10:00 AM – 7:30 PM" },
                    { day: "Thursday", hours: "10:00 AM – 7:30 PM" },
                    { day: "Friday", hours: "10:00 AM – 7:30 PM" },
                    { day: "Saturday", hours: "10:00 AM – 7:00 PM" },
                    { day: "Sunday", hours: "11:00 AM – 5:00 PM" },
                  ].map(({ day, hours }) => (
                    <div key={day} className="flex justify-between py-3 text-sm">
                      <span className="text-[#c8b89a]" style={{ fontFamily: "var(--font-jost)" }}>{day}</span>
                      <span className="text-[#f0e8d8]" style={{ fontFamily: "var(--font-jost)" }}>{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
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
            href="tel:+17033303103"
            className="mt-2 px-10 py-4 bg-[#c9a84c] text-[#0d0a08] font-semibold tracking-widest uppercase text-sm hover:bg-[#e8c97a] hover:scale-105 active:scale-95 hover:shadow-[0_4px_24px_rgba(201,168,76,0.3)] transition-all duration-300"
          >
            Call (703) 330-3103
          </a>
          <div className="flex items-center gap-5 mt-1">
            <a
              href="https://www.instagram.com/mycolornailsnspa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c8b89a]/50 hover:text-[#c9a84c] transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/p/My-Color-Nail-Spa-61580156893192/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c8b89a]/50 hover:text-[#c9a84c] transition-colors duration-300"
              aria-label="Facebook"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
          <p className="text-[#c8b89a]/40 text-xs tracking-wider" style={{ fontFamily: "var(--font-jost)" }}>
            Walk-ins welcome when available
          </p>
        </AnimateIn>
      </section>

      <Footer />
    </div>
  );
}
