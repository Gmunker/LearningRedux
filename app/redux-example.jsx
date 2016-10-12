import redux from 'redux';
import {createStore, compose, combineReducers} from 'redux';
import axios from 'axios';

console.log('Starting redux example');



// Name Reducer and Action Generators
//-----------------------------------
let nameReducer = (state = "Anonymous", action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
      default:
        return state;
  };
};

let changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  }
};


//Hobbies Reducer and Action Generators
//-------------------------------------
let nextHobbyId = 1;
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

let addHobby = (hobby) => {
  return {
    type: "ADD_HOBBY",
    hobby
  };
};
let removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  };
};


//Movies Reducer and Action Generators
//------------------------------------
let nextMovieId = 1;
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

let addMovie = (title, genre) => {
  return {
    type: 'ADD_MOVIE',
    title,
    genre
  };
};
let removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
  };
};


//Map Reducer and Action Generators
//------------------------------------
let mapReducer = (state = {isFetching: false, url: undefined}, action) => {
  switch(action.type) {
    case "START_LOCATION_FETCH":
      return {
        isFetching: true,
        url: undefined
      };
    case "COMPLETE_LOCATION_FETCH":
      return {
        isFetching: false,
        url: action.url
      };
    default:
      return state;
  }
};

let startLocationFetch = () => {
  return {
    type: "START_LOCATION_FETCH"
  }
};

let completeLocationFetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url
  };
};


// Fetch Location
//--------------
let fetchLocation = () => {
  store.dispatch(startLocationFetch());
  axios.get('http://ipinfo.io').then(function (res) {
    let loc = res.data.loc;
    let baseUrl = "http://maps.google.com?q="

    store.dispatch(completeLocationFetch(baseUrl + loc));
  });
};


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
  window.devToolsExtension ? window.devToolsExtension() : f => f
));


// Subscribe to changes
//---------------------
let unsubscribe = store.subscribe(() => {
  let state = store.getState();

  console.log('New State', store.getState());

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = "Loading...";
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="'+ state.map.url + '" target="_blank">View Your Location</a>'
  }
});


//unsubscribe();

fetchLocation();

store.dispatch(changeName("Greg"));
store.dispatch(addHobby("Running"));
store.dispatch(addHobby("Walking"));
store.dispatch(addMovie('Ghostbusters', "Romance"));
store.dispatch(addMovie('Star Wars: The Force Awakens', "Sci-fi"));
store.dispatch(addMovie("Mallrats", "Drama"));
store.dispatch(changeName("April"));
store.dispatch(removeMovie(1));
store.dispatch(changeName("Anestasia"));