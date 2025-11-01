import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Banjara - Coming Soon",
  description: "Banjara is coming soon. Stay tuned for updates.",
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
