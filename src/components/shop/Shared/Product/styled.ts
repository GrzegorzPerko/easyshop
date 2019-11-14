import styled from 'styled-components'
interface IViewComponent {
    props: string
}
export const ProductItem = styled.div<IViewComponent>`
    display: block;
    border: 1px solid #8e8d8a;
    padding: 0 20px;
    position: relative;
    text-align: center;
    width: ${props => (props.style !== 'list' ? '23.5%' : '100%')} ;
    text-align: ${props => (props.style !== 'list' ? 'center' : 'left')} ;
    margin-right: 2%;
    margin-bottom: 20px;
    &:nth-child(4n) {
        margin-right: 0;
    }

    figure {
        float: ${props => (props.style !== 'list' ? 'none' : 'left')} ;
        width: ${props => (props.style !== 'list' ? '100%' : 'auto')} ;
    }
`
export const ProductLink = styled.a`
    display: block;
    overflow: hidden;
`

export const ProductHeadline = styled.h3`
    display: block;
    font-size: 18px;
    text-transform: uppercase;
`
export const ProductImage = styled.img`
    display: block;
    max-width: 100%;
    height: 200px;
    margin: 15px 30px 0 0;
`

export const ProductDescription = styled.p`
    display: block;
`
export const ProductPriceWrapper = styled.p`
    display: block;
`
export const ProductPrice = styled.strong`
    font-size: 18px;
    &:after {
        content: ' ';
    }
`
export const ProductOldPrice = styled.em`
    font-size: 12px;
`

export const ProductImageWrapper = styled.figure`
    display: flex;
    margin: 0;
    justify-content: center;
    width: 100%;
`