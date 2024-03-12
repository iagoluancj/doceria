import { ProductsContainer, ProductsSepareted, Product, ProductsTitle, ProduictImage, ProductName, ProductsMain, ProductValue, ProductValueAndDescribe, ProductDescribe, ProdType, ProdTypes } from "./style";

import test from '../../../assets/produtoImagemTeste.png'
import { HeaderButton } from "@/Components/Header/styles";
import { supabase } from "@/services/supabase";
import { useEffect, useState } from "react";

type ProductsPascoa = {
    id: string
    tipo: string
    peso: number
    tamanho: string
    preco: number
    name: string
}

export default function Products() {
    const [products, setProducts] = useState<ProductsPascoa[]>([])
    const [selectedProducts, setSelectedProducts] = useState<{ [key: string]: ProductsPascoa | null }>({});

    useEffect(() => {
        const getProducts = async () => {
            let { data: Products } = await supabase
                .from('produtos_pascoa')
                .select('*').returns<ProductsPascoa[]>()

            return Products || []
        }

        (async () => {
            const dataProcutsPascoa = await getProducts()
            setProducts(dataProcutsPascoa)
        })();
    }, [])

    const handleSelect = (product1: ProductsPascoa, product: ProductsPascoa) => {
        setSelectedProducts(prevSelectedProducts => ({
            ...prevSelectedProducts,
            [product1.id]: product
        }));
    };

    const selectedPrice = (product1: ProductsPascoa) => {
        const selectedProduct = selectedProducts[product1.id];
        if (!selectedProduct) {
            return product1.preco;
        }

        if (selectedProduct.peso) {
            return selectedProduct.preco;
        } else {
            return selectedProduct.preco;
        }
    };

    return (
        <ProductsMain>
            <ProductsContainer>
                <ProductsTitle>Ovos de páscoa</ProductsTitle>
                <ProductsSepareted>
                    {products
                        .filter((product1, index, self) => self.findIndex(p => p.name === product1.name) === index)
                        .map(product1 => (
                            <Product>
                                <ProduictImage src={test.src}></ProduictImage>
                                <ProductValueAndDescribe>
                                    <ProductName>{product1.name}</ProductName>
                                    <ProdTypes>
                                        {products
                                            .filter(product => product.tipo === product1.tipo)
                                            .filter(product => product.peso || product.tamanho)
                                            .map(product => (
                                                <ProdType
                                                    key={product.id}
                                                    onClick={() => handleSelect(product1, product)}
                                                    isSelected={!!selectedProducts[product1.id] && selectedProducts[product1.id]?.id === product.id}
                                                >
                                                    {product.peso ? `${product.peso}g` : product.tamanho}
                                                </ProdType>
                                            ))
                                        }
                                    </ProdTypes>
                                    <ProductValue>R$ {selectedProducts[product1.id] ? selectedPrice(product1) : '00'},00</ProductValue>
                                </ProductValueAndDescribe>
                            </Product>
                        ))}
                </ProductsSepareted>
            </ProductsContainer>
            <ProductsContainer>
                <ProductsTitle>Ovos de páscoa</ProductsTitle>
                <ProductsSepareted>
                    {products
                        .filter((product1, index, self) => self.findIndex(p => p.name === product1.name) === index)
                        .map(product1 => (
                            <Product>
                                <ProduictImage src={test.src}></ProduictImage>
                                <ProductValueAndDescribe>
                                    <ProductName>{product1.name}</ProductName>
                                    <ProdTypes>
                                        {products
                                            .filter(product => product.tipo === product1.tipo)
                                            .filter(product => product.peso || product.tamanho)
                                            .map(product => (
                                                <ProdType
                                                    key={product.id}
                                                    onClick={() => handleSelect(product1, product)}
                                                    isSelected={!!selectedProducts[product1.id] && selectedProducts[product1.id]?.id === product.id}
                                                >
                                                    {product.peso ? `${product.peso}g` : product.tamanho}
                                                </ProdType>
                                            ))
                                        }
                                    </ProdTypes>
                                    <ProductValue>R$ {selectedProducts[product1.id] ? selectedPrice(product1) : '00'},00</ProductValue>
                                </ProductValueAndDescribe>
                            </Product>
                        ))}
                </ProductsSepareted>
            </ProductsContainer>
            <HeaderButton>Ver menu de páscoa</HeaderButton>
        </ProductsMain>
    )
}