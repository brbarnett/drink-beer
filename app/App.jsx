import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        console.log(this); // React Component instance
    }

    render() {
        return <header onClick={this.handleClick}>{this.props.text}</header>
    }
}

class HelloWorld extends React.Component {
    render() {
        return (
            <div>
                <Header text="This is the page header" />
                <h1>Hello World</h1>
            </div>
        );
    }
}

ReactDOM.render(<HelloWorld/>, document.getElementById('root'));