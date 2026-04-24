import type { Metadata } from "next";
import localFont from "next/font/local";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const fsMagistral = localFont({
  src: [
    {
      path: "./fonts/FS Magistral-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/FS Magistral-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/FS Magistral-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
  ],
  variable: "--font-fs-magistral",
});

// Note: FS PF BeauSans Pro Bold is a commercial font. 
// Using FS Magistral as a placeholder for now until the font files are provided.
const fsBeauSans = localFont({
  src: [
    {
      path: "./fonts/FS Magistral-Bold.ttf", // Placeholder
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-beausans",
});

const myriadPro = localFont({
  src: [
    {
      path: "./fonts/MYRIADPRO-REGULAR.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-myriad",
});

export const metadata: Metadata = {
  title: "Viettel Store",
  description: "Viettel Store Landing Page",
};

import { Header } from "@/components/layout/Header";
import { Providers } from "@/components/providers/Providers";
import { LoadingIntro } from "@/components/layout/LoadingIntro";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${roboto.variable} ${fsMagistral.variable} ${fsBeauSans.variable} ${myriadPro.variable} font-sans antialiased min-h-screen flex flex-col`} suppressHydrationWarning>
        <LoadingIntro />
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
