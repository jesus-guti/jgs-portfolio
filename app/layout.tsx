import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Mono, M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const mPlusRounded1c = M_PLUS_Rounded_1c({
  variable: "--font-m-plus-rounded-1c",
  subsets: ["latin"],
  weight: ["700"],
});

const employmentThesis =
  "Interfaces and product systems shipped under real constraints — factory floors, production teams.";

export const metadata: Metadata = {
  metadataBase: new URL("https://jesusguti.dev"),
  title: {
    default: "Jesús Gutiérrez Siliceo — Frontend & Product Engineering",
    template: "%s — Jesús Gutiérrez Siliceo",
  },
  description: employmentThesis,
  openGraph: {
    title: "Jesús Gutiérrez Siliceo — Frontend & Product Engineering",
    description: employmentThesis,
    url: "/",
    siteName: "Jesús Gutiérrez Siliceo",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Jesús Gutiérrez Siliceo — Frontend & Product Engineering",
    description: employmentThesis,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${ibmPlexMono.variable} ${mPlusRounded1c.variable} antialiased`}
    >
      <body className="bg-surface-root text-text-default font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
