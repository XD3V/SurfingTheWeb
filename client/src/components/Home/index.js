import { Component } from 'react';
import {
  getFromStorage,
  //setInStorage,
} from '../../utils/storage'
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      token: '',
      signUpError: '',
      singInError: ''
    };
  }

  componentDidMount() {

    const token = getFromStorage('the_main_app')
    if (token) {
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


  // Example of a fetch request

  // fetch('/api/counters')
  //   .then(res => res.json())
  //   .then(json => {
  //     this.setState({
  //       counters: json
  //     });
  //   });

  // fetch('/api/counters', { method: 'POST' })
  //   .then(res => res.json())
  //   .then(json => {
  //     let data = this.state.counters;
  //     data.push(json);

  //     this.setState({
  //       counters: data
  //     });
  //   });


// Rendering the home component

//   render() {
//     const {
//       isLoading
//     } = this.state;
//     const {
//       token
//     } = this.state;

//     if (isLoading) {
//       return (<div><p>Loading...</p></div>)
//     }
//     if (!token) {
//       return (
//         <div>
//           <div>
          
//           </div>
//           <p>Sign Up</p>
//         </div>
//       )
//     }
//     return (
//       <div>
//         <p>Account</p>
//       </div>
//     );
//   }
}

export default Home;
