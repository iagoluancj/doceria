import styled from "styled-components";

export const Navbar = styled.nav`
    display: flex;
    justify-content: space-evenly;

    padding: .2rem;
    gap: .7rem;
    position: fixed;
    z-index: 2;
    width: 100%;

    background-color: #FBEDCD;
`
export const Logo = styled.img`
    height: 100px;
`

export const NavItens_Container = styled.div`
    display: flex;
    justify-content: center;
    gap: .3rem;
`
export const NavItens = styled.span`
    display: flex;
    align-items: center;
    padding: 1rem;

    font-family: 'Poppins';
    font-weight: 400;
    color: #4A1D1F;

    cursor: pointer;
`
export const NavItenBold = styled(NavItens)`
    font-weight: 700;
`

export const SearchNav = styled.div``

export const Search = styled.input``
