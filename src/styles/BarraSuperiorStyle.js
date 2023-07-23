import styled from 'styled-components';
import "@fontsource/dosis";


export const StyledBarraSuperior = styled.div`

  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #42124c;
  color: #fff;
  font-size: 15px;
  font-family: 'Dosis', sans-serif;

  .icon-phone,
  .icon-clock {
    margin: 0 7px;
    color: #fff300;
    font-size: 16px;
    transition: all 0.2s ease;
  }

  p:hover {
    color: #d16de3;
  }

  .icon-facebook,
  .icon-instagram,
  .icon-email {
    margin: 0 7px;
    color: #fff;
    font-size: 20px;
  }

  .icon-facebook:hover,
  .icon-instagram:hover,
  .icon-email:hover {
    color: #fff300;
  }


  a {
    color: #fff;
    text-decoration: none;
  }
`
export const Telefone = styled.div`
  display: flex;
  align-items: center;
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
`;