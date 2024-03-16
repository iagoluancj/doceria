import Headera from "../Components/Header"
import Footer from "../Components/Footer"
import Nav from "../Components/Navbar"
import Main from "../Components/Main"
import Payments from "../Components/Main/Payments"
import Recheios from "../Components/Main/Recheios"

import { Inter } from "next/font/google";
import Head from "next/head";
import logo from '../assets/newImagens/logo.png'
import SupaProvider from "@/Context/Context";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Doces da Izah</title>

        <link rel="icon" href={logo.src} type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>
      <SupaProvider>
        <>
          <Nav></Nav>
          <Headera></Headera>
          <Main></Main>
          <Payments></Payments>
          <Recheios></Recheios>
          <Footer></Footer>
        </>
      </SupaProvider>
    </>
  );
}
