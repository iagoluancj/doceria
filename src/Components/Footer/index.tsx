import { FooterAnchors, FooterContainer, FooterCopyright, FooterCopyrightSpan, FooterDeveloped, FooterDevelopedBy, FooterDevelopedMidias, FooterMain, FooterMidias, FooterNav, FooterNavItens, Footerfinally, IconA } from "./styles";

import github from '../../assets/icons/githubD.png'
import linkedin from '../../assets/icons/linkedinD.png'

import face from '../../assets/icons/face.png'
import insta from '../../assets/icons/insta.png'
import whatsapp from '../../assets/icons/whatsapp.png'
import { useContext } from "react";
import { SupaContext } from "@/Context/Context";

export default function Footer() {
    const { scrollToTarget } = useContext(SupaContext)

    return (
        <FooterMain>
            <FooterContainer>
                <FooterMidias>
                    <FooterAnchors href="https://instagram.com/docesdaizah/"  target="_blank"><IconA src={face.src} alt="" /></FooterAnchors>
                    <FooterAnchors href="https://instagram.com/docesdaizah/" target="_blank"><IconA src={insta.src} alt="" /></FooterAnchors>
                    <FooterAnchors href="https://wa.me/qr/XQNI2HVGLARPC1" target="_blank"><IconA src={whatsapp.src} alt="" /></FooterAnchors>
                </FooterMidias>
                {/* <FooterNav>
                    <FooterNavItens onClick={() => scrollToTarget('home')}>Home</FooterNavItens>
                    <FooterNavItens onClick={() => scrollToTarget('recheios')}>Recheios</FooterNavItens>
                    <FooterNavItens onClick={() => scrollToTarget('produtos')}>Doces</FooterNavItens>
                    <FooterNavItens onClick={() => scrollToTarget('contact')}>Contate-nos</FooterNavItens>
                </FooterNav> */}
            </FooterContainer>
            <Footerfinally>
                <FooterCopyright>
                    <FooterCopyrightSpan>© 2024 Doces da Izah. All rights reserved.</FooterCopyrightSpan>
                </FooterCopyright>
                <FooterDeveloped>
                    <FooterDevelopedBy>Developed by <FooterAnchors href="https://iagoluancj.github.io/Portifolio-React/" target="_blank">Iago Jesus</FooterAnchors></FooterDevelopedBy>
                    <FooterDevelopedMidias>
                        <FooterAnchors href="https://github.com/iagoluancj" target="_blank"><IconA src={github.src} alt="" /></FooterAnchors>
                        <FooterAnchors href="https://www.linkedin.com/in/iago-luan-4b4b02220/" target="_blank"><IconA src={linkedin.src} alt="" /></FooterAnchors>
                    </FooterDevelopedMidias>
                </FooterDeveloped>
            </Footerfinally>
        </FooterMain>
    )
}
