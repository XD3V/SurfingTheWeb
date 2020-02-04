import React, { Component } from "react";
import M from 'materialize-css';
import './navStyle.css';
import logo from "./images/surfboard.png"

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});


class NavBar extends Component {
  render() {
    return (
        <nav>
        <div class="nav-wrapper">
          <a href="/" img src="./images/surfboard.png" class="brand-logo" >WebSurfing</a>
          

          <a href="/" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down">
            <li><a href="#">Sign Up</a></li>
            <li><a href="#">Log In</a></li>
            <li><a href="#">My Beach Spots</a></li>
            <li><a href="#">Log Out</a></li>            
          </ul>
        </div>
      
      <ul id="slide-out" class="sidenav">
            <li><a href="#">Sign Up</a></li>
            <li><a href="#">Log In</a></li>
            <li><a href="#">My Beach Spots</a></li>
            <li><a href="#">Log Out</a></li>    
      </ul>
      </nav>
      
    );
  }
}
 
export default NavBar;