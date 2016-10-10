import redux from 'redux';
import {createStore} from 'redux';

console.log('Starting redux example');

var stateDefault = {
    searchText: "",
    showComplated: false,
    todos: []
  };

let reducer = (state = stateDefault, action) => {
  switch(action.type) {
    case "CHANGE_SEARCH_TEXT":
      return {
        ...state,
        searchText: action.searchText
      }
      default:
        return state
  }
};


let store = createStore(reducer);
let currentState = store.getState();
console.log('CurrentState', currentState);

store.dispatch({
  type: "CHANGE_SEARCH_TEXT",
  searchText: "Dog"
});

console.log('new searchText should be dog', store.getState());



/*
change-searchText
reduce switch

console.log( new state)


*/