import styled from 'styled-components'

interface IProductBox {
    viewComponent: string
}

export const ProductsListWrapper = styled.section`
`
export const ProductsListHeader = styled.header`
    display: flex;
    justify-content: center;
`
export const ProductsListHeadline = styled.h2`
`
export const ProductsListButtonsView = styled.div`
`
export const ProductsListBox = styled.div<IProductBox>`
    display: ${viewComponent => (viewComponent.viewComponent === "list" ? 'block': 'flex')};
    flex-wrap: wrap;
`
export const ProductsListButton = styled.button`
    width: 50px;
    height: 50px;
    text-align: center;
    font-size: 20px;
    background: none;
    border: 1px solid #8e8d8a;
    color: #8e8d8a;
    font-weight: normal;
    border-radius: 4px 0 0 4px;
    &:last-child {
        border-left: 0;
        border-radius: 0 4px 4px 0;
    }
`
export const ProductsListLoading = styled.div`
    padding: 40px 0 60px;
    text-align: center;
    width: 100%;
    font-size: 18px;
    text-transform: uppercase;
`