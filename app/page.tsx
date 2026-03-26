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
                  {/* subtle gold overlay on hover */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(201,168,76,0.06),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </AnimateIn>
            ))}
          </div>
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
          <div className="flex flex-col gap-20">
            {[
              {
                category: "Head Spa",
                label: "Scalp & Hair",
                items: [
                  { name: "Essential Herbal Relaxation", desc: "Wooden harmony ritual, herbal cleanse, 5-min scalp massage & blow dry", time: "30 min", price: "$47" },
                  { name: "Deluxe Head Spa", desc: "Herbal cleanse, essential oil steam, mini facial glow, neck & shoulder relief, 10-min scalp massage & blow dry", time: "45 min", price: "$80" },
                  { name: "Vietnamese Ritual Head Spa", desc: "Meridian scalp ritual, deep essential oil massage, aromatic steam, botanical facial refresh & blow dry", time: "60 min", price: "$115" },
                  { name: "Premium Plus Head Spa", desc: "All Vietnamese Ritual steps + Dermalogica facial, hand massage & extended neck & shoulder release", time: "70 min", price: "$125" },
                  { name: "Signature Bliss Head Spa + Facial", desc: "Ultimate all-in experience — Zen Flow massage, warm lavender eye mask, candle oil scalp massage, Dermalogica facial, ASMR & herbal drink", time: "80 min", price: "$150" },
                ],
              },
              {
                category: "Manicures",
                label: "Hand Care",
                items: [
                  { name: "Classic Manicure", desc: "Nail grooming, hydration & polished look", time: "30 min", price: "$22" },
                  { name: "Gel Manicure", desc: "High shine, chip-free gel finish", time: "40 min", price: "$35" },
                  { name: "Dip Powder – Overlay", desc: "Long-lasting, durable & lightweight dip powder", time: "40 min", price: "$50+" },
                  { name: "Dip Powder – Full Set", desc: "Full glamorous dip powder set for a flawless finish", time: "80 min", price: "$60+" },
                  { name: "Acrylic – Full Set", desc: "Strength & beauty with a flawless acrylic overlay fullset", time: "80 min", price: "$60+" },
                  { name: "Acrylic – Fill", desc: "Renew your acrylics with a flawless overlay fill", time: "50 min", price: "$45+" },
                  { name: "Liquid Gel – Overlay", desc: "Ultimate protection & shine for a strong, beautiful finish", time: "50 min", price: "$55+" },
                  { name: "Liquid Gel – Full Set", desc: "Durable & shiny liquid gel full set", time: "60 min", price: "$60+" },
                  { name: "Liquid Gel – Fill", desc: "Long-lasting color & strength with a flawless fill", time: "50 min", price: "$50+" },
                  { name: "Gel X Extension – Full Set", desc: "Long, natural-looking gel-X extensions", time: "60 min", price: "$55+" },
                  { name: "Hybrid Gel / Polygel", desc: "Best of both worlds — durable & customizable", time: "50 min", price: "$60+" },
                  { name: "Hybrid Gel / Polygel – Fill", desc: "Flawless, long-lasting polygel fill", time: "45 min", price: "$50+" },
                  { name: "French Add-on", desc: "Timeless white-tip style", time: "+10 min", price: "$7+" },
                  { name: "Prepair Service", desc: "Clean, shape & ready base", time: "10 min", price: "$5+" },
                  { name: "Nails Cut Down", desc: "Trim & reshape for neat maintenance", time: "10 min", price: "$5" },
                ],
              },
              {
                category: "Nail Art",
                label: "Artistry",
                items: [
                  { name: "Tier 1 — Basic", desc: "Chrome, glitter, or minimal art ($5 for 2 fingers)", time: "+10 min", price: "$5+" },
                  { name: "Tier 2 — Medium", desc: "Aura nails, swirls, ombré, cat-eye, small flowers (2–4 fingers)", time: "+10 min", price: "$10+" },
                  { name: "Tier 3 — Advanced", desc: "3D art, character art, encapsulated designs, rhinestone clusters & full custom looks", time: "+25 min", price: "$20+" },
                ],
              },
              {
                category: "Polish Changes",
                label: "Refresh",
                items: [
                  { name: "Polish Change – Hands", desc: "Quick regular polish refresh", time: "15 min", price: "$12" },
                  { name: "Polish Change – Toes", desc: "Fast polish update for toes", time: "15 min", price: "$15" },
                  { name: "Gel Polish Change – Hands", desc: "Durable gel color refresh", time: "25 min", price: "$25" },
                  { name: "Gel Polish Change – Toes", desc: "Long-lasting gel refresh for toes", time: "25 min", price: "$30" },
                  { name: "Gel Color Change – Hands", desc: "Quick gel color swap", time: "10 min", price: "$25" },
                  { name: "Gel / Dip Soak Off", desc: "Safe removal to protect natural nails", time: "15 min", price: "$10" },
                ],
              },
              {
                category: "Pedicures",
                label: "Foot Care",
                items: [
                  { name: "Classic Pearl", desc: "Sugar exfoliation, moisturizer, hot towel & 5-min massage", time: "30 min", price: "$35" },
                  { name: "Crystal", desc: "Pearl + callus treatment, paraffin wax & 7-min massage", time: "40 min", price: "$45" },
                  { name: "Emerald", desc: "4-step collagen spa, essential oil soak, callus removal, paraffin & 10-min massage", time: "45 min", price: "$60" },
                  { name: "Diamond Organic Bomb Spa", desc: "11-step deluxe bomb spa, hot stones, paraffin & 15-min massage", time: "50 min", price: "$69" },
                  { name: "My Color Signature Bliss", desc: "20-min candle massage, hot stones, paraffin, essential oil soak & eye comfort warmer", time: "60 min", price: "$79" },
                ],
              },
            ].map((section, si) => (
              <AnimateIn key={section.category} direction="up" delay={si * 60}>
                <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                  {/* Left: category label */}
                  <div className="md:w-44 shrink-0 flex md:flex-col gap-2 md:gap-3 items-center md:items-start md:pt-1">
                    <p className="text-[#c9a84c]/50 text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-jost)" }}>
                      {section.label}
                    </p>
                    <h3 className="text-2xl font-bold text-[#f0e8d8]" style={{ fontFamily: "var(--font-playfair)" }}>
                      {section.category}
                    </h3>
                    <span className="hidden md:block gold-divider-shimmer w-12 mt-1" />
                  </div>

                  {/* Right: service list */}
                  <div className="flex-1 flex flex-col">
                    {section.items.map((item) => (
                      <div
                        key={item.name}
                        className="group flex items-baseline justify-between gap-4 py-4 border-b border-[#c9a84c]/08 last:border-0 hover:border-[#c9a84c]/20 transition-colors duration-300"
                      >
                        <div className="flex flex-col gap-0.5">
                          <p className="text-[#f0e8d8] text-base group-hover:text-[#c9a84c] transition-colors duration-300" style={{ fontFamily: "var(--font-playfair)" }}>
                            {item.name}
                          </p>
                          <p className="text-[#c8b89a]/50 text-xs leading-relaxed" style={{ fontFamily: "var(--font-jost)" }}>
                            {item.desc} &nbsp;·&nbsp; {item.time}
                          </p>
                        </div>
                        <p className="text-[#c9a84c] text-base font-semibold shrink-0" style={{ fontFamily: "var(--font-jost)" }}>
                          {item.price}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateIn>
            ))}

            {/* Notes */}
            <AnimateIn direction="fade" delay={200}>
              <p className="text-xs text-[#c8b89a]/40 tracking-wider border-t border-[#c9a84c]/10 pt-6" style={{ fontFamily: "var(--font-jost)" }}>
                ✦ &nbsp; Gel add-on for pedicures +$10 (save $5) &nbsp;·&nbsp; Prices marked &quot;+&quot; may vary by length &amp; style
              </p>
            </AnimateIn>
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
          <div className="flex flex-col gap-20">
            {[
              {
                label: "Head Spa",
                accent: "bg-[#3d1e4a]",
                photos: ["bg-[#3d1e4a]", "bg-[#5c2d6e]", "bg-[#3a1d46]", "bg-[#2e1640]"],
              },
              {
                label: "Manicure",
                accent: "bg-[#3e1c10]",
                photos: ["bg-[#3e1c10]", "bg-[#2a1508]", "bg-[#1a1410]", "bg-[#4a2010]"],
              },
              {
                label: "Pedicure",
                accent: "bg-[#201828]",
                photos: ["bg-[#201828]", "bg-[#3d1e4a]", "bg-[#2a1508]", "bg-[#1a1410]"],
              },
            ].map((section, si) => (
              <AnimateIn key={section.label} direction="up" delay={si * 80}>
                <div className="flex flex-col gap-5">
                  {/* Section label */}
                  <div className="flex items-center gap-4">
                    <h3 className="text-2xl font-bold text-[#f0e8d8]" style={{ fontFamily: "var(--font-playfair)" }}>
                      {section.label}
                    </h3>
                    <span className="flex-1 gold-divider-shimmer" />
                  </div>
                  {/* Photos — 4 per row, first one taller */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {section.photos.map((bg, i) => (
                      <div
                        key={i}
                        className={`${bg} ${i === 0 ? "row-span-2 md:row-span-1 aspect-3/4 md:aspect-square" : "aspect-square"} flex items-center justify-center border border-[#c9a84c]/10 hover:border-[#c9a84c]/40 hover:scale-[1.02] hover:shadow-[0_4px_24px_rgba(201,168,76,0.1)] transition-all duration-500 group cursor-pointer`}
                      >
                        <span className="text-[#c9a84c]/25 text-xs tracking-widest uppercase group-hover:text-[#c9a84c]/60 transition-colors duration-300" style={{ fontFamily: "var(--font-jost)" }}>
                          Photo
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateIn>
            ))}

            <AnimateIn direction="fade" delay={100}>
              <p className="text-center text-[#c8b89a]/30 text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-jost)" }}>
                Photos coming soon — follow us on Instagram
              </p>
            </AnimateIn>
          </div>
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
