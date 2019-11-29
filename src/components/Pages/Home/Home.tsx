import * as React from 'react'

// compontents
import Banner from '../../Shared/Banner/Banner'
import ProductsList from '../../Shared/ProductsList/ProductsList'

// firebase
import  { FirebaseContext } from '../../../firebase/index'

// style
import * as S from './styled'

const HomePage = () => {
    console.log(process.env);
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