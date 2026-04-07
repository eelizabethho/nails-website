import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AnimateIn from "../components/AnimateIn";

export const metadata = {
  title: "Gallery — My Color Nails and Spa",
};

const manicureItems = [
  { type: "img", src: "m1.png" },
  { type: "img", src: "m2.png" },
  { type: "img", src: "m3.png" },
  { type: "vid", src: "v1.mov" },
  { type: "img", src: "m4.png" },
  { type: "vid", src: "v2.mov" },
  { type: "img", src: "m5.png" },
  { type: "img", src: "m6.png" },
  { type: "vid", src: "v3.MP4" },
  { type: "img", src: "m7.png" },
  { type: "vid", src: "v4.MP4" },
  { type: "img", src: "m8.png" },
];

const headSpaPedicureVideos = [
  "v12044gd0000d47r05fog65iquk3vdb0_3.MP4",
  "v12044gd0000d4qd4tfog65tcsdbcfc0_2.MP4",
  "v12044gd0000d62hdcvog65upldnv6ig_2.MP4",
  "v12044gd0000d6h1eafog65kqs1ruavg.MP4",
];

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1 pt-32 pb-28 px-6 bg-linear-to-b from-[#100c09] to-[#140d18]">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up" className="text-center mb-20">
            <p className="tracking-[0.35em] text-[#c9a84c] text-xs uppercase mb-3" style={{ fontFamily: "var(--font-jost)" }}>Our Work</p>
            <h1 className="text-5xl md:text-6xl font-bold text-[#f0e8d8]" style={{ fontFamily: "var(--font-playfair)" }}>
              Gallery
            </h1>
            <span className="gold-divider-shimmer w-32 mx-auto mt-6 block" />
          </AnimateIn>

          <div className="flex flex-col gap-20">
            {/* ── Manicure ── */}
            <AnimateIn direction="up">
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl font-bold text-[#f0e8d8]" style={{ fontFamily: "var(--font-playfair)" }}>Manicure</h2>
                  <span className="flex-1 gold-divider-shimmer" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {manicureItems.map((item, i) => (
                    <AnimateIn key={item.src} direction="fade" delay={i * 50}>
                      <div className="relative aspect-square overflow-hidden border border-[#c9a84c]/10 hover:border-[#c9a84c]/40 hover:scale-[1.02] hover:shadow-[0_4px_24px_rgba(201,168,76,0.12)] transition-all duration-500 group cursor-pointer">
                        {item.type === "img" ? (
                          <Image
                            src={`/manicure/${item.src}`}
                            alt={`Manicure ${i + 1}`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 768px) 50vw, 25vw"
                          />
                        ) : (
                          <video
                            src={`/manicure/${item.src}`}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        )}
                      </div>
                    </AnimateIn>
                  ))}
                </div>
              </div>
            </AnimateIn>

            {/* ── Head Spa & Pedicure ── */}
            <AnimateIn direction="up" delay={80}>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl font-bold text-[#f0e8d8]" style={{ fontFamily: "var(--font-playfair)" }}>Head Spa &amp; Pedicure</h2>
                  <span className="flex-1 gold-divider-shimmer" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {headSpaPedicureVideos.map((file, i) => (
                    <AnimateIn key={file} direction="fade" delay={i * 60}>
                      <div className="relative aspect-square overflow-hidden border border-[#c9a84c]/10 hover:border-[#c9a84c]/40 hover:scale-[1.02] hover:shadow-[0_4px_24px_rgba(201,168,76,0.12)] transition-all duration-500 group cursor-pointer">
                        <video
                          src={`/pedicuare/${file}`}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </AnimateIn>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
