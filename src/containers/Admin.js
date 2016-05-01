import React, { Component } from 'react'

import KegEditorContainer from './KegEditorContainer'
import { fetchKegRemaining } from '../actions'

class Admin extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.store = context.store;
    }

    componentWillMount() {
        this.store.dispatch(fetchKegRemaining());
    }

    render() {
        return (
            <div className="container">
                <h1>The Drunken Duck</h1>
                <div className="col-xs-12 col-md-3">
                    <KegEditorContainer />
                </div>
            </div>
        );
    }
}

Admin.contextTypes = {
    store: React.PropTypes.object
}

export default Admin 