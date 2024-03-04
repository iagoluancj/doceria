import { FooterAnchors, FooterContainer, FooterCopyright, FooterCopyrightSpan, FooterDeveloped, FooterDevelopedBy, FooterDevelopedMidias, FooterMain, FooterMidias, FooterNav, FooterNavItens, Footerfinally, Icon, Logo } from "./styles";

import github from '../../assets/icons/githubD.png'
import linkedin from '../../assets/icons/linkedinD.png'

import face from '../../assets/icons/face.png'
import insta from '../../assets/icons/insta.png'
import whatsapp from '../../assets/icons/whatsapp.png'

export default function Footer() {
    return (
        <FooterMain>
            <FooterContainer>
                <FooterMidias>
                    <FooterAnchors href="google.com" target="_blank"><Icon src={face.src} alt="" /></FooterAnchors>
                    <FooterAnchors href="google.com" target="_blank"><Icon src={insta.src} alt="" /></FooterAnchors>
                    <FooterAnchors href="google.com" target="_blank"><Icon src={whatsapp.src} alt="" /></FooterAnchors>
                </FooterMidias>
                <FooterNav>
                    <FooterNavItens><a href="">Home</a></FooterNavItens>
                    <FooterNavItens><a href="">Sobre nós</a></FooterNavItens>
                    <FooterNavItens><a href="">Contate-nos</a></FooterNavItens>
                </FooterNav>
            </FooterContainer>
            <Footerfinally>
                <FooterCopyright>
                    <FooterCopyrightSpan>© 2021 Chocobrat. All rights reserved.</FooterCopyrightSpan>
                </FooterCopyright>
                <FooterDeveloped>
                    <FooterDevelopedBy>Developed by <FooterAnchors href="https://iagoluancj.github.io/Portifolio-React/" target="_blank">Iago Jesus</FooterAnchors></FooterDevelopedBy>
                    <FooterDevelopedMidias>
                        <FooterAnchors href="google.com" target="_blank"><Icon src={github.src} alt="" /></FooterAnchors>
                        <FooterAnchors href="google.com" target="_blank"><Icon src={linkedin.src} alt="" /></FooterAnchors>
                    </FooterDevelopedMidias>
                </FooterDeveloped>
            </Footerfinally>
        </FooterMain>
    )
}
