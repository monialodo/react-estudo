import React from "react";
import {BoxText, OQueFazemosContainer} from "../styles/QueFazemosStyle";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobe, faStar, faUserCheck} from "@fortawesome/free-solid-svg-icons";
import {faFaceLaughSquint} from "@fortawesome/free-regular-svg-icons";
import {BoxContainer, BoxIcon, BoxWrapper, TextWrapper} from "../styles/CommonStyle";

const OQueFazemos = () => {
    return (
        <OQueFazemosContainer>
            <TextWrapper>
                <h1>O que fazemos por sua empresa?</h1>
                <p>Confira quais as áreas que atuamos para consolidar sua presença nas redes:</p>
                <BoxContainer className = {"box-container"}>
                    <BoxWrapper className = {"wrapper-que-fazemos"}>
                        <BoxIcon>
                            <FontAwesomeIcon icon={faUserCheck} className={"box-icon"}/>
                        </BoxIcon>
                        <BoxText>
                            <p>O primeiro passo é estudar sua presença nas redes e o reconhecimento da sua marca.
                                Aqui apontamos o que pode ser melhorado e onde devemos focar</p>
                        </BoxText>
                    </BoxWrapper>
                    <BoxWrapper className = {"wrapper-que-fazemos"}>
                        <BoxIcon>
                            <FontAwesomeIcon icon={faGlobe} className={"box-icon"}/>
                        </BoxIcon>
                        <BoxText>
                            <p>Depois, começamos o trabalho necessário: Construir ou fortalecer sua identidade visual e
                                consolidar a presença nas redes sociais</p>
                        </BoxText>
                    </BoxWrapper>
                    <BoxWrapper className = {"wrapper-que-fazemos"}>
                        <BoxIcon>
                            <FontAwesomeIcon icon={faStar} className={"box-icon"}/>
                        </BoxIcon>
                        <BoxText>
                            <p>A partir dai é a hora de pensar e construir seu site, seja ele um site de serviços, um site institucional ou um e-commerce</p>
                        </BoxText>
                    </BoxWrapper>
                    <BoxWrapper className = {"wrapper-que-fazemos"}>
                        <BoxIcon>
                            <FontAwesomeIcon icon={faFaceLaughSquint} className={"box-icon"}/>
                        </BoxIcon>
                        <BoxText>
                            <p>Por fim, é hora de investir em trafégo pago. Anúncios e seguidores são essenciais para gerar conversões, consolidar sua presença e conferir autoridade</p>
                        </BoxText>
                    </BoxWrapper>
                </BoxContainer>
            </TextWrapper>
        </OQueFazemosContainer>
)
}

export default OQueFazemos;