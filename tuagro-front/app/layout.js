import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import { CartProvider } from "./components/context/CartContext";
import { CategoriesProvider } from "./components/context/CategoriesContext";
import { AuthProvider } from "./components/context/AuthContext";
import Footer from "./components/footer/Footer";

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
  description: "Todo lo que buscas para tu campo, asesoramiento, productos, granos, compra y vende tus productos, gestion de comercio exterior",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <link rel="icon" href="/favicon.png" type="image/png"></link>

      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        </meta>
        <meta name="theme-color" content="#107C10"></meta>
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <CategoriesProvider>
          <AuthProvider>
            <CartProvider>
            
              <Header />
              {children}
              <Footer />
            </CartProvider>
          </AuthProvider>
        </CategoriesProvider>
      </body>
    </html>
  );
}
