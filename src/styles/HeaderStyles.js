import styled from 'styled-components';
import "@fontsource/dosis";


export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  background-color: #000;
  max-height: 135px;
`;

export const LogoAndNav = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  img {
    height: 170px;
  }
`;
export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  color: #fff;
  font-size: 15px;
  font-family: 'Dosis', sans-serif;
  font-weight: 500;
  padding: 10px;

`;

export const MenuItem = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 5px 10px;
  transition: color 0.2s ease;

  &:hover {
    color: #d16de3;
  }
`;