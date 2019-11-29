import * as React from 'react'
import { Link, Route } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

// styles
import * as S from './styled'
import { IProductItem } from '../../../typings/product/product';

interface IProps {
    value: IProductItem,
    viewComponent: string
}

const ProductItem = ({ value, viewComponent }: IProps) => {
    const productLink = `product/${value.id}`
    return (
        <S.ProductItem view={viewComponent}>
            <Link to={productLink}>
                <S.ProductImageWrapper><S.ProductImage src={value.image}></S.ProductImage></S.ProductImageWrapper>
                <S.ProductHeadline>{value.name}</S.ProductHeadline>
                {
                    viewComponent === 'list' && <S.ProductDescription>{ReactHtmlParser(value.description)}</S.ProductDescription>
                }
                <S.ProductPriceWrapper>
                    <S.ProductPrice>{value.price}</S.ProductPrice>
                    <S.ProductOldPrice>{value.pricePromo}</S.ProductOldPrice>
                </S.ProductPriceWrapper>
            </Link>
        </S.ProductItem>
    )
}

export default ProductItem