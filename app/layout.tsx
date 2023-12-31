import type { Metadata } from "next";
import { Inter, Roboto, Poppins } from "next/font/google";

import "./globals.css";
import AddToCart from "./components/ThemeToggle";
import Link from "next/link";
import Navbar from "./Navbar";
import ThemeToggle from "./components/ThemeToggle";
import AuthProvider from "./auth/AuthProvider";
import localFont from "next/font/local";

const babasNeue = localFont({
  src: "../public/fonts/BebasNeue-Regular.woff",
  variable: "--font-babas-neue",
});

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "300"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={` ${roboto.className} ${poppins.className} ${babasNeue.className}`}
      >
        <AuthProvider>
          <div className=" flex justify-between mb-10 max-md:flex-wrap">
            <Navbar />
            <ThemeToggle />
          </div>
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
