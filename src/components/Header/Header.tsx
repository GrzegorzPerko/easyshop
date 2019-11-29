import * as React from 'react'
import * as S from './styled'

// compontents
import Logo from './Logo/Logo'
import Navigation from '../Shared/Navigation/Navigation'
import CartBox from './Cart/Cart'
import SearchBox from './SearchBar/SearchBar'

// routes
import * as ROUTES  from '../../routes/routes';

const NavHeader = () => {
  return (
    <S.HeaderWrapper>
      <SearchBox />
      <CartBox />
      <Logo />
      <Navigation props={ROUTES} type='header' />
    </S.HeaderWrapper>
  )
}

export default NavHeader