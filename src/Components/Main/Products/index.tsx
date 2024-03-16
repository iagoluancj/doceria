import { ProductsContainer, ProductsSepareted, Product, ProductsTitle, ProductName, ProductsMain, ProductValue, ProductValueAndDescribe, ProductDescribe, ProdType, ProdTypes, ProductImage } from "./style";

import { HeaderButton } from "@/Components/Header/styles";
import { useContext, useState } from "react";

import ovoClassico from '../../../assets/newImagens/ovo.png';
import ovoColher from '../../../assets/newImagens/ovoColher.jpg';
import ovoCrocante from '../../../assets/newImagens/ovo1.png';
import barraChocolate from '../../../assets/newImagens/barraChocolate.jpg';
import miniOvos from '../../../assets/newImagens/miniOvo.jpeg';
import { SupaContext } from "@/Context/Context";

type ProductsPascoa = {
    id: number
    tipo: string
    peso: number
    tamanho: string
    preco: number
    name: string
}

export default function Products() {
    const [selectedProducts, setSelectedProducts] = useState<{ [key: string]: ProductsPascoa | null }>({});
    const [productStructures, setProductStructures] = useState(1);
    const { productsPascoa } = useContext(SupaContext);

    const handleAddProductStructure = () => {
        setProductStructures(prevNum => prevNum === 2 ? 1 : prevNum + 1);
    };

    const imagesProducts = [
        { id: 'ovoColher', src: ovoColher},
        { id: 'ovoCrocante', src: ovoCrocante},
        { id: 'ovoClassico', src: ovoClassico},
        { id: 'barraChocolocate', src: barraChocolate },
        { id: 'miniOvos', src: miniOvos }
    ];

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
                {Array(productStructures).fill(null).map((_, structureIndex) => (
                    <ProductsSepareted key={structureIndex}>
                        {productsPascoa 
                            .filter((product1, index, self) => self.findIndex(p => p.name === product1.name) === index)
                            .map(product1 => (
                                <Product key={product1.id}>
                                    <ProductImage
                                        src={(imagesProducts.find(image => image.id === product1.tipo)?.src || "").src}
                                        alt="Product Image"
                                    />
                                    {/* <Image src={imagesProducts[product1.id % imagesProducts.length]} alt="Product Image" width={231} height={328} objectFit="cover" objectPosition="center" /> */}
                                    <ProductValueAndDescribe>
                                        <ProductName>{product1.name}</ProductName>
                                        <ProdTypes>
                                            {productsPascoa
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
                ))}

            </ProductsContainer>
            <HeaderButton onClick={handleAddProductStructure}>
                {productStructures === 2 ? 'Ocultar menu' : 'Ver menu de produtos'}
            </HeaderButton>
        </ProductsMain>
    )
}