import {createStore, applyMiddleware} from 'redux'

import reducer from './reducers'
import thunkMiddleware from "redux-thunk";

const logMiddleware = ({getState, dispatch}) => (nextDispatch) => (action) => {
  console.log(action.type, getState());
  return nextDispatch(action)
}

const stringMiddleware = () => (nextDispatch) => (action) => {
  if(typeof action == "string") {
    return nextDispatch({
      type: action
    })
  }
  return nextDispatch(action)
}

const store = createStore(reducer, applyMiddleware(
  thunkMiddleware, stringMiddleware, logMiddleware))

export default store;