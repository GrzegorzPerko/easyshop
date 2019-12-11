
export interface CartProduct {
  id: string,
  title: string,
  amount: number
}
export interface CartState {
  products: CartProduct[]
}
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: CartProduct
}

type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  meta: {
    id: number
  }
}
const AddProduct = (product: CartProduct): AddProductAction => {
    return {type: ADD_PRODUCT, payload: product}
}
const RemoveProduct = (id: number): RemoveProductAction => {
    return {type: REMOVE_PRODUCT, meta: { id}}
}

export type CartActionTypes = AddProductAction | RemoveProductAction