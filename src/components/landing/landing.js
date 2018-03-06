import React, { Component } from 'react';
import axios from 'axios';
import './landing.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    addCount = () => {
        this.setState({ count: this.state.count + 1 });
    }
    subCount = () => {
        this.setState({ count: this.state.count - 1 });
    }

    handleClick(e) {
        var body = {
            name: this.refs.name.value,
            password: this.refs.password.value
        }
        e.preventDefault()
        axios.post('/api/createUser', body)
        this.refs.name.value = '';
        this.refs.password.value = '';
    }

    getUser(){
        axios.get('/api/getUser')
    }


    render() {
        return (
            <div className="main">

                {/* 36J */}
                <button className="btn" onClick={this.addCount}>Add 1</button>
                <button className="btn" onClick={this.subCount}>Sub 1</button>
                <p className="countP">Count: {this.state.count}</p>

                <div className="addUserCont">
                    <form className="userForm" onSubmit={this.handleClick}>
                        <p>User Name: </p>
                        <input className="nameInput" type="text" ref="name" />
                        <p>Password: </p>
                        <input className="nameInput" type="text" ref="password" />
                        <button type="submit">Submit</button>
                    </form>
                    <div className="showUser"> User: {this.getUser}</div>
                </div>

            </div>
        );
    }
}

export default App;