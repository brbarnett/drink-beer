import path from 'path'
import express from 'express'

import React from 'react'
import { renderToString } from 'react-dom/server'

import { Router, RouterContext, match } from 'react-router'
import routes from './src/routes/routing'

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import promiseMiddleware from './middlewares/PromiseMiddleware';
import drinkBeerApp from './src/reducers'

import fetchComponentData from './utils/fetchComponentData';

const finalCreateStore = applyMiddleware(promiseMiddleware)( createStore );

var app = express();
var port = process.env.PORT || 3000;

//app.use(express.static('dist'))

// server rendering
app.use((req, res, next) => {

  //const store = finalCreateStore(combinedReducers);

  // react-router
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {

    if (error)
      return res.status(500).send(error.message);

    if (redirectLocation)
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);

    if (renderProps == null) {
      // return next('err msg: route not found'); // yield control to next middleware to handle the request
      return res.status(404).send('Not found');
    }

    // console.log( '\nserver > renderProps: \n', require('util').inspect( renderProps, false, 1, true) )
    // console.log( '\nserver > renderProps: \n', require('util').inspect( renderProps.components, false, 3, true) )

    // this is where universal rendering happens,
    // fetchComponentData() will trigger actions listed in static "needs" props in each container component
    // and wait for all of them to complete before continuing rendering the page,
    // hence ensuring all data needed was fetched before proceeding
    //
    // renderProps: contains all necessary data, e.g: routes, router, history, components...
    fetchComponentData(store.dispatch, renderProps.components, renderProps.params)
      .then(() => {
        const initView = renderToString((
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        ));

        // console.log('\ninitView:\n', initView);

        let state = JSON.stringify(store.getState());
        // console.log( '\nstate: ', state )

        let page = renderFullPage(initView, state)
        // console.log( '\npage:\n', page );

        return page;
      })

      .then(page => res.status(200).send(page))

      .catch(err => res.end(err.message));
  })
});

app.listen(port, function () {
  console.log('App listening on port ' + port + '!');
});