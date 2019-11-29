import * as React from 'react'
import { useState, useEffect } from 'react'

// components
import ProductItem from '../../Shared/Product/Product'
import Select from 'react-select'
import ErrorStatus from '../../Shared/ErrorStatus/ErrorStatus'
import Loader from '../../Shared/Loader/Loader'
// firebase

import { firebaseService } from '../../../services/firebase/firebase'
// utils
import * as Utils from './utils'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faThLarge } from '@fortawesome/free-solid-svg-icons'

// styles
import * as S from './styled'
import { IProductItem } from '../../../typings/product/product'

const ProductsList = () => {

	const [productList, setProductList] = useState<IProductItem[]>([])
	const [productView, setProductView] = useState<boolean>(true)
	const [productFilter, setProductFilter] = useState<string>('default')
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const filterOptions = [
		{ value: 'default', label: 'Default order'},
		{ value: 'price_high', label: 'Price ascending'},
		{ value: 'price_low', label: 'Price descending'},
		{ value: 'news', label: 'Newest'},
	]


	useEffect(() => {
		firebaseService.getProducts().then((data: IProductItem[])=> {
			setProductList(Utils.productFilter(productFilter, data))
			setIsLoading(true)
		})
	}, []);

	const handleClickList = () => {
		setProductView(false)
	}
	const handleClickColumn = () => {
		setProductView(true)
	}

	let filteredProducts = Utils.productFilter('default', productList)
	const handleChangeFilter = (event: any) => {
		setProductFilter(event.value)
		filteredProducts = Utils.productFilter(event.value, productList)
	}


	return (
		<>
			<S.ProductsListWrapper>
				<S.ProductsListHeader>
					<S.ProductsListHeadline>
						Products
					</S.ProductsListHeadline>
					<S.ProductsListButtonsView>
						<S.ProductsListButton active={productView} aria-label="column view" onClick={handleClickColumn}><FontAwesomeIcon icon={faThLarge}></FontAwesomeIcon></S.ProductsListButton>
						<S.ProductsListButton active={!productView} aria-label="list view" onClick={handleClickList}><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></S.ProductsListButton>
					</S.ProductsListButtonsView> 
					<S.ProductsFilter>
  					<Select defaultValue={{value: 'default', label: 'Default order'}} options={filterOptions} onChange={handleChangeFilter}/>
					</S.ProductsFilter>
				</S.ProductsListHeader>
				<S.ProductsListBox view={productView ? 'column'  : 'list'}>
				{
					isLoading ? (
						filteredProducts.length > 0 ? filteredProducts.map(product => (
						<ProductItem value={product} viewComponent={productView ? 'column'  : 'list'}></ProductItem>
					)) : <ErrorStatus error={'Brak produktów'} message={'Nie stety nie znaleźliśmy żadnych produktów'} /> ):
					(<Loader />)
				}
				</S.ProductsListBox>
			</S.ProductsListWrapper>
		</>
	)
}

export default ProductsList