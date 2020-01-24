import * as React from 'react'
import * as S from './styled'
import { useSelector } from 'react-redux'
// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons'
import { RootState } from '../../redux/rootReducer'
import { useState } from 'react'
import { CartProduct } from '../../redux/cart/action-types'


const NavHeader = () => {
    const [ dropdownVisible, setDropdownVisible ] = useState(false)
    const products = (state: RootState) => state.cart.products
    const productsSelector: CartProduct[] = useSelector(products)

    const handleCartClick = (event: React.MouseEvent) => {
        setDropdownVisible(true)
        event.preventDefault()
    }
    const handleCartClose = (event: React.MouseEvent) => {
        setDropdownVisible(false)
        event.preventDefault()
    }

    return (
        <>
            <S.WrapperCart>
                <S.IconCart><FontAwesomeIcon icon={faShoppingCart} /></S.IconCart>
                {productsSelector.length === 0 ? 
                (<S.TitleCart>Koszyk ({productsSelector.length})</S.TitleCart>) : 
                ( <>
                <S.LinkCart href="#" onClick={handleCartClick}>Koszyk ({productsSelector.length})</S.LinkCart>
                <S.DropdownCart visible={dropdownVisible}>
                    <S.DropdownTitle>Zawartość koszyka:</S.DropdownTitle>
                    <S.DropdownCloseBtnCart onClick={handleCartClose}><FontAwesomeIcon icon={faTimes} size={'lg'}/></S.DropdownCloseBtnCart>
                    <S.DropdownList>
                        {productsSelector.map((product) => (
                            <S.DropdownListItem>{product.title}</S.DropdownListItem>
                        ))}
                    </S.DropdownList>
                    <S.DropdownDoneButton>Przejdź do koszyka</S.DropdownDoneButton>
                </S.DropdownCart>
                </>)}
            </S.WrapperCart>
        </>
    )
}

export default NavHeader