import * as React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Select from 'react-select'

// components
import Loader from '../../Shared/Loader/Loader'
import ErrorStatus from '../../Shared/ErrorStatus/ErrorStatus'

// firebase
import { firebaseService } from '../../../services/firebase/firebase'

// styles
import * as S from './styled'
import { IProductItem } from '../../../typings/product/product'
import { addProduct } from '../../redux/cart/actions'
import { useDispatch } from 'react-redux'
import { CartProduct } from '../../redux/cart/action-types'

interface IParams {
  id: string
}

const ProductPage = () => {
  const params = useParams() as IParams
  const [ productData , setProductData] = useState<undefined | IProductItem | boolean>(undefined)
  const dispatch = useDispatch()
  const handlerAdd = (product: IProductItem) => {
    const productCart: CartProduct = {
      id: product.id,
      title: product.name,
      amount: 1
    }
    dispatch(addProduct(productCart))
  }

	useEffect(() => {
		firebaseService.getProducts().then((products: Array<IProductItem>)=> {
        products.forEach(element => {
        if(element.id == params.id) {
          setProductData(element)
        }
      });
    }).catch(() =>{
      setProductData(false)
    })
  }, []);
  
  return (
    <>
      {
        productData !== undefined ?
        (
          typeof productData === 'object' ? 
          ( 
            <S.ProductSection>
              <S.ProductHeader>
              <S.ProductHeadline>{productData.name}</S.ProductHeadline>
              <S.ProductFigureImage>
                <S.ProductImage src={productData.image}/>
                <S.ProductCaptionImage></S.ProductCaptionImage>
              </S.ProductFigureImage>
              <S.ProductContent>
                <S.ProductPrice>
                  <strong>{productData.pricePromo === undefined ? productData.price : (
                    <>
                      <strong>{productData.pricePromo}</strong>
                      <del>{productData.price}</del>
                    </>
                  )}</strong>
                </S.ProductPrice>
                <S.ProductAvaiable>
    
                </S.ProductAvaiable>
                <Select>
                </Select>
                <S.ProductButtonAdd onClick={() => { handlerAdd(productData) }}>
                  Add to cart
                </S.ProductButtonAdd>
              </S.ProductContent>
              <S.ProductDescription>
                <h2>Opis produktu</h2>
                <p>Lorem ipsum</p>
              </S.ProductDescription>
            </S.ProductHeader>
          </S.ProductSection>
          )
        : <ErrorStatus error={"Brak produktu"} message={"Nie stety nie znaleźliśmy produktu, którego szukasz wprowadz poprawny adres, aby wyświetlić produkt"} />
        ) : (
          <Loader /> 
        )
      }
    </>
  )
}

export default ProductPage