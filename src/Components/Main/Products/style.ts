import styled from "styled-components";

export const ProductsMain = styled.div`
    display: flex;
    gap: 2rem;
    flex-direction: column;
    justify-content: space-between;
    width: calc(100% - 30px); 
    
    padding: 2rem 3rem;
    margin: 5rem 0rem;

    
    @media (max-width: 400px) {
        padding: 2rem 0rem;
        margin: 2rem 0rem;
    }
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
        box-shadow: 0px 0px 10px 2px rgba(0,0,0,.2);
    }

    @media (max-width: 600px) {
        box-shadow: 0px 5px 10px -3px rgba(0,0,0,.2);

        &:hover {
            box-shadow: 0px 5px 10px -3px rgba(0,0,0,.2);
        }
    }
`

export const ProductsTitle = styled.div`
    font-size: 26px;
    font-weight: 700;
    color: #4A1D1F;
`
export const ProductImage = styled.img`
    border-radius: 20px;
    width: 231px;

    height: 328px;
    transition: linear .2s;
    border-radius: 15px;


    /* &:hover {
        width: 500px;
        transition: linear .2s;
    } */

    overflow: hidden;
    object-position: center;
    object-fit: contain;
    background-color: #FBEDCD90;
`

export const ProductName = styled.div`
    margin-top: 1rem;
    font-size: 18px;
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

export const ProdTypes = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: .1rem;

    gap: .6rem;
`

export const ProdType = styled.div<{ isSelected: boolean }>`
    border-radius: 5px;
    width: max-content;
    color: ${({ isSelected }) => isSelected ? '#272727' : '#fff'};
    border: ${({ isSelected }) => isSelected ? '1px solid #DC143C' : '1px solid transparent'};
    background: ${({ isSelected }) => isSelected ? 'transparent' : 'linear-gradient(45deg, #DC143C, #FFA07A)'};


    padding: .1rem .5rem;

    font-size: 10px;
    font-weight: 00;

    text-align: center;
    transition: .1s cubic-bezier(0.25, 0.46, 0.45, 0.94);

    &:hover {
        transform: scale(1.05);
        transition: .3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        color: #272727;
        background: transparent;
        border: 1px solid #DC143C;
    }
`
