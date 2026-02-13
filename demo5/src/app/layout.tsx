import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dapur Serpong | Catering Harian Premium Gading Serpong & BSD",
  description: "Catering harian premium untuk kantor dan keluarga di Gading Serpong, BSD, dan Alam Sutera. Menu ganti tiap hari, gratis ongkir, dan halal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
