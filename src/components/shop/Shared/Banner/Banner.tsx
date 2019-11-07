import * as React from 'react'
import BannerImage from '../../../../assets/img/banner.jpg'
import * as S from './styled'

const Banner = () => {
    return (
        <S.BannerWrapper>
            <S.BannerImg src={BannerImage} />
            <S.BannerContent>
                <S.BannerHeadline>Witaj w naszym sklepie!</S.BannerHeadline>
                <S.BannerText>This error occurred during the build time and cannot be dismissed.</S.BannerText>
            </S.BannerContent>
        </S.BannerWrapper>
    )
}

export default Banner