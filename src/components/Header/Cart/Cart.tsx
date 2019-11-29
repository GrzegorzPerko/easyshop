import * as React from 'react'
import * as S from './styled'

// icon
import IconCart from '../../../assets/svg/shopping-cart.svg'

const NavHeader = () => {
    return (
        <S.WrapperCart>
            <S.IconCart src={IconCart} />
            <S.TitleCart>Koszyk</S.TitleCart>
        </S.WrapperCart>
    )
}

export default NavHeader