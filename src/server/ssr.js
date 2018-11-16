import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router-dom';
import { Provider } from 'react-redux'
import configureStore from '../shared/redux/configureStore'
import App from '../shared/components/app'


module.exports = function render(initialState, req) {
  // Configure the store with the initial state provided
  const store = configureStore(initialState)

  // render the App store static markup ins content variable
  let content = renderToString(
    <Provider store={store} >
			<StaticRouter location={req.url} context={{}}>
       <App />
			</StaticRouter>
    </Provider>
  );

  // Get a copy of store data to create the same store on client side
  const preloadedState = store.getState()

  return {content, preloadedState};
}
