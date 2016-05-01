import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import drinkBeerApp from './reducers'

const loggerMiddleware = createLogger();

const store = createStore(
    drinkBeerApp,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
);

const rootElement = document.getElementById('root')
render(
    <Provider store={ store }>
        <App />
    </Provider>,
    rootElement
); 