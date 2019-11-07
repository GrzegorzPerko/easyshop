import styled from 'styled-components'
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap');

  body {
    font-family: 'Open Sans', sans-serif;
    color: #1b1b1b;
    font-size: 13px;
    line-height: 1.8;
  }

  * {
    box-sizing: border-box;
  }
`

export const Site = styled.div`
  width: 1280px;
  margin: 0 auto;
`