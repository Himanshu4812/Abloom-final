import type { Metadata, Viewport } from "next";
import { Instrument_Serif } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const instrument = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-instrument",
  style: ["normal", "italic"],
});

const radio = localFont({
  src: "../public/fonts/RadioGrotesk-Regular.otf",
  variable: "--font-radio",
});

const pangaia = localFont({
  src: [
    {
      path: "../public/fonts/PPPangaia-Ultralight-BF654c530cd00f1.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/PPPangaia-Medium-BF654c530cc86d5.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/PPPangaia-Bold-BF654c530cc27f8.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/PPPangaia-UltralightItalic-BF654c530ca889f.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../public/fonts/PPPangaia-MediumItalic-BF654c530bedffb.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/PPPangaia-BoldItalic-BF654c530c8d2fa.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-pangaia",
});

export const metadata: Metadata = {
  title: "Abloom - Hiranmayi",
  description:
    "Discover Abloom, an exclusive nature-centric villa community near Nashik. Experience green luxury, tranquility, and spirituality spread over 3 acres with only 10 premium plots.",
  keywords: [
    "Abloom",
    "Hiranmayi",
    "Nashik real estate",
    "villa plots",
    "green luxury",
    "nature living",
    "Trambakeshwar",
  ],
  openGraph: {
    title: "Abloom - Hiranmayi",
    description:
      "Discover Abloom, an exclusive nature-centric villa community near Nashik offering green luxury and tranquility.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#2d5a3d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrument.variable} ${radio.variable} ${pangaia.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
