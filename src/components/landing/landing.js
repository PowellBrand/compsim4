import React, { Component } from 'react';
import axios from 'axios';
import { createUser, getUser } from '../../ducks/reducer';
import { connect } from 'react-redux';

import './landing.css'

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        // 37C
        this.addCount = this.addCount.bind(this);
        this.subCount = this.subCount.bind(this);
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

    getUser() {
        axios.get('/api/getUser')
    }

    playSound() {
        var snd = new Audio();
        snd.src = "What_Dan.mp3"
        document.getElementById(snd)
        snd.play();
        snd.currentTime = 0;
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
                        <input className="passInput" type="text" disabled="disabled" ref="password" />
                        <button type="submit">Submit</button>
                    </form>
                    <div className="showUser"> User: {this.getUser}</div>
                </div>
                <a href='/view1'><button className="startBtn">Start</button></a>
                <audio id="snd"></audio>
                <button onClick={() => this.playSound()}>What?</button>


                {/* 56C */}
                <iframe width="420" height="315"
                    src="https://www.youtube.com/embed/CQlatm6yAzQ">
                </iframe>
            </div>
        );
    }
}

// 36E
function mapStateToProps(state) {

    return {
        count: state.count,
        name: state.name,
        password: state.password
    }
}
export default connect(mapStateToProps, { createUser })(Landing)