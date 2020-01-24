import * as React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Select, { OptionsType } from 'react-select'

// components
import Loader from '../../Shared/Loader/Loader'
import ErrorStatus from '../../Shared/ErrorStatus/ErrorStatus'
import Rating from '../../Shared/Rating/Rating'
import CounterWithButtons from '../../Shared/CounterWithButtons/CounterWithButtons'

// firebase
import { firebaseService } from '../../../services/firebase/firebase'

// styles
import * as S from './styled'
import { IProductItem } from '../../../typings/product/product'
import { addProduct } from '../../redux/cart/actions'
import { useDispatch } from 'react-redux'
import { CartProduct } from '../../redux/cart/action-types'
import { OptionProps } from 'react-select/src/types'

interface IParams {
  id: string
}

const ProductPage = () => {
  const params = useParams() as IParams
  const [productData , setProductData] = useState<undefined | IProductItem | boolean>(undefined)
  const [Images, setImages] = useState<any>()
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
      products.forEach(product => {
        if(product.id === params.id) {
          setProductData(product)
          if(typeof product == "object") {
            firebaseService.getImageProduct(product.imagesUrl[0]).getDownloadURL().then(result => {
              setImages(result)
            })
          }
        }
      })
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
                <Rating rate={4.2} />
              </S.ProductHeader>
              <S.ProductFigureImage>
                <S.ProductImage src={Images}/>
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
                  Dostępny natychmiast
                </S.ProductAvaiable>
                <CounterWithButtons></CounterWithButtons>
                <S.Select getOptionValue={(option: OptionProps) => option.id} options={productData.types}>
                </S.Select>
                <S.ProductButtonAdd onClick={() => { handlerAdd(productData) }}>
                  Add to cart
                </S.ProductButtonAdd>
              </S.ProductContent>
              <S.ProductDescription>
                <h2>Opis produktu</h2>
                <p>Lorem ipsum</p>
              </S.ProductDescription>
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