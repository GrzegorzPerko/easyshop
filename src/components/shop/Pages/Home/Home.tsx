import * as React from 'react'
import Banner from '../../Shared/Banner/Banner'
import  { FirebaseContext } from '../../../../firebase/index'
import * as S from './styled'
import ProductsList from '../../Shared/ProductsList/ProductsList'

const HomePage = () => {
    return (
        <S.MainSite>
            <S.ContentSite>
                <Banner />
                <ProductsList></ProductsList>
            </S.ContentSite>
        </S.MainSite>
    )
}

export default HomePage