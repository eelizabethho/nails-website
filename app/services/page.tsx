import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AnimateIn from "../components/AnimateIn";

export const metadata = {
  title: "Services — My Color Nails and Spa",
};

const services = [
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
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1 pt-32 pb-28 px-6 bg-[#100c09]">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up" className="text-center mb-20">
            <p className="tracking-[0.35em] text-[#c9a84c] text-xs uppercase mb-3" style={{ fontFamily: "var(--font-jost)" }}>What We Offer</p>
            <h1 className="text-5xl md:text-6xl font-bold text-[#f0e8d8]" style={{ fontFamily: "var(--font-playfair)" }}>
              Our Services
            </h1>
            <span className="gold-divider-shimmer w-32 mx-auto mt-6 block" />
          </AnimateIn>

          <div className="flex flex-col gap-20">
            {services.map((section, si) => (
              <AnimateIn key={section.category} direction="up" delay={si * 60}>
                <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                  <div className="md:w-44 shrink-0 flex md:flex-col gap-2 md:gap-3 items-center md:items-start md:pt-1">
                    <p className="text-[#c9a84c]/50 text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-jost)" }}>
                      {section.label}
                    </p>
                    <h2 className="text-2xl font-bold text-[#f0e8d8]" style={{ fontFamily: "var(--font-playfair)" }}>
                      {section.category}
                    </h2>
                    <span className="hidden md:block gold-divider-shimmer w-12 mt-1" />
                  </div>
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

            <AnimateIn direction="fade" delay={200}>
              <p className="text-xs text-[#c8b89a]/40 tracking-wider border-t border-[#c9a84c]/10 pt-6" style={{ fontFamily: "var(--font-jost)" }}>
                ✦ &nbsp; Gel add-on for pedicures +$10 (save $5) &nbsp;·&nbsp; Prices marked &quot;+&quot; may vary by length &amp; style
              </p>
            </AnimateIn>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
