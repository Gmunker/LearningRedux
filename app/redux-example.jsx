import redux from 'redux';
import {createStore, compose} from 'redux';

console.log('Starting redux example');

let reducer = (state = {name: "Anonymous"}, action) => {
  //state = state || {name: "Anonymous"};
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


let store = createStore(reducer, compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
let unsubscribe = store.subscribe(() => {
  let state = store.getState();

  console.log('Name is', state.name)
  document.getElementById('app').innerHTML = state.name;
});

let currentState = store.getState();
console.log('CurrentState', currentState);


//unsubscribe();

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Greg'
});


store.dispatch({
  type: 'CHANGE_NAME',
  name: 'April'
});