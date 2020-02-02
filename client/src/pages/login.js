
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
      signInError: '',
      signInEmail: '',
      signInPassword: ''
    }
    this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
    // this.onTextboxChangeSignUpFirstName = this.onTextboxChangeSignUpFirstName.bind(this);
    // this.onTextboxChangeSignUpLastName = this.onTextboxChangeSignUpLastName.bind(this);

    this.onSignIn = this.onSignIn.bind(this);
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

  onTextboxChangeSignInEmail(event) {
    this.setState({
      signInEmail: event.target.value
    })
  }
  onTextboxChangeSignInPassword(event) {
    this.setState({
      signInPassword: event.target.value
    })
  }




  onSignIn() {
    // Grab state
    const {
      signInPassword,
      signInEmail
    } = this.state;

    this.setState({
      isLoading: true,

    })
    // Post request to backend

    fetch('/api/account/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword,
      }),
    }).then(res => res.json())
      .then(json => {
        console.log('json', json)
        if (json.success) {
          console.log("WE ARE GOOD!!")
          setInStorage('the_main_app', { token: json.token }); console.log(json.token)
          this.setState({
            signInError: json.message,
            isLoading: false,
            signInEmail: '',
            signInPassword: '',
            token: json.token
          });
        }
        else {
          this.setState({
            signInError: json.message,
            isLoading: false,
          });
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
      signInError,
      signInEmail,
      signInPassword
    } = this.state;

    if (isLoading) {
      return (<div><p>Loading...</p></div>)
    }
    if (!token) {
      console.log("HERE I AM" + token)
      return (
        <div>
          <div>

            {
              (signInError) ? (
                <p>{signInError}</p>

              ) : (null)
            }

            <p>Sign In</p>

            <input
              type="email"
              placeholder="Email"
              value={signInEmail}
              onChange={this.onTextboxChangeSignInEmail}
            />

            <br />

            <input
              type="Password"
              placeholder="Password"
              value={signInPassword}
              onChange={this.onTextboxChangeSignInPassword}
            />

            <br />

            <button onClick={this.onSignIn}>Sign In</button>

          </div>

          <br />

          <br />


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




// import React, { Component } from "react";

// export default class Login extends Component {

//     render() {
//         // state = {
//         //     email:'',
//         //     password:''
//         // }
//         return (
//         <div class="form-wrapper">
//             <form id="login">
//                 <h3>Sign In</h3>

//                 <div className="form-group">
//                     <label>Email address</label>
//                     <input type="email" className="form-control" placeholder="Enter email" />
//                 </div>

//                 <div className="form-group">
//                     <label>Password</label>
//                     <input type="password" className="form-control" placeholder="Enter password" />
//                 </div>

//                 <div className="form-group">
//                     <div className="custom-control custom-checkbox">
//                         <input type="checkbox" className="custom-control-input" id="customCheck1" />
//                         <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
//                     </div>
//                 </div>

//                 <button type="submit" className="btn btn-primary btn-block">Submit</button>
//                 <p className="forgot-password text-right">
//                     Forgot <a href="#">password?</a>
//                 </p>
//             </form>
//             </div>
//         );
//     }
// } 
// JSON.parse()
// localStorage.getItem(dataObject)
// let myLogin = localStorage.get(dataObject)