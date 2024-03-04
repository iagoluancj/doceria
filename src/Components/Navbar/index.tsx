import { Logo, NavItens, NavItens_Container, Navbar, NavItenBold } from "./styles";
import logo from '../../assets/doceriaLogo.png'

export default function Nav() {
    return (
        <Navbar>
            <Logo src={logo.src} />
            <NavItens_Container>
                <NavItenBold>Home</NavItenBold>
                <NavItens>Categorias <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M480-370 266-584l26-26 188 189 189-189 25 26-214 214Z" /></svg></NavItens>
                <NavItens>Sobre nós </NavItens>
                <NavItens>Contate-nos</NavItens>
            </NavItens_Container>
        </Navbar>
    )
}

