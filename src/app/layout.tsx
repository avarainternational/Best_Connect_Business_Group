import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://best-connect-business-group.avarainternational.workers.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Best Connect Business Group — Technology Connects. Management Empowers. Growth Defines Us.",
    template: "%s | Best Connect Business Group",
  },
  description:
    "Best Connect Business Group manages, empowers, and grows a diverse portfolio of businesses through centralized operations, innovative technology, and strategic leadership across Myanmar and Thailand.",
  keywords: [
    "Best Connect",
    "Business Group",
    "Myanmar",
    "Thailand",
    "Holding Group",
    "Technology",
    "Management",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Best Connect Business Group",
    title: "Best Connect Business Group — Technology Connects. Management Empowers. Growth Defines Us.",
    description:
      "Managing, empowering, and growing six diverse businesses through centralized operations, innovative technology, and strategic leadership.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Best Connect Business Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Connect Business Group — Technology Connects. Management Empowers. Growth Defines Us.",
    description:
      "Managing, empowering, and growing six diverse businesses through centralized operations, innovative technology, and strategic leadership.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${plusJakartaSans.variable} font-sans h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-bc-dark">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
