import React from "react";
import { StyledHeader, Logo, MenuItem, MenuContainer } from '../styles/HeaderStyles';
import logoHeader from '../img/logo_header.png';


function Header() {
  return (
    <StyledHeader>
      <Logo>
        {<img src={logoHeader} alt="Logo" />}
      </Logo>
        <MenuContainer>
            <MenuItem href="#">HOME</MenuItem>
            <MenuItem href="#">QUEM SOMOS</MenuItem>
            <MenuItem href="#">O QUE FAZEMOS</MenuItem>
            <MenuItem href="#">PORTIFÓLIO</MenuItem>
            <MenuItem href="#">PREÇOS</MenuItem>
            <MenuItem href="#">CONTATO</MenuItem>
        </MenuContainer>
    </StyledHeader>
  );
}


export default Header;
