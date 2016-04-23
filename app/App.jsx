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
    constructor(props) {
        super(props);
        
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.setState({ counter: this.state.counter + 1 });
    }
    
    render() {
        return (
            <div>
                <Header text="This is the page header" />
                <h1 onClick={this.handleClick}>Hello World</h1>
                <div>{this.state.counter}</div>
            </div>
        );
    }
}

ReactDOM.render(<HelloWorld/>, document.getElementById('root'));