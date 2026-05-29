import type { Metadata } from "next";
import { Allura, Cormorant_Garamond, Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-allura",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alyssa Tudino · K–12 Tutoring",
  description:
    "Patient, engaging K–12 tutoring across math, science, English, writing, and social studies. Brooklyn, NY — in person & online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light" />
      </head>
      <body
        className={`${quicksand.variable} ${cormorantGaramond.variable} ${allura.variable}`}
      >
        <div className="om-frame">{children}</div>
      </body>
    </html>
  );
}
