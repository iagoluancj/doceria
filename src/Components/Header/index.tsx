import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ButtonsCarousel, HeaderButton, HeaderCarouselImages, HeaderContainerBG, HeaderDescription, HeaderImageFeatured, HeaderImages, HeaderMain, HeaderTexts, HeaderTitle, ImageFeatured, ImagesCarousel, NumberCarousel, NumberHigh, NumberSmall } from "./styles";

import arrowLeft from '../../assets/icons/arro2.png';
import arrowRight from '../../assets/icons/arrow.png';

import bolo from '../../assets/bolo.png';
import bolo1 from '../../assets/bolo1.png';
import bolo2 from '../../assets/bolo2.png';
import bolo3 from '../../assets/bolo3.png';

export default function Header() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isImageVisible, setIsImageVisible] = useState(true); // Adicione um estado para controlar a visibilidade da imagem principal

    const bolos = [bolo, bolo1, bolo2, bolo3];

    const nextImage = () => {
        setIsImageVisible(false); // Oculta a imagem principal
        setTimeout(() => {
            setCurrentImage((currentImage + 1) % bolos.length);
            setIsImageVisible(true); // Exibe a imagem principal
        }, 300); // Aguarda 300ms antes de exibir a próxima imagem, para que a transição de opacidade ocorra
    };

    const prevImage = () => {
        setIsImageVisible(false); // Oculta a imagem principal
        setTimeout(() => {
            setCurrentImage((currentImage + bolos.length - 1) % bolos.length);
            setIsImageVisible(true); // Exibe a imagem principal
        }, 300); // Aguarda 300ms antes de exibir a imagem anterior, para que a transição de opacidade ocorra
    };


    return (
        <HeaderMain>
            <HeaderTexts>
                <HeaderTitle>Deliciosos recheios para satisfazer o seu paladar.</HeaderTitle>
                <HeaderDescription>Utilizamos recheios de altíssima qualidade para proporcionar o melhor sabor possível. Abaixo estão alguns dos que oferecemos.</HeaderDescription>
                <HeaderButton>Ver todos recheios</HeaderButton>
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
