
import React, { Component } from 'react';
import 'whatwg-fetch';
import {
  getFromStorage,
  setInStorage,
} from '../utils/storage'
let fetch = require('node-fetch')

class login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      token: '',
      signUpError: '',
      signInError: '',
      signInEmail: '',
      signInPassword: '',
      signUpUsername: '',
      signUpEmail: '',
      signUpPassword: ''

    }
    this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
    this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
    this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
    this.onTextboxChangeSignUpUsername = this.onTextboxChangeSignUpUsername.bind(this);
    // this.onTextboxChangeSignUpFirstName = this.onTextboxChangeSignUpFirstName.bind(this);
    // this.onTextboxChangeSignUpLastName = this.onTextboxChangeSignUpLastName.bind(this);

    this.onSignUp = this.onSignUp.bind(this);
    this.onSignIn = this.onSignIn.bind(this);
    this.logout = this.logout.bind(this)
  }

  componentDidMount() {

    const obj = getFromStorage('the_main_app')

    if (obj && obj.token) {
      const { token } = obj;
      // verify the token
      fetch(`/api/accounts/verify?token=${token}`)
        .then(res => res.json())
        .then(json => {
          if (json.succces) {
            this.setstate({
              token,
              isLoading: false,
            });
          } else {
            this.setstate({
              isLoading: false,
            })
          }
          this.setState({
            counters: json
          });
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


  // onTextboxChangeSignUpFirstName(event) {
  //   this.setState({
  //     signUpFirstName: event.target.value
  //   })
  // }
  // onTextboxChangeSignUpLastName(event) {
  //   this.setState({
  //     signUpLastName: event.target.value
  //   })
  // }


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
        email: signUpEmail,
      }),
    })
      .then(res => res.json())
      .then(json => {
        if (json.succces) {
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

  onSignIn() {
    // Grab state
    const {
      signInPassword,
      signInEmail
    } = this.state
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
        password: signInPassword
      }),
    })
      .then(res => res.json())
      .then(json => {
        if (json.succces) {
          console.log("WE ARE GOOD!!")
          setInStorage('the_main_app', { token: json.token });
          this.setState({
            signInError: json.message,
            isLoading: false,
            signInEmail: '',
            signInPassword: '',
            token: json.token
          })
        }
        else {
          this.setState({
            signIpError: json.message,
            isLoading: false,
          })
        }
      });

  }

  logout() {
    this.setState({
      isLoading: true,
    })
    const obj = getFromStorage('the_main_app')

    if (obj && obj.token) {
      const { token } = obj;
      // verify the token
      fetch(`/api/accounts/logout?token=${token}`)
        .then(res => res.json())
        .then(json => {
          if (json.succces) {
            this.setstate({
                
              token: '',
              isLoading: false,
            });
          } else {
            this.setstate({
              isLoading: false,
            })
          }
          this.setState({
            counters: json
          });
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
      signInPassword,
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
      console.log(token)
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

          <div>
            {
              (signUpError) ? (
                <p>{signUpError}</p>

              ) : (null)
            }
            <p>Sign Up</p>

            {/* <input
              type="text"
              placeholder="First Name"
              value={signUpFirstName}
              onChange={this.onTextboxChangeSignUpFirstName}
            />

            <br />
            
            <input
              type="text"
              placeholder="Last Name"
              value={signUpLastName}
              onChange={this.onTextboxChangeSignUpLastName}
            /> */}

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
    } 
    return (
     
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