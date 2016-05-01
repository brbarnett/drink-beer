import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import App from './containers/App'
import Pub from './containers/Pub'
import Admin from './containers/Admin'
//import drinkBeerApp from './reducers'
import { keg, mug } from './reducers'

const loggerMiddleware = createLogger();

const store = createStore(
    combineReducers({
        keg,
        mug,
        routing: routerReducer
    }),
    applyMiddleware(thunkMiddleware, loggerMiddleware)
);

const history = syncHistoryWithStore(browserHistory, store);

const rootElement = document.getElementById('root')
render(
    <Provider store={ store }>
        <Router history={ history }>
            <Route path="/" component={ App }>
                <IndexRoute component={ Pub } />
                <Route path="/admin" component={ Admin }/>
            </Route>
        </Router>
    </Provider>,
    rootElement
); 