import redux from 'redux';
import {createStore} from 'redux';

console.log('Starting redux example');

let reducer = (state = {name: "Anonymous"}, action) => {
  //state = state || {name: "Anonymous"};

  console.log('New Action', action);
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
      default:
        return state;
  }
};


let store = createStore(reducer);
let currentState = store.getState();
console.log('CurrentState', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Greg'
});

console.log('Name should be Greg', store.getState());