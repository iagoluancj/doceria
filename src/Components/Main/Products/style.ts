import styled from "styled-components";

export const ProductsMain = styled.div`
    display: flex;
    gap: 2rem;
    flex-direction: column;
    justify-content: space-between;
    width: calc(100% - 30px); 
    
    padding: 2rem 3rem;
    margin: 5rem 0rem;
`

export const ProductsContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const ProductsSepareted = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;

    max-width: 100%;

    padding: 1rem;
    overflow-x: auto; 

    &::-webkit-scrollbar {
        height: 15px;
    }
    &::-webkit-scrollbar-track {
        background-color: #4A1D1F;
    }

    &::-webkit-scrollbar-thumb {
        background: #FBEDCD;
    }
`
export const Product = styled.div`
    display: flex;
    flex-direction: column;
    padding: .5rem .5rem;
    transition: linear .1s;
    cursor: pointer;
    border-radius: 20px;

    &:hover {
        box-shadow: 0px 10px 15px -3px rgba(0,0,0,.2);
    }
`

export const ProductsTitle = styled.div`
    font-size: 26px;
    font-weight: 700;
    color: #4A1D1F;
`
export const ProduictImage = styled.img`
    border-radius: 40px;
    width: 231px;

    height: 328px;
    transition: linear .2s;


    &:hover {
        width: 500px;
        transition: linear .2s;
    }

    overflow: hidden;
    object-fit: cover; 
    object-position: center;
`

export const ProductName = styled.div`
    margin-top: 1rem;
    font-size: 22px;
    font-weight: 500;
    color: #272727;
`

export const ProductValueAndDescribe = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    height: 100px;
    overflow: hidden;
`

export const ProductValue = styled.span`
    font-size: 16px;
    font-weight: 400;
`

export const ProductDescribe = styled.span`
    max-width: 20px;
    word-wrap: break-word;
`
