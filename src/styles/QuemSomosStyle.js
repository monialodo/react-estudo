import styled from "styled-components";
import "@fontsource/dosis";


export const QuemSomosContainer = styled.div`
  position: relative;
  padding: 50px 0;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Dosis', sans-serif;
  max-width: 1140px;
  margin: 0 auto;

  h1 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    text-transform: none;
    color: #7A7A7A;
    line-height: 1.6em;
    text-align: center;
  }


  .box-wrapper-quem-somos {
    border-style: solid;
    border-width: 2px;
    border-color: #D2C2D6;
    border-radius: 2px;
    width: 20%;
  }

  .box-icon-quem-somos {
    width: 80px;
    height: 80px;
    background-color: #42124C;
    border-radius: 50%;
    color: #fff;
    fill: #fff;
      
    .box-icon {
      color: #fff;
      font-size: 40px;
      padding: 25% 0%;
    }

    &:hover {
      background-color: #69107A;
      transition: background-color 0.3s ease, transform 0.3s ease;
      transform: scale(0.9);
    }
  }

`


export const BoxText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 20px 0;

`;

