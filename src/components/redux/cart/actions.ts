
import { ADD_PRODUCT, REMOVE_PRODUCT, CartActionTypes, CartProduct } from './action-types'

export function addProduct(product: CartProduct): CartActionTypes {
  return {
    type: ADD_PRODUCT,
    payload: product
  }
}

export function removeProduct(id: number): CartActionTypes {
  return {
    type: REMOVE_PRODUCT,
    meta: {
      id
    }
  }
}