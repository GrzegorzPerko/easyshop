import * as React from 'react'
import * as S from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
  return (
    <>
      <S.SearchBox>
        <S.SearchIcon><FontAwesomeIcon icon={faSearch} size={'lg'}/></S.SearchIcon>
        <S.SearchLabel>Search</S.SearchLabel>
        <S.SearchInput />
      </S.SearchBox>
    </>
  )
}

export default SearchBar