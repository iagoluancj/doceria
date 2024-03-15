import { RecheiosClassics, RecheiosContainer, RecheiosSepareted, RecheiosTypeTitle, RecheioIMG, Recheio, RecheioInformations, RecheioName, RecheioDescribe, RecheiosDivLine, SpanNegrito, RecheiosSpecials, AllRecheios, RecheiosTypeTitleClassics, RecheiosTypeTitleSpecials, RecheioSpecials, RecheioType } from "./styles";

import IMGrecheio from '../../../assets/recheios.jpg'
import IMGrecheio1 from '../../../assets/recheios1.jpg'
import { supabase } from "@/services/supabase";
import { useEffect, useState } from "react";

type Recheio = {
    id: string
    tipo: string
    tipo_recheio: string
    descricao: string
}

export default function Recheios() {

    useEffect(() => {
        const getRecheios = async () => {
            let { data: recheios } = await supabase
                .from('recheios')
                .select('*').returns<Recheio[]>()

            return recheios || []
        }

        (async () => {
            const dataRecheio = await getRecheios()
            setRecheio(dataRecheio)
        })();
    }, [])

    const [recheio, setRecheio] = useState<Recheio[]>([])

    return (
        <RecheiosContainer id="recheios">
            <RecheiosSepareted>
                <RecheiosClassics>
                    <RecheiosTypeTitleClassics>Os <SpanNegrito>clássicos recheios</SpanNegrito> que não podem faltar:</RecheiosTypeTitleClassics>
                    <AllRecheios>
                        {recheio.map(recheio => (
                            recheio.tipo == 'Clássico' && (
                                <Recheio key={recheio.id}>
                                    <RecheioIMG src={IMGrecheio.src}></RecheioIMG>
                                    <RecheioInformations>
                                        <RecheioName>{recheio.tipo_recheio}</RecheioName>
                                        <RecheioType>{recheio.tipo}</RecheioType>
                                        <RecheioDescribe>{recheio.descricao}</RecheioDescribe>
                                    </RecheioInformations>
                                </Recheio>
                            )))}
                    </AllRecheios>
                </RecheiosClassics>
                <RecheiosDivLine></RecheiosDivLine>
                <RecheiosSpecials>
                    <RecheiosTypeTitleSpecials>E claro, os <SpanNegrito>recheios especiais</SpanNegrito> para seu deleite:</RecheiosTypeTitleSpecials>
                    <AllRecheios>
                        {recheio.map(recheio => (
                            recheio.tipo == 'Especial' && (
                                <Recheio key={recheio.id}>
                                    <RecheioIMG src={IMGrecheio1.src}></RecheioIMG>
                                    <RecheioInformations>
                                        <RecheioName>{recheio.tipo_recheio}</RecheioName>
                                        <RecheioType>{recheio.tipo}</RecheioType>
                                        <RecheioDescribe>{recheio.descricao}</RecheioDescribe>
                                    </RecheioInformations>
                                </Recheio>
                            )))}
                    </AllRecheios>
                </RecheiosSpecials>
            </RecheiosSepareted>
        </RecheiosContainer>
    )
}