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
`

export const HeaderTexts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
`

export const HeaderTitle = styled.h2`
    font-weight: 700;
    font-size: 44px;
    color: #4A1D1F;
`
export const HeaderDescription = styled.div`
    font-size: 24px;
    font-weight: 400;
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

`

export const HeaderImageFeatured = styled.div`
    width: 700px;
    height: 599px; 
    border-radius: 50%; 
    /* box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);  */

    background: radial-gradient(circle, rgb(255, 218, 133, .4), transparent);
`

export const ImageFeatured = styled.img<ImageProps>`
    width: 100%;
    height: 100%;

    opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
    transition: opacity 0.1s ease-out;
    visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
`

export const HeaderCarouselImages = styled.div`
    width: 1000px;
    height: 190px;
    
    border-radius: 150px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

    background-color: rgba(255, 255, 255, 0.9);

    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -8rem;

    position: relative;
    z-index: 1;
`

export const ButtonsCarousel = styled.div`
`

export const Arrow = styled.img`
    transition: .2s;
    cursor: pointer;

    &:hover {
        transition: .2s;
        transform: scale(1.2);
    }
`

export const ArrowRight = styled(Arrow)`
    padding-right: .5rem;
`
export const ArrowLeft = styled(Arrow)`
    padding-left: .5rem;
`
export const NumberCarousel = styled.span`
    color: #4A1D1F;
    font-size: 18px;
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
`;

export const HeaderContainerBG = styled.div``

