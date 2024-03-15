import styled from "styled-components";

export const MainContainer = styled.main`
    padding: 2rem 0rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 1024px) {
        margin-top: 5rem;
    }

`

export const MainHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border-radius: 10px;
    box-shadow: 0px 0px 40px 1px rgba(251, 237, 205, 1);

    padding: 2.5rem 5rem;

    @media (max-width: 1024px) {
        flex-direction: column;
        padding: 2.5rem 2.5rem;
    }
`
export const MainTitleHeader = styled.div`
    font-family: 'Poppins';
    font-size: 40px;
    font-weight: 700;
    color: #4A1D1F;

    @media (max-width: 768px) { // media querie para TITULOS
        font-size: 30px;
    }

    @media (max-width: 425px) { // media querie para TITULOS
        font-size: 24px;
    }
`

export const MainDivisorHeader = styled.div`
    height: 100%;
    width: 1px;
    background-color: #4A1D1F80;
    padding: 5rem 0rem;
    margin: 0rem 5rem;

    @media (max-width: 1024px) {
        height: 1px;
        padding: 0rem 0rem;
        margin: 2rem 0rem;
        width: 100%;
    }
`

export const MainPHeader = styled.div`
    font-family: 'Poppins';
    font-size: 22px;
    font-weight: 500;
    color: #272727;

    @media (max-width: 768px) { // media querie para DESCRIPTIONS
        font-size: 18px;
    }

    @media (max-width: 425px) { // media querie para DESCRIPTIONS
        font-size: 14px;
    }
`


// @media (max-width: 1024px) {
// }

// @media (max-width: 768px) {
// }

// @media (max-width: 600px) {
// }

// @media (max-width: 375px) {
// }