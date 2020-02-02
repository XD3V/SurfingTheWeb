
import React, { Component } from 'react';
//import 'whatwg-fetch';
import {
    getFromStorage,
    setInStorage
} from '../utils/storage'
let fetch = require('node-fetch')

class login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            token: '',
            signUpError: '',
            signUpUsername: '',
            signUpEmail: '',
            signUpPassword: ''

        }

        this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
        this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
        this.onTextboxChangeSignUpUsername = this.onTextboxChangeSignUpUsername.bind(this);
        // this.onTextboxChangeSignUpFirstName = this.onTextboxChangeSignUpFirstName.bind(this);
        // this.onTextboxChangeSignUpLastName = this.onTextboxChangeSignUpLastName.bind(this);

        this.onSignUp = this.onSignUp.bind(this);
        this.logout = this.logout.bind(this)
    }

    componentDidMount() {
        const obj = getFromStorage('the_main_app');
        if (obj && obj.token) {
            const { token } = obj;
            // Verify token
            fetch('/api/account/verify?token=' + token)
                .then(res => res.json())
                .then(json => {
                    if (json.success) {
                        this.setState({
                            token,
                            isLoading: false
                        });
                    } else {
                        this.setState({
                            isLoading: false,
                        });
                    }
                });
        } else {
            this.setState({
                isLoading: false,
            });
        }
    }
    onTextboxChangeSignUpEmail(event) {
        this.setState({
            signUpEmail: event.target.value
        })
    }
    onTextboxChangeSignUpPassword(event) {
        this.setState({
            signUpPassword: event.target.value
        })
    }
    onTextboxChangeSignUpUsername(event) {
        this.setState({
            signUpUsername: event.target.value
        })
    }



    onSignUp() {
        // Grab state
        const {
            // signUpFirstName,
            // signUpLastName,
            signUpUsername,
            signUpPassword,
            signUpEmail
        } = this.state
        this.setState({
            isLoading: true,

        })
        // Post request to backend

        // the json needs to be loaded via localhost and to make sure its loaded we need to change 
        //fetch('api/account/signup' to fetch('http://localhost/api/account/signup'


        fetch('/api/account/signup', {
            // we need headers to let the browser know we are using MIME or also known as media type to send a string along with a file
            // indicating the type of the file .
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({

                // firstName: signUpFirstName,
                // lastName: signUpLastName,
                username: signUpUsername,
                password: signUpPassword,
                email: signUpEmail
            }),
        })
            .then(res => res.json())
            .then(json => {
                if (json.success) {
                    this.setState({
                        signUpError: json.message,
                        isLoading: false,
                        signUpEmail: '',
                        signUpPassword: '',
                        signUpUsername: ''
                        // signUpFirstName: '',
                        // signUpLastName: ''
                    })
                }
                else {
                    this.setState({
                        signUpError: json.message,
                        isLoading: false,
                    })
                }
            });
    }


    logout() {
        this.setState({
            isLoading: true,
        })
        const obj = getFromStorage('the_main_app');

        if (obj && obj.token) {
            const { token } = obj;
            // verify the token
            fetch(`/api/account/logout?token=${token}`)
                .then(res => res.json())
                .then(json => {
                    if (json.success) {
                        this.setState({
                            token: '',
                            isLoading: false,
                        });
                    }
                });
        } else {
            this.setState({
                isLoading: false,
            });
        }

    }

    render() {
        //console.log(obj)
        const {
            isLoading,
            token,
            signUpError,
            signUpUsername,
            // signUpFirstName,
            // signUpLastName,
            signUpEmail,
            signUpPassword
        } = this.state;

        if (isLoading) {
            return (<div><p>Loading...</p></div>)
        }
        if (!token) {
            //console.log("HERE I AM" + token)
            return (
                <div>

                    <div>
                        {
                            (signUpError) ? (
                                <p>{signUpError}</p>

                            ) : (null)
                        }
                        <p>Sign Up</p>



                        <input
                            type="text"
                            placeholder="Username"
                            value={signUpUsername}
                            onChange={this.onTextboxChangeSignUpUsername}
                        />


                        <br />

                        <input

                            type="email"
                            placeholder="Email"
                            value={signUpEmail}
                            onChange={this.onTextboxChangeSignUpEmail}
                        />

                        <br />

                        <input
                            type="Password"
                            placeholder="Password"
                            value={signUpPassword}
                            onChange={this.onTextboxChangeSignUpPassword}
                        />

                        <br />


                        <button onClick={this.onSignUp}>Sign Up</button>

                    </div>

                </div>
            )
        } return (

            <div>
                <p>Account</p>
                <button onClick={this.logout}>Logout</button>
            </div>
        );
    }
}

export default login;



