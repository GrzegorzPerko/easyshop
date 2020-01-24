
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

export type CartActionTypes = AddProductAction | RemoveProductAction