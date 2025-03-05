import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import { CartProvider } from "./components/context/CartContext";
import { CategoriesProvider } from "./components/context/CategoriesContext";
import { AuthProvider } from "./components/context/AuthContext";

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
    <html lang="es">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=3"></meta>
      <meta name="theme-color" content="#107C10"></meta>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <CategoriesProvider>
          <AuthProvider>
          <CartProvider>
            {/*Auth && Cart Context */}
            <Header />
            {children}
          </CartProvider>
          </AuthProvider>
        </CategoriesProvider>
      </body>
    </html>
  );
}
