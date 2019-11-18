import * as React from 'react'
import * as S from './styled'


// icon
import IconCart from '../../../assets/svg/shopping-cart.svg'

const NavHeader = () => {
    return (
        <S.WrapperCart>
            <S.TitleCart>Koszyk</S.TitleCart>
            <S.ContentCart>Brak produktów w koszyku...</S.ContentCart>
            <S.IconCart src={IconCart} />
        </S.WrapperCart>
    )
}

export default NavHeader