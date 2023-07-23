import styled from "styled-components";
import banner from "../img/banner.jpg";
import "@fontsource/dosis";


export const BannerContainer = styled.div`
  position: relative;
  padding: 20px;
  text-align: center;
  height: 75vh;
  font-family: 'Dosis', sans-serif;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: 0.5;
  }
  
`;
export const BannerBackground  = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  z-index: -1;
`;

export const BannerContent = styled.div`
  position: relative;
  z-index: 1; 
  margin-top: 100px;
`;


export const BannerHeading = styled.h2`
  font-size: 80px;
  color: #fff;
  margin: 0;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const BannerTitle = styled.h3`
  color: #fff300;
  font-size: 18px;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 1.6em;
`;

export const BannerButton = styled.a`
  
  font-family: 'Dosis', sans-serif;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;
  fill: #fff;
  color: #fff;
  background-color: #69107A;
  border: none;
  border-radius: 50px;
  padding: 12px 40px;
  
  
  
  &:hover {
    background-color: #fff;
    color: #42124c;
  }
  
`;
