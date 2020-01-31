import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import NoMatch from "./pages/noMatch";
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/footer'


function App() {
  return (
    <Router><>
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/home/login" component={Login} />
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