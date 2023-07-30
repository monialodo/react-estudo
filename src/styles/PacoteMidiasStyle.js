import styled from "styled-components";

export const PacoteMidiasContainer = styled.div`

  color: #42124C;
  font-family: 'Dosis', sans-serif;

  h1 {
    margin: 0px;
  }

  h2 {
    margin: 0px;
    padding: 0px;
    letter-spacing: 2px;
    font-weight: 400;

  }

  h3 {
    margin: 0px;
    padding: 0px;
    letter-spacing: 2px;
    font-weight: 600;
  }

  h4 {
    margin: 0 0 20px 0;
    font-weight: 100;
    letter-spacing: 4px;
  }

  h5 {
    font-size: 24px;
    font-style: italic;
    text-transform: none;
    margin: 0 0 20px;
    font-weight: 100;
  }
;

  p {
    font-size: 16px;
    font-weight: 300;
    line-height: 2.4em;
    text-align: center;
    text-transform: none;
    margin: 0;
  }


  .box-container {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0;
  }

  .box-wrapper, .box-wrapper-2 {
    width: 25%;
    margin: 0 0 0 10px;
    background-color: #FFF300;
    border-radius: 10px;
    min-height: 380px;
  }

  .box-wrapper-2 {
    background-color: #42124C;
    color: #FFF300;
  }


  .box-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 0 15px 0 0;
    margin: 0;
  }
`

export const Divider = styled.div`
  width: 15%;
  height: 3px;
  background-color: #42124C;
  margin: 25px 0;
  
`;

export const DividerYellow = styled.div`
  width: 15%;
  height: 3px;
  background-color: #FFF300;
  margin: 25px 0;
  
`;

export const Button = styled.a`


  fill: #fff;
  color: #fff;
  background-color: #42124C;
  border: none;
  border-radius: 50px;
  padding: 8px 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: auto;


  &:hover {
    background-color: #fff;
    color: #42124c;
  }

  p {
    font-family: 'Dosis', sans-serif;
    font-size: 14px;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 1px;
    font-weight: 400;
  }

  .box-icon {
    padding: 0 5px 0 0;
    margin: 0;
  }
`;

export const ButtonYellow = styled.a`


  fill: #42124c;
  color: #42124c;
  background-color: #FFF300;
  border: none;
  border-radius: 50px;
  padding: 8px 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: auto;


  &:hover {
    background-color: #B8AE00;
    color: #FFF;
  }

  p {
    font-family: 'Dosis', sans-serif;
    font-size: 14px;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 1px;
    font-weight: 400;
  }

  .box-icon {
    padding: 0 5px 0 0;
    margin: 0;
  }
`;