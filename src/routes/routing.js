import React from 'react'
import { Route } from 'react-router'
import App from '../containers/App';

import BartenderContainer from '../containers/BartenderContainer'
import CustomerContainer from '../containers/CustomerContainer'

export default (
    <Route component={App}>
        <Route path="/bartender" components={{ main: BartenderContainer }} />
        <Route path="/customer" components={{ main: CustomerContainer }} />
    </Route>
)