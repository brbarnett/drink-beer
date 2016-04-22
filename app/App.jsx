import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    render() {
        return <header>Page Header</header>
    }
}

class HelloWorld extends React.Component {
    render() {
        return <h1>Hello World</h1>
    }
}

ReactDOM.render(<HelloWorld/>, document.getElementById('root'));