import { Logo, NavItens, NavItens_Container, Navbar, NavItenBold } from "./styles";
import logo from '../../assets/newImagens/logo.png'
import Link from "next/link";
import { useContext } from "react";
import { SupaContext } from "@/Context/Context";

export default function Nav() {
    const { scrollToTarget } = useContext(SupaContext)

    return (
        <Navbar>
            <Logo src={logo.src} onClick={() => scrollToTarget('home')}/>
            <NavItens_Container>
                <NavItenBold onClick={() => scrollToTarget('home')}>Home</NavItenBold>
                {/* Em construção */}
                {/* <NavItens>Categorias <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M480-370 266-584l26-26 188 189 189-189 25 26-214 214Z" /></svg></NavItens> */}
                <NavItens onClick={() => scrollToTarget('recheios')}>Recheios</NavItens>
                <NavItens onClick={() => scrollToTarget('produtos')}>Doces</NavItens>
                <NavItens onClick={() => scrollToTarget('contact')}>Contate-nos</NavItens>
            </NavItens_Container>
        </Navbar>
    )
}

// 