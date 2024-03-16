import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ButtonsCarousel, HeaderButton, HeaderCarouselImages, HeaderContainerBG, HeaderDescription, HeaderImageFeatured, HeaderImages, HeaderMain, HeaderTexts, HeaderTitle, ImageFeatured, ImagesCarousel, NumberCarousel, NumberHigh, NumberSmall } from "./styles";

import arrowLeft from '../../assets/icons/arro2.png';
import arrowRight from '../../assets/icons/arrow.png';

import thumb from '../../assets/newImagens/ovo2.jpg';
import thumb1 from '../../assets/newImagens/doces.jpg';
import thumb2 from '../../assets/newImagens/ovo.png';
import thumb3 from '../../assets/newImagens/ovo1.png';
import Link from 'next/link';

export default function Headera() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isImageVisible, setIsImageVisible] = useState(true); 

    const bolos = [thumb, thumb1, thumb2, thumb3];

    const nextImage = () => {
        setIsImageVisible(false); 
        setTimeout(() => {
            setCurrentImage((currentImage + 1) % bolos.length);
            setIsImageVisible(true); 
        }, 300); 
    };

    const prevImage = () => {
        setIsImageVisible(false); 
        setTimeout(() => {
            setCurrentImage((currentImage + bolos.length - 1) % bolos.length);
            setIsImageVisible(true); 
        }, 300); 
    };

    return (
        <HeaderMain id="home">
            <HeaderTexts>
                <HeaderTitle>Deliciosos recheios e doces para satisfazer o seu paladar.</HeaderTitle>
                <HeaderDescription>Utilizamos recheios de altíssima qualidade para proporcionar o melhor sabor possível. Abaixo estão alguns dos que oferecemos.</HeaderDescription>
                <HeaderButton><Link href="#recheios">Ver todos recheios</Link></HeaderButton>
            </HeaderTexts>
            <HeaderImages>
                <HeaderImageFeatured>
                    <ImageFeatured src={bolos[currentImage].src} alt="" isVisible={isImageVisible} />
                </HeaderImageFeatured>
                <HeaderCarouselImages>
                    <ButtonsCarousel>
                        <ArrowRight onClick={nextImage} src={arrowRight.src} />
                        <NumberCarousel>
                            <NumberHigh>{`${currentImage + 1}`.padStart(2, '0')}</NumberHigh>/<NumberSmall>{`${bolos.length}`.padStart(2, '0')}</NumberSmall>
                        </NumberCarousel>
                        <ArrowLeft onClick={prevImage} src={arrowLeft.src} />
                    </ButtonsCarousel>
                    <ImagesCarousel>
                        {bolos.map((boloImage, index) => (
                            index !== currentImage && (
                                <img key={index} src={boloImage.src} alt="" />
                            )
                        ))}
                    </ImagesCarousel>
                </HeaderCarouselImages>
            </HeaderImages>
        </HeaderMain>
    );
}
