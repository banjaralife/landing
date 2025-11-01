import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://banjara.life"),
  title: "Banjara - Connect with Local Tour Companions",
  description: "Join the waitlist for Banjara, a peer-to-peer marketplace connecting tourists with local companions for authentic travel experiences.",
  keywords: "tourism, local guides, travel companions, p2p marketplace, authentic travel, banjara",
  robots: "index, follow",
  openGraph: {
    title: "Banjara - Connect with Local Tour Companions",
    description: "Join the waitlist for Banjara, a peer-to-peer marketplace connecting tourists with local companions for authentic travel experiences.",
    type: "website",
    url: "https://banjara.life",
    siteName: "Banjara",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Banjara - Connect with Local Tour Companions",
    description: "Join the waitlist for Banjara, a peer-to-peer marketplace connecting tourists with local companions for authentic travel experiences.",
  },
  alternates: {
    canonical: "https://banjara.life",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
