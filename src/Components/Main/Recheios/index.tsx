import { RecheiosClassics, RecheiosContainer, RecheiosSepareted, RecheiosTypeTitle, RecheioIMG, Recheio, RecheioInformations, RecheioName, RecheioDescribe, RecheiosDivLine, SpanNegrito, RecheiosSpecials, AllRecheios, RecheiosTypeTitleClassics, RecheiosTypeTitleSpecials, RecheioSpecials } from "./styles";

import recheio from '../../../assets/recheios.jpg'
import recheio1 from '../../../assets/recheios1.jpg'

export default function Recheios() {
    return (
        <RecheiosContainer>
            <RecheiosSepareted>
                <RecheiosClassics>
                    <RecheiosTypeTitleClassics>Os <SpanNegrito>clássicos recheios</SpanNegrito> que não podem faltar:</RecheiosTypeTitleClassics>
                    <AllRecheios>
                        <Recheio>
                            <RecheioIMG src={recheio.src}></RecheioIMG>
                            <RecheioInformations>
                                <RecheioName>Chocolate</RecheioName>
                                <RecheioDescribe>Delicioso recheio de chocolate feito com chocolate ao leite LAKA.</RecheioDescribe>
                            </RecheioInformations>
                        </Recheio>
                        <Recheio>
                            <RecheioIMG src={recheio1.src}></RecheioIMG>
                            <RecheioInformations>
                                <RecheioName>Foundé de maracujá com ninho</RecheioName>
                                <RecheioDescribe>Delicioso recheio de chocolate feito com chocolate ao leite LAKA.</RecheioDescribe>
                            </RecheioInformations>
                        </Recheio>
                        <Recheio>
                            <RecheioIMG src={recheio.src}></RecheioIMG>
                            <RecheioInformations>
                                <RecheioName>Chocolate</RecheioName>
                                <RecheioDescribe>Delicioso recheio de chocolate feito com chocolate ao leite LAKA.</RecheioDescribe>
                            </RecheioInformations>
                        </Recheio>
                        <Recheio>
                            <RecheioIMG src={recheio1.src}></RecheioIMG>
                            <RecheioInformations>
                                <RecheioName>Foundé de maracujá com ninho</RecheioName>
                                <RecheioDescribe>Delicioso recheio de chocolate feito com chocolate ao leite LAKA.</RecheioDescribe>
                            </RecheioInformations>
                        </Recheio>
                    </AllRecheios>
                </RecheiosClassics>
                <RecheiosDivLine></RecheiosDivLine>
                <RecheiosSpecials>
                    <RecheiosTypeTitleSpecials>E claro, os <SpanNegrito>recheios especiais</SpanNegrito> para seu deleite:</RecheiosTypeTitleSpecials>
                    <AllRecheios>
                        <RecheioSpecials>
                            <RecheioIMG src={recheio1.src}></RecheioIMG>
                            <RecheioInformations>
                                <RecheioName>Chocolate</RecheioName>
                                <RecheioDescribe>Delicioso recheio de chocolate feito com chocolate ao leite LAKA.</RecheioDescribe>
                            </RecheioInformations>
                        </RecheioSpecials>
                        <RecheioSpecials>
                            <RecheioIMG src={recheio.src}></RecheioIMG>
                            <RecheioInformations>
                                <RecheioName>Foundé de maracujá com ninho</RecheioName>
                                <RecheioDescribe>Delicioso recheio de chocolate feito com chocolate ao leite LAKA.</RecheioDescribe>
                            </RecheioInformations>
                        </RecheioSpecials>
                        <RecheioSpecials>
                            <RecheioIMG src={recheio1.src}></RecheioIMG>
                            <RecheioInformations>
                                <RecheioName>Chocolate</RecheioName>
                                <RecheioDescribe>Delicioso recheio de chocolate feito com chocolate ao leite LAKA.</RecheioDescribe>
                            </RecheioInformations>
                        </RecheioSpecials>
                        <RecheioSpecials>
                            <RecheioIMG src={recheio1.src}></RecheioIMG>
                            <RecheioInformations>
                                <RecheioName>Foundé de maracujá com ninho</RecheioName>
                                <RecheioDescribe>Delicioso recheio de chocolate feito com chocolate ao leite LAKA.</RecheioDescribe>
                            </RecheioInformations>
                        </RecheioSpecials>
                        <RecheioSpecials>
                            <RecheioIMG src={recheio.src}></RecheioIMG>
                            <RecheioInformations>
                                <RecheioName>Chocolate</RecheioName>
                                <RecheioDescribe>Delicioso recheio de chocolate feito com chocolate ao leite LAKA.</RecheioDescribe>
                            </RecheioInformations>
                        </RecheioSpecials>
                        <RecheioSpecials>
                            <RecheioIMG src={recheio.src}></RecheioIMG>
                            <RecheioInformations>
                                <RecheioName>Foundé de maracujá com ninho</RecheioName>
                                <RecheioDescribe>Delicioso recheio de chocolate feito com chocolate ao leite LAKA.</RecheioDescribe>
                            </RecheioInformations>
                        </RecheioSpecials>
                    </AllRecheios>
                </RecheiosSpecials>
            </RecheiosSepareted>
        </RecheiosContainer>
    )
}