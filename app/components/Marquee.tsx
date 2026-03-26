"use client";

const items = [
  "My Color Nails & Spa",
  "✦",
  "Manassas, VA",
  "✦",
  "Manicures",
  "✦",
  "Pedicures",
  "✦",
  "Head Spa",
  "✦",
  "Nail Art",
  "✦",
  "Open 7 Days",
  "✦",
  "(703) 330-3103",
  "✦",
];

export default function Marquee() {
  const repeated = [...items, ...items];
  return (
    <div className="overflow-hidden bg-[#c9a84c]/08 border-y border-[#c9a84c]/15 py-3">
      <div className="flex marquee-track whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="mx-6 text-xs tracking-[0.25em] uppercase text-[#c9a84c]/70"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
