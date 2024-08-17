import { ChannelsService, Icon, IconContainer, IconsChannels, NameIcon, OptionPaymentoOrChannel, Options, PaymentChannelTitle, PaymentContainerDivisor, PaymentsContainer, PaymentsOptions } from "./styles";

import instagram from '../../../assets/icons/insta.png'
import whatsapp from '../../../assets/icons/whatsapp.png'

export default function Payments() {
    
    return (
        <PaymentsContainer id="contact">
            <PaymentContainerDivisor>
                <PaymentsOptions>
                    <PaymentChannelTitle>Meios de pagamento</PaymentChannelTitle>
                    <OptionPaymentoOrChannel>
                        <Options>Aceitamos cartões de crédito e débito {`(possui acréscimo)`}.</Options>
                        <Options>Aceitamos PIX {`(chave: 31995437165 - Izabella)`} </Options>
                        {/* O PIX deve puxar do banco, para ficar sempre atualizado.  */}
                    </OptionPaymentoOrChannel>
                </PaymentsOptions>
                <ChannelsService>
                    <PaymentChannelTitle>Canais de atendimento</PaymentChannelTitle>
                    <OptionPaymentoOrChannel>
                        <Options>Faça seu pedido através dos canais abaixo:</Options>
                    </OptionPaymentoOrChannel>
                    <IconsChannels>
                        <IconContainer href="https://instagram.com/docesdaizah/" target="_blank">
                            <Icon src={instagram.src} />
                            <NameIcon>Instagram</NameIcon>
                        </IconContainer>
                        <IconContainer href="https://wa.me/qr/XQNI2HVGLARPC1" target="_blank">
                            <Icon src={whatsapp.src} />
                            <NameIcon>Whatsapp</NameIcon>
                        </IconContainer>
                    </IconsChannels>
                </ChannelsService>
            </PaymentContainerDivisor>
        </PaymentsContainer>
    )
}