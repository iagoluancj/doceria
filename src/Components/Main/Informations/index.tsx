import { ImageInformations, InformationP, InformationsContainer, InformationsDescribe, InformationsTitle, PaymentAndCancel, ProductWithdrawal } from "./style";

import delivery from '../../../assets/newImagens/delivery.png'
import returns from '../../../assets/newImagens/returns.jpg'
import { useEffect, useState } from "react";
import { supabase } from "@/services/supabase";

type detNegoc = {
    id: string
    tipo_detalhe: string
    detalhe: string
}

export default function Informations() {
    const [detNegoc, setDetNegoc] = useState<detNegoc[]>([])

    useEffect(() => {
        const getDetNegoc = async () => {
            let { data: detNegoc } = await supabase
                .from('detalhes_negocio')
                .select('*').returns<detNegoc[]>()

            return detNegoc || []
        }

        (async () => {
            const dataDetNegoc = await getDetNegoc()
            setDetNegoc(dataDetNegoc)
        })();
    }, [])


    return (
        <InformationsContainer id="sobre">
            <PaymentAndCancel>
                <InformationsDescribe>
                    <InformationsTitle>Solicitações e Cancelamentos</InformationsTitle>
                    {detNegoc.map((item, index) => {
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
                    {detNegoc.map((item, index) => {
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