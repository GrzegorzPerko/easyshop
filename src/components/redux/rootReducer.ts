import { stepReducer } from './step/reducer'
import { cartReducer } from './cart/reducer'
import { combineReducers } from 'redux'
import { CartState } from './cart/action-types'

export interface IAppState {
  readonly cart: CartState;
}

export const rootReducer = combineReducers<IAppState>({
  cart: cartReducer
})

export type RootState = ReturnType<typeof rootReducer>