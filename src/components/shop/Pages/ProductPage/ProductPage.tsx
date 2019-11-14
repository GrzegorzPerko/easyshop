import * as React from 'react'
import { useRouteMatch, useParams } from 'react-router-dom'
import * as S from './styled'
import { firebaseService } from '../../../../services/firebase/firebase'

const ProductPage = () => {
  const idProduct = useParams()
  return (
    <>
      <S.ProductSection>
        <S.ProductHeader>
          <S.ProductHeadline>Nagłowek produktu</S.ProductHeadline>
          <S.ProductVote>
            <ul>
              <li><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
            </ul>
          </S.ProductVote>
          <S.ProductFigureImage>
            <S.ProductImage />
            <S.ProductCaptionImage></S.ProductCaptionImage>
          </S.ProductFigureImage>
          <S.ProductContent>
            <S.ProductPrice>
              <strong>699,99zł</strong>
              <span>749,99zł</span>
            </S.ProductPrice>
            <S.ProductAvaiable>

            </S.ProductAvaiable>
            <S.ProductSelect>
              <option>Default</option>
            </S.ProductSelect>
            <S.ProductButtonAdd>
              Add to cart
            </S.ProductButtonAdd>
          </S.ProductContent>
          <S.ProductDescription>
            <h2>Opis produktu</h2>
            <p>Lorem ipsum</p>
          </S.ProductDescription>
        </S.ProductHeader>
      </S.ProductSection>
    </>
  )
}

export default ProductPage