/**
 * Created by Marlin on 3/2/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';

class MenuLogin extends React.Component{
    render() {
        return(
            <div className = "menu-box">
                <h2 id = "resume">ResuME</h2>
                <icon><img src = {this.props.icon} height = {90}/></icon>
                <li><a href="index.html">About</a></li>
                <li><a href="#certifications">Contact</a></li>
                <li><a href="#applications">Help</a></li>
            </div>
        );
    }
}

function validate(name, username, password) {
    return {
        name: name.length === 0,
        username: username.length === 0,
        password: password.length === 0,
    };
}

class LoginForm extends React.Component{

    constructor() {
        super();
        this.state = {
            name: "",
            username: "",
            password: "",
            message: "",
            successMessage: "",
            isLocked: false
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleMessage = this.handleMessage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(e) {
        // Prevent following the link.
        e.preventDefault();
        this.setState({name: e.target.value});
    }

    handleUsernameChange(e) {
        // Prevent following the link.
        e.preventDefault();
        this.setState({username: e.target.value});
    }

    handlePasswordChange(e) {
        // Prevent following the link.
        e.preventDefault();
        this.setState({password: e.target.value});
    }

    handleMessage(e) {
        // Prevent following the link.
        e.preventDefault();
        this.setState({message: e.target.value});
    }

    handleSubmit(e) {
        if (!this.canBeSubmitted()) {
            e.preventDefault();
            this.setState({message: 'Fields are missing'});
        }

        else {
            e.preventDefault();

            fetch('http://localhost:8080/userAccount/create?'
                + 'userName=' + this.state.name, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response => {
                if (response.ok) {
                    this.setState({message: " "});
                    this.setState({
                        successMessage: this.state.name + ", you successfully signed up!",
                        isLocked: true
                    });
                }

                else {
                    this.setState({message: "Account:" + this.state.name + " is already taken!"});
                }
            })
        }
    }

    canBeSubmitted() {
        const errors = validate(this.state.name, this.state.username, this.state.password);
        const fieldEmpty = Object.keys(errors).some(x => errors[x]);
        return !fieldEmpty;
    }

    render(){
        const errors = validate(this.state.name, this.state.username, this.state.password);
        const fieldEmpty = Object.keys(errors).some(x => errors[x]);

        return(
        <div id = "Shadow-Box">
            <form onSubmit={this.handleSubmit}>
                <label>
                    <h1 className = "heading">Sign Up</h1>
                    <br/>
                    <input className = "formInput" type="text"  placeholder="Enter Name" disabled = {this.state.isLocked} value={this.state.name} onChange={this.handleNameChange}/>
                    <br/>
                    <input className = "formInput" type="text" placeholder="Enter Username" disabled = {this.state.isLocked} value={this.state.username} onChange={this.handleUsernameChange}/>
                    <br/>
                    <input className = "formInput" type="password"  placeholder="Enter password" disabled = {this.state.isLocked} value={this.state.password} onChange={this.handlePasswordChange}/>
                    <br/>
                    <h3 className="loginMessage">{this.state.message}</h3>
                    <br/>
                </label>
                <input id = "loginButton" type="submit" value="Create Account" />
                <br/>
            </form>
        </div>
        );
    }
}

ReactDOM.render(<MenuLogin icon = "http://images.clipartpanda.com/stack-of-paper-vector-29343.png"/>, document.getElementById('loginMenuBox'));
ReactDOM.render(<LoginForm/>, document.getElementById('log-in'));

