import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AnimateIn from "../components/AnimateIn";

export const metadata = {
  title: "About — My Color Nails and Spa",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1 pt-32 pb-28 px-6 bg-[#140d18]">
        <div className="max-w-4xl mx-auto">
          <AnimateIn direction="up" className="text-center mb-20">
            <p className="tracking-[0.35em] text-[#c9a84c] text-xs uppercase mb-3" style={{ fontFamily: "var(--font-jost)" }}>Our Story</p>
            <h1 className="text-5xl md:text-6xl font-bold text-[#f0e8d8]" style={{ fontFamily: "var(--font-playfair)" }}>
              About Us
            </h1>
            <span className="gold-divider-shimmer w-32 mx-auto mt-6 block" />
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimateIn direction="left">
              <div className="relative">
                <div className="relative w-full aspect-4/5 overflow-hidden border border-[#c9a84c]/20">
                  <Image
                    src="/store/3FA8720D-2CE9-4534-81A3-934F14052F72.jpeg"
                    alt="My Color Nails and Spa interior"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full aspect-4/5 border border-[#c9a84c]/10 pointer-events-none" />
                <div className="absolute top-6 left-6 w-12 h-12 border-t border-l border-[#c9a84c]/60 pointer-events-none" />
                <div className="absolute bottom-6 right-2 w-12 h-12 border-b border-r border-[#c9a84c]/60 pointer-events-none" />
              </div>
            </AnimateIn>

            <AnimateIn direction="right">
              <div className="flex flex-col gap-6">
                <p className="tracking-[0.35em] text-[#c9a84c] text-xs uppercase" style={{ fontFamily: "var(--font-jost)" }}>About My Color Nails &amp; Spa</p>
                <h2 className="text-4xl font-bold text-[#f5eee0] leading-snug" style={{ fontFamily: "var(--font-playfair)" }}>
                  Crafted with Care,<br />
                  <span className="italic text-[#c9a84c]">Every Time</span>
                </h2>
                <span className="gold-divider-shimmer w-16 block" />
                <p className="text-[#d4c4a8] leading-relaxed" style={{ fontFamily: "var(--font-jost)" }}>
                  At My Color Nails &amp; Spa, every detail is crafted with care to create a space where beauty meets relaxation.
                </p>
                <p className="text-[#d4c4a8] leading-relaxed" style={{ fontFamily: "var(--font-jost)" }}>
                  We are a boutique salon in Manassas dedicated to delivering high-quality nail services, personalized designs, and deeply relaxing spa experiences. From precision nail artistry to our signature head spa treatments, every service is designed to help you feel refreshed, confident, and taken care of.
                </p>
                <p className="text-[#d4c4a8] leading-relaxed" style={{ fontFamily: "var(--font-jost)" }}>
                  Our team specializes in custom nail artistry — from clean, minimal sets to the most intricate and complex designs. Whether you come in with a simple idea or a detailed inspiration, we have the skill and creativity to bring it to life with precision.
                </p>
                <p className="text-[#d4c4a8] leading-relaxed" style={{ fontFamily: "var(--font-jost)" }}>
                  We focus on both results and experience — ensuring every visit feels calm, clean, and thoughtfully executed.
                </p>
                <ul className="flex flex-col gap-3 mt-2">
                  {[
                    "Premium products and strict hygiene standards",
                    "Experts in Gel-X, acrylic, and advanced nail design",
                    "Ability to execute highly detailed, complex nail art",
                    "Signature head spa and spa pedicure experiences",
                    "Personalized service tailored to each client",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-[#d4c4a8]" style={{ fontFamily: "var(--font-jost)" }}>
                      <span className="text-[#c9a84c] text-xs shrink-0">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          </div>

          {/* Photo grid */}
          <AnimateIn direction="up" className="mt-28">
            <p className="tracking-[0.35em] text-[#c9a84c] text-xs uppercase text-center mb-4" style={{ fontFamily: "var(--font-jost)" }}>Our Space</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#f5eee0] text-center mb-2" style={{ fontFamily: "var(--font-playfair)" }}>Step Inside</h2>
            <span className="gold-divider-shimmer w-24 mx-auto block mb-10" />
            {/* Top row: big + tall */}
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2 relative aspect-video overflow-hidden border border-[#c9a84c]/15 hover:border-[#c9a84c]/50 transition-all duration-500 group">
                <Image src="/store/2555B829-65E6-44EC-B399-89FC3F9419FC.jpeg" alt="Salon interior" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="col-span-1 relative aspect-video overflow-hidden border border-[#c9a84c]/15 hover:border-[#c9a84c]/50 transition-all duration-500 group">
                <Image src="/store/4A795753-75D2-4A44-B1D6-B97B5448533B.jpeg" alt="Nail polish wall" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              {/* Bottom row: 3 equal */}
              <div className="col-span-1 relative aspect-video overflow-hidden border border-[#c9a84c]/15 hover:border-[#c9a84c]/50 transition-all duration-500 group">
                <Image src="/store/70F97C0E-CCC3-401D-8B42-67F05F4F95D7.jpeg" alt="Pedicure chairs" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="col-span-1 relative aspect-video overflow-hidden border border-[#c9a84c]/15 hover:border-[#c9a84c]/50 transition-all duration-500 group">
                <Image src="/store/A4E8EF0D-314F-4D83-B8E9-F33D7A601F16.jpeg" alt="Coffee bar and waiting area" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="col-span-1 relative aspect-video overflow-hidden border border-[#c9a84c]/15 hover:border-[#c9a84c]/50 transition-all duration-500 group">
                <Image src="/store/5E3D290D-D212-4E93-8A67-00AE2F7615DD.jpeg" alt="Salon interior" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </AnimateIn>
        </div>
      </main>
      <Footer />
    </div>
  );
}
