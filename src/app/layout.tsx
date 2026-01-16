import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sneha's Arts | Where Heritage Meets the Pacific",
  description: "Discover handcrafted original paintings and artisan jewelry that bridges Indian heritage with Vancouver's West Coast inspiration. Each piece tells a story of cultural fusion and artistic passion.",
  keywords: ["art", "handmade", "Indian art", "Vancouver art", "handcrafted jewelry", "original paintings", "earrings", "artisan"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
