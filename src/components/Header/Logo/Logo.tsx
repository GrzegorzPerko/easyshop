import * as React from 'react'
import * as S from './styled'

// icon
import logo from '../../../logo.png'

const NavLogo = () => {
    return (
        <S.HeaderLogoLink>
            <img src={logo} alt="Easy shop of the brand logo"/>
        </S.HeaderLogoLink>
    )
}

export default NavLogo