import Informations from "./Informations";
import Products from "./Products";
import { MainContainer, MainHeader, MainTitleHeader, MainPHeader, MainDivisorHeader } from "./style";

import { SupaContext } from "@/Context/Context";
import { useContext } from "react";

export default function Main() {
    const { productsPascoa } = useContext(SupaContext);

    return (
        <MainContainer>
            <MainHeader>
                <MainTitleHeader>Experimente os nossos mais vendidos</MainTitleHeader>
                <MainDivisorHeader />
                {/* <MainPHeader>{productsPascoa[0].name}</MainPHeader> */}
                <MainPHeader>Aqui estão nossas melhores criações que todo mundo adora. Leveza e a doçura que faz você querer cada vez mais.</MainPHeader>
            </MainHeader>
            <Products />
            <Informations />
        </MainContainer>
    )
}