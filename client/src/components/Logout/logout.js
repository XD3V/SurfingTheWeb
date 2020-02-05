
import React, { Component } from 'react';
//import 'whatwg-fetch';
import {
    getFromStorage,
    setInStorage
} from '../../utils/storage'
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
        } = this.state;

        if (isLoading) {
            return (<div><p>Loading...</p></div>)
        }
        if (!token) {
          
        return (

            <div>
                <p>Account</p>
                <button onClick={this.logout}>Logout</button>
            </div>
        );
    }
}
}

export default login;
