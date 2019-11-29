import styled from 'styled-components'
import { createGlobalStyle } from "styled-components"

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
  width: 1280px;
  margin: 0 auto;
`