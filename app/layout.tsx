import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Color Nails and Spa",
  description: "Luxury nail care & artistry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jost.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#0d0a08] text-[#f0e8d8]">
        <div className="page-enter flex flex-col min-h-full">
          {children}
        </div>
      </body>
    </html>
  );
}
