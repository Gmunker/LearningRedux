const redux = require('redux');
const {createStore, compose, combineReducers, applyMiddleware} = require('redux');
const thunk = require('redux-thunk').default;

const {nameReducer, hobbiesReducer, moviesReducer, mapReducer} = require('./../reducers/index');


export let configure = () => {
  let reducer = combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer,
    movies: moviesReducer,
    map: mapReducer
  });

  let store = createStore(reducer, compose(
    applyMiddleware(thunk), 
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
}