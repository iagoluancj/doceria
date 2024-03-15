import { Logo, NavItens, NavItens_Container, Navbar, NavItenBold } from "./styles";
import logo from '../../assets/newImagens/logo.png'
import Link from "next/link";

export default function Nav() {
    return (
        <Navbar>
            <Link href="/" >
                <Logo src={logo.src}/>
            </Link>
            <NavItens_Container>
                <NavItenBold><Link href="/">Home</Link></NavItenBold>
                {/* Em construção */}
                {/* <NavItens>Categorias <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M480-370 266-584l26-26 188 189 189-189 25 26-214 214Z" /></svg></NavItens> */}
                <NavItens><Link href="#sobre">Sobre nós</Link></NavItens>
                <NavItens><Link href="#contato">Contate-nos</Link></NavItens>
            </NavItens_Container>
        </Navbar>
    )
}

