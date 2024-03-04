import { ProductsContainer, ProductsSepareted, Product, ProductsTitle, ProduictImage, ProductName, ProductsMain, ProductValue, ProductValueAndDescribe, ProductDescribe } from "./style";

import test from '../../../assets/produtoImagemTeste.png'
import { HeaderButton } from "@/Components/Header/styles";

export default function Products() {
    return (
        <ProductsMain>
            <ProductsContainer>
                <ProductsTitle>Ovos de páscoa</ProductsTitle>
                <ProductsSepareted>
                    <Product>
                        <ProduictImage src={test.src}></ProduictImage>
                        <ProductValueAndDescribe>
                            <ProductName>Red Velvet & Cream Cheese {`(500g)`}</ProductName>
                            <ProductValue>R$ 10,00</ProductValue>
                            {/* <ProductDescribe>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</ProductDescribe> */}
                            {/* Criar uma DIV aqui onde quando o hover passar abrirá uma breve descrição.  */}
                        </ProductValueAndDescribe>
                    </Product>
                    <Product>
                        <ProduictImage src={test.src}></ProduictImage>
                        <ProductValueAndDescribe>
                            <ProductName>Red Velvet & Cream Cheese {`(500g)`}</ProductName>
                            <ProductValue>R$ 10,00</ProductValue>
                        </ProductValueAndDescribe>
                    </Product>
                    <Product>
                        <ProduictImage src={test.src}></ProduictImage>
                        <ProductValueAndDescribe>
                            <ProductName>Red Velvet & Cream Cheese {`(500g)`}</ProductName>
                            <ProductValue>R$ 10,00</ProductValue>
                        </ProductValueAndDescribe>
                    </Product>                    <Product>
                        <ProduictImage src={test.src}></ProduictImage>
                        <ProductValueAndDescribe>
                            <ProductName>Red Velvet & Cream Cheese {`(500g)`}</ProductName>
                            <ProductValue>R$ 10,00</ProductValue>
                        </ProductValueAndDescribe>
                    </Product>                    <Product>
                        <ProduictImage src={test.src}></ProduictImage>
                        <ProductValueAndDescribe>
                            <ProductName>Red Velvet & Cream Cheese {`(500g)`}</ProductName>
                            <ProductValue>R$ 10,00</ProductValue>
                        </ProductValueAndDescribe>
                    </Product>                    <Product>
                        <ProduictImage src={test.src}></ProduictImage>
                        <ProductValueAndDescribe>
                            <ProductName>Red Velvet & Cream Cheese {`(500g)`}</ProductName>
                            <ProductValue>R$ 10,00</ProductValue>
                        </ProductValueAndDescribe>
                    </Product>
                </ProductsSepareted>
            </ProductsContainer>
            <ProductsContainer>
                <ProductsTitle>Ovos de páscoa</ProductsTitle>
                <ProductsSepareted>
                    <Product>
                        <ProduictImage src={test.src}></ProduictImage>
                        <ProductName>Red Velvet & Cream Cheese {`(500g)`}</ProductName>
                    </Product>
                    <Product>
                        <ProduictImage src={test.src}></ProduictImage>
                        <ProductName>Red Velvet & Cream Cheese {`(500g)`}</ProductName>
                    </Product>
                    <Product>
                        <ProduictImage src={test.src}></ProduictImage>
                        <ProductName>Red Velvet & Cream Cheese {`(500g)`}</ProductName>
                    </Product>
                    <Product>
                        <ProduictImage src={test.src}></ProduictImage>
                        <ProductName>Red Velvet & Cream Cheese {`(500g)`}</ProductName>
                    </Product>
                    <Product>
                        <ProduictImage src={test.src}></ProduictImage>
                        <ProductName>Red Velvet & Cream Cheese {`(500g)`}</ProductName>
                    </Product>
                    <Product>
                        <ProduictImage src={test.src}></ProduictImage>
                        <ProductName>Red Velvet & Cream Cheese {`(500g)`}</ProductName>
                    </Product>
                </ProductsSepareted>
            </ProductsContainer>
            <HeaderButton>Ver menu de páscoa</HeaderButton>
        </ProductsMain>
    )
}