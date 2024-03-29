import styled from 'styled-components'
interface IViewComponent {
    view: string
}
export const ProductItem = styled.div<IViewComponent>`
    display: block;
    box-shadow: 0 0 20px rgba(0,0,0,0.3);
    padding: 0 20px;
    background: #FFF;
    position: relative;
    overflow: hidden;
    text-align: center;
    width: ${props => (props.view === 'list' ?'100%' : '23.5%' )} ;
    text-align: ${props => (props.view === 'list' ? 'left' : 'center')} ;
    margin-right: 2%;
    margin-bottom: 20px;
    &:nth-child(4n) {
        margin-right: 0;
    }

    a {
        color: #1b1b1b;
        text-decoration: none;
    }

    figure {
        float: ${props => (props.view === 'list' ? 'left' : 'none')} ;
        width: ${props => (props.view === 'list' ? '200px' : '100%')} ;
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