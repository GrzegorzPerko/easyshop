import { createStore } from 'redux'
import { rootReducer } from './rootReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['cart']
}

const initDevTools = () => {
  if (typeof window !== 'undefined') {
    if (window.__REDUX_DEVTOOLS_EXTENSION__) return window.__REDUX_DEVTOOLS_EXTENSION__()
  }
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)

export function configureStore() {
  let store = createStore(persistedReducer, initDevTools())
  let persistor = persistStore(store)
  return { store, persistor }
}