import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import NoMatch from "./pages/noMatch";
//import API from './api';
import missionBeach from './pages/missionBeach'
import getchellBeach from './pages/getchellBeach'
import pleasurePointBeach from './pages/pleasurePointBeach'
import leoCarrilloBeach from './pages/leoCarrilloBeach'
import malibuBeach from './pages/malibuBeach'
import veniceBeach from './pages/veniceBeach'
import manhattanBeach from './pages/manhattanBeach'
import hermosaBeach from './pages/hermosaBeach'
import redondoBreakwaterBeach from './pages/redondoBreakwaterBeach'
import torranceBeach from './pages/torranceBeach'





import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/footer'
//import Cards from './components/Card/Cards'
//import Detail from "./pages/beachdetails";
//import Nav from './components/Navbar/Navbar'
//import myFavorites from './pages/myFavorites'
//import Card from './components/Card/index'
//import ReactDOM from 'react-dom'
//import Navbar from './components/Navbar/Navbar'
//import Footer from './components/Footer/footer.js'
//import { BrowserRouter } from 'react-router-dom'

// import details from "./pages/copydetails";

function App() {
  return (
    <Router><>
        <Navbar />
        <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/home/login" component={Login} />
       
         
          <Route exact path="/home/detail/10/" component={getchellBeach} />  
          <Route exact path="/home/detail/1/" component={pleasurePointBeach} />  
          <Route exact path="/home/detail/638/" component={leoCarrilloBeach} /> 
          <Route exact path="/home/detail/205/" component={malibuBeach} />  
          <Route exact path="/home/detail/204/" component={veniceBeach} />  
          <Route exact path="/home/detail/203/" component={manhattanBeach} />
          <Route exact path="/home/detail/202/" component={hermosaBeach} />
          <Route exact path="/home/detail/201/" component={redondoBreakwaterBeach} />
          <Route exact path="/home/detail/200/" component={torranceBeach} /> 
          <Route exact path="/home/detail/397/" component={missionBeach} />
          <Route component={NoMatch} />
        </Switch>
        </main>
        <Footer /></>
    </Router>
  );
}
// These pages are not yet ready:
//        <Route exact path="/details" component={Detail} /> 
//        <Route exact path ="/favorites" component={myFavorites} />


export default App;