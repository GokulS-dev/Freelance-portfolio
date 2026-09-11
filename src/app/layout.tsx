import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk, Cormorant_Garamond, Caveat, Pixelify_Sans } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { PageLoader } from "@/components/ui/PageLoader";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixelify-sans",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#fafaf9",
};

export const metadata: Metadata = {
  title: "Gokul — Freelance Web & Mobile App Developer",
  description:
    "Freelance developer building modern websites, web applications and mobile experiences for businesses.",
  keywords: [
    "freelance developer",
    "web developer",
    "mobile app developer",
    "Next.js",
    "React",
    "Flutter",
  ],
  authors: [{ name: "Gokul" }],
  creator: "Gokul",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Gokul — Freelance Web & Mobile App Developer",
    description:
      "Freelance developer building modern websites, web applications and mobile experiences for businesses.",
    siteName: "Gokul",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gokul — Freelance Web & Mobile App Developer",
    description:
      "Freelance developer building modern websites, web applications and mobile experiences for businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

const fontVariables = [
  manrope.variable,
  spaceGrotesk.variable,
  cormorantGaramond.variable,
  geistMono.variable,
  caveat.variable,
  pixelifySans.variable,
].join(" ");

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVariables}>
      <body>
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
