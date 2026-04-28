import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Efecto Ciencia — Repositorio de noticias de ciencia, tecnología e innovación",
  description:
    "Repositorio digital de noticias, columnas de opinión y entrevistas sobre ciencia, tecnología, innovación y sociedad. Desde Chile, en formato digital.",
  openGraph: {
    title: "Efecto Ciencia",
    description: "Ciencia, innovación y entrevistas en formato digital.",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
