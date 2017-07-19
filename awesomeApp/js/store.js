import { compose, createStore } from 'redux';
import rootReducer from './rootReducer';
import persistState from 'redux-localstorage'
import adapter from 'redux-localstorage/lib/adapters/AsyncStorage'
import { AppRegistry, AsyncStorage } from 'react-native'
import filter from 'redux-localstorage-filter'
export default function createFinalStore() {/*
  const finalCreateStore = compose(
  )(createStore);
  return finalCreateStore(rootReducer);*/
  /*
  const storage = compose(
    filter(['todo'])
  )(adapter(AsyncStorage))*/
  const filtered = compose(
    filter(['todo'])
  )
  const storage = filtered(adapter(AsyncStorage))
  const enhancer = compose(
    persistState(storage,"@awesomeApp")
  )
  const store = createStore(rootReducer, {}, enhancer)
  return store
}
