import { useContext } from "react";
import { supabase } from "@/services/supabase";
import { useEffect, useState } from "react";
import { createContext } from "vm";

type ProductsPascoa = {
    id: number
    tipo: string
    peso: number
    tamanho: string
    preco: number
    name: string
}

type detNegoc = {
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
    detNegoc: detNegoc[]
    recheios: Recheios[]
}


// export const SupaContext = createContext<SupaContextType>({
//     productsPascoa: [],
//     detNegoc: [],
//     recheios: [],
// })

const [products, setProducts] = useState<ProductsPascoa[]>([])

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