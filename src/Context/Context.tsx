import { ReactNode, useContext } from "react";
import { supabase } from "@/services/supabase";
import { useEffect, useState } from "react";
import { createContext } from "react";

type ProductsPascoa = {
    id: number
    tipo: string
    peso: number
    tamanho: string
    preco: number
    name: string
}

type detNegocio = {
    id: string
    tipo_detalhe: string
    detalhe: string
}

type Recheios = {
    id: string
    tipo: string
    tipo_recheio: string
    descricao: string
}

type SupaContextType = {
    productsPascoa: ProductsPascoa[]
    detNegocio: detNegocio[]
    recheios: Recheios[]
    children: ReactNode;
}

type SupaProviderProps = {
    children: ReactNode;
};

export const SupaContext = createContext({
    productsPascoa: [],
    detNegocio: [],
    recheios: [],
    children: null
} as SupaContextType)

const SupaProvider: React.FC<SupaProviderProps> = ({ children }) => {
    const [products, setProducts] = useState<ProductsPascoa[]>([])
    const [recheio, setRecheio] = useState<Recheios[]>([])
    const [detNegoc, setDetNegoc] = useState<detNegocio[]>([])

    useEffect(() => {

        const getAll = async () => {
            let { data: recheiosData } = await supabase
                .from('recheios')
                .select('*')
                // .order('id')
                .returns<Recheios[]>()

            let { data: productsData } = await supabase
                .from('produtos_pascoa')
                .select('*')
                // .order('id')
                .returns<ProductsPascoa[]>()

            let { data: detNegocioData } = await supabase
                .from('detalhes_negocio')
                .select('*')
                // .order('id')
                .returns<detNegocio[]>()

            return { productsData, recheiosData, detNegocioData };
        }

        (async () => {
            const { productsData, recheiosData, detNegocioData } = await getAll();
            setProducts(productsData || []); 
            setRecheio(recheiosData || []);
            setDetNegoc(detNegocioData || []);
        });
    }, [])

    return (
        <SupaContext.Provider value={{ productsPascoa: products, detNegocio: detNegoc, recheios: recheio }}>
            {children}
        </SupaContext.Provider>
    )
}

export default SupaProvider