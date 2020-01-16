import React from 'react'
// import ReactDOM from 'react-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/footer.js'
import { BrowserRouter } from 'react-router-dom'


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (

      <BrowserRouter>
        <div>
          <Navbar />


          <Footer />
        </div>
      </BrowserRouter>

    )
  }
}


