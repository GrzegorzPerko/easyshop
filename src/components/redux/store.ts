import { createStore } from 'redux'
import { rootReducer, RootState } from './rootReducer'

const initDevTools = () => {
  if (typeof window !== 'undefined') {
    if (window.__REDUX_DEVTOOLS_EXTENSION__) return window.__REDUX_DEVTOOLS_EXTENSION__()
  }
}


export function configureStore() {
  return createStore(rootReducer, initDevTools())
}