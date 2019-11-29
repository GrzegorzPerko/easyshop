import styled from 'styled-components'

export const SearchBox = styled.form`
  position: absolute;
  left: 0px;
  top: 135px;
  text-align: left;
  color: #1b1b1b;
  display: flex;
  vertical-align: middle;

  svg {
    font-size: 25px
  }
`

export const SearchLabel = styled.label`
  display: block;
  text-transform:uppercase;
  font-weight: bold;
  color: #8e8d8a;
  margin-left: 10px;
`
export const SearchInput = styled.input`
  display: none;
`
export const SearchButton = styled.form`
`
