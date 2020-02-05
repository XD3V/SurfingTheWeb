import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import NoMatch from "./pages/noMatch";
import NavBar from './components/Navbar/NavBarBK'
import Footer from './components/Footer/NewFooter'
import Register from './pages/register'
import laJolla from './pages/laJolla';

function App() {
  return (
    <Router>
      <>
      <header />
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/home/login" component={Login} />
          <Route exact path="/home/register" component={Register} />
          <Route exact path="/home/detail" component={laJolla} />
          <Route component={NoMatch} />
        </Switch>
      </main>
      <Footer>
        </Footer>
      </>
    </Router>
  );
}
// These pages are not yet ready:
//        <Route exact path="/details" component={Detail} /> 
//        <Route exact path ="/favorites" component={myFavorites} />


export default App;