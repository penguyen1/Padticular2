import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { appReducers, reducer } from '../Reducers'
// import syncOffline from './syncOffline'

export default function configureStore(initialState) {
  const store = createStore(
    appReducers,
    reducer,
    applyMiddleware(thunk)
  )
  // syncOffline(store)
  return store
}