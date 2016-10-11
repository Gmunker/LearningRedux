import redux from 'redux';
import {createStore, compose, combineReducers} from 'redux';

console.log('Starting redux example');

let stateDefault = {
  name: "Anonymous",
  hobbies: [],
  movies: []
};

let nextHobbyId = 1;
let nextMovieId = 1;

let nameReducer = (state = "Anonymous", action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
      default:
        return state;
  };
};

let hobbiesReducer = (state = [], action) => {
  switch(action.type) {
     case 'ADD_HOBBY':
        return [
          ...state,{
            id: nextHobbyId++,
            hobby: action.hobby
          }
        ]
      case 'REMOVE_HOBBY':
        return state.filter((hobby) => hobby.id !== action.id)
      default:
        return state;
  }
};

let moviesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MOVIE':
        return [
            ...state,
            {
              id: nextMovieId++,
              title: action.title,
              genre: action.genre              
            }
          ]
      case 'REMOVE_MOVIE':
        return state.filter((movie) => movie.id !== action.id)
      default:
        return state;
  }
};

let reducer = combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
});


let store = createStore(reducer, compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
let unsubscribe = store.subscribe(() => {
  let state = store.getState();

  console.log('Name is', state.name)
  document.getElementById('app').innerHTML = state.name;

  console.log('New State', store.getState());
});

let currentState = store.getState();

//console.log('CurrentState', currentState);


//unsubscribe();

  store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Greg'
  });

  store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'running'
  });

  store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Walking'
  });

  store.dispatch({
    type: 'REMOVE_HOBBY',
    id: 2
  });

  store.dispatch({
    type: 'ADD_MOVIE', 
    title: 'Ghostbusters',
    genre: 'Romance'
  });

  store.dispatch({
    type: 'ADD_MOVIE', 
    title: 'Star Wars: The Force Awakens',
    genre: 'Sci-fi'
  });

  store.dispatch({
    type: 'ADD_MOVIE', 
    title: 'Mallrats',
    genre: 'Drama'
  });

  store.dispatch({
    type: 'CHANGE_NAME',
    name: 'April'
  });

  store.dispatch({
    type: 'REMOVE_MOVIE',
    id: 1
  });

