import React from "react";
import {BoxImg, BoxText, NossosTrabalhosContainer} from "../styles/NossosTrabalhosStyle";
import capaFoto from '../img/fotografia_capa.jpg';
import midiaSocial from '../img/midias_capa.jpg';
import identidadeVisual from '../img/capaidentidade.png';
import websites from '../img/sites-1.png';
import editorial from '../img/trafego.png';
import seguidores from '../img/seguidores.png';
import {BoxContainer, BoxWrapper, MainContainer,} from "../styles/CommonStyle";


const NossosTrabalhos = () => {
    return (
        <MainContainer>
            <NossosTrabalhosContainer>
            <h1>Confira aqui um pouco de nossos trabalhos</h1>
            <BoxContainer className = {"box-container"}>
            <BoxWrapper className = {"box-wrapper"}>
                <BoxImg>
                    {<img src={capaFoto} alt="Fotografia" />}
                </BoxImg>
                <BoxText>
                    <p>Fotografia Publicitária</p>
                </BoxText>
            </BoxWrapper>
                <BoxWrapper className = {"box-wrapper"}>
                    <BoxImg>
                        {<img src={midiaSocial} alt="midiaSocial" />}
                    </BoxImg>
                    <BoxText>
                        <p>Gestão de Mídias Sociais</p>
                    </BoxText>
                </BoxWrapper>
                <BoxWrapper className = {"box-wrapper"}>
                    <BoxImg>
                        {<img src={identidadeVisual} alt="Identidade" />}
                    </BoxImg>
                    <BoxText>
                        <p>Identidade Visual</p>
                    </BoxText>
                </BoxWrapper>
            </BoxContainer>
            <BoxContainer className = {"box-container"}>
                <BoxWrapper className = {"box-wrapper"}>
                    <BoxImg>
                        {<img src={websites} alt="websites" />}
                    </BoxImg>
                    <BoxText>
                        <p>Websites</p>
                    </BoxText>
                </BoxWrapper>
                <BoxWrapper className = {"box-wrapper"}>
                    <BoxImg>
                        {<img src={editorial} alt="Editorial" />}
                    </BoxImg>
                    <BoxText>
                        <p>Editorial</p>
                    </BoxText>
                </BoxWrapper>
                <BoxWrapper className = {"box-wrapper"}>
                    <BoxImg>
                        {<img src={seguidores} alt="Seguidores" />}
                    </BoxImg>
                    <BoxText>
                        <p>Seguidores</p>
                    </BoxText>
                </BoxWrapper>
            </BoxContainer>
            </NossosTrabalhosContainer>
        </MainContainer>
    )
}

export default NossosTrabalhos;