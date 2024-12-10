import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Cabin } from "next/font/google";

const cabin = Cabin({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "PaletteGen",
  description: "A tool to create stunning colour palettes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cabin} antialiased`}
      >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
