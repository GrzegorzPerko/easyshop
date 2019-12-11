import * as React from 'react'
import * as S from './styled'

// icon
import logo from '../../../assets/img/logo.png'

const NavLogo = () => {
    return (
        <S.LogoLink>
            <S.LogoImg src={logo} alt="Easy shop of the brand logo"/>
            <S.LogoTitle>E-commerce website</S.LogoTitle>
        </S.LogoLink>
    )
}

export default NavLogo