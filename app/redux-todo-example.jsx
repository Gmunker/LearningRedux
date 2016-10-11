import redux from 'redux';
import {createStore, compose} from 'redux';

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


let store = createStore(reducer, compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
let unsubscribe = store.subscribe(() => {
  let state = store.getState();

  console.log('Name is', state.searchText)
  document.getElementById('app').innerHTML = state.searchText;
});


let currentState = store.getState();
console.log('CurrentState', currentState);

store.dispatch({
  type: "CHANGE_SEARCH_TEXT",
  searchText: "Dog"
});

store.dispatch({
  type: "CHANGE_SEARCH_TEXT",
  searchText: "Work"
});

store.dispatch({
  type: "CHANGE_SEARCH_TEXT",
  searchText: "Something"
});

store.dispatch({
  type: "CHANGE_SEARCH_TEXT",
  searchText: "ELse"
});


/*

subscribe for searchText

dev tools



*/