import Head from "next/head";
import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import '../../public/assets/css/fonts-awesome.min.css'
import '../../public/assets/css/bootstrap.min.css'
import '../../public/assets/css/style.css';
import '../../public/assets/css/responsive.css';
import '../../public/assets/images/favicon.png';
import GlobalStateProvider from "@/components/GlobalStateProvider";
import Social_Icons from "@/components/Social_Icons";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "TherapyHub",
  description: "Its for TherapyHub",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
    integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
    crossOrigin="anonymous"
  />
</Head>
      <body className={inter.className}>
      <GlobalStateProvider>
        <Header/>
        <Social_Icons/>
        {children}
        <Footer/>
        </GlobalStateProvider>
        </body>
    </html>
  );
}
