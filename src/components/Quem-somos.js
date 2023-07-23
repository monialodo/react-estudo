import React from "react";
import {BoxContainer, BoxIcon, BoxText, BoxWrapper, QuemSomosContainer} from "../styles/Quem-somos";
import {faPhotoFilm} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const QuemSomos = () => {
    return (
        <QuemSomosContainer>
            <h1>Quem Somos</h1>
            <p>Somos uma agencia de publicidade que faz sua marca ser vista corretamente nas redes sociais, gerenciando
                e direcionando para uma boa estratégia de visibilidade, integrando o marketing digital com o marketing
                offline.</p>
            <p>Nossos Serviços:</p>

            <BoxContainer>
                <BoxWrapper>
                    <BoxIcon>
                        <a href="/caminho/para/o/link">
                            <FontAwesomeIcon icon={faPhotoFilm} className={"box-icon"} />
                        </a>
                    </BoxIcon>
                    <BoxText>Texto do Box 1</BoxText>
                </BoxWrapper>
                <BoxWrapper>
                    <BoxIcon src="/caminho/para/o/icone2.png" alt="Ícone 2"/>
                    <BoxText>Texto do Box 2</BoxText>
                </BoxWrapper>
                <BoxWrapper>
                    <BoxIcon src="/caminho/para/o/icone3.png" alt="Ícone 3"/>
                    <BoxText>Texto do Box 3</BoxText>
                </BoxWrapper>
                <BoxWrapper>
                    <BoxIcon src="/caminho/para/o/icone4.png" alt="Ícone 4"/>
                    <BoxText>Texto do Box 4</BoxText>
                </BoxWrapper>
                <BoxWrapper>
                    <BoxIcon src="/caminho/para/o/icone5.png" alt="Ícone 5"/>
                    <BoxText>Texto do Box 5</BoxText>
                </BoxWrapper>
            </BoxContainer>
        </QuemSomosContainer>


    );
}

export default QuemSomos;