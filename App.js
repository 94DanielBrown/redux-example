import React from 'react';
import RootNavigator from './navigation/RootNavigator.js';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import moviesReducer from './store/reducers/movies.js';
import { combineReducers, createStore, applyMiddleware } from 'redux';

const rootReducer = combineReducers({
  movies: moviesReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return(
    <Provider store={store}>
      <RootNavigator/>
    </Provider>
  );
  };

export default App;
