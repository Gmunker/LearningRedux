import redux from 'redux';
import {createStore} from 'redux';

console.log('Starting redux example');

var stateDefault = {
    searchText: "",
    showComplated: false,
    todos: []
  };

let reducer = (state = stateDefault, action) => {
  //state = state || {name: "Anonymous"};
  return state;
};


let store = createStore(reducer);
let currentState = store.getState();
console.log('CurrentState', currentState);