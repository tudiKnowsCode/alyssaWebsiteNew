import type { Metadata } from "next";
import { Allison, Luckiest_Guy, Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
  display: "swap",
});

const luckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-luckiest-guy",
  display: "swap",
});

const allison = Allison({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-allison",
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
      </head>
      <body
        className={`${quicksand.variable} ${luckiestGuy.variable} ${allison.variable}`}
      >
        <div className="om-frame">{children}</div>
      </body>
    </html>
  );
}
