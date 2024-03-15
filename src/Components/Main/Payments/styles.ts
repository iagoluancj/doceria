import styled from "styled-components";

export const PaymentsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0rem;

    background-color: #FBEDCD;
`
export const PaymentContainerDivisor = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    padding: 5rem;

    @media (max-width: 1024px) {
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    @media (max-width: 768px) {  
        padding: 2.5rem;
    }

    @media (max-width: 425px) {  
        padding: 2.5rem 1rem;
    }
`

export const PaymentsOptions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: .5rem;
`

export const PaymentChannelTitle = styled.div`
    font-size: 36px;
    font-weight: 700;

    color: #4A1D1F;

    @media (max-width: 1024px) {
        font-size: 30px;
    }

    @media (max-width: 768px) {  // media querie para TITULOS
        font-size: 26px;
    }

    @media (max-width: 425px) {  // media querie para TITULOS
        font-size: 22px;
    }
`

export const OptionPaymentoOrChannel = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    list-style: none;
    padding: 0;
    margin: 0;

    @media (max-width: 425px) {  
        padding: 0rem .5rem;
    }
`

export const Options = styled.li`
    font-size: 20px;
    font-weight: 500;

    color: #272727;

    @media (max-width: 1024px) {
        font-size: 18px;
    }

    @media (max-width: 768px) {  // media querie para TITULOS
        font-size: 16px;
    }

    @media (max-width: 425px) {  // media querie para TITULOS
        font-size: 14px;
    }
`

export const ChannelsService = styled(PaymentsOptions)``

export const IconsChannels = styled.div`
    display: flex;
    gap: 2rem;

    @media (max-width: 425px) {  
        flex-direction: column;
        gap: 1rem;

        padding-top: 1rem;
    }
`

export const IconContainer = styled.a`
    display: flex;
    flex-direction: row;

    align-items: center;
    gap: .5rem;
`

export const NameIcon = styled.div`
    font-size: 20px;
    font-weight: 600;
`

export const Icon = styled.img`
    width: 40px;
    height: 40px;

    object-fit: cover;
    object-position: center;

    @media (max-width: 425px) {  
        width: 30px;
        height: 30px;
    }
`