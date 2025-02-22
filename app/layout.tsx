import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aplicativo de filmes",
  description: "Veja informações sobre filmes e séries",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <NextTopLoader color="#260ee8" showSpinner={false} />
        {children}
      </body>
    </html>
  );
}
