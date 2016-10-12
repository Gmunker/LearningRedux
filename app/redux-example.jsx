const redux = require('redux');
const {createStore, compose, combineReducers} = require('redux');

console.log('Starting redux example');

const actions = require('./actions/index');
const store = require('./store/configureStore').configure();


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

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName("Greg"));
store.dispatch(actions.addHobby("Running"));
store.dispatch(actions.addHobby("Walking"));
store.dispatch(actions.addMovie('Ghostbusters', "Romance"));
store.dispatch(actions.addMovie('Star Wars: The Force Awakens', "Sci-fi"));
store.dispatch(actions.addMovie("Mallrats", "Drama"));
store.dispatch(actions.changeName("April"));
store.dispatch(actions.removeMovie(1));
store.dispatch(actions.changeName("Anestasia"));