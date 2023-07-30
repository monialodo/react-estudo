import styled from "styled-components";


export const MainContainer = styled.div`
  position: relative;
  padding: 50px 0;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Dosis', sans-serif;
  font-size: 20px;
  margin: 0 auto;
  background-color: #fff;
  color: #333333;
  letter-spacing: 1px;
  `

export const TextWrapper = styled.div`
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
    color: #42124C;
  }

  p {
    font-size: 18px;
    text-transform: none;
    color: #7A7A7A;
    line-height: 1.6em;
    text-align: center;
  }
`;

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 10px 30px 10px;
  margin: 0 8px;
`;

export const BoxIcon = styled.div`
  margin-bottom: 10px;
  
`;


export const BoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1600px;
  padding: 10px;
`;
