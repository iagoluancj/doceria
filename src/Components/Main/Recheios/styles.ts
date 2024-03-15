import styled from "styled-components";

export const RecheiosContainer = styled.div`
    padding: 5rem;
    display: flex;
    font-family: 'Poppins';
    justify-content: center;

    @media (max-width: 768px) {
        padding: 2rem;
    }

    @media (max-width: 500px) {
        padding: 2rem 1rem;
    }
`

export const RecheiosSepareted = styled.div`
    display: grid;
    grid-template-columns: 10fr 1fr 10fr;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        grid-template-rows: 10fr 1fr 10fr;

        align-items: center;
    }
`
export const RecheiosTypes = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    justify-content: center;
    align-items: center;
`

export const RecheiosClassics = styled(RecheiosTypes)`
    text-align: left;
`
export const RecheiosSpecials = styled(RecheiosTypes)`
    text-align: right;

`

export const RecheiosTypeTitle = styled.h1`
    font-size: 30px;
    font-weight: 500;

    color: #4A1D1F;
`

export const RecheiosTypeTitleClassics = styled(RecheiosTypeTitle)`
    align-items: end;
    justify-content: center;
`

export const RecheiosTypeTitleSpecials = styled(RecheiosTypeTitle)`
    align-items: end;
    justify-content: center;
`

export const SpanNegrito = styled.span`
    font-weight: 700;
`

export const AllRecheios = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    gap: 1.3rem;
    justify-content: center;
    align-items: center;

    @media (max-width: 500px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
    }
`

export const Recheio = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    gap: .3rem;

    padding: .4rem;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,.1);
`

export const RecheioClassics = styled(Recheio)`
`

export const RecheioSpecials = styled(Recheio)`
    text-align: left;
`

export const RecheioIMG = styled.img`
    border-radius: 20px;
    width: 100px;
    height: 150px;

    object-fit: cover;
    object-position: center;
`

export const RecheioInformations = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    text-align: start;

    justify-content: space-around;
`

export const RecheioName = styled.h3`
    color: #272727;

    font-size: 18px;
    font-weight: 600;
`

export const RecheioDescribe = styled.p`
    font-size: 12px;
    font-weight: 400;
`

export const RecheiosDivLine = styled.div`
    width: 1px;
    height: 100%;
    background-color: #4A1D1F90;
    margin: 0rem 2rem;

    @media (max-width: 1024px) {
        width: 100%;
        height: 1px;

        margin: 2rem 0rem;
    }
`

export const RecheioType = styled.div`
    background: linear-gradient(45deg, #DC143C, #FFA07A);
    color: #fff;
    border-radius: 50px;
    width: max-content;

    padding: 0rem .3rem;

    font-size: 10px;
    font-weight: 00;

    text-align: center;
`
