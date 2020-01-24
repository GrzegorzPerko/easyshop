import * as React from 'react'
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
// styles
import * as S from './styled'
import { IProductItem } from '../../../typings/product/product';

import { firebaseService } from '../../../services/firebase/firebase'
import { useState, useEffect } from 'react';

interface IProps {
    props: IProductItem,
    viewComponent: string
}

const ProductItem = ({ props , viewComponent }: IProps) => {
    const [image, setImage] = useState<any>()
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        firebaseService.getImageProduct(props.imagesUrl[0]).getDownloadURL().then((
        result => {
            setImage(result)
            setLoading(true)
        }))
    }, [loading])
    return (
        <S.ProductItem view={viewComponent}>
            <Link to={`product/${props.id}`}>
                <S.ProductImageWrapper><S.ProductImage src={image}></S.ProductImage></S.ProductImageWrapper>
                <S.ProductHeadline>{props.name}</S.ProductHeadline>
                {
                    viewComponent === 'list' && <S.ProductDescription>{ReactHtmlParser(props.description)}</S.ProductDescription>
                }
                <S.ProductPriceWrapper>
                    <S.ProductPrice>{props.price}</S.ProductPrice>
                    <S.ProductOldPrice>{props.pricePromo}</S.ProductOldPrice>
                </S.ProductPriceWrapper>
            </Link>
        </S.ProductItem>
    )
}

export default ProductItem