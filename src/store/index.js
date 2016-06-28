import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { appReducers } from '../Reducers'
// import syncOffline from './syncOffline'
var { Router, routerReducer, Route, Container, Animations, Schema } = require('react-native-redux-router');

export default function configureStore(initialState) {
  const store = createStore(
    appReducers,
    reducer,
    applyMiddleware(thunk)
  )
  // syncOffline(store)
  return store
}