import redux from 'redux';
import {createStore} from 'redux';

console.log('Starting redux example');

let reducer = (state = {name: "Anonymous"}, action) => {
  //state = state || {name: "Anonymous"};
  return state;
};


let store = createStore(reducer);
let currentState = store.getState();
console.log('CurrentState', currentState);