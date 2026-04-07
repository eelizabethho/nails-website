import Image from "next/image";
import Link from "next/link";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AnimateIn from "./components/AnimateIn";
import Marquee from "./components/Marquee";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      {/* ── HERO ── */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#0d0a08] via-[#301934] to-[#0d0a08]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_60%,rgba(201,168,76,0.1),transparent)] hero-glow-1" />
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-[radial-gradient(ellipse_50%_50%_at_80%_20%,rgba(80,30,100,0.7),transparent)] hero-glow-2" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_50%_50%_at_20%_80%,rgba(107,58,42,0.3),transparent)] hero-glow-1" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_15%_30%,rgba(60,20,80,0.4),transparent)]" />

        {/* Floral decoration — top right */}
        <div className="absolute top-0 right-0 w-[420px] h-[420px] pointer-events-none select-none opacity-50 hidden sm:block">
          <svg viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 420 20 C 370 55, 310 85, 265 140 C 235 172, 195 205, 145 258" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M 310 88 C 288 62, 268 32, 255 8" stroke="#c9a84c" strokeWidth="1" strokeLinecap="round"/>
            <path d="M 265 140 C 292 125, 322 110, 345 106" stroke="#c9a84c" strokeWidth="1" strokeLinecap="round"/>
            <path d="M 195 205 C 222 192, 252 178, 270 170" stroke="#c9a84c" strokeWidth="1" strokeLinecap="round"/>
            <path d="M 310 88 C 340 78, 375 68, 400 62" stroke="#c9a84c" strokeWidth="0.8" strokeLinecap="round"/>
            {/* Flower 1 – large gold, top */}
            <g transform="translate(255,8)">
              <ellipse cx="0" cy="-11" rx="6.5" ry="11" fill="#e8c97a" opacity="0.85"/>
              <ellipse cx="0" cy="-11" rx="6.5" ry="11" fill="#e8c97a" opacity="0.85" transform="rotate(72)"/>
              <ellipse cx="0" cy="-11" rx="6.5" ry="11" fill="#e8c97a" opacity="0.85" transform="rotate(144)"/>
              <ellipse cx="0" cy="-11" rx="6.5" ry="11" fill="#e8c97a" opacity="0.85" transform="rotate(216)"/>
              <ellipse cx="0" cy="-11" rx="6.5" ry="11" fill="#e8c97a" opacity="0.85" transform="rotate(288)"/>
              <circle cx="0" cy="0" r="4.5" fill="#c9a84c"/>
            </g>
            {/* Flower 2 – mid gold, right branch */}
            <g transform="translate(346,108)">
              <ellipse cx="0" cy="-9" rx="5.5" ry="9" fill="#c9a84c" opacity="0.75"/>
              <ellipse cx="0" cy="-9" rx="5.5" ry="9" fill="#c9a84c" opacity="0.75" transform="rotate(72)"/>
              <ellipse cx="0" cy="-9" rx="5.5" ry="9" fill="#c9a84c" opacity="0.75" transform="rotate(144)"/>
              <ellipse cx="0" cy="-9" rx="5.5" ry="9" fill="#c9a84c" opacity="0.75" transform="rotate(216)"/>
              <ellipse cx="0" cy="-9" rx="5.5" ry="9" fill="#c9a84c" opacity="0.75" transform="rotate(288)"/>
              <circle cx="0" cy="0" r="3.5" fill="#e8c97a"/>
            </g>
            {/* Flower 3 – plum, lower branch */}
            <g transform="translate(270,172)">
              <ellipse cx="0" cy="-8" rx="5" ry="8" fill="#c49ad8" opacity="0.65"/>
              <ellipse cx="0" cy="-8" rx="5" ry="8" fill="#c49ad8" opacity="0.65" transform="rotate(72)"/>
              <ellipse cx="0" cy="-8" rx="5" ry="8" fill="#c49ad8" opacity="0.65" transform="rotate(144)"/>
              <ellipse cx="0" cy="-8" rx="5" ry="8" fill="#c49ad8" opacity="0.65" transform="rotate(216)"/>
              <ellipse cx="0" cy="-8" rx="5" ry="8" fill="#c49ad8" opacity="0.65" transform="rotate(288)"/>
              <circle cx="0" cy="0" r="3" fill="#c9a84c"/>
            </g>
            {/* Flower 4 – small, far right */}
            <g transform="translate(400,64)">
              <ellipse cx="0" cy="-6" rx="4" ry="6" fill="#e8c97a" opacity="0.6"/>
              <ellipse cx="0" cy="-6" rx="4" ry="6" fill="#e8c97a" opacity="0.6" transform="rotate(72)"/>
              <ellipse cx="0" cy="-6" rx="4" ry="6" fill="#e8c97a" opacity="0.6" transform="rotate(144)"/>
              <ellipse cx="0" cy="-6" rx="4" ry="6" fill="#e8c97a" opacity="0.6" transform="rotate(216)"/>
              <ellipse cx="0" cy="-6" rx="4" ry="6" fill="#e8c97a" opacity="0.6" transform="rotate(288)"/>
              <circle cx="0" cy="0" r="2.5" fill="#c9a84c"/>
            </g>
            {/* Buds */}
            <ellipse cx="286" cy="58" rx="4" ry="6.5" fill="#c9a84c" opacity="0.5" transform="rotate(-35,286,58)"/>
            <ellipse cx="380" cy="42" rx="3" ry="5" fill="#e8c97a" opacity="0.4" transform="rotate(-50,380,42)"/>
            <ellipse cx="420" cy="90" rx="3" ry="5" fill="#c9a84c" opacity="0.35" transform="rotate(-20,420,90)"/>
            {/* Leaves */}
            <path d="M 298 118 C 312 108, 330 114, 318 126 C 306 138, 285 128, 298 118 Z" fill="#c9a84c" opacity="0.3"/>
            <path d="M 228 192 C 245 182, 260 195, 248 207 C 236 218, 218 202, 228 192 Z" fill="#c9a84c" opacity="0.25"/>
            <path d="M 352 85 C 362 74, 378 80, 368 92 C 358 104, 342 94, 352 85 Z" fill="#c9a84c" opacity="0.2"/>
          </svg>
        </div>

        {/* Floral decoration — bottom left */}
        <div className="absolute bottom-0 left-0 w-[320px] h-[320px] pointer-events-none select-none opacity-40 hidden sm:block">
          <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0 290 C 45 258, 90 220, 140 168 C 168 138, 198 105, 238 62" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M 90 220 C 62 205, 35 196, 8 202" stroke="#c9a84c" strokeWidth="1" strokeLinecap="round"/>
            <path d="M 140 168 C 118 150, 102 126, 108 105" stroke="#c9a84c" strokeWidth="1" strokeLinecap="round"/>
            <path d="M 198 105 C 218 92, 240 78, 258 72" stroke="#c9a84c" strokeWidth="0.8" strokeLinecap="round"/>
            {/* Flower at top */}
            <g transform="translate(108,103)">
              <ellipse cx="0" cy="-9" rx="5.5" ry="9" fill="#e8c97a" opacity="0.75"/>
              <ellipse cx="0" cy="-9" rx="5.5" ry="9" fill="#e8c97a" opacity="0.75" transform="rotate(72)"/>
              <ellipse cx="0" cy="-9" rx="5.5" ry="9" fill="#e8c97a" opacity="0.75" transform="rotate(144)"/>
              <ellipse cx="0" cy="-9" rx="5.5" ry="9" fill="#e8c97a" opacity="0.75" transform="rotate(216)"/>
              <ellipse cx="0" cy="-9" rx="5.5" ry="9" fill="#e8c97a" opacity="0.75" transform="rotate(288)"/>
              <circle cx="0" cy="0" r="3.5" fill="#c9a84c"/>
            </g>
            {/* Flower at left branch */}
            <g transform="translate(8,200)">
              <ellipse cx="0" cy="-7" rx="4.5" ry="7" fill="#c49ad8" opacity="0.65"/>
              <ellipse cx="0" cy="-7" rx="4.5" ry="7" fill="#c49ad8" opacity="0.65" transform="rotate(72)"/>
              <ellipse cx="0" cy="-7" rx="4.5" ry="7" fill="#c49ad8" opacity="0.65" transform="rotate(144)"/>
              <ellipse cx="0" cy="-7" rx="4.5" ry="7" fill="#c49ad8" opacity="0.65" transform="rotate(216)"/>
              <ellipse cx="0" cy="-7" rx="4.5" ry="7" fill="#c49ad8" opacity="0.65" transform="rotate(288)"/>
              <circle cx="0" cy="0" r="2.5" fill="#e8c97a"/>
            </g>
            {/* Bud */}
            <ellipse cx="256" cy="74" rx="3.5" ry="5.5" fill="#c9a84c" opacity="0.45" transform="rotate(30,256,74)"/>
            {/* Leaf */}
            <path d="M 158 156 C 172 146, 186 158, 174 170 C 162 182, 146 168, 158 156 Z" fill="#c9a84c" opacity="0.25"/>
          </svg>
        </div>

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

        {/* Falling petals */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="petal"/><div className="petal"/><div className="petal"/>
          <div className="petal"/><div className="petal"/><div className="petal"/>
          <div className="petal"/><div className="petal"/>
        </div>

        {/* Floating sparkles */}
        <div className="absolute bottom-32 left-0 right-0 h-24 pointer-events-none">
          <div className="sparkle" /><div className="sparkle" /><div className="sparkle" /><div className="sparkle" /><div className="sparkle" />
          <div className="sparkle-lg" /><div className="sparkle-lg" /><div className="sparkle-lg" />
        </div>

        <div className="scroll-indicator absolute bottom-10 left-1/2 flex flex-col items-center gap-2 text-[#c9a84c]/50">
          <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-jost)" }}>Scroll</span>
          <div className="w-px h-10 bg-linear-to-b from-[#c9a84c]/50 to-transparent" />
        </div>
      </section>

      <Marquee />

      {/* ── VIDEO GALLERY ── */}
      <section className="py-28 px-6 bg-[#160f1c] relative overflow-hidden">
        {/* Floral — left */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-70 h-70 pointer-events-none select-none opacity-25 hidden lg:block">
          <svg viewBox="0 0 280 280" fill="none">
            <path d="M 0 140 C 40 120, 80 95, 120 70 C 150 50, 185 25, 220 0" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M 80 95 C 60 115, 45 140, 38 168" stroke="#c9a84c" strokeWidth="1" strokeLinecap="round"/>
            <path d="M 120 70 C 140 88, 148 112, 140 138" stroke="#c9a84c" strokeWidth="1" strokeLinecap="round"/>
            <g transform="translate(220,0)"><ellipse cx="0" cy="-9" rx="5" ry="9" fill="#e8c97a" opacity="0.9"/><ellipse cx="0" cy="-9" rx="5" ry="9" fill="#e8c97a" opacity="0.9" transform="rotate(72)"/><ellipse cx="0" cy="-9" rx="5" ry="9" fill="#e8c97a" opacity="0.9" transform="rotate(144)"/><ellipse cx="0" cy="-9" rx="5" ry="9" fill="#e8c97a" opacity="0.9" transform="rotate(216)"/><ellipse cx="0" cy="-9" rx="5" ry="9" fill="#e8c97a" opacity="0.9" transform="rotate(288)"/><circle cx="0" cy="0" r="3.5" fill="#c9a84c"/></g>
            <g transform="translate(38,170)"><ellipse cx="0" cy="-7" rx="4" ry="7" fill="#c49ad8" opacity="0.9"/><ellipse cx="0" cy="-7" rx="4" ry="7" fill="#c49ad8" opacity="0.9" transform="rotate(72)"/><ellipse cx="0" cy="-7" rx="4" ry="7" fill="#c49ad8" opacity="0.9" transform="rotate(144)"/><ellipse cx="0" cy="-7" rx="4" ry="7" fill="#c49ad8" opacity="0.9" transform="rotate(216)"/><ellipse cx="0" cy="-7" rx="4" ry="7" fill="#c49ad8" opacity="0.9" transform="rotate(288)"/><circle cx="0" cy="0" r="2.5" fill="#e8c97a"/></g>
            <g transform="translate(140,140)"><ellipse cx="0" cy="-6" rx="3.5" ry="6" fill="#c9a84c" opacity="0.8"/><ellipse cx="0" cy="-6" rx="3.5" ry="6" fill="#c9a84c" opacity="0.8" transform="rotate(72)"/><ellipse cx="0" cy="-6" rx="3.5" ry="6" fill="#c9a84c" opacity="0.8" transform="rotate(144)"/><ellipse cx="0" cy="-6" rx="3.5" ry="6" fill="#c9a84c" opacity="0.8" transform="rotate(216)"/><ellipse cx="0" cy="-6" rx="3.5" ry="6" fill="#c9a84c" opacity="0.8" transform="rotate(288)"/><circle cx="0" cy="0" r="2" fill="#e8c97a"/></g>
            <ellipse cx="98" cy="80" rx="3" ry="5" fill="#c9a84c" opacity="0.6" transform="rotate(-20,98,80)"/>
            <path d="M 105 108 C 118 100, 130 110, 120 120 C 110 130, 96 118, 105 108 Z" fill="#c9a84c" opacity="0.35"/>
          </svg>
        </div>
        {/* Floral — right */}
        <div className="absolute right-0 bottom-16 w-55 h-55 pointer-events-none select-none opacity-20 hidden lg:block">
          <svg viewBox="0 0 220 220" fill="none">
            <path d="M 220 60 C 180 85, 140 105, 100 140 C 72 162, 45 190, 20 220" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round"/>
            <path d="M 140 105 C 165 95, 192 88, 218 82" stroke="#c9a84c" strokeWidth="0.8" strokeLinecap="round"/>
            <g transform="translate(100,140)"><ellipse cx="0" cy="-8" rx="5" ry="8" fill="#e8c97a" opacity="0.9"/><ellipse cx="0" cy="-8" rx="5" ry="8" fill="#e8c97a" opacity="0.9" transform="rotate(72)"/><ellipse cx="0" cy="-8" rx="5" ry="8" fill="#e8c97a" opacity="0.9" transform="rotate(144)"/><ellipse cx="0" cy="-8" rx="5" ry="8" fill="#e8c97a" opacity="0.9" transform="rotate(216)"/><ellipse cx="0" cy="-8" rx="5" ry="8" fill="#e8c97a" opacity="0.9" transform="rotate(288)"/><circle cx="0" cy="0" r="3" fill="#c9a84c"/></g>
            <ellipse cx="218" cy="84" rx="3.5" ry="5.5" fill="#c9a84c" opacity="0.7" transform="rotate(-40,218,84)"/>
            <path d="M 118 122 C 130 114, 142 124, 132 134 C 122 144, 108 132, 118 122 Z" fill="#c9a84c" opacity="0.3"/>
          </svg>
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <AnimateIn direction="up" className="text-center mb-16">
            <p className="tracking-[0.35em] text-[#c9a84c] text-xs uppercase mb-3" style={{ fontFamily: "var(--font-jost)" }}>See the Work</p>
            <h2 className="text-4xl md:text-5xl font-bold gold-text-shimmer" style={{ fontFamily: "var(--font-playfair)" }}>
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
                <div className="group relative overflow-hidden border border-[#c9a84c]/10 hover:border-[#c9a84c]/60 transition-all duration-500 hover:shadow-[0_0_30px_rgba(201,168,76,0.2)]">
                  <video
                    src={`/${src}`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full aspect-9/16 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(201,168,76,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED SERVICES ── */}
      <section className="py-28 px-6 bg-[#100c16] relative overflow-hidden">
        {/* Floral — top right */}
        <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none select-none opacity-30 hidden md:block">
          <svg viewBox="0 0 380 380" fill="none">
            <path d="M 380 0 C 330 45, 270 80, 220 135 C 188 168, 155 205, 110 255" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M 270 80 C 248 52, 228 20, 215 0" stroke="#c9a84c" strokeWidth="1" strokeLinecap="round"/>
            <path d="M 220 135 C 250 118, 285 105, 312 100" stroke="#c9a84c" strokeWidth="1" strokeLinecap="round"/>
            <path d="M 270 80 C 305 68, 345 55, 378 45" stroke="#c9a84c" strokeWidth="0.8" strokeLinecap="round"/>
            <g transform="translate(215,0)"><ellipse cx="0" cy="-10" rx="6" ry="10" fill="#e8c97a" opacity="0.9"/><ellipse cx="0" cy="-10" rx="6" ry="10" fill="#e8c97a" opacity="0.9" transform="rotate(72)"/><ellipse cx="0" cy="-10" rx="6" ry="10" fill="#e8c97a" opacity="0.9" transform="rotate(144)"/><ellipse cx="0" cy="-10" rx="6" ry="10" fill="#e8c97a" opacity="0.9" transform="rotate(216)"/><ellipse cx="0" cy="-10" rx="6" ry="10" fill="#e8c97a" opacity="0.9" transform="rotate(288)"/><circle cx="0" cy="0" r="4" fill="#c9a84c"/></g>
            <g transform="translate(312,102)"><ellipse cx="0" cy="-8" rx="5" ry="8" fill="#c9a84c" opacity="0.85"/><ellipse cx="0" cy="-8" rx="5" ry="8" fill="#c9a84c" opacity="0.85" transform="rotate(72)"/><ellipse cx="0" cy="-8" rx="5" ry="8" fill="#c9a84c" opacity="0.85" transform="rotate(144)"/><ellipse cx="0" cy="-8" rx="5" ry="8" fill="#c9a84c" opacity="0.85" transform="rotate(216)"/><ellipse cx="0" cy="-8" rx="5" ry="8" fill="#c9a84c" opacity="0.85" transform="rotate(288)"/><circle cx="0" cy="0" r="3" fill="#e8c97a"/></g>
            <g transform="translate(378,47)"><ellipse cx="0" cy="-6" rx="3.5" ry="6" fill="#c49ad8" opacity="0.8"/><ellipse cx="0" cy="-6" rx="3.5" ry="6" fill="#c49ad8" opacity="0.8" transform="rotate(72)"/><ellipse cx="0" cy="-6" rx="3.5" ry="6" fill="#c49ad8" opacity="0.8" transform="rotate(144)"/><ellipse cx="0" cy="-6" rx="3.5" ry="6" fill="#c49ad8" opacity="0.8" transform="rotate(216)"/><ellipse cx="0" cy="-6" rx="3.5" ry="6" fill="#c49ad8" opacity="0.8" transform="rotate(288)"/><circle cx="0" cy="0" r="2.5" fill="#c9a84c"/></g>
            <ellipse cx="248" cy="55" rx="3.5" ry="6" fill="#c9a84c" opacity="0.55" transform="rotate(-30,248,55)"/>
            <path d="M 268 100 C 282 90, 296 98, 285 110 C 274 122, 258 112, 268 100 Z" fill="#c9a84c" opacity="0.3"/>
          </svg>
        </div>
        {/* Scattered blossoms — bottom left */}
        <div className="absolute bottom-8 left-0 w-64 h-64 pointer-events-none select-none opacity-20 hidden md:block">
          <svg viewBox="0 0 260 260" fill="none">
            <path d="M 0 260 C 35 225, 72 195, 112 158 C 140 132, 172 102, 210 65" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round"/>
            <path d="M 72 195 C 50 180, 28 170, 5 175" stroke="#c9a84c" strokeWidth="0.9" strokeLinecap="round"/>
            <g transform="translate(112,158)"><ellipse cx="0" cy="-8" rx="4.5" ry="8" fill="#e8c97a" opacity="0.9"/><ellipse cx="0" cy="-8" rx="4.5" ry="8" fill="#e8c97a" opacity="0.9" transform="rotate(72)"/><ellipse cx="0" cy="-8" rx="4.5" ry="8" fill="#e8c97a" opacity="0.9" transform="rotate(144)"/><ellipse cx="0" cy="-8" rx="4.5" ry="8" fill="#e8c97a" opacity="0.9" transform="rotate(216)"/><ellipse cx="0" cy="-8" rx="4.5" ry="8" fill="#e8c97a" opacity="0.9" transform="rotate(288)"/><circle cx="0" cy="0" r="3" fill="#c9a84c"/></g>
            <g transform="translate(5,173)"><ellipse cx="0" cy="-6" rx="3.5" ry="6" fill="#c49ad8" opacity="0.8"/><ellipse cx="0" cy="-6" rx="3.5" ry="6" fill="#c49ad8" opacity="0.8" transform="rotate(72)"/><ellipse cx="0" cy="-6" rx="3.5" ry="6" fill="#c49ad8" opacity="0.8" transform="rotate(144)"/><ellipse cx="0" cy="-6" rx="3.5" ry="6" fill="#c49ad8" opacity="0.8" transform="rotate(216)"/><ellipse cx="0" cy="-6" rx="3.5" ry="6" fill="#c49ad8" opacity="0.8" transform="rotate(288)"/><circle cx="0" cy="0" r="2.5" fill="#e8c97a"/></g>
            <path d="M 128 142 C 140 133, 152 143, 142 153 C 132 163, 118 152, 128 142 Z" fill="#c9a84c" opacity="0.28"/>
          </svg>
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <AnimateIn direction="up" className="text-center mb-16">
            <p className="tracking-[0.35em] text-[#c9a84c] text-xs uppercase mb-3" style={{ fontFamily: "var(--font-jost)" }}>Most Loved</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#f5eee0]" style={{ fontFamily: "var(--font-playfair)" }}>
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
                bg: "from-[#4a1a5e] to-[#1a0e22]",
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
                bg: "from-[#38154e] to-[#0d0a08]",
              },
            ].map((s, i) => (
              <AnimateIn key={s.name} direction="up" delay={i * 100}>
                <div className={`group relative flex flex-col justify-between p-8 h-full min-h-72 bg-linear-to-br ${s.bg} border border-[#c9a84c]/15 hover:border-[#c9a84c]/60 hover:-translate-y-2 hover:shadow-[0_16px_50px_rgba(201,168,76,0.18)] transition-all duration-400 overflow-hidden`}>
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

      {/* ── STEP INSIDE ── */}
      <section className="py-28 px-6 bg-[#160f1c] relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up" className="text-center mb-12">
            <p className="tracking-[0.35em] text-[#c9a84c] text-xs uppercase mb-3" style={{ fontFamily: "var(--font-jost)" }}>Our Space</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#f5eee0]" style={{ fontFamily: "var(--font-playfair)" }}>Step Inside</h2>
            <span className="gold-divider-shimmer w-32 mx-auto mt-6 block" />
          </AnimateIn>
          {/* Big + side layout */}
          <AnimateIn direction="up" delay={100}>
            {/* Mobile: single column stack. md+: big left + 2 stacked right */}
            <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-3">
              <div className="md:col-span-2 md:row-span-2 relative aspect-video md:aspect-auto overflow-hidden border border-[#c9a84c]/15 hover:border-[#c9a84c]/50 transition-all duration-500 group md:min-h-96">
                <Image src="/store/2555B829-65E6-44EC-B399-89FC3F9419FC.jpeg" alt="My Color Nails and Spa" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-linear-to-t from-[#160f1c]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="md:col-span-1 md:row-span-1 relative aspect-video overflow-hidden border border-[#c9a84c]/15 hover:border-[#c9a84c]/50 transition-all duration-500 group">
                <Image src="/store/4A795753-75D2-4A44-B1D6-B97B5448533B.jpeg" alt="Nail polish wall" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="md:col-span-1 md:row-span-1 relative aspect-video overflow-hidden border border-[#c9a84c]/15 hover:border-[#c9a84c]/50 transition-all duration-500 group">
                <Image src="/store/A4E8EF0D-314F-4D83-B8E9-F33D7A601F16.jpeg" alt="Coffee bar" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
            {/* Bottom row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
              {[
                { src: "/store/70F97C0E-CCC3-401D-8B42-67F05F4F95D7.jpeg", alt: "Pedicure chairs" },
                { src: "/store/5E3D290D-D212-4E93-8A67-00AE2F7615DD.jpeg", alt: "Salon floor" },
                { src: "/store/3FA8720D-2CE9-4534-81A3-934F14052F72.jpeg", alt: "Salon interior" },
              ].map(({ src, alt }) => (
                <div key={src} className="relative aspect-video overflow-hidden border border-[#c9a84c]/15 hover:border-[#c9a84c]/50 transition-all duration-500 group">
                  <Image src={src} alt={alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── GALLERY CTA ── */}
      <section className="relative py-24 px-6 overflow-hidden bg-[#1c1230]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,rgba(80,30,110,0.5),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_50%_50%,rgba(201,168,76,0.07),transparent)] hero-glow-1" />
        <AnimateIn direction="up" className="relative z-10 max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-3 text-center md:text-left">
            <p className="tracking-[0.35em] text-[#c9a84c] text-xs uppercase" style={{ fontFamily: "var(--font-jost)" }}>Our Work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#f5eee0]" style={{ fontFamily: "var(--font-playfair)" }}>
              See What We&apos;ve Been Creating
            </h2>
            <p className="text-[#d4c4a8] text-sm leading-relaxed max-w-md" style={{ fontFamily: "var(--font-jost)" }}>
              From intricate nail art to deeply relaxing head spas — browse our gallery to get inspired for your next visit.
            </p>
          </div>
          <Link
            href="/gallery"
            className="shrink-0 px-10 py-4 bg-[#c9a84c] text-[#0d0a08] font-semibold tracking-widest uppercase text-sm hover:bg-[#e8c97a] hover:scale-105 transition-all duration-300 shadow-[0_4px_20px_rgba(201,168,76,0.3)]"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            View Gallery
          </Link>
        </AnimateIn>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-28 px-6 bg-[#130e1a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_50%,rgba(60,20,80,0.25),transparent)] pointer-events-none" />
        {/* Floral — top left */}
        <div className="absolute top-0 left-0 w-80 h-80 pointer-events-none select-none opacity-28 hidden md:block">
          <svg viewBox="0 0 320 320" fill="none">
            <path d="M 0 20 C 50 55, 105 85, 155 138 C 185 170, 215 205, 255 258" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M 105 85 C 82 60, 62 30, 50 5" stroke="#c9a84c" strokeWidth="1" strokeLinecap="round"/>
            <path d="M 155 138 C 128 122, 105 108, 82 105" stroke="#c9a84c" strokeWidth="1" strokeLinecap="round"/>
            <g transform="translate(50,5)"><ellipse cx="0" cy="-10" rx="6" ry="10" fill="#e8c97a" opacity="0.9"/><ellipse cx="0" cy="-10" rx="6" ry="10" fill="#e8c97a" opacity="0.9" transform="rotate(72)"/><ellipse cx="0" cy="-10" rx="6" ry="10" fill="#e8c97a" opacity="0.9" transform="rotate(144)"/><ellipse cx="0" cy="-10" rx="6" ry="10" fill="#e8c97a" opacity="0.9" transform="rotate(216)"/><ellipse cx="0" cy="-10" rx="6" ry="10" fill="#e8c97a" opacity="0.9" transform="rotate(288)"/><circle cx="0" cy="0" r="4" fill="#c9a84c"/></g>
            <g transform="translate(82,107)"><ellipse cx="0" cy="-7" rx="4.5" ry="7" fill="#c9a84c" opacity="0.85"/><ellipse cx="0" cy="-7" rx="4.5" ry="7" fill="#c9a84c" opacity="0.85" transform="rotate(72)"/><ellipse cx="0" cy="-7" rx="4.5" ry="7" fill="#c9a84c" opacity="0.85" transform="rotate(144)"/><ellipse cx="0" cy="-7" rx="4.5" ry="7" fill="#c9a84c" opacity="0.85" transform="rotate(216)"/><ellipse cx="0" cy="-7" rx="4.5" ry="7" fill="#c9a84c" opacity="0.85" transform="rotate(288)"/><circle cx="0" cy="0" r="2.5" fill="#e8c97a"/></g>
            <g transform="translate(255,258)"><ellipse cx="0" cy="-6" rx="4" ry="6" fill="#c49ad8" opacity="0.8"/><ellipse cx="0" cy="-6" rx="4" ry="6" fill="#c49ad8" opacity="0.8" transform="rotate(72)"/><ellipse cx="0" cy="-6" rx="4" ry="6" fill="#c49ad8" opacity="0.8" transform="rotate(144)"/><ellipse cx="0" cy="-6" rx="4" ry="6" fill="#c49ad8" opacity="0.8" transform="rotate(216)"/><ellipse cx="0" cy="-6" rx="4" ry="6" fill="#c49ad8" opacity="0.8" transform="rotate(288)"/><circle cx="0" cy="0" r="2.5" fill="#c9a84c"/></g>
            <ellipse cx="78" cy="60" rx="3.5" ry="5.5" fill="#c9a84c" opacity="0.5" transform="rotate(-25,78,60)"/>
            <path d="M 128 122 C 140 113, 152 122, 142 133 C 132 144, 118 132, 128 122 Z" fill="#c9a84c" opacity="0.28"/>
          </svg>
        </div>
        {/* Floral — bottom right */}
        <div className="absolute bottom-0 right-0 w-72 h-72 pointer-events-none select-none opacity-22 hidden md:block">
          <svg viewBox="0 0 288 288" fill="none">
            <path d="M 288 268 C 248 238, 205 205, 162 162 C 130 130, 98 95, 60 48" stroke="#c9a84c" strokeWidth="1.3" strokeLinecap="round"/>
            <path d="M 205 205 C 228 218, 255 228, 282 232" stroke="#c9a84c" strokeWidth="0.9" strokeLinecap="round"/>
            <path d="M 162 162 C 182 148, 205 138, 225 135" stroke="#c9a84c" strokeWidth="0.9" strokeLinecap="round"/>
            <g transform="translate(60,48)"><ellipse cx="0" cy="-8" rx="5" ry="8" fill="#e8c97a" opacity="0.9"/><ellipse cx="0" cy="-8" rx="5" ry="8" fill="#e8c97a" opacity="0.9" transform="rotate(72)"/><ellipse cx="0" cy="-8" rx="5" ry="8" fill="#e8c97a" opacity="0.9" transform="rotate(144)"/><ellipse cx="0" cy="-8" rx="5" ry="8" fill="#e8c97a" opacity="0.9" transform="rotate(216)"/><ellipse cx="0" cy="-8" rx="5" ry="8" fill="#e8c97a" opacity="0.9" transform="rotate(288)"/><circle cx="0" cy="0" r="3" fill="#c9a84c"/></g>
            <g transform="translate(225,137)"><ellipse cx="0" cy="-6" rx="3.5" ry="6" fill="#c49ad8" opacity="0.8"/><ellipse cx="0" cy="-6" rx="3.5" ry="6" fill="#c49ad8" opacity="0.8" transform="rotate(72)"/><ellipse cx="0" cy="-6" rx="3.5" ry="6" fill="#c49ad8" opacity="0.8" transform="rotate(144)"/><ellipse cx="0" cy="-6" rx="3.5" ry="6" fill="#c49ad8" opacity="0.8" transform="rotate(216)"/><ellipse cx="0" cy="-6" rx="3.5" ry="6" fill="#c49ad8" opacity="0.8" transform="rotate(288)"/><circle cx="0" cy="0" r="2.5" fill="#e8c97a"/></g>
            <path d="M 178 148 C 190 140, 200 150, 190 160 C 180 170, 168 158, 178 148 Z" fill="#c9a84c" opacity="0.28"/>
          </svg>
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <AnimateIn direction="up" className="text-center mb-16">
            <p className="tracking-[0.35em] text-[#c9a84c] text-xs uppercase mb-3" style={{ fontFamily: "var(--font-jost)" }}>Kind Words</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#f5eee0]" style={{ fontFamily: "var(--font-playfair)" }}>
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
                <div className="flex flex-col gap-5 p-8 h-full bg-[#1e1430] border border-[#c9a84c]/10 hover:border-[#c9a84c]/40 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(201,168,76,0.12)] transition-all duration-400">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <span key={si} className="text-[#c9a84c] text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-[#d4c4a8] text-sm leading-relaxed italic flex-1" style={{ fontFamily: "var(--font-jost)" }}>
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
      <section className="py-28 px-6 bg-[#100c16] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_50%,rgba(55,18,75,0.25),transparent)] pointer-events-none" />
        {/* Floral — right side */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 pointer-events-none select-none opacity-25 hidden lg:block">
          <svg viewBox="0 0 288 288" fill="none">
            <path d="M 288 144 C 245 130, 200 110, 158 80 C 128 58, 95 30, 58 0" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M 200 110 C 220 135, 232 162, 228 190" stroke="#c9a84c" strokeWidth="1" strokeLinecap="round"/>
            <path d="M 158 80 C 172 58, 188 35, 195 12" stroke="#c9a84c" strokeWidth="1" strokeLinecap="round"/>
            <g transform="translate(58,0)"><ellipse cx="0" cy="-9" rx="5.5" ry="9" fill="#e8c97a" opacity="0.9"/><ellipse cx="0" cy="-9" rx="5.5" ry="9" fill="#e8c97a" opacity="0.9" transform="rotate(72)"/><ellipse cx="0" cy="-9" rx="5.5" ry="9" fill="#e8c97a" opacity="0.9" transform="rotate(144)"/><ellipse cx="0" cy="-9" rx="5.5" ry="9" fill="#e8c97a" opacity="0.9" transform="rotate(216)"/><ellipse cx="0" cy="-9" rx="5.5" ry="9" fill="#e8c97a" opacity="0.9" transform="rotate(288)"/><circle cx="0" cy="0" r="3.5" fill="#c9a84c"/></g>
            <g transform="translate(228,192)"><ellipse cx="0" cy="-7" rx="4" ry="7" fill="#c49ad8" opacity="0.85"/><ellipse cx="0" cy="-7" rx="4" ry="7" fill="#c49ad8" opacity="0.85" transform="rotate(72)"/><ellipse cx="0" cy="-7" rx="4" ry="7" fill="#c49ad8" opacity="0.85" transform="rotate(144)"/><ellipse cx="0" cy="-7" rx="4" ry="7" fill="#c49ad8" opacity="0.85" transform="rotate(216)"/><ellipse cx="0" cy="-7" rx="4" ry="7" fill="#c49ad8" opacity="0.85" transform="rotate(288)"/><circle cx="0" cy="0" r="2.5" fill="#e8c97a"/></g>
            <g transform="translate(195,14)"><ellipse cx="0" cy="-6" rx="3.5" ry="6" fill="#c9a84c" opacity="0.8"/><ellipse cx="0" cy="-6" rx="3.5" ry="6" fill="#c9a84c" opacity="0.8" transform="rotate(72)"/><ellipse cx="0" cy="-6" rx="3.5" ry="6" fill="#c9a84c" opacity="0.8" transform="rotate(144)"/><ellipse cx="0" cy="-6" rx="3.5" ry="6" fill="#c9a84c" opacity="0.8" transform="rotate(216)"/><ellipse cx="0" cy="-6" rx="3.5" ry="6" fill="#c9a84c" opacity="0.8" transform="rotate(288)"/><circle cx="0" cy="0" r="2" fill="#e8c97a"/></g>
            <ellipse cx="175" cy="62" rx="3" ry="5" fill="#c9a84c" opacity="0.5" transform="rotate(-20,175,62)"/>
            <path d="M 172 95 C 184 86, 196 96, 186 107 C 176 118, 162 106, 172 95 Z" fill="#c9a84c" opacity="0.28"/>
          </svg>
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <AnimateIn direction="up" className="text-center mb-16">
            <p className="tracking-[0.35em] text-[#c9a84c] text-xs uppercase mb-3" style={{ fontFamily: "var(--font-jost)" }}>Find Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#f5eee0]" style={{ fontFamily: "var(--font-playfair)" }}>
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
                  <p className="text-[#f5eee0] text-lg font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>Sudley Manor Square</p>
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
                      <span className="text-[#d4c4a8]" style={{ fontFamily: "var(--font-jost)" }}>{day}</span>
                      <span className="text-[#f5eee0]" style={{ fontFamily: "var(--font-jost)" }}>{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── BOOKING CTA ── */}
      <section id="booking" className="relative py-32 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-linear-to-br from-[#1e0d2e] via-[#2a1040] to-[#1a0820]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,rgba(201,168,76,0.07),transparent)] hero-glow-1" />
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#c9a84c]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#c9a84c]/40 to-transparent" />
        {/* Corner brackets */}
        <div className="bracket-tl absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-[#c9a84c]/50" />
        <div className="bracket-tr absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-[#c9a84c]/50" />
        <div className="bracket-bl absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-[#c9a84c]/50" />
        <div className="bracket-br absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-[#c9a84c]/50" />
        {/* Subtle floral hint top-right */}
        <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none select-none opacity-20 hidden md:block">
          <svg viewBox="0 0 260 260" fill="none">
            <path d="M 260 10 C 220 40, 170 65, 130 110 C 108 135, 82 165, 50 210" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round"/>
            <path d="M 170 65 C 195 48, 228 36, 255 28" stroke="#c9a84c" strokeWidth="0.8" strokeLinecap="round"/>
            <g transform="translate(130,110)"><ellipse cx="0" cy="-7" rx="4" ry="7" fill="#e8c97a" opacity="0.9"/><ellipse cx="0" cy="-7" rx="4" ry="7" fill="#e8c97a" opacity="0.9" transform="rotate(72)"/><ellipse cx="0" cy="-7" rx="4" ry="7" fill="#e8c97a" opacity="0.9" transform="rotate(144)"/><ellipse cx="0" cy="-7" rx="4" ry="7" fill="#e8c97a" opacity="0.9" transform="rotate(216)"/><ellipse cx="0" cy="-7" rx="4" ry="7" fill="#e8c97a" opacity="0.9" transform="rotate(288)"/><circle cx="0" cy="0" r="3" fill="#c9a84c"/></g>
            <g transform="translate(255,30)"><ellipse cx="0" cy="-5" rx="3" ry="5" fill="#c9a84c" opacity="0.8"/><ellipse cx="0" cy="-5" rx="3" ry="5" fill="#c9a84c" opacity="0.8" transform="rotate(72)"/><ellipse cx="0" cy="-5" rx="3" ry="5" fill="#c9a84c" opacity="0.8" transform="rotate(144)"/><ellipse cx="0" cy="-5" rx="3" ry="5" fill="#c9a84c" opacity="0.8" transform="rotate(216)"/><ellipse cx="0" cy="-5" rx="3" ry="5" fill="#c9a84c" opacity="0.8" transform="rotate(288)"/><circle cx="0" cy="0" r="2" fill="#e8c97a"/></g>
            <ellipse cx="150" cy="82" rx="3" ry="5" fill="#c9a84c" opacity="0.6" transform="rotate(-30,150,82)"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Header */}
          <AnimateIn direction="up" className="text-center mb-16">
            <p className="tracking-[0.4em] text-[#c9a84c] text-xs uppercase mb-4" style={{ fontFamily: "var(--font-jost)" }}>Ready to treat yourself?</p>
            <h2 className="text-5xl md:text-6xl font-bold text-[#f5eee0] leading-tight mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              Book Your <span className="italic gold-text-shimmer">Appointment</span>
            </h2>
            <span className="gold-divider-shimmer w-32 mx-auto block mb-6" />
            <p className="text-[#d4c4a8] max-w-md mx-auto leading-relaxed" style={{ fontFamily: "var(--font-jost)" }}>
              Treat yourself to the experience you deserve. Our team is ready — just give us a call or walk right in.
            </p>
          </AnimateIn>

          {/* Main action card */}
          <AnimateIn direction="up" delay={150}>
            <div className="relative mx-auto max-w-lg mb-8 p-10 bg-[rgba(255,255,255,0.04)] border border-[#c9a84c]/25 hover:border-[#c9a84c]/60 transition-all duration-500 hover:shadow-[0_0_60px_rgba(201,168,76,0.15)] text-center">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(201,168,76,0.06),transparent)] pointer-events-none" />
              <p className="text-[#c9a84c] text-xs tracking-[0.35em] uppercase mb-3" style={{ fontFamily: "var(--font-jost)" }}>Call to Book</p>
              <a
                href="tel:+17033303103"
                className="phone-pulse block text-4xl md:text-5xl font-bold text-[#f5eee0] hover:text-[#c9a84c] transition-colors duration-300 tracking-wide mb-8"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                (703) 330-3103
              </a>
              <a
                href="tel:+17033303103"
                className="group inline-flex items-center gap-3 px-12 py-4 bg-[#c9a84c] text-[#0d0a08] font-semibold tracking-widest uppercase text-sm hover:bg-[#e8c97a] hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_4px_24px_rgba(201,168,76,0.35)]"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                Book Appointment
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </AnimateIn>

          {/* Info row */}
          <AnimateIn direction="up" delay={250}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="text-center p-5 border border-[#c9a84c]/12 bg-white/[0.02] hover:border-[#c9a84c]/30 transition-colors duration-300">
                <p className="text-[#c9a84c] text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "var(--font-jost)" }}>Location</p>
                <p className="text-[#f5eee0] text-sm font-medium" style={{ fontFamily: "var(--font-jost)" }}>Sudley Manor Square</p>
                <p className="text-[#d4c4a8]/60 text-xs mt-0.5" style={{ fontFamily: "var(--font-jost)" }}>Manassas, VA 20109</p>
              </div>
              <div className="text-center p-5 border border-[#c9a84c]/12 bg-white/[0.02] hover:border-[#c9a84c]/30 transition-colors duration-300">
                <p className="text-[#c9a84c] text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "var(--font-jost)" }}>Weekdays</p>
                <p className="text-[#f5eee0] text-sm font-medium" style={{ fontFamily: "var(--font-jost)" }}>Mon – Fri</p>
                <p className="text-[#d4c4a8]/60 text-xs mt-0.5" style={{ fontFamily: "var(--font-jost)" }}>10:00 AM – 7:30 PM</p>
              </div>
              <div className="text-center p-5 border border-[#c9a84c]/12 bg-white/[0.02] hover:border-[#c9a84c]/30 transition-colors duration-300">
                <p className="text-[#c9a84c] text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "var(--font-jost)" }}>Weekend</p>
                <p className="text-[#f5eee0] text-sm font-medium" style={{ fontFamily: "var(--font-jost)" }}>Sat / Sun</p>
                <p className="text-[#d4c4a8]/60 text-xs mt-0.5" style={{ fontFamily: "var(--font-jost)" }}>10–7 / 11–5</p>
              </div>
            </div>
          </AnimateIn>

          {/* Social + walk-ins */}
          <AnimateIn direction="up" delay={350} className="flex items-center justify-center gap-4 mt-8">
            <a href="https://www.instagram.com/mycolornailsnspa/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="w-9 h-9 flex items-center justify-center border border-[#c9a84c]/20 text-[#d4c4a8]/50 hover:text-[#c9a84c] hover:border-[#c9a84c]/50 transition-all duration-300">
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://www.facebook.com/p/My-Color-Nail-Spa-61580156893192/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="w-9 h-9 flex items-center justify-center border border-[#c9a84c]/20 text-[#d4c4a8]/50 hover:text-[#c9a84c] hover:border-[#c9a84c]/50 transition-all duration-300">
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <span className="text-[#d4c4a8]/35 text-xs tracking-widest" style={{ fontFamily: "var(--font-jost)" }}>Walk-ins always welcome</span>
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
