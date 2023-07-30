import React from "react";
import {Button, ButtonYellow, Divider, DividerYellow, PacoteMidiasContainer} from "../styles/PacoteMidiasStyle";
import {BoxContainer, BoxIcon, BoxWrapper, MainContainer} from "../styles/CommonStyle";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faShoppingCart} from "@fortawesome/free-solid-svg-icons";

const PacotesMidias = () => {
    return (
        <MainContainer>
            <PacoteMidiasContainer>
                <h1>Confira nossos pacotes de mídias sociais</h1>
                <h5>Comece agora mesmo a transformar suas redes sociais</h5>
                <BoxContainer className={"box-container"}>
                    <BoxWrapper className={"box-wrapper"}>
                        <h3>Plano Básico</h3>
                        <h2>R$ 390</h2>
                        <h4>por mês</h4>
                        <Divider/>
                        <BoxIcon className={"box-icon"}>
                            <FontAwesomeIcon icon={faCheck} className={"box-icon"}/>
                            <p>02 posts por semana</p>
                        </BoxIcon>
                        <BoxIcon className={"box-icon"}>
                            <FontAwesomeIcon icon={faCheck} className={"box-icon"}/>
                            <p>Capa para Facebook</p>
                        </BoxIcon>
                        <BoxIcon className={"box-icon"}>
                            <FontAwesomeIcon icon={faCheck} className={"box-icon"}/>
                            <p>Publicação nas redes</p>
                        </BoxIcon>
                        <BoxIcon className={"box-icon"}>
                            <FontAwesomeIcon icon={faCheck} className={"box-icon"}/>
                            <p>Relatório Mensal</p>
                        </BoxIcon>
                        <BoxIcon>
                            <p> </p>
                        </BoxIcon>
                        <BoxIcon><p> </p></BoxIcon>
                        <BoxIcon>
                            <p> </p>
                        </BoxIcon>
                        <Button>
                            <FontAwesomeIcon icon={faShoppingCart} className={"box-icon"}/>
                            <p>Comprar</p>
                        </Button>
                    </BoxWrapper>
                    <BoxWrapper className={"box-wrapper-2"}>
                        <h3>Plano Master</h3>
                        <h2>R$ 480</h2>
                        <h4>por mês</h4>
                        <DividerYellow/>
                        <BoxIcon className={"box-icon"}>
                            <FontAwesomeIcon icon={faCheck} className={"box-icon"}/>
                            <p>03 posts por semana</p>
                        </BoxIcon>
                        <BoxIcon className={"box-icon"}>
                            <FontAwesomeIcon icon={faCheck} className={"box-icon"}/>
                            <p>Capa para Facebook</p>
                        </BoxIcon>
                        <BoxIcon className={"box-icon"}>
                            <FontAwesomeIcon icon={faCheck} className={"box-icon"}/>
                            <p>Publicação nas redes</p>
                        </BoxIcon>
                        <BoxIcon className={"box-icon"}>
                            <FontAwesomeIcon icon={faCheck} className={"box-icon"}/>
                            <p>Relatório Mensal</p>
                        </BoxIcon>
                        <BoxIcon className={"box-icon"}>
                            <FontAwesomeIcon icon={faCheck} className={"box-icon"}/>
                            <p>Direct de boas vindas</p>
                        </BoxIcon>
                        <BoxIcon></BoxIcon>
                        <BoxIcon></BoxIcon>
                        <ButtonYellow>
                            <FontAwesomeIcon icon={faShoppingCart} className={"box-icon"}/>
                            <p>Comprar</p>
                        </ButtonYellow>
                    </BoxWrapper>
                    <BoxWrapper className={"box-wrapper"}>
                        <h3>Plano Pro</h3>
                        <h2>R$ 570</h2>
                        <h4>por mês</h4>
                        <Divider/>
                        <BoxIcon className={"box-icon"}>
                            <FontAwesomeIcon icon={faCheck} className={"box-icon"}/>
                            <p>04 posts por semana</p>
                        </BoxIcon>
                        <BoxIcon className={"box-icon"}>
                            <FontAwesomeIcon icon={faCheck} className={"box-icon"}/>
                            <p>Capa para Facebook</p>
                        </BoxIcon>
                        <BoxIcon className={"box-icon"}>
                            <FontAwesomeIcon icon={faCheck} className={"box-icon"}/>
                            <p>Publicação nas redes</p>
                        </BoxIcon>
                        <BoxIcon className={"box-icon"}>
                            <FontAwesomeIcon icon={faCheck} className={"box-icon"}/>
                            <p>Relatório Mensal</p>
                        </BoxIcon>
                        <BoxIcon className={"box-icon"}>
                            <FontAwesomeIcon icon={faCheck} className={"box-icon"}/>
                            <p>Direct de boas vindas</p>
                        </BoxIcon>
                        <BoxIcon className={"box-icon"}>
                            <FontAwesomeIcon icon={faCheck} className={"box-icon"}/>
                            <p>Editorial</p>
                        </BoxIcon>
                        <BoxIcon></BoxIcon>
                        <Button>
                            <FontAwesomeIcon icon={faShoppingCart} className={"box-icon"}/>
                            <p>Comprar</p>
                        </Button>
                    </BoxWrapper>
                    <BoxWrapper className={"box-wrapper-2"}>
                        <h3>Plano Gold</h3>
                        <h2>R$ 650</h2>
                        <h4>por mês</h4>
                        <DividerYellow/>
                        <BoxIcon className={"box-icon"}>
                            <FontAwesomeIcon icon={faCheck} className={"box-icon"}/>
                            <p>05 posts por semana</p>
                        </BoxIcon>
                        <BoxIcon className={"box-icon"}>
                            <FontAwesomeIcon icon={faCheck} className={"box-icon"}/>
                            <p>Capa para Facebook</p>
                        </BoxIcon>
                        <BoxIcon className={"box-icon"}>
                            <FontAwesomeIcon icon={faCheck} className={"box-icon"}/>
                            <p>Publicação nas redes</p>
                        </BoxIcon>
                        <BoxIcon className={"box-icon"}>
                            <FontAwesomeIcon icon={faCheck} className={"box-icon"}/>
                            <p>Relatório Mensal</p>
                        </BoxIcon>
                        <BoxIcon className={"box-icon"}>
                            <FontAwesomeIcon icon={faCheck} className={"box-icon"}/>
                            <p>Direct de boas vindas</p>
                        </BoxIcon>
                        <BoxIcon className={"box-icon"}>
                            <FontAwesomeIcon icon={faCheck} className={"box-icon"}/>
                            <p>Editorial</p>
                        </BoxIcon>
                        <ButtonYellow>
                            <FontAwesomeIcon icon={faShoppingCart} className={"box-icon"}/>
                            <p>Comprar</p>
                        </ButtonYellow>
                    </BoxWrapper>

                </BoxContainer>
            </PacoteMidiasContainer>
        </MainContainer>
    )
}

export default PacotesMidias;