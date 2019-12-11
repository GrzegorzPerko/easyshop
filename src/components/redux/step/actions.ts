
import { NEXT_STEP, PurchaseActionTypes, Steps } from './action-types'

export function sendMessage(step: Steps): PurchaseActionTypes {
  return {
    type: NEXT_STEP,
    payload: step
  }
}
