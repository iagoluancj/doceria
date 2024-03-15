import styled from "styled-components";

export const FooterMain = styled.footer`
    display: flex;
    flex-direction: column;
    background-color: #FBEDCD;
    justify-content: center;
`
export const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    border-bottom: solid #4A1D1F50 1px;
    padding: 1.125rem 0rem;

    @media (max-width: 560px) {
        flex-direction: column;
        gap: 1rem;
    }
`
export const FooterMidias = styled.div`
    display: flex;
    gap: 2rem;
`
export const Logo = styled.img`
    width: 200px;
    height: 50px;
`

export const FooterImg = styled.img`
    width: 200px;
    height: 50px;
`

export const Icon = styled.img`
    width: 22px;
`
export const FooterAnchors = styled.a`
    color: #DC143C;
    font-weight: 700;
    text-decoration: underline;
`
export const FooterNav = styled.div`
    display: flex;
    gap: 2.625rem;

    @media (max-width: 560px) {
        gap: 1rem;
    }
`
export const FooterNavItens = styled.span`
    font-weight: 500;
`
export const Footerfinally = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2rem 0rem;

    @media (max-width: 560px) {
        flex-direction: column;
        gap: 1rem;
    }
`
export const FooterCopyright = styled.div``

export const FooterCopyrightSpan = styled.div`
`
export const FooterDeveloped = styled.div`
`
export const FooterDevelopedBy = styled.span`
`
export const FooterDevelopedMidias = styled(FooterMidias)`
    padding-top: .3rem;
    gap: 1rem;
    @media (max-width: 560px) {
        justify-content: center;
    }
`