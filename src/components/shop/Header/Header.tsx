import * as React from 'react'
import * as S from './styled'
import NavLogo from './Logo/Logo'
import NavMain from '../Shared/Navigation/Navigation'
import * as ROUTES  from '../../../routes/routes';
import NavCart from './Cart/Cart'

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