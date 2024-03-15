import styled from "styled-components";

export const Navbar = styled.nav`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: .2rem;
    gap: .7rem;
    position: fixed;
    z-index: 2;
    width: 100%;

    background-color: #FBEDCD;

    @media (max-width: 425px) {
        gap: 0rem;
        padding: .3rem 0rem 0rem 0rem;
        flex-direction: row;
    }
`
export const Logo = styled.img`
    margin-top: .5rem;
    height: 100px;
`

export const NavItens_Container = styled.div`
    display: flex;
    justify-content: center;
    gap: .3rem;

    @media (max-width: 425px) {
        flex-direction: column;
    }
`
export const NavItens = styled.span`
    display: flex;
    align-items: center;
    padding: 1rem;

    font-family: 'Poppins';
    font-weight: 400;
    color: #4A1D1F;

    cursor: pointer;

    @media (max-width: 425px) {
        padding: .3rem;
    }
`
export const NavItenBold = styled(NavItens)`
    font-weight: 700;
`

export const SearchNav = styled.div``

export const Search = styled.input``
