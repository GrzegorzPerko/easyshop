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
import * as Utlis from './utils'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faThLarge } from '@fortawesome/free-solid-svg-icons'

// styles
import * as S from './styled'

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
		setProductFilter(event.value)
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
					)) : <ErrorStatus error={'Brak produktów'} message={'Nie stety nie znaleźliśmy żadnych produktów'} /> :
					(<Loader />)
				}
				</S.ProductsListBox>
			</S.ProductsListWrapper>
		</>
	)
}

export default ProductsList