import express from 'express'
import cors from "cors"
//import React from "react"
//import { renderToString } from "react-dom/server"
//import { StaticRouter, matchPath } from "react-router-dom"
//import serialize from "serialize-javascript"
//import App from '../shared/components/app'

//SSR function import
const ssr = require('./ssr');
const template = require('./template.js');
const data = require('../../assets/data.json');
const path = require('path');

//import routes from '../shared/routes'

let initialState = {
  isFetching: false,
  apps: data
}

const app = express()

app.use(cors())
console.debug(`static path: ${path.resolve(__dirname, '../../assets')}`);
app.use('/assets', express.static(path.resolve(__dirname, '../../assets')));
app.use('/media', express.static(path.resolve(__dirname, '../../media')));
//app.use(express.static('public'));

app.get('/', (req, res) => {
	console.log(`req.path: ${req.path}`);
  const { preloadedState, content}  = ssr(initialState)
  const response = template("Server Rendered Page", preloadedState, content)
  res.setHeader('Cache-Control', 'assets, max-age=604800')
  res.send(response);
});
/*app.get("*", (req, res, next) => {
  const activeRoute = routes.find((route) => matchPath(req.url, route)) || {}

  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve()

  promise.then((data) => {
    const context = { data }

    const markup = renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    )

		const response = template('Server Rendering Page', data, markup);
		res.send(response);*/

    /*res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>SSR with RR</title>
          <script src="/bundle.js" defer></script>
          <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
        </head>
        <body>
          <div id="app">${markup}</div>
        </body>
      </html>
    `)
  }).catch(next)*/
//})

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`)
})
