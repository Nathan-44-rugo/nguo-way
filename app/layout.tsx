import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Nguoway — Sovereign Fashion Gaming Platform",
  description: "Design, customize, and market modular streetwear assets in our immersive 3D avatar sandbox.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning is added here to ignore attribute injections by browser extensions
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${inter.variable} ${spaceMono.variable} antialiased bg-white text-neutral-900`}
      >
        {children}
      </body>
    </html>
  );
}