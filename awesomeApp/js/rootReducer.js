import { compose, combineReducers } from 'redux'
import todo from './Todo';
import { mergePersistedState } from 'redux-localstorage'

const reducers = combineReducers({
  todo,
})
/*
const rootReducer = combineReducers({
  todo,
})*/
const rootReducer = compose(
  mergePersistedState()
)(reducers)

export default rootReducer;
