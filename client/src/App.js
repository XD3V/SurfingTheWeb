import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import NoMatch from "./pages/noMatch";
//import API from './api';

//import Cards from './components/Card/Cards'
//import Detail from "./pages/beachdetails";
//import Nav from './components/Navbar/Navbar'
//import myFavorites from './pages/myFavorites'
//import Card from './components/Card/index'
//import ReactDOM from 'react-dom'
//import Navbar from './components/Navbar/Navbar'
//import Footer from './components/Footer/footer.js'
//import { BrowserRouter } from 'react-router-dom'

//import details from "./pages/copydetails";//

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          {/* <Route exact path="/home/detail/La-Jolla" component={laJolla} /> */}
          {/* <Route exact path="/home/detail/Mission-Beach" component={missionBeach} /> */}
          {/* <Route exact path="/test" component={testDum} /> */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}
// These pages are not yet ready:
//        <Route exact path="/details" component={Detail} />
//        <Route exact path ="/favorites" component={myFavorites} />


export default App;