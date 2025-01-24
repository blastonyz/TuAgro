import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import { CategoriesProvider } from "./components/context/CategoriesContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TuAgro Insumos y Servicios",
  description: "todo lo que buscas para tu campo, asesoramiento, productos, granos, compra y vende tus productos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <meta name="theme-color" content="#4CAF50"></meta>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <CategoriesProvider>
     {/*Auth && Cart Context */}
      <Header/>
        {children}
      </CategoriesProvider>  
      </body>
    </html>
  );
}
