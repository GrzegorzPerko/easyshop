import * as React from 'react'
import ProductItem from '../../Shared/Product/Product'
import { firebaseService } from '../../../../services/firebase/firebase'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faThLarge } from '@fortawesome/free-solid-svg-icons'
import * as S from './styled'

interface IProductItem {
    category: number
    description: string
    id: number
    image: string
    name: string
    price: number
    pricePromo: number
    promo: number
}

const ProductsList = () => {
	const [productList, setProductList] = useState<undefined | Array<ProductItem>>(undefined)
	const [productView, setProductView] = useState<boolean>(false)

	useEffect(() => {
		firebaseService.getProducts().then((data)=> {
			setProductList(data)
		})


	}, []);

	const handleClickList = () => {
		setProductView(false)
	}
	const handleClickColumn = () => {
		setProductView(true)
	}
	return (
		<>
			<S.ProductsListWrapper>
				<S.ProductsListHeader>
					<S.ProductsListButtonsView>
						<S.ProductsListButton aria-label="list view" onClick={handleClickList}><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></S.ProductsListButton>
						<S.ProductsListButton aria-label="column view" onClick={handleClickColumn}><FontAwesomeIcon icon={faThLarge}></FontAwesomeIcon></S.ProductsListButton>
					</S.ProductsListButtonsView>
				</S.ProductsListHeader>
				<S.ProductsListBox viewComponent={productView ? 'list' : 'column'}>
				{
					productList !== undefined ?
					productList.length > 0 ? productList.map(product => (
						<ProductItem value={product} viewComponent={productView ? 'list' : 'column'}></ProductItem>
					)) : ('Brak produktów...') :
					(<S.ProductsListLoading>Loading...</S.ProductsListLoading>)
				}
				</S.ProductsListBox>
			</S.ProductsListWrapper>
		</>
	)
}

export default ProductsList