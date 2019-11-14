import * as React from 'react'
import ProductItem from '../../Shared/Product/Product'
import Select from 'react-select'
import { firebaseService } from '../../../../services/firebase/firebase'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faThLarge } from '@fortawesome/free-solid-svg-icons'
import * as S from './styled'
import * as Utlis from './utils'

interface IProductItem {
	category: number
	description: string
	id: number
  dataCreated: string
	image: string
	name: string
	price: number
	pricePromo: number
	promo: number
}

interface IFilterOption {
	value: string,
	label: string
}

const ProductsList = () => {
	const [productList, setProductList] = useState<undefined | IProductItem[]>(undefined)
	const [productView, setProductView] = useState<boolean>(false)
	const [productFilter, setProductFilter] = useState<string>('default')

	const filterOptions = [
		{ value: 'default', label: 'Default order'},
		{ value: 'price_high', label: 'Price ascending'},
		{ value: 'price_low', label: 'Price descending'},
		{ value: 'news', label: 'Newest'},
	]

	const sortProducts = () => {
	}

	useEffect(() => {
		firebaseService.getProducts().then((data)=> {
			setProductList(Utlis.productFilter(productFilter, filterOptions, data))
		})
	}, []);

	const handleClickList = () => {
		setProductView(false)
	}
	const handleClickColumn = () => {
		setProductView(true)
	}

	const handleChangeFilter = (event: any) => {
		setProductList(Utlis.productFilter(event.value, filterOptions, productList))
	}
	return (
		<>
			<S.ProductsListWrapper>
				<S.ProductsListHeader>
					<S.ProductsListHeadline>
						Products
					</S.ProductsListHeadline>
					<S.ProductsListButtonsView>
						<S.ProductsListButton aria-label="list view" onClick={handleClickList}><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></S.ProductsListButton>
						<S.ProductsListButton aria-label="column view" onClick={handleClickColumn}><FontAwesomeIcon icon={faThLarge}></FontAwesomeIcon></S.ProductsListButton>
					</S.ProductsListButtonsView> 
					<S.ProductsFilter>
  					<Select options={filterOptions} onChange={handleChangeFilter}/>
					</S.ProductsFilter>
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