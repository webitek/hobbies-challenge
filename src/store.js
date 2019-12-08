/*
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'

// Middleware
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers'
import thunkMiddleware from "redux-thunk";
import rootSaga from './sagas';


// Creating saga worker
const sagaMiddleware = createSagaMiddleware()
// Compose enchancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const logMiddleware = ({getState, dispatch}) => (nextDispatch) => (action) => {
  // console.log(action.type, getState());
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

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(rootSaga);

export default store

// Group all reducers
/!*
const combinedReducers = combineReducers({
  ...reducer,
})

// Create rootReducers which watches logout action and sets store to initial state in that case
const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_USER') {
    state = undefined
  }
  return combinedReducers(state, action)
}

const store = createStore(reducer, applyMiddleware(
  thunkMiddleware, stringMiddleware, logMiddleware))


// Creating store with combined reducers and enchancers
// const store = createStore(reducer, applyMiddleware(sagaMiddleware))

export default store;*!/
*/

import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import rootSaga from './sagas';
import reducer from './reducers';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(rootSaga);

export default store