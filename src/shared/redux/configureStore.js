import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import ReposReducer from './repo_reducer';
import MoviesReducer from './movie_reducer';


export default function configureStore(preloadedState) {
	let rootReducer = combineReducers({
		"apps": MoviesReducer,
		"repos": ReposReducer
	});
	return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware
    )
  );
}
