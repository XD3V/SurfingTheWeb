import React, { Component } from "react";
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/footer'
import Cards from '../components/Card/Cards'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

 
class Home extends Component {
  render() {
    return (
  <Router>
  <div>
    <Navbar />
    <Cards />
    <Footer />
  </div>
</Router>
    );
  }
}
 
export default Home;