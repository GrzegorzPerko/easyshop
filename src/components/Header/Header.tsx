import * as React from 'react'
import * as S from './styled'

// compontents
import NavLogo from './Logo/Logo'
import NavMain from '../Shared/Navigation/Navigation'
import NavCart from './Cart/Cart'

// routes
import * as ROUTES  from '../../routes/routes';

const NavHeader = () => {
    return (
        <S.HeaderWrapper>
            <NavCart />
            <NavLogo />
            <NavMain props={ROUTES} type='header' />
        </S.HeaderWrapper>
    )
}

export default NavHeader