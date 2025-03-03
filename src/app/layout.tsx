import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./tailwind.css";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GOL Linhas Aéreas - Website Clone",
  description:
    "Uma recriação não oficial do site da GOL Linhas Aéreas para fins de portfólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
