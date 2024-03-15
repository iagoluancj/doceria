import styled, { CSSProperties } from "styled-components";

interface ImageProps {
    isVisible: boolean;
}

export const HeaderMain = styled.header`
    padding: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    
    padding: 3rem 0rem 0rem 0rem calc(15vw);
    position: relative;
    top: 2rem;

    @media (max-width: 1024px) {
        flex-direction: column;
        padding: 5rem 2rem 0rem 2rem;
    }

    @media (max-width: 768px) {
    }
`

export const HeaderTexts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.3rem;

    @media (max-width: 1024px) {
        margin-top: 2rem;
    }
`

export const HeaderTitle = styled.h2`
    font-weight: 700;
    font-size: 44px;
    color: #4A1D1F;

    @media (max-width: 425px) { // media querie para TITULOS
        font-size: 24px;
    }
`
export const HeaderDescription = styled.div`
    font-size: 24px;
    font-weight: 400;

    @media (max-width: 425px) { // media querie para DESCRIPTIONS
        font-size: 14px;
    }
`

export const HeaderButton = styled.button`
    color: #FBEDCD;

    padding: .625rem 1.875rem;
    border-radius: 10px;
    border: solid #FBEDCD 1px;
    background-color: #4A1D1F;
    
    cursor: pointer;
    transition: .1s;
    max-width: 247px;

    &:hover {
        transition: .1s;
        padding: .625rem 3rem;
        color: #4A1D1F;
        border: solid #4A1D1F 1px;
        background-color: transparent;
    }
`

export const HeaderImages = styled.div`
    margin-right: -20rem;

    @media (max-width: 1024px) {
        margin-right: 0rem;
        margin-top: 2rem;

        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const HeaderImageFeatured = styled.div`
    width: 700px;
    height: 599px; 
    border-radius: 50%; 
    /* box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);  */

    background: radial-gradient(circle, rgb(255, 218, 133, .4), transparent);
    
    @media (max-width: 1024px) {
        width: 400px;
        height: 300px; 
    }
`

export const ImageFeatured = styled.img<ImageProps>`
    width: 100%;
    height: 100%;

    border-radius: 50%;

    opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
    transition: opacity 0.1s ease-out;
    visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
    transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    object-fit: contain;
    object-position: center;
`

export const HeaderCarouselImages = styled.div`
    width: 1000px;
    height: 100%;
    
    border-radius: 150px;
    padding: .5rem 0rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

    background-color: rgba(255, 255, 255, 0.7);

    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -8rem;

    position: relative;
    z-index: 1;

    @media (max-width: 1024px) {
        width: 700px;

        padding: .4rem 0rem;
        margin-top: -3rem;
    }

    @media (max-width: 768px) {
        width: 550px;
    }

    @media (max-width: 600px) {
        width: 370px;
    }

    @media (max-width: 375px) {
        width: 300px;
    }
`

export const ButtonsCarousel = styled.div`
     @media (max-width: 1024px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0rem 1rem;

        object-fit: contain;
    }
`

export const Arrow = styled.img`
    transition: .2s;
    cursor: pointer;

    &:hover {
        transition: .2s;
        transform: scale(1.2);
    }

    @media (max-width: 1024px) {
        height: 10px;
    }

    @media (max-width: 375px) {
        height: 8px;
    }
`

export const ArrowRight = styled(Arrow)`
    padding-right: .5rem;

    @media (max-width: 375px) {
        padding-right: .2rem;
    }
`
export const ArrowLeft = styled(Arrow)`
    padding-left: .5rem;

    @media (max-width: 375px) {
        padding-left: .2rem;
    }
`
export const NumberCarousel = styled.span`
    color: #4A1D1F;
    font-size: 18px;

    @media (max-width: 1024px) {
        font-size: 14px;
    }

    @media (max-width: 375px) {
        font-size: 12px;
    }
`

export const NumberHigh = styled(NumberCarousel)`
`
export const NumberSmall = styled(NumberCarousel)`
    font-size: 10px;
`
export const ImagesCarousel = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    padding-right: 150px;
    transition: opacity 0.3s ease-in-out;

    img {
        width: 150px; 
        height: 150px; 
        border-radius: 10%;
        padding: .3rem;
        object-fit: cover; 
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); 
        transition: transform 0.3s ease; 
    }

    img:hover {
        transform: scale(1.03);
    }

    @media (max-width: 1024px) {
        padding-right: 0px;

        img {
            width: 90px; 
            height: 90px; 
        }
    }

    @media (max-width: 600px) {
        img {
            width: 50px; 
            height: 50px; 

        }
    }

    @media (max-width: 375px) {
        justify-content: center;
        gap: .3rem;

        img {
            width: 40px; 
            height: 40px; 

        }
    }
`;

export const HeaderContainerBG = styled.div``

