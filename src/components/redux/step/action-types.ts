import { IProductItem } from "../../../typings/product/product"

export interface Steps {
  payment: number,
  items: IProductItem[] | []
}

export interface PurchaseState {
  purchase: Steps
}

export const NEXT_STEP = 'NEXT_STEP'

interface NextPurchaseAction {
  type: typeof NEXT_STEP
  payload: Steps
}


export type PurchaseActionTypes = NextPurchaseAction 