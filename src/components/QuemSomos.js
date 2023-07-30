import React from "react";
import { QuemSomosContainer, BoxText} from "../styles/QuemSomosStyle";
import {faPhotoFilm, faIdCard, faUsers, faLaptopCode} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGoogleDrive} from "@fortawesome/free-brands-svg-icons";
import {BoxContainer, BoxIcon, BoxWrapper} from "../styles/CommonStyle";


const QuemSomos = () => {
    return (
        <QuemSomosContainer>
            <h1>Quem Somos</h1>
            <p>Somos uma agencia de publicidade que faz sua marca ser vista corretamente nas redes sociais, gerenciando
                e direcionando para uma boa estratégia de visibilidade, integrando o marketing digital com o marketing
                offline.</p>
            <p>Nossos Serviços:</p>

            <BoxContainer>
                <BoxWrapper className ={"box-wrapper-quem-somos"}>
                    <BoxIcon className = {"box-icon-quem-somos"}>
                        <a href="/caminho/para/o/link">
                            <FontAwesomeIcon icon={faPhotoFilm} className={"box-icon"} />
                        </a>
                    </BoxIcon>
                    <BoxText>Fotografia</BoxText>
                </BoxWrapper>
                <BoxWrapper className ={"box-wrapper-quem-somos"}>
                    <BoxIcon className = {"box-icon-quem-somos"}>
                        <a href="/caminho/para/o/link">
                            <FontAwesomeIcon icon={faIdCard} className={"box-icon"} />
                        </a>
                    </BoxIcon>
                    <BoxText>Identidade Visual</BoxText>
                </BoxWrapper>
                <BoxWrapper className ={"box-wrapper-quem-somos"}>
                    <BoxIcon className = {"box-icon-quem-somos"}>
                        <a href="/caminho/para/o/link">
                            <FontAwesomeIcon icon={faUsers} className={"box-icon"} />
                        </a>
                    </BoxIcon>
                    <BoxText>Mídias Sociais</BoxText>
                </BoxWrapper>
                <BoxWrapper className ={"box-wrapper-quem-somos"}>
                    <BoxIcon className = {"box-icon-quem-somos"}>
                        <a href="/caminho/para/o/link">
                            <FontAwesomeIcon icon={faLaptopCode} className={"box-icon"} />
                        </a>
                    </BoxIcon>
                    <BoxText>Websites</BoxText>
                </BoxWrapper>
                <BoxWrapper className ={"box-wrapper-quem-somos"}>
                    <BoxIcon className = {"box-icon-quem-somos"}>
                        <a href="/caminho/para/o/link">
                            <FontAwesomeIcon icon={faGoogleDrive} className={"box-icon"} />
                        </a>
                    </BoxIcon>
                    <BoxText>Editorial</BoxText>
                </BoxWrapper>
            </BoxContainer>
        </QuemSomosContainer>


    );
}

export default QuemSomos;