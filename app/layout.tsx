import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Playfair_Display, DM_Sans, Raleway } from "next/font/google";
import "./globals.css";
import "./custom.css";
import { Header } from "@/src/components/header/Header";
import { Footer } from "@/src/components/footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});


const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm",
});

const relaway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-relaway",
});



export const metadata: Metadata = {
  title: "Casamento Ana e Bruno",
  description: "Grande celebração do casamento de Ana e Bruno",
  icons: {
    icon: [
      { url: "icons/favicon.ico",  sizes: "any" },
      { url: "icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cormorant.variable} ${playfair.variable} ${dmSans.variable} ${relaway.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
