import React from "react";
import {StyledBarraSuperior, Telefone, Social} from '../styles/BarraSuperiorStyle';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faClock, faPhone} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope,  } from '@fortawesome/free-regular-svg-icons';




function Superior() {
    return (
        <StyledBarraSuperior>
            <Telefone>
                <div className={"icon-phone"}>
                    <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className={"icon-phone-text"}>
                    <p>11 2427 4277</p>
                </div>
                <div className={"icon-clock"}>
                    <FontAwesomeIcon icon={faClock}/>
                </div>
                <div className={"icon-clock-text"}>
                    <p>10:00 - 20:00</p>
                </div>
            </Telefone>
            <Social>
                <div className={"icon-facebook"}>
                    <a href="https://www.facebook.com/pviralmkt">
                    <FontAwesomeIcon icon={faFacebook} className={"icon-facebook"} />
                    </a>
                </div>
                <div className={"icon-instagram"}>
                    <a href="https://www.instagram.com/pviralmkt/">
                    <FontAwesomeIcon icon={faInstagram} className={"icon-instagram"}  />
                    </a>
                </div>
                <div className={"icon-email"}>
                    <a href="mailto:atendimento@pviral.com.br">
                        <FontAwesomeIcon icon={faEnvelope} className={"icon-email"} />
                    </a>
                </div>
            </Social>
        </StyledBarraSuperior>
    );
}

export default Superior;
