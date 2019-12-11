import styled from 'styled-components'
import { createGlobalStyle } from "styled-components"
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "1300",
  tablet: "1024",
  mobile: "768"
});
 
export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700&display=swap&subset=latin-ext');
    
  body {
    font-family: 'Source Sans Pro', sans-serif;
    color: #1b1b1b;
    font-size: 14px;
    line-height: 1.8;
    background: #f4f3ee;
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }
`

export const Site = styled.div`
`

export const Main = styled.main`
  width: 1280px;
  margin: 0 auto 20px;
  ${customMedia.lessThan("desktop")`
    width: 1024px;
  `}
  ${customMedia.lessThan("tablet")`
    width: 768px;
  `}
  ${customMedia.lessThan("mobile")`
    width: 100%;
  `}
`