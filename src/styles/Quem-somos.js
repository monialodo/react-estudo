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
`

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 10px 30px 10px;
  border-style: solid;
  border-width: 2px;
  border-color: #D2C2D6;
  border-radius: 2px;
  width: 20%;
  margin: 0 8px;
`;


export const BoxIcon = styled.div`
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
  background-color: #42124C;
  border-radius: 50%;
  color: #fff;
  fill: #fff;


  .box-icon {
    color: #fff;
    font-size: 40px;
    padding: 25% 0%;
  }
`;


export const BoxText = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const BoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1600px;
  padding: 10px;
  
`;


