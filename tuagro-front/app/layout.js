import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "./components/navbar/NavBar";
import Header from "./components/header/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TuAgro insumos y servicios",
  description: "todo lo que buscas para tu campo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <meta name="theme-color" content="#4CAF50"></meta>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
     
      <NavBar/>
        {children}
      </body>
    </html>
  );
}
