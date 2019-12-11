
import {
  PurchaseState,
  PurchaseActionTypes,
  NEXT_STEP
} from './action-types'

import { initialState } from './initial-state'
import { Reducer } from 'redux'
export const stepReducer: Reducer<PurchaseState, PurchaseActionTypes> = (
  state = initialState,
  action: PurchaseActionTypes
) => {
  switch(action.type) {
    case NEXT_STEP: 
      return {
        purchase: {
          payment: action.payload.payment,
          items: []
        }
      }
    default:
      return state
  }
}