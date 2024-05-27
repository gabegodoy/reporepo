import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "./ReactQueryProvider";
import { AuthProvider } from "@/contexts/AuthContext";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: "VCom Devedor App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body className={montserrat.className}>{children}</body>
      </html>
    </ReactQueryProvider>
  );
}
