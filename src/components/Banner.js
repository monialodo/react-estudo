import React from "react";
import {
    BannerContainer,
    BannerHeading,
    BannerButton,
    BannerBackground,
    BannerContent,
    BannerTitle
} from "../styles/BannerStyle";

const Banner = () => {
    return (
        <BannerContainer>
            <BannerBackground/>
            <BannerContent>
                <BannerHeading>Sua Empresa</BannerHeading>
                <BannerHeading>na internet</BannerHeading>
                <BannerTitle>Colocamos sua empresa na internet e cuidamos de tudo pra você  </BannerTitle>
                <BannerButton href="https://linktree.com.br/new/pviralmkt">Entre em contato</BannerButton>
            </BannerContent>
        </BannerContainer>
    );
};

export default Banner;

