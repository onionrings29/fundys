import type { Metadata } from "next";
import { Pacifico, Lora } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const pacifico = Pacifico({
  weight: "400",
  variable: "--font-pacifico",
  subsets: ["latin"],
  display: "swap",
});

const michegar = localFont({
  src: "../../public/fonts/Michegar.ttf",
  variable: "--font-michegar",
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fundy's — Gourmet Cheese Spreads",
  description:
    "Artisan cheese spreads made with imported Edam cheese. Quezo de Bola Pimiento & Truffle de Bola.",
  keywords: [
    "cheese spread",
    "quezo de bola",
    "pimiento",
    "truffle",
    "gourmet",
    "artisan",
    "Philippines",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pacifico.variable} ${lora.variable} ${michegar.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
