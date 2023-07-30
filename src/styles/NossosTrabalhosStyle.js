import styled from "styled-components";
import "@fontsource/dosis";

export const NossosTrabalhosContainer = styled.div`
  h1 {
    padding-bottom: 20px;
  }


  .box-container {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0;
  }
  
  .box-wrapper {
    width: 33.3%;
    padding: 0;
    margin: 0;
  }



`;

export const BoxImg = styled.div`
    
    width: 353px;
    height: 353px;
    
    img {
        width: 100%;
        height: 100%;
    }
`;

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;


export const BoxText = styled.div`
  text-align: center;
  color: #333333;
  margin-bottom: 2px;
  letter-spacing: 1px;
  font-weight: bold;
  line-height: 1.4em;
  font-size: 16px;
  
`;