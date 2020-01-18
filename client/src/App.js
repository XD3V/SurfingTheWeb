import React from 'react'
// import ReactDOM from 'react-dom'
import Navbar from './components/Navbar/Navbar'
//import Card from './components/Card/index'
import Footer from './components/Footer/footer.js'
import { BrowserRouter } from 'react-router-dom'
import Cards from './components/Card/Cards'

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
          <Cards />
          <Footer />
        </div>
      </BrowserRouter>

    )
  }
}