import styled, { keyframes } from 'styled-components'

const dottedAnimation = keyframes`
  0% {
    content: '.';
  }

  50% {
    content: '..';
  }

  100% {
    content: '...';
  }
`

export const LoadingWrapper = styled.div`
    padding: 40px 0 60px;
    text-align: center;
    width: 100%;
    font-size: 18px;
    text-transform: uppercase;
    &:after {
      content: '';
      animation: ${dottedAnimation} 1s infinite;
    }
`
