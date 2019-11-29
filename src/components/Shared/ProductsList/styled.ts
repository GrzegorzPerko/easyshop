import styled from 'styled-components'

interface IProductBox {
    view: string
}
interface IProductButtonView {
    active: boolean
}

export const ProductsListWrapper = styled.section`
`
export const ProductsListHeader = styled.header`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
`
export const ProductsListHeadline = styled.h2`
    width: 200px;
    font-size: 24px;
    text-transform: uppercase;
    margin-top: 0;
`
export const ProductsListButtonsView = styled.div`
`
export const ProductsFilter = styled.div`
    width: 200px;
`
export const ProductsListBox = styled.div<IProductBox>`
    display: ${props => (props.view === "list" ? 'block': 'flex')};
    flex-wrap: wrap;
`
export const ProductsListButton = styled.button<IProductButtonView>`
    width: 38px;
    height: 38px;
    text-align: center;
    font-size: 20px;
    background: none;
    border: 1px solid hsl(0,0%,80%);
    color: ${props => (props.active ? '#1b1b1b': '#8e8d8a')};
    font-weight: normal;
    border-radius: 4px 0 0 4px;
    &:last-child {
        border-left: 0;
        border-radius: 0 4px 4px 0;
    }
`