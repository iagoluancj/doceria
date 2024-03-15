import { FooterAnchors, FooterContainer, FooterCopyright, FooterCopyrightSpan, FooterDeveloped, FooterDevelopedBy, FooterDevelopedMidias, FooterMain, FooterMidias, FooterNav, FooterNavItens, Footerfinally, Icon, Logo } from "./styles";

import github from '../../assets/icons/githubD.png'
import linkedin from '../../assets/icons/linkedinD.png'

import face from '../../assets/icons/face.png'
import insta from '../../assets/icons/insta.png'
import whatsapp from '../../assets/icons/whatsapp.png'
import Link from "next/link";

export default function Footer() {
    return (
        <FooterMain>
            <FooterContainer>
                <FooterMidias>
                    <FooterAnchors href="google.com" target="_blank"><Icon src={face.src} alt="" /></FooterAnchors>
                    <FooterAnchors href="https://instagram.com/docesdaizah/" target="_blank"><Icon src={insta.src} alt="" /></FooterAnchors>
                    <FooterAnchors href="https://wa.me/qr/XQNI2HVGLARPC1" target="_blank"><Icon src={whatsapp.src} alt="" /></FooterAnchors>
                </FooterMidias>
                <FooterNav>
                    <FooterNavItens><Link href="#home">Home</Link></FooterNavItens>
                    <FooterNavItens><Link href="#sobre">Sobre nós</Link></FooterNavItens>
                    <FooterNavItens><Link href="#contato">Contate-nos</Link></FooterNavItens>
                </FooterNav>
            </FooterContainer>
            <Footerfinally>
                <FooterCopyright>
                    <FooterCopyrightSpan>© 2021 Doceria. All rights reserved.</FooterCopyrightSpan>
                </FooterCopyright>
                <FooterDeveloped>
                    <FooterDevelopedBy>Developed by <FooterAnchors href="https://iagoluancj.github.io/Portifolio-React/" target="_blank">Iago Jesus</FooterAnchors></FooterDevelopedBy>
                    <FooterDevelopedMidias>
                        <FooterAnchors href="https://github.com/iagoluancj" target="_blank"><Icon src={github.src} alt="" /></FooterAnchors>
                        <FooterAnchors href="https://www.linkedin.com/in/iago-luan-4b4b02220/" target="_blank"><Icon src={linkedin.src} alt="" /></FooterAnchors>
                    </FooterDevelopedMidias>
                </FooterDeveloped>
            </Footerfinally>
        </FooterMain>
    )
}
