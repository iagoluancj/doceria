import Informations from "./Informations";
import Products from "./Products";
import { MainContainer, MainHeader, MainTitleHeader, MainPHeader, MainDivisorHeader } from "./style";

export default function Main() {
    return (
        <MainContainer>
            <MainHeader>
                <MainTitleHeader>Experimente os nossos mais vendidos de Páscoa</MainTitleHeader>
                <MainDivisorHeader />
                <MainPHeader>Aqui estão nossas melhores criações que todo mundo adora. Leveza e a doçura dos doces faz você querer cada vez mais.</MainPHeader>
            </MainHeader>

            <Products />
            <Informations />
        </MainContainer>
    )
}