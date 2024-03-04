import { ImageInformations, InformationP, InformationsContainer, InformationsDescribe, InformationsTitle, PaymentAndCancel, ProductWithdrawal } from "./style";

import testeIMG from '../../../assets/testeImage.png'

export default function Informations() {
    return (
        <InformationsContainer>
            <PaymentAndCancel>
                <InformationsDescribe>
                    <InformationsTitle>Solicitações e Cancelamentos</InformationsTitle>
                    <InformationP>Pedidos confirmados somente mediante o pagamento de 50% do valor total. </InformationP>
                    <InformationP>O reembolso do valor de entrada requer notificação do cancelamento antes do início da confecção.</InformationP>
                </InformationsDescribe>
                <ImageInformations src={testeIMG.src}/>
            </PaymentAndCancel>

            <ProductWithdrawal>
                <InformationsDescribe>
                    <InformationsTitle>Da retirada do produto</InformationsTitle>
                    <InformationP>Para a retirada do produto, a responsabilidade é do cliente, devendo ser feita mediante agendamento prévio</InformationP>
                </InformationsDescribe>
                <ImageInformations src={testeIMG.src}/>
            </ProductWithdrawal>
        </InformationsContainer>
    )
}