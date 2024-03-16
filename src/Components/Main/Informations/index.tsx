import { ImageInformations, InformationP, InformationsContainer, InformationsDescribe, InformationsTitle, PaymentAndCancel, ProductWithdrawal } from "./style";

import delivery from '../../../assets/newImagens/delivery.png'
import returns from '../../../assets/newImagens/returns.jpg'
import { useContext } from "react";
import { SupaContext } from "@/Context/Context";

export default function Informations() {
    const { detNegocio } = useContext(SupaContext);

    return (
        <InformationsContainer id="sobre">
            <PaymentAndCancel>
                <InformationsDescribe>
                    <InformationsTitle>Solicitações e Cancelamentos</InformationsTitle>
                    {detNegocio.map((item, index) => {
                        if (item.id === 'detEnt' || item.id === 'detCan') {
                            return <InformationP key={index}>{item.detalhe}</InformationP>;
                        } else {
                            return null;
                        }
                    })}
                </InformationsDescribe>
                <ImageInformations src={returns.src} />
            </PaymentAndCancel>

            <ProductWithdrawal>
                <InformationsDescribe>
                    <InformationsTitle>Da retirada do produto</InformationsTitle>
                    {detNegocio.map((item, index) => {
                        if (item.id === 'detRet') {
                            return <InformationP key={index}>{item.detalhe}</InformationP>;
                        } else {
                            return null;
                        }
                    })}
                </InformationsDescribe>
                <ImageInformations src={delivery.src} />
            </ProductWithdrawal>
        </InformationsContainer>
    )
}