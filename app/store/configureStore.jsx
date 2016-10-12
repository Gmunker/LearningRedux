const redux = require('redux');
const {createStore, compose, combineReducers, applyMiddleware} = require('redux');
const thunk = require('redux-thunk').default;

const {nameReducer, hobbiesReducer, moviesReducer, mapReducer} = require('./../reducers/index');


export let configure = () => {
  // Reducer Combine
  //---------------
  let reducer = combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer,
    movies: moviesReducer,
    map: mapReducer
  });


  // Add Support for Redux Dev Tools
  //--------------------------------
  let store = createStore(reducer, compose(
    redux.applyMiddleware(thunk), 
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
}