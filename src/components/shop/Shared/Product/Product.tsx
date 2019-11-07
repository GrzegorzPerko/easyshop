import * as React from 'react'
import * as S from './styled'
import ReactHtmlParser from 'react-html-parser';

interface ProductItem {
    category: number
    description: string
    id: number
    image: string
    name: string
    price: number
    pricePromo: number
    promo: number
}

interface IProductItemProps {
    value: ProductItem,
    viewComponent: string
}

const ProductItem = ({ value, viewComponent }: IProductItemProps) => {
    return (
        <S.ProductItem view={viewComponent}>
            <S.ProductLink>
                <S.ProductImageWrapper><S.ProductImage src={value.image}></S.ProductImage></S.ProductImageWrapper>
                <S.ProductHeadline>{value.name}</S.ProductHeadline>
                <S.ProductPriceWrapper>
                    <S.ProductPrice>{value.price}</S.ProductPrice>
                    <S.ProductOldPrice>{value.pricePromo}</S.ProductOldPrice>
                </S.ProductPriceWrapper>
            </S.ProductLink>
        </S.ProductItem>
    )
}

export default ProductItem