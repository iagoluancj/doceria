import styled from "styled-components";

export const InformationsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5rem;
    gap: 2rem;

    @media (max-width: 1024px) {
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 768px) {
        padding: 2rem;
    }
`

export const PaymentAndCancel = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 1024px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
`
export const ProductWithdrawal = styled.div`
    display: flex;
    flex-direction: row-reverse;

    @media (max-width: 1024px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
`

export const InformationsDescribe = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) { // media querie para DESCRIPTIONS
        font-size: 18px;
    }

    @media (max-width: 425px) { // media querie para DESCRIPTIONS
        font-size: 14px;
    }

`

export const InformationsTitle = styled.div`
    font-size: 44px;
    font-weight: 600;
    color: #4A1D1F;

    @media (max-width: 768px) { // media querie para TITULOS
      font-size: 30px;
    }

    @media (max-width: 425px) { // media querie para TITULOS
         font-size: 24px;
    }
`

export const InformationP = styled.p`
    font-size: 20px;
    font-weight: 400;
    padding: 1rem;

    color: #272727;
`

export const ImageInformations = styled.img`
    border-radius: 100px;
    width: 400px;
    height: 347px;

    object-fit: contain;
    object-position: center;
`