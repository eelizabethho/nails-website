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
        </div>
      </main>
      <Footer />
    </div>
  );
}
